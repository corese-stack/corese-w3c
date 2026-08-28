// Corese W3C Conformance Dashboard Application
(function() {
  "use strict";

  let reportData = null;
  let allTests = [];
  let filteredTests = [];
  
  let currentSuite = "all";
  let currentStatus = "all";
  let searchQuery = "";
  
  let currentPage = 1;
  const PAGE_SIZE = 50;

  // DOM Elements
  const metaVersion = document.getElementById("meta-version");
  const metaCommit = document.getElementById("meta-commit");
  const metaDate = document.getElementById("meta-date");
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  const valTotal = document.getElementById("val-total");
  const valPassed = document.getElementById("val-passed");
  const valPassRate = document.getElementById("val-pass-rate");
  const valSkipped = document.getElementById("val-skipped");
  const valFailed = document.getElementById("val-failed");

  const suitesGrid = document.getElementById("suites-grid");
  const suiteSelect = document.getElementById("suite-select");
  const searchInput = document.getElementById("search-input");
  const statusPills = document.getElementById("status-pills");
  const explorerCount = document.getElementById("explorer-count");
  const tableBody = document.getElementById("tests-table-body");
  
  const pageInfo = document.getElementById("page-info");
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");

  // Modal Elements
  const modal = document.getElementById("test-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalOkBtn = document.getElementById("modal-ok-btn");
  const modalStatus = document.getElementById("modal-status");
  const modalTitle = document.getElementById("modal-title");
  const modalSuite = document.getElementById("modal-suite");
  const modalDisplayName = document.getElementById("modal-display-name");
  const modalSkipReasonGroup = document.getElementById("modal-skip-reason-group");
  const modalSkipReason = document.getElementById("modal-skip-reason");
  const modalErrorGroup = document.getElementById("modal-error-group");
  const modalError = document.getElementById("modal-error");
  const modalDuration = document.getElementById("modal-duration");

  // Init Theme
  function initTheme() {
    const savedTheme = localStorage.getItem("corese-w3c-theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    themeIcon.textContent = savedTheme === "dark" ? "☀️" : "🌙";
  }

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("corese-w3c-theme", next);
    themeIcon.textContent = next === "dark" ? "☀️" : "🌙";
  });

  // Load JSON Report Data
  async function loadData() {
    try {
      const res = await fetch("./data/w3c-report.json");
      if (!res.ok) throw new Error("HTTP " + res.status + " " + res.statusText);
      reportData = await res.json();
      initDashboard();
    } catch (err) {
      console.error("Failed to load report data:", err);
      tableBody.innerHTML = `<tr><td colspan="5" class="empty-state">Unable to load test data from ./data/w3c-report.json.<br>Please ensure tests have been executed via <code>./gradlew test</code>.</td></tr>`;
    }
  }

  function initDashboard() {
    renderMetadata();
    renderKpis();
    flattenTests();
    renderSuitesGrid();
    populateSelect();
    applyFilters();
  }

  function renderMetadata() {
    const meta = reportData.metadata || {};
    const git = meta.git || {};
    
    metaVersion.textContent = "v" + (meta.version || "5.0.0");
    
    if (git.commit && git.commit !== "unknown") {
      metaCommit.textContent = "Commit #" + git.commit;
      metaCommit.href = "https://github.com/corese-stack/corese-w3c/commit/" + git.commit;
    } else {
      metaCommit.textContent = "Local build";
      metaCommit.removeAttribute("href");
    }

    if (meta.generatedAt) {
      const date = new Date(meta.generatedAt);
      metaDate.textContent = date.toLocaleDateString(undefined, {
        year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"
      });
    }
  }

  function renderKpis() {
    const summary = reportData.summary || {};
    valTotal.textContent = Number(summary.total || 0).toLocaleString();
    valPassed.textContent = Number(summary.passed || 0).toLocaleString();
    valPassRate.textContent = (summary.passRate || 100).toFixed(1) + "% direct pass rate";
    valSkipped.textContent = Number(summary.skipped || 0).toLocaleString();
    valFailed.textContent = Number(summary.failed || 0).toLocaleString();
  }

  function flattenTests() {
    allTests = [];
    (reportData.suites || []).forEach(suite => {
      (suite.tests || []).forEach(test => {
        allTests.push({
          ...test,
          suiteId: suite.id,
          suiteName: suite.name
        });
      });
    });
  }

  function renderSuitesGrid() {
    suitesGrid.innerHTML = "";
    (reportData.suites || []).forEach(suite => {
      const card = document.createElement("div");
      card.className = "suite-card" + (currentSuite === suite.id ? " active" : "");
      card.dataset.suiteId = suite.id;

      card.innerHTML = `
        <div class="suite-card-top">
          <div class="suite-name">${escapeHtml(suite.name)}</div>
          <div class="suite-rate">${suite.passRate.toFixed(1)}%</div>
        </div>
        <div class="suite-card-bar">
          <div class="suite-bar-fill" style="width: ${Math.min(100, suite.passRate)}%;"></div>
        </div>
        <div class="suite-card-bottom">
          <span>${suite.passed} / ${suite.total} passed</span>
          ${suite.skipped > 0 ? `<span class="suite-skips">${suite.skipped} skipped</span>` : `<span>0 skips</span>`}
        </div>
      `;

      card.addEventListener("click", () => {
        if (currentSuite === suite.id) {
          currentSuite = "all";
        } else {
          currentSuite = suite.id;
        }
        suiteSelect.value = currentSuite;
        updateSuiteCards();
        applyFilters();
      });

      suitesGrid.appendChild(card);
    });
  }

  function updateSuiteCards() {
    document.querySelectorAll(".suite-card").forEach(c => {
      c.classList.toggle("active", c.dataset.suiteId === currentSuite);
    });
  }

  function populateSelect() {
    suiteSelect.innerHTML = `<option value="all">All Specifications (${allTests.length})</option>`;
    (reportData.suites || []).forEach(suite => {
      const opt = document.createElement("option");
      opt.value = suite.id;
      opt.textContent = `${suite.name} (${suite.total})`;
      suiteSelect.appendChild(opt);
    });

    suiteSelect.addEventListener("change", (e) => {
      currentSuite = e.target.value;
      updateSuiteCards();
      applyFilters();
    });
  }

  // Filter & Search Logic
  function applyFilters() {
    const q = searchQuery.toLowerCase().trim();

    filteredTests = allTests.filter(test => {
      // Suite filter
      if (currentSuite !== "all" && test.suiteId !== currentSuite) {
        return false;
      }
      // Status filter
      if (currentStatus !== "all" && test.status !== currentStatus) {
        return false;
      }
      // Search query
      if (q) {
        const inName = (test.name || "").toLowerCase().includes(q);
        const inDisplay = (test.displayName || "").toLowerCase().includes(q);
        const inReason = (test.skipReason || "").toLowerCase().includes(q);
        const inSuite = (test.suiteName || "").toLowerCase().includes(q);
        if (!inName && !inDisplay && !inReason && !inSuite) {
          return false;
        }
      }
      return true;
    });

    currentPage = 1;
    renderTable();
  }

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    applyFilters();
  });

  statusPills.addEventListener("click", (e) => {
    const btn = e.target.closest(".status-pill");
    if (!btn) return;
    
    document.querySelectorAll(".status-pill").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    currentStatus = btn.dataset.status;
    applyFilters();
  });

  // Table Rendering with Pagination
  function renderTable() {
    const total = filteredTests.length;
    explorerCount.textContent = `Showing ${total} test${total === 1 ? "" : "s"}`;

    if (total === 0) {
      tableBody.innerHTML = `<tr><td colspan="5" class="empty-state">No matching tests found.</td></tr>`;
      pageInfo.textContent = "Page 0 of 0";
      btnPrev.disabled = true;
      btnNext.disabled = true;
      return;
    }

    const totalPages = Math.ceil(total / PAGE_SIZE);
    currentPage = Math.max(1, Math.min(currentPage, totalPages));

    const start = (currentPage - 1) * PAGE_SIZE;
    const end = Math.min(start + PAGE_SIZE, total);
    const pageItems = filteredTests.slice(start, end);

    pageInfo.textContent = `Page ${currentPage} of ${totalPages} (${start + 1} - ${end} of ${total})`;
    btnPrev.disabled = currentPage <= 1;
    btnNext.disabled = currentPage >= totalPages;

    tableBody.innerHTML = pageItems.map((test, idx) => {
      const globalIndex = start + idx;
      const statusClass = "status-" + test.status.toLowerCase();
      
      return `
        <tr>
          <td><span class="status-badge ${statusClass}">${test.status}</span></td>
          <td><span class="test-badge-spec">${escapeHtml(test.suiteName)}</span></td>
          <td>
            <div class="test-title">${escapeHtml(test.displayName || test.name)}</div>
          </td>
          <td style="text-align: right;"><span class="duration-val">${test.durationMs}ms</span></td>
          <td style="text-align: center;">
            <button class="action-btn" onclick="window.__openTestModal(${globalIndex})">View</button>
          </td>
        </tr>
      `;
    }).join("");
  }

  btnPrev.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderTable();
    }
  });

  btnNext.addEventListener("click", () => {
    const totalPages = Math.ceil(filteredTests.length / PAGE_SIZE);
    if (currentPage < totalPages) {
      currentPage++;
      renderTable();
    }
  });

  // Test Modal
  window.__openTestModal = function(index) {
    const test = filteredTests[index];
    if (!test) return;

    modalStatus.textContent = test.status;
    modalStatus.className = "status-badge status-" + test.status.toLowerCase();
    modalTitle.textContent = test.name || "Test Case";
    modalSuite.textContent = test.suiteName;
    modalDisplayName.textContent = test.displayName || test.name;
    modalDuration.textContent = test.durationMs + " ms";

    if (test.skipReason) {
      modalSkipReasonGroup.style.display = "block";
      modalSkipReason.textContent = test.skipReason;
    } else {
      modalSkipReasonGroup.style.display = "none";
    }

    if (test.errorMessage) {
      modalErrorGroup.style.display = "block";
      modalError.textContent = test.errorMessage;
    } else {
      modalErrorGroup.style.display = "none";
    }

    if (typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      modal.setAttribute("open", "");
    }
  };

  function closeModal() {
    if (typeof modal.close === "function") {
      modal.close();
    } else {
      modal.removeAttribute("open");
    }
  }

  modalCloseBtn.addEventListener("click", closeModal);
  modalOkBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Start app
  initTheme();
  loadData();
})();
