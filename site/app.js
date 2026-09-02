// Corese W3C Conformance Dashboard Application
(function() {
  "use strict";

  const SPEC_META = {
    "turtle": {
      specUrl: "https://www.w3.org/TR/turtle/",
      testSuiteUrl: "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-turtle/",
      javaPath: "src/test/java/fr/inria/corese/w3c/rdf11turtle/Rdf11TurtleDynamicTest.java"
    },
    "trig": {
      specUrl: "https://www.w3.org/TR/trig/",
      testSuiteUrl: "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-trig/",
      javaPath: "src/test/java/fr/inria/corese/w3c/rdf11trig/Rdf11TrigDynamicTest.java"
    },
    "rdf-xml": {
      specUrl: "https://www.w3.org/TR/rdf-syntax-grammar/",
      testSuiteUrl: "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-xml/",
      javaPath: "src/test/java/fr/inria/corese/w3c/rdf11xml/Rdf11XmlDynamicTest.java"
    },
    "ntriples": {
      specUrl: "https://www.w3.org/TR/n-triples/",
      testSuiteUrl: "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-triples/",
      javaPath: "src/test/java/fr/inria/corese/w3c/rdf11ntriples/Rdf11NTriplesDynamicTest.java"
    },
    "nquads": {
      specUrl: "https://www.w3.org/TR/n-quads/",
      testSuiteUrl: "https://w3c.github.io/rdf-tests/rdf/rdf11/rdf-n-quads/",
      javaPath: "src/test/java/fr/inria/corese/w3c/rdf11nquads/Rdf11NQuadsDynamicTest.java"
    },
    "rdf-canonical": {
      specUrl: "https://www.w3.org/TR/rdf-canon/",
      testSuiteUrl: "https://w3c.github.io/rdf-canon/tests/",
      javaPath: "src/test/java/fr/inria/corese/w3c/rdfcanonical/RdfCanonicalDynamicTest.java"
    },
    "jsonld-tordf": {
      specUrl: "https://www.w3.org/TR/json-ld11-api/#dom-jsonldprocessor-tordf",
      testSuiteUrl: "https://w3c.github.io/json-ld-api/tests/toRdf-manifest.jsonld",
      javaPath: "src/test/java/fr/inria/corese/w3c/rdf11jsonld/Rdf11JsonldToRdfDynamicTest.java"
    },
    "jsonld-fromrdf": {
      specUrl: "https://www.w3.org/TR/json-ld11-api/#dom-jsonldprocessor-fromrdf",
      testSuiteUrl: "https://w3c.github.io/json-ld-api/tests/fromRdf-manifest.jsonld",
      javaPath: "src/test/java/fr/inria/corese/w3c/rdf11jsonld/Rdf11JsonldFromRdfDynamicTest.java"
    },
    "rdfa-xhtml": {
      specUrl: "https://www.w3.org/TR/rdfa-core/",
      testSuiteUrl: "https://rdfa.info/test-suite/",
      javaPath: "src/test/java/fr/inria/corese/w3c/rdf11rdfa/xhtml/Rdf11RDFaXHTMLDynamicTest.java"
    },
    "rdfa-xml": {
      specUrl: "https://www.w3.org/TR/rdfa-core/",
      testSuiteUrl: "https://rdfa.info/test-suite/",
      javaPath: "src/test/java/fr/inria/corese/w3c/rdf11rdfa/xml/Rdf11RDFaXMLDynamicTest.java"
    },
    "rdfa-svg": {
      specUrl: "https://www.w3.org/TR/SVG11/",
      testSuiteUrl: "https://rdfa.info/test-suite/",
      javaPath: "src/test/java/fr/inria/corese/w3c/rdf11rdfa/svg/Rdf11RDFaSVGDynamicTest.java"
    },
    "sparql10": {
      specUrl: "https://www.w3.org/TR/rdf-sparql-query/",
      testSuiteUrl: "https://w3c.github.io/rdf-tests/sparql/sparql10/manifest.ttl",
      javaPath: "src/test/java/fr/inria/corese/w3c/sparql10/Sparql10DynamicTest.java"
    }
  };

  let versionsList = [];
  let currentVersionFile = "./data/w3c-report.json";
  let currentVersionEarlFile = "./data/earl-report.ttl";
  
  let reportData = null;
  let allTests = [];
  let filteredTests = [];
  
  let currentSuite = "all";
  let currentStatus = "all";
  let searchQuery = "";
  
  let currentPage = 1;
  const PAGE_SIZE = 50;

  // DOM Elements
  const metaCommit = document.getElementById("meta-commit");
  const metaDate = document.getElementById("meta-date");
  const downloadJson = document.getElementById("download-json");
  const downloadEarl = document.getElementById("download-earl");
  const themeToggle = document.getElementById("theme-toggle");
  const iconSun = document.getElementById("icon-sun");
  const iconMoon = document.getElementById("icon-moon");

  const valTotal = document.getElementById("val-total");
  const valPassed = document.getElementById("val-passed");
  const valPassRate = document.getElementById("val-pass-rate");
  const valInapplicable = document.getElementById("val-inapplicable");
  const valUntested = document.getElementById("val-untested");
  const valFailed = document.getElementById("val-failed");
  const valFailedNote = document.getElementById("val-failed-note");
  const valCantTell = document.getElementById("val-cant-tell");

  const suitesGrid = document.getElementById("suites-grid");
  const suiteSelect = document.getElementById("suite-select");
  const searchInput = document.getElementById("search-input");
  const statusPills = document.getElementById("status-pills");
  const explorerCount = document.getElementById("explorer-count");
  const btnResetFilters = document.getElementById("btn-reset-filters");
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
  const modalFixturesGroup = document.getElementById("modal-fixtures-group");
  const modalFixtures = document.getElementById("modal-fixtures");
  const modalLinks = document.getElementById("modal-links");
  const modalDisplayName = document.getElementById("modal-display-name");
  const modalSkipReasonGroup = document.getElementById("modal-skip-reason-group");
  const modalSkipReason = document.getElementById("modal-skip-reason");
  const modalErrorGroup = document.getElementById("modal-error-group");
  const modalError = document.getElementById("modal-error");
  const modalDuration = document.getElementById("modal-duration");

  // Theme Management (Automatic OS detection + Manual override with Monochrome SVG Icons)
  function initTheme() {
    const savedTheme = localStorage.getItem("corese-theme");
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
      applyTheme(prefersLight ? "light" : "dark");
    }

    // Listen for OS theme changes if user has not explicitly set a manual preference
    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
        if (!localStorage.getItem("corese-theme")) {
          applyTheme(e.matches ? "light" : "dark");
        }
      });
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      iconMoon.style.display = "block";
      iconSun.style.display = "none";
    } else {
      iconMoon.style.display = "none";
      iconSun.style.display = "block";
    }
  }

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem("corese-theme", next);
    applyTheme(next);
  });

  // Load Versions List
  async function loadVersions() {
    try {
      const res = await fetch("./data/versions.json");
      if (res.ok) {
        versionsList = await res.json();
        populateVersionsSelect();
      }
    } catch (_err) {
      versionsList = [{
        id: "latest",
        label: "v5.0.0-SNAPSHOT (latest)",
        file: "./data/w3c-report.json",
        earlFile: "./data/earl-report.ttl"
      }];
    }
    const latest = versionsList.find(version => version.id === "latest") || versionsList[0];
    if (latest) selectVersion(latest);
    loadReport(currentVersionFile);
  }

  function populateVersionsSelect() {
    const versionControl = document.querySelector(".version-control");
    if (!versionsList || versionsList.length <= 1) {
      if (versionControl) {
        const label = (versionsList[0] && versionsList[0].label) || "v5.0.0-SNAPSHOT";
        versionControl.replaceChildren();
        const versionLabel = document.createElement("span");
        versionLabel.className = "meta-tag font-mono";
        versionLabel.textContent = label;
        versionControl.appendChild(versionLabel);
      }
      return;
    }
    if (!versionControl) return;
    versionControl.innerHTML = `<select id="version-select" class="form-select select-sm"></select>`;
    const select = document.getElementById("version-select");
    versionsList.forEach(v => {
      const opt = document.createElement("option");
      opt.value = v.id;
      opt.textContent = v.label;
      select.appendChild(opt);
    });

    select.addEventListener("change", (e) => {
      const version = versionsList.find(candidate => candidate.id === e.target.value);
      if (!version) return;
      selectVersion(version);
      loadReport(currentVersionFile);
    });
  }

  function selectVersion(version) {
    currentVersionFile = safeDataPath(version.file, "./data/w3c-report.json");
    downloadJson.href = currentVersionFile;
    if (version.earlFile) {
      currentVersionEarlFile = safeDataPath(version.earlFile, "./data/earl-report.ttl");
      downloadEarl.href = currentVersionEarlFile;
      downloadEarl.style.display = "";
    } else {
      currentVersionEarlFile = null;
      downloadEarl.removeAttribute("href");
      downloadEarl.style.display = "none";
    }
  }

  // Load JSON Report Data
  async function loadReport(filePath) {
    tableBody.innerHTML = `<tr><td colspan="5" class="empty-state">Loading test report...</td></tr>`;
    try {
      const res = await fetch(filePath);
      if (!res.ok) throw new Error("HTTP " + res.status + " " + res.statusText);
      reportData = await res.json();
      initDashboard();
    } catch (err) {
      if (window.__CORESE_W3C_DATA__) {
        reportData = window.__CORESE_W3C_DATA__;
        initDashboard();
      } else {
        console.error("Failed to load report data:", err);
        tableBody.innerHTML = `<tr><td colspan="5" class="empty-state">Unable to load test data.<br>Please ensure tests have been executed via <code>./gradlew test</code>.</td></tr>`;
      }
    }
  }

  function initDashboard() {
    renderMetadata();
    renderKpis();
    flattenTests();
    renderSuitesGrid();
    populateSuiteSelect();
    applyFilters();
  }

  function renderMetadata() {
    const meta = reportData.metadata || {};
    const git = meta.git || {};
    
    if (git.commit && git.commit !== "unknown") {
      const shortCommit = git.commit.length >= 7 ? git.commit.substring(0, 7) : git.commit;
      metaCommit.textContent = "Commit #" + shortCommit;
      metaCommit.title = "View commit " + git.commit + " on GitHub";
      const commitHref = safeExternalHref("https://github.com/corese-stack/corese-w3c/commit/" + git.commit);
      if (commitHref) metaCommit.href = commitHref;
    } else {
      metaCommit.textContent = "Local";
      metaCommit.removeAttribute("href");
    }

    const gitRef = safeGitRef(git.commit, git.branch);
    document.querySelectorAll(".exclusions-link").forEach(a => {
      a.href = "https://github.com/corese-stack/corese-w3c/blob/" + gitRef + "/docs/W3C_TEST_EXCLUSIONS.md";
    });
    document.querySelectorAll(".earl-spec-link").forEach(a => {
      a.href = "https://github.com/corese-stack/corese-w3c/blob/" + gitRef + "/docs/EARL_REPORT.md";
    });

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
    valPassRate.textContent = summary.passRate == null
      ? "No official entries"
      : Number(summary.passRate).toFixed(1) + "% of all official entries";
    valInapplicable.textContent = Number(summary.inapplicable || 0).toLocaleString();
    valUntested.textContent = Number(
      summary.untested == null ? (summary.skipped || 0) : summary.untested
    ).toLocaleString();
    const failedCount = Number(summary.failed || 0);
    valFailed.textContent = failedCount.toLocaleString();
    if (valFailedNote) {
      valFailedNote.textContent = failedCount === 0 ? "0 regressions" : `${failedCount} regression${failedCount > 1 ? "s" : ""}`;
    }
    valCantTell.textContent = Number(summary.cantTell || 0).toLocaleString();
  }

  function flattenTests() {
    allTests = [];
    (reportData.suites || []).forEach(suite => {
      (suite.tests || []).forEach(test => {
        allTests.push({
          ...test,
          suiteId: suite.id,
          suiteName: suite.name,
          component: suite.component || "corese-core",
          specification: suite.specification,
          manifest: suite.manifest,
          transport: suite.transport,
          outcome: normalizeOutcome(test)
        });
      });
    });
  }

  function renderSuitesGrid() {
    suitesGrid.innerHTML = "";
    visibleSuites().forEach(suite => {
      const item = document.createElement("div");
      item.className = "suite-item" + (currentSuite === suite.id ? " active" : "");
      item.dataset.suiteId = suite.id;

      const meta = SPEC_META[suite.id] || {};
      const specificationHref = safeExternalHref(suite.specification || meta.specUrl);
      const manifestHref = safeExternalHref(suite.manifest || meta.testSuiteUrl);
      const specLink = specificationHref ? `<a href="${escapeHtml(specificationHref)}" target="_blank" rel="noopener" class="link-discrete" onclick="event.stopPropagation()">Spec</a>` : "";
      const suiteLink = manifestHref ? `<a href="${escapeHtml(manifestHref)}" target="_blank" rel="noopener" class="link-discrete" onclick="event.stopPropagation()">Suite</a>` : "";
      const linksHtml = (specLink || suiteLink) ? `<span class="suite-ext-links">${specLink} ${suiteLink}</span>` : "";
      const passRate = numeric(suite.passRate);
      const passed = numeric(suite.passed);
      const total = numeric(suite.total);
      const skipped = numeric(suite.skipped);

      item.innerHTML = `
        <div class="suite-header-line">
          <span class="suite-title">${escapeHtml(suite.name)}</span>
          <span class="suite-percent">${passRate == null ? "—" : passRate.toFixed(1) + "%"}</span>
        </div>
        <div class="suite-meter">
          <div class="suite-meter-bar" style="width: ${Math.min(100, passRate || 0)}%;"></div>
        </div>
        <div class="suite-counts">
          <span>${passed || 0} / ${total || 0} passed</span>
          ${linksHtml}
          ${skipped > 0 ? `<span class="suite-skip-count">${skipped} not run</span>` : `<span>0 not run</span>`}
        </div>
      `;

      item.addEventListener("click", () => {
        if (currentSuite === suite.id) {
          currentSuite = "all";
        } else {
          currentSuite = suite.id;
        }
        suiteSelect.value = currentSuite;
        updateSuiteItems();
        applyFilters();
      });

      suitesGrid.appendChild(item);
    });
  }

  function updateSuiteItems() {
    document.querySelectorAll(".suite-item").forEach(item => {
      item.classList.toggle("active", item.dataset.suiteId === currentSuite);
    });
  }

  function populateSuiteSelect() {
    suiteSelect.innerHTML = `<option value="all">All Specifications (${allTests.length})</option>`;
    visibleSuites().forEach(suite => {
      const opt = document.createElement("option");
      opt.value = suite.id;
      opt.textContent = `${suite.name} (${suite.total})`;
      suiteSelect.appendChild(opt);
    });

    suiteSelect.value = currentSuite;
    suiteSelect.onchange = (e) => {
      currentSuite = e.target.value;
      updateSuiteItems();
      applyFilters();
    };
  }

  function visibleSuites() {
    return reportData.suites || [];
  }

  // Filter & Search
  function applyFilters() {
    const q = searchQuery.toLowerCase().trim();

    filteredTests = allTests.filter(test => {
      if (currentSuite !== "all" && test.suiteId !== currentSuite) return false;
      if (currentStatus !== "all" && test.outcome !== currentStatus) return false;
      if (q) {
        const inName = (test.name || "").toLowerCase().includes(q);
        const inDisplay = (test.displayName || "").toLowerCase().includes(q);
        const inDescription = (test.description || "").toLowerCase().includes(q);
        const inTestUri = (test.testUri || "").toLowerCase().includes(q);
        const inReason = (test.skipReason || "").toLowerCase().includes(q);
        const inSuite = (test.suiteName || "").toLowerCase().includes(q);
        if (!inName && !inDisplay && !inDescription && !inTestUri && !inReason && !inSuite) return false;
      }
      return true;
    });

    const isFiltered = (currentSuite !== "all" || currentStatus !== "all" || searchQuery !== "");
    if (btnResetFilters) {
      btnResetFilters.style.display = isFiltered ? "inline-block" : "none";
    }

    currentPage = 1;
    renderTable();
  }

  if (btnResetFilters) {
    btnResetFilters.addEventListener("click", () => {
      searchQuery = "";
      searchInput.value = "";
      currentSuite = "all";
      suiteSelect.value = "all";
      currentStatus = "all";
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.toggle("active", b.dataset.status === "all"));
      updateSuiteItems();
      renderSuitesGrid();
      populateSuiteSelect();
      applyFilters();
    });
  }

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    applyFilters();
  });

  statusPills.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentStatus = btn.dataset.status;
    applyFilters();
  });

  // Table Rendering
  function renderTable() {
    const total = filteredTests.length;
    explorerCount.textContent = `${total} test${total === 1 ? "" : "s"}`;

    if (total === 0) {
      tableBody.innerHTML = `<tr><td colspan="5" class="empty-state">No matching test cases found.<br><button class="btn btn-sm btn-inline-reset" onclick="document.getElementById('btn-reset-filters').click()">Clear all filters</button></td></tr>`;
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
      const outcome = test.outcome;
      const statusClass = "status-" + outcome.toLowerCase();
      const durationMs = Math.max(0, numeric(test.durationMs) || 0);
      
      return `
        <tr>
          <td><span class="status-badge ${statusClass}">${escapeHtml(outcomeLabel(outcome))}</span></td>
          <td><span class="spec-tag">${escapeHtml(test.suiteName)}</span></td>
          <td>
            <div class="test-name">${escapeHtml(test.displayName || test.name)}</div>
          </td>
          <td style="text-align: right;"><span class="font-mono">${durationMs}ms</span></td>
          <td style="text-align: center;">
            <button class="btn-view" onclick="window.__openModal(${globalIndex})">View</button>
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

  // Modal View
  window.__openModal = function(index) {
    const test = filteredTests[index];
    if (!test) return;

    modalStatus.textContent = outcomeLabel(test.outcome);
    modalStatus.className = "status-badge status-" + test.outcome.toLowerCase();
    modalTitle.textContent = test.name || "Test Case Details";
    modalSuite.textContent = test.suiteName;
    modalDisplayName.textContent = test.displayName || test.name;
    modalDuration.textContent = Math.max(0, numeric(test.durationMs) || 0) + " ms";

    const fixtureLinks = [];
    if (test.actionUri) {
      const fileName = test.actionUri.split("/").pop() || "Input File";
      const actionHref = safeExternalHref(test.actionUri);
      if (actionHref) {
        fixtureLinks.push(`<span>Input: <a href="${escapeHtml(actionHref)}" target="_blank" rel="noopener"><code>${escapeHtml(fileName)}</code> ↗</a></span>`);
      }
    }
    if (test.resultUri) {
      const isHttp = test.resultUri.startsWith("http://") || test.resultUri.startsWith("https://");
      const fileName = test.resultUri.split("/").pop() || "Expected Result";
      if (isHttp) {
        const resultHref = safeExternalHref(test.resultUri);
        if (resultHref) {
          fixtureLinks.push(`<span>Expected: <a href="${escapeHtml(resultHref)}" target="_blank" rel="noopener"><code>${escapeHtml(fileName)}</code> ↗</a></span>`);
        }
      } else {
        fixtureLinks.push(`<span>Expected: <code>${escapeHtml(test.resultUri)}</code></span>`);
      }
    }

    if (fixtureLinks.length > 0) {
      modalFixturesGroup.style.display = "flex";
      modalFixtures.innerHTML = fixtureLinks.join(" &nbsp;&bull;&nbsp; ");
    } else {
      modalFixturesGroup.style.display = "none";
    }

    const meta = SPEC_META[test.suiteId] || {};
    const git = (reportData && reportData.metadata && reportData.metadata.git) || {};
    const gitRef = safeGitRef(git.commit, git.branch);

    const links = [];
    const specificationHref = safeExternalHref(test.specification || meta.specUrl);
    const suiteHref = safeExternalHref(test.manifest || meta.testSuiteUrl);
    if (specificationHref) links.push(`<a href="${escapeHtml(specificationHref)}" target="_blank" rel="noopener">W3C Specification ↗</a>`);
    if (suiteHref) links.push(`<a href="${escapeHtml(suiteHref)}" target="_blank" rel="noopener">Official Suite Manifest ↗</a>`);
    if (meta.javaPath) {
      const className = meta.javaPath.split("/").pop() || "Test Runner";
      const sourceHref = safeExternalHref("https://github.com/corese-stack/corese-w3c/blob/"
        + encodeURIComponent(gitRef) + "/" + meta.javaPath.split("/").map(encodeURIComponent).join("/"));
      if (sourceHref) {
        links.push(`<a href="${escapeHtml(sourceHref)}" target="_blank" rel="noopener">${escapeHtml(className)} ↗</a>`);
      }
    }
    modalLinks.innerHTML = links.join(" &nbsp;&bull;&nbsp; ") || "-";

    if (test.skipReason) {
      modalSkipReasonGroup.style.display = "flex";
      let categoryBadge = "Documented Exclusion";
      let rationaleText = test.skipReason;

      if (test.skipReason.startsWith("OPTIONAL_UNSUPPORTED:")) {
        categoryBadge = "Optional Feature (Non-Standard RDF 1.1 Extension)";
        rationaleText = test.skipReason.replace("OPTIONAL_UNSUPPORTED:", "").trim();
      } else if (test.skipReason.startsWith("UPSTREAM_TITANIUM_1_6:")) {
        categoryBadge = "Upstream Dependency Edge-Case (Titanium JSON-LD 1.6.0)";
        rationaleText = test.skipReason.replace("UPSTREAM_TITANIUM_1_6:", "").trim();
      } else if (test.skipReason.startsWith("UPSTREAM_FIXTURE:")) {
        categoryBadge = "Upstream Benchmark Fixture Glitch (RDFa 0295)";
        rationaleText = test.skipReason.replace("UPSTREAM_FIXTURE:", "").trim();
      }

      modalSkipReason.innerHTML = `
        <div class="callout-badge">${escapeHtml(categoryBadge)}</div>
        <div class="callout-desc">${escapeHtml(rationaleText)}</div>
      `;
    } else {
      modalSkipReasonGroup.style.display = "none";
    }

    if (test.errorMessage) {
      modalErrorGroup.style.display = "flex";
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

  function normalizeOutcome(test) {
    const explicit = String(test.outcome || "").toUpperCase();
    if (["PASSED", "FAILED", "INAPPLICABLE", "UNTESTED", "CANT_TELL"].includes(explicit)) {
      return explicit;
    }
    const historical = String(test.status || "").toUpperCase();
    if (historical === "PASSED" || historical === "FAILED") return historical;
    if (historical === "SKIPPED") return "UNTESTED";
    return "CANT_TELL";
  }

  function outcomeLabel(outcome) {
    return outcome === "CANT_TELL" ? "CANNOT TELL" : outcome;
  }

  function numeric(value) {
    if (value == null || value === "") return null;
    const number = Number(value);
    return Number.isFinite(number) ? number : null;
  }

  function safeExternalHref(value) {
    if (!value) return null;
    try {
      const url = new URL(String(value));
      return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
    } catch (_error) {
      return null;
    }
  }

  function safeDataPath(value, fallback) {
    const candidate = typeof value === "string" ? value : fallback;
    return /^\.\/data\/[A-Za-z0-9._/+%~-]+$/.test(candidate) && !candidate.includes("..")
      ? candidate
      : fallback;
  }

  function safeGitRef(commit, branch) {
    if (/^[0-9a-f]{40}$/.test(String(commit || ""))) return commit;
    if (/^[A-Za-z0-9._/-]+$/.test(String(branch || "")) && !String(branch).includes("..")) return branch;
    return "develop";
  }

  // Init
  initTheme();
  loadVersions();
})();
