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
      testSuiteUrl: "https://rdfa.info/test-suite/test-cases/rdfa1.1/xhtml1/manifest.ttl",
      javaPath: "src/test/java/fr/inria/corese/w3c/rdf11rdfa/xhtml/Rdf11RDFaXHTMLDynamicTest.java"
    },
    "rdfa-xml": {
      specUrl: "https://www.w3.org/TR/rdfa-core/",
      testSuiteUrl: "https://rdfa.info/test-suite/test-cases/rdfa1.1/xml/manifest.ttl",
      javaPath: "src/test/java/fr/inria/corese/w3c/rdf11rdfa/xml/Rdf11RDFaXMLDynamicTest.java"
    },
    "rdfa-svg": {
      specUrl: "https://www.w3.org/TR/SVG11/",
      testSuiteUrl: "https://rdfa.info/test-suite/test-cases/rdfa1.1/svg/manifest.ttl",
      javaPath: "src/test/java/fr/inria/corese/w3c/rdf11rdfa/svg/Rdf11RDFaSVGDynamicTest.java"
    },
    "sparql10": {
      specUrl: "https://www.w3.org/TR/rdf-sparql-query/",
      testSuiteUrl: "https://w3c.github.io/rdf-tests/sparql/sparql10/manifest.ttl",
      javaPath: "src/test/java/fr/inria/corese/w3c/sparql10/Sparql10DynamicTest.java"
    },
    "sparql11": {
      specUrl: "https://www.w3.org/TR/sparql11-query/",
      testSuiteUrl: "https://w3c.github.io/rdf-tests/sparql/sparql11/manifest.ttl",
      javaPath: "src/test/java/fr/inria/corese/w3c/sparql11/Sparql11DynamicTest.java"
    }
  };

  let versionsList = [];
  let currentVersionFile = "./data/w3c-report.json";
  let currentVersionEarlFile = "./data/earl-report.ttl";
  let currentVersion = null;

  let reportData = null;
  let allTests = [];
  let filteredTests = [];

  let currentSuite = "all";
  let currentStatus = "all";
  let searchQuery = "";

  // DOM Elements
  const metaCommit = document.getElementById("meta-commit");
  const metaDate = document.getElementById("meta-date");
  const downloadJson = document.getElementById("download-json");
  const downloadEarl = document.getElementById("download-earl");
  const themeToggle = document.getElementById("theme-toggle");
  const iconAuto = document.getElementById("icon-auto");
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
  const globalMeter = document.getElementById("global-meter");

  const suitesGrid = document.getElementById("suites-grid");
  const suiteSelect = document.getElementById("suite-select");
  const searchInput = document.getElementById("search-input");
  const statusPills = document.getElementById("status-pills");
  const explorerCount = document.getElementById("explorer-count");
  const btnResetFilters = document.getElementById("btn-reset-filters");
  const tableBody = document.getElementById("tests-table-body");

  // Modal Elements
  const modal = document.getElementById("test-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalOkBtn = document.getElementById("modal-ok-btn");
  const modalStatus = document.getElementById("modal-status");
  const modalTitle = document.getElementById("modal-title");
  const modalSuite = document.getElementById("modal-suite");
  const modalFixturesGroup = document.getElementById("modal-fixtures-group");
  const modalFixtures = document.getElementById("modal-fixtures");
  const modalFixturePreviewGroup = document.getElementById("modal-fixture-preview-group");
  const modalFixturePreviewTitle = document.getElementById("modal-fixture-preview-title");
  const modalFixturePreviewContent = document.getElementById("modal-fixture-preview-content");
  const modalLinks = document.getElementById("modal-links");
  const modalDisplayName = document.getElementById("modal-display-name");
  const modalDescriptionGroup = document.getElementById("modal-description-group");
  const modalDescription = document.getElementById("modal-description");
  const modalTestTypeGroup = document.getElementById("modal-test-type-group");
  const modalTestType = document.getElementById("modal-test-type");
  const modalSkipReasonGroup = document.getElementById("modal-skip-reason-group");
  const modalSkipReason = document.getElementById("modal-skip-reason");
  const modalErrorGroup = document.getElementById("modal-error-group");
  const modalError = document.getElementById("modal-error");
  const modalDuration = document.getElementById("modal-duration");
  const modalTestUriGroup = document.getElementById("modal-test-uri-group");
  const modalTestUri = document.getElementById("modal-test-uri");
  const modalCopyUriBtn = document.getElementById("modal-copy-uri-btn");
  let currentModalTest = null;

  // Legal Modal Elements
  const legalModal = document.getElementById("legal-modal");
  const legalBtn = document.getElementById("legal-btn");
  const legalCloseBtn = document.getElementById("legal-close-btn");
  const legalOkBtn = document.getElementById("legal-ok-btn");

  // Theme Management (3-state: Auto / Light / Dark)
  let themeMode = localStorage.getItem("corese-theme-mode") || "auto";

  function initTheme() {
    if (themeMode !== "auto" && themeMode !== "light" && themeMode !== "dark") {
      themeMode = "auto";
    }
    applyThemeMode(themeMode);

    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
        if (themeMode === "auto") {
          applySystemTheme(e.matches ? "light" : "dark");
        }
      });
    }
  }

  function applySystemTheme(effectiveTheme) {
    document.documentElement.dataset.theme = effectiveTheme;
    document.documentElement.dataset.themeMode = "auto";
    updateThemeToggleUI("auto", effectiveTheme);
  }

  function applyThemeMode(mode) {
    themeMode = mode;
    if (mode === "auto") {
      localStorage.removeItem("corese-theme-mode");
      localStorage.removeItem("corese-theme");
      const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)")?.matches;
      applySystemTheme(prefersLight ? "light" : "dark");
    } else {
      localStorage.setItem("corese-theme-mode", mode);
      localStorage.setItem("corese-theme", mode);
      document.documentElement.dataset.theme = mode;
      document.documentElement.dataset.themeMode = mode;
      updateThemeToggleUI(mode, mode);
    }
  }

  const THEME_LABELS = {
    auto: {
      icon: "auto",
      title: eff => `Theme: Auto (System: ${eff}) - Click for Light`,
      aria: eff => `Current theme: Auto System (${eff}). Click for Light mode`
    },
    light: {
      icon: "sun",
      title: () => "Theme: Light - Click for Dark",
      aria: () => "Current theme: Light. Click for Dark mode"
    },
    dark: {
      icon: "moon",
      title: () => "Theme: Dark - Click for Auto (System)",
      aria: () => "Current theme: Dark. Click for Auto System mode"
    }
  };

  function updateThemeIcons(activeIcon) {
    if (iconAuto) iconAuto.style.display = activeIcon === "auto" ? "block" : "none";
    if (iconSun) iconSun.style.display = activeIcon === "sun" ? "block" : "none";
    if (iconMoon) iconMoon.style.display = activeIcon === "moon" ? "block" : "none";
  }

  function updateThemeToggleUI(mode, effectiveTheme) {
    if (!themeToggle) return;
    const cfg = THEME_LABELS[mode] || THEME_LABELS.auto;
    updateThemeIcons(cfg.icon);
    themeToggle.title = cfg.title(effectiveTheme);
    themeToggle.setAttribute("aria-label", cfg.aria(effectiveTheme));
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      let next;
      if (themeMode === "auto") next = "light";
      else if (themeMode === "light") next = "dark";
      else next = "auto";
      applyThemeMode(next);
    });
  }

  // Load Versions List
  async function loadVersions() {
    try {
      const res = await fetch("./data/versions.json");
      if (res.ok) {
        versionsList = await res.json();
        populateVersionsSelect();
      }
    } catch (error_) {
      console.debug("Failed to fetch versions manifest, using local snapshot:", error_);
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
        const label = versionsList[0]?.label || "v5.0.0-SNAPSHOT";
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
    currentVersion = version;
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
    readUrlHash();
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

    const targetBranch = currentVersion?.branch || git.branch;
    const gitRef = safeGitRef(targetBranch, git.commit);
    document.querySelectorAll(".exclusions-link").forEach(a => {
      const href = a.getAttribute("href") || "";
      const hashIndex = href.indexOf("#");
      const hash = hashIndex !== -1 ? href.substring(hashIndex) : "";
      a.href = "https://github.com/corese-stack/corese-w3c/blob/" + gitRef + "/docs/W3C_TEST_EXCLUSIONS.md" + hash;
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
      if (failedCount === 0) {
        valFailedNote.textContent = "0 regressions";
      } else {
        const suffix = failedCount > 1 ? "s" : "";
        valFailedNote.textContent = `${failedCount} regression${suffix}`;
      }
    }
    valCantTell.textContent = Number(summary.cantTell || 0).toLocaleString();

    if (globalMeter) {
      globalMeter.innerHTML = buildMeterSegments(summary, Number(summary.total || 0));
    }
  }

  function buildMeterSegments(stats, total) {
    if (!total || total <= 0) return '<div class="meter-segment pass" style="width: 0%;"></div>';

    const pass = numeric(stats.passed) || 0;
    const fail = numeric(stats.failed) || 0;
    const skip = numeric(stats.untested == null ? stats.skipped : stats.untested) || 0;
    const inapp = numeric(stats.inapplicable) || 0;
    const cant = numeric(stats.cantTell) || 0;

    const pPass = (pass / total) * 100;
    const pFail = (fail / total) * 100;
    const pSkip = (skip / total) * 100;
    const pInapp = (inapp / total) * 100;
    const pCant = (cant / total) * 100;

    const segments = [];
    if (pPass > 0) {
      segments.push(`<div class="meter-segment pass" style="width: ${pPass.toFixed(2)}%;" title="Passed: ${pass.toLocaleString()} (${pPass.toFixed(1)}%)"></div>`);
    }
    if (pFail > 0) {
      segments.push(`<div class="meter-segment fail" style="width: ${pFail.toFixed(2)}%;" title="Failed: ${fail.toLocaleString()} (${pFail.toFixed(1)}%)"></div>`);
    }
    if (pSkip > 0) {
      segments.push(`<div class="meter-segment skip" style="width: ${pSkip.toFixed(2)}%;" title="Untested / Not Run: ${skip.toLocaleString()} (${pSkip.toFixed(1)}%)"></div>`);
    }
    if (pInapp > 0) {
      segments.push(`<div class="meter-segment inapplicable" style="width: ${pInapp.toFixed(2)}%;" title="Inapplicable: ${inapp.toLocaleString()} (${pInapp.toFixed(1)}%)"></div>`);
    }
    if (pCant > 0) {
      segments.push(`<div class="meter-segment cant-tell" style="width: ${pCant.toFixed(2)}%;" title="Cannot Tell: ${cant.toLocaleString()} (${pCant.toFixed(1)}%)"></div>`);
    }
    return segments.join("");
  }

  function buildSuiteCountsHtml(suite) {
    const passed = numeric(suite.passed) || 0;
    const total = numeric(suite.total) || 0;
    const failed = numeric(suite.failed) || 0;
    const untested = numeric(suite.untested == null ? suite.skipped : suite.untested) || 0;
    const inapplicable = numeric(suite.inapplicable) || 0;
    const cantTell = numeric(suite.cantTell) || 0;

    const items = [];
    items.push(`<span class="suite-count-item suite-pass-count">${passed.toLocaleString()}/${total.toLocaleString()} passed</span>`);
    if (failed > 0) {
      items.push(`<span class="suite-count-item suite-fail-count">${failed.toLocaleString()} failed</span>`);
    }
    if (untested > 0) {
      items.push(`<span class="suite-count-item suite-skip-count">${untested.toLocaleString()} not run</span>`);
    }
    if (inapplicable > 0) {
      items.push(`<span class="suite-count-item suite-inapplicable-count">${inapplicable.toLocaleString()} inapp</span>`);
    }
    if (cantTell > 0) {
      items.push(`<span class="suite-count-item suite-cant-tell-count">${cantTell.toLocaleString()} cant tell</span>`);
    }

    return `<div class="suite-breakdown">${items.join("")}</div>`;
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
      const total = numeric(suite.total);

      item.innerHTML = `
        <div class="suite-header-line">
          <div class="suite-title-group">
            <span class="suite-title" title="${escapeHtml(suite.name)}">${escapeHtml(suite.name)}</span>
            ${linksHtml}
          </div>
          <span class="suite-percent">${passRate == null ? "—" : passRate.toFixed(1) + "%"}</span>
        </div>
        <div class="suite-meter">
          ${buildMeterSegments(suite, total)}
        </div>
        <div class="suite-counts">
          ${buildSuiteCountsHtml(suite)}
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

    updateStatusPills();
    updateMetricBlockActive();
    renderTable();
    updateUrlHash();
  }

  if (btnResetFilters) {
    btnResetFilters.addEventListener("click", () => {
      searchQuery = "";
      searchInput.value = "";
      currentSuite = "all";
      suiteSelect.value = "all";
      currentStatus = "all";
      updateSuiteItems();
      renderSuitesGrid();
      populateSuiteSelect();
      updateStatusPills();
      updateMetricBlockActive();
      applyFilters();
      updateUrlHash();
    });
  }

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    applyFilters();
  });

  statusPills.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    currentStatus = btn.dataset.status;
    updateStatusPills();
    updateMetricBlockActive();
    applyFilters();
  });

  // Table Rendering
  function renderTable() {
    const total = filteredTests.length;
    explorerCount.textContent = `${total.toLocaleString()} test${total === 1 ? "" : "s"}`;

    if (total === 0) {
      tableBody.innerHTML = `<tr><td colspan="5" class="empty-state">No matching test cases found.<br><button class="btn btn-sm btn-inline-reset" onclick="document.getElementById('btn-reset-filters').click()">Clear all filters</button></td></tr>`;
      return;
    }

    tableBody.innerHTML = filteredTests.map((test, idx) => {
      const outcome = test.outcome;
      const statusClass = "status-" + outcome.toLowerCase();
      const durationMs = Math.max(0, numeric(test.durationMs) || 0);

      return `
        <tr class="clickable-row" onclick="window.__openModal(${idx})">
          <td><span class="status-badge ${statusClass}">${escapeHtml(outcomeLabel(outcome))}</span></td>
          <td><span class="spec-tag">${escapeHtml(test.suiteName)}</span></td>
          <td>
            <div class="test-name">${escapeHtml(test.displayName || test.name)}</div>
          </td>
          <td style="text-align: right;"><span class="font-mono">${durationMs}ms</span></td>
          <td style="text-align: center;">
            <button class="btn-view" aria-label="View details for ${escapeHtml(test.displayName || test.name)}" onclick="event.stopPropagation(); window.__openModal(${idx})">View</button>
          </td>
        </tr>
      `;
    }).join("");
  }

  // Modal View Helpers
  function getActionLabel(fileName) {
    if (fileName.endsWith(".rq")) return "Query File";
    if (fileName.endsWith(".ru")) return "Update File";
    return "Input";
  }

  function getDataLabel(test) {
    if (test.testType?.includes("UPDATE") || test.actionUri?.endsWith(".ru")) {
      return "Initial Data";
    }
    return "Data File";
  }

  function buildDataFixtureLink(test) {
    if (!test.dataUri || test.dataUri === test.actionUri) return null;
    const isHttp = test.dataUri.startsWith("https://") || test.dataUri.startsWith("http://");
    const fileName = test.dataUri.split("/").pop() || "Data File";
    const label = getDataLabel(test);
    if (!isHttp) {
      return `<span>${label}: <code>${escapeHtml(test.dataUri)}</code></span>`;
    }
    const dataHref = safeExternalHref(test.dataUri);
    return dataHref
      ? `<span>${label}: <a href="${escapeHtml(dataHref)}" target="_blank" rel="noopener"><code>${escapeHtml(fileName)}</code> ↗</a></span>`
      : null;
  }

  function buildTestDefFixtureLink(testUri) {
    if (!testUri) return null;
    const testIriHref = safeExternalHref(testUri);
    if (!testIriHref) return null;
    const testName = testUri.includes("#")
      ? testUri.split("#").pop()
      : (testUri.split("/").pop() || "IRI");
    return `<span>Test Definition: <a href="${escapeHtml(testIriHref)}" target="_blank" rel="noopener"><code>${escapeHtml(testName)}</code> ↗</a></span>`;
  }

  function buildFixtureLinks(test) {
    const fixtureLinks = [];
    if (test.actionUri) {
      const fileName = test.actionUri.split("/").pop() || "Input File";
      const actionHref = safeExternalHref(test.actionUri);
      if (actionHref) {
        const label = getActionLabel(fileName);
        fixtureLinks.push(`<span>${label}: <a href="${escapeHtml(actionHref)}" target="_blank" rel="noopener"><code>${escapeHtml(fileName)}</code> ↗</a> <button type="button" class="btn-view btn-preview-fixture" style="margin-left: 4px; padding: 1px 6px;" data-url="${escapeHtml(actionHref)}" data-name="${escapeHtml(fileName)}">Preview</button></span>`);
      }
    }
    const dataLink = buildDataFixtureLink(test);
    if (dataLink) {
      fixtureLinks.push(dataLink);
    }
    if (test.resultUri) {
      const isHttp = test.resultUri.startsWith("https://") || test.resultUri.startsWith("http://");
      const resultFileName = test.resultUri.split("/").pop() || "Expected Result";
      const resultHref = safeExternalHref(test.resultUri);
      if (isHttp && resultHref) {
        fixtureLinks.push(`<span>Expected: <a href="${escapeHtml(resultHref)}" target="_blank" rel="noopener"><code>${escapeHtml(resultFileName)}</code> ↗</a> <button type="button" class="btn-view btn-preview-fixture" style="margin-left: 4px; padding: 1px 6px;" data-url="${escapeHtml(resultHref)}" data-name="${escapeHtml(resultFileName)}">Preview</button></span>`);
      } else if (!isHttp) {
        fixtureLinks.push(`<span>Expected: <code>${escapeHtml(test.resultUri)}</code></span>`);
      }
    }
    const testDefLink = buildTestDefFixtureLink(test.testUri);
    if (testDefLink) {
      fixtureLinks.push(testDefLink);
    }
    return fixtureLinks;
  }

  function buildSpecificationLinks(test) {
    const meta = SPEC_META[test.suiteId] || {};
    const git = reportData?.metadata?.git || {};
    const gitRef = safeGitRef(git.commit, git.branch);

    const links = [];
    const specificationHref = safeExternalHref(test.specification || meta.specUrl);
    const suiteHref = safeExternalHref(test.manifest || meta.testSuiteUrl);
    if (specificationHref) links.push(`<a href="${escapeHtml(specificationHref)}" target="_blank" rel="noopener">W3C Specification ↗</a>`);
    if (suiteHref) links.push(`<a href="${escapeHtml(suiteHref)}" target="_blank" rel="noopener">Official Suite Manifest ↗</a>`);
    if (test.manifestUri && test.manifestUri !== (test.manifest || meta.testSuiteUrl)) {
      const testManifestHref = safeExternalHref(test.manifestUri);
      if (testManifestHref) {
        links.push(`<a href="${escapeHtml(testManifestHref)}" target="_blank" rel="noopener">Test Manifest ↗</a>`);
      }
    }
    if (meta.javaPath) {
      const className = meta.javaPath.split("/").pop() || "Test Runner";
      const sourceHref = safeExternalHref("https://github.com/corese-stack/corese-w3c/blob/"
        + encodeURIComponent(gitRef) + "/" + meta.javaPath.split("/").map(encodeURIComponent).join("/"));
      if (sourceHref) {
        links.push(`<a href="${escapeHtml(sourceHref)}" target="_blank" rel="noopener">${escapeHtml(className)} ↗</a>`);
      }
    }
    return links.join(" &nbsp;&bull;&nbsp; ") || "-";
  }

  function renderModalSkipSection(test) {
    if (!test.skipReason) {
      modalSkipReasonGroup.style.display = "none";
      return;
    }
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
  }

  function renderModalTestUri(testUri) {
    if (!modalTestUri || !modalTestUriGroup) return;
    if (!testUri) {
      modalTestUriGroup.style.display = "none";
      return;
    }
    modalTestUriGroup.style.display = "flex";
    const testHref = safeExternalHref(testUri);
    modalTestUri.innerHTML = testHref
      ? `<a href="${escapeHtml(testHref)}" target="_blank" rel="noopener" class="link-discrete">${escapeHtml(testUri)} ↗</a>`
      : escapeHtml(testUri);
  }

  function renderModalFixtures(fixtureLinks) {
    if (!modalFixturesGroup || !modalFixtures) return;
    if (fixtureLinks.length > 0) {
      modalFixturesGroup.style.display = "flex";
      modalFixtures.innerHTML = fixtureLinks.join(" &nbsp;&bull;&nbsp; ");
    } else {
      modalFixturesGroup.style.display = "none";
    }
  }

  function renderModalError(errorMessage) {
    if (!modalErrorGroup || !modalError) return;
    if (errorMessage) {
      modalErrorGroup.style.display = "flex";
      modalError.textContent = errorMessage;
    } else {
      modalErrorGroup.style.display = "none";
    }
  }

  function openModalDialog() {
    if (typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      modal.setAttribute("open", "");
    }
  }

  function renderModalDescription(description) {
    if (!modalDescriptionGroup || !modalDescription) return;
    if (description) {
      modalDescriptionGroup.style.display = "flex";
      modalDescription.textContent = description;
    } else {
      modalDescriptionGroup.style.display = "none";
    }
  }

  function renderModalTestType(testType) {
    if (!modalTestTypeGroup || !modalTestType) return;
    if (testType) {
      modalTestTypeGroup.style.display = "flex";
      modalTestType.textContent = testType;
    } else {
      modalTestTypeGroup.style.display = "none";
    }
  }

  // Modal View
  function openModal(test) {
    if (!test) return;
    currentModalTest = test;

    modalStatus.textContent = outcomeLabel(test.outcome);
    modalStatus.className = "status-badge status-" + test.outcome.toLowerCase();
    modalTitle.textContent = test.name || "Test Case Details";
    modalSuite.textContent = test.suiteName;
    modalDisplayName.textContent = test.displayName || test.name;
    renderModalDescription(test.description);
    renderModalTestType(test.testType);
    modalDuration.textContent = Math.max(0, numeric(test.durationMs) || 0) + " ms";

    renderModalTestUri(test.testUri);
    if (modalCopyUriBtn) {
      modalCopyUriBtn.textContent = "Copy Test IRI";
    }
    if (modalFixturePreviewGroup) {
      modalFixturePreviewGroup.style.display = "none";
    }
    renderModalFixtures(buildFixtureLinks(test));
    modalLinks.innerHTML = buildSpecificationLinks(test);
    renderModalSkipSection(test);
    renderModalError(test.errorMessage);
    openModalDialog();
    updateUrlHash();
  }

  window.__openModal = function(index) {
    openModal(filteredTests[index]);
  };

  function closeModal() {
    currentModalTest = null;
    if (modalFixturePreviewGroup) {
      modalFixturePreviewGroup.style.display = "none";
    }
    if (typeof modal.close === "function") {
      modal.close();
    } else {
      modal.removeAttribute("open");
    }
    updateUrlHash();
  }

  modalCloseBtn.addEventListener("click", closeModal);
  modalOkBtn.addEventListener("click", closeModal);
  modal.addEventListener("cancel", () => {
    currentModalTest = null;
    if (modalFixturePreviewGroup) modalFixturePreviewGroup.style.display = "none";
    updateUrlHash();
  });
  if (modalCopyUriBtn) {
    modalCopyUriBtn.addEventListener("click", () => {
      const textToCopy = currentModalTest?.testUri || "";
      if (textToCopy && navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          modalCopyUriBtn.textContent = "Copied!";
          setTimeout(() => {
            modalCopyUriBtn.textContent = "Copy Test IRI";
          }, 1800);
        }).catch(() => {
          modalCopyUriBtn.textContent = "Error copying";
        });
      }
    });
  }
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
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

  function resolveSparqlUrl(parsed) {
    if (parsed.hostname !== "www.w3.org") return null;

    const pathname = parsed.pathname;
    const sparql11Prefix = "/2009/sparql/docs/tests/data-sparql11/";
    const sparql10Prefix = "/2001/sw/DataAccess/tests/data-r2/";

    let targetSuite = null;
    let remainder = null;

    if (pathname.startsWith(sparql11Prefix)) {
      targetSuite = "sparql11";
      remainder = pathname.slice(sparql11Prefix.length);
    } else if (pathname.startsWith(sparql10Prefix)) {
      targetSuite = "sparql10";
      remainder = pathname.slice(sparql10Prefix.length);
    } else {
      return null;
    }

    let subPath = remainder;
    if (subPath.endsWith("/manifest")) {
      subPath += ".ttl";
    } else if (subPath === "manifest") {
      subPath = "manifest.ttl";
    }

    const search = parsed.search || "";
    const anchor = parsed.hash || "";
    return `https://w3c.github.io/rdf-tests/sparql/${targetSuite}/${subPath}${search}${anchor}`;
  }

  function resolveRdfaUrl(parsed) {
    if (parsed.hostname !== "rdfa.info") return null;

    let path = parsed.pathname;
    if (path.endsWith("/manifest")) {
      path += ".ttl";
    }
    return `https://rdfa.info${path}${parsed.hash || ""}`;
  }

  function resolveWebUrl(rawUri) {
    if (!rawUri) return null;
    const uriStr = String(rawUri).trim();
    try {
      const parsed = new URL(uriStr);
      const sparqlUrl = resolveSparqlUrl(parsed);
      if (sparqlUrl) return sparqlUrl;

      const rdfaUrl = resolveRdfaUrl(parsed);
      if (rdfaUrl) return rdfaUrl;

      return parsed.href;
    } catch {
      return uriStr;
    }
  }

  function safeExternalHref(value) {
    if (!value) return null;
    try {
      const resolved = resolveWebUrl(value);
      const url = new URL(String(resolved || value));
      return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
    } catch (error_) {
      console.debug("Invalid or unparseable external URL:", error_);
      return null;
    }
  }

  function safeDataPath(value, fallback) {
    const candidate = typeof value === "string" ? value : fallback;
    return /^\.\/data\/[A-Za-z0-9._/+%~-]+$/.test(candidate) && !candidate.includes("..")
      ? candidate
      : fallback;
  }

  function safeGitRef(branch, commit) {
    if (/^[A-Za-z0-9._/-]+$/.test(String(branch || "")) && !String(branch).includes("..")) return branch;
    if (/^[0-9a-f]{40}$/.test(String(commit || ""))) return commit;
    return "develop";
  }

  async function previewFixture(url, fileName) {
    if (!modalFixturePreviewGroup || !modalFixturePreviewContent) return;
    modalFixturePreviewGroup.style.display = "flex";
    if (modalFixturePreviewTitle) {
      modalFixturePreviewTitle.textContent = `Fixture Preview (${fileName || ""})`;
    }
    modalFixturePreviewContent.textContent = "Loading preview...";
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      modalFixturePreviewContent.textContent = text || "(Empty file)";
    } catch (e) {
      modalFixturePreviewContent.textContent = `Preview unavailable directly (${e.message}). This typically occurs when remote hosts (e.g. W3C or GitHub) restrict cross-origin access (CORS). Please click the direct link above to open this fixture in a new tab.`;
    }
  }
  window.__previewFixture = previewFixture;

  if (modalFixtures) {
    modalFixtures.addEventListener("click", (e) => {
      const previewBtn = e.target.closest(".btn-preview-fixture");
      if (!previewBtn) return;
      const url = previewBtn.dataset.url;
      const name = previewBtn.dataset.name;
      if (url) previewFixture(url, name);
    });
  }

  function updateStatusPills() {
    document.querySelectorAll(".filter-btn").forEach(b => {
      const isActive = b.dataset.status === currentStatus;
      b.classList.toggle("active", isActive);
      b.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function updateMetricBlockActive() {
    document.querySelectorAll(".metric-block").forEach(block => {
      const status = block.dataset.status;
      const isActive = status === currentStatus && currentStatus !== "all";
      block.classList.toggle("active", isActive);
      const btn = block.querySelector(".metric-filter-btn");
      if (btn) {
        btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      }
    });
  }

  function initMetricBlocks() {
    document.querySelectorAll(".metric-block").forEach(block => {
      block.addEventListener("click", (e) => {
        if (e.target.closest("a")) return;
        const targetStatus = block.dataset.status;
        if (!targetStatus) return;

        if (currentStatus === targetStatus && targetStatus !== "all") {
          currentStatus = "all";
        } else {
          currentStatus = targetStatus;
        }
        updateStatusPills();
        updateMetricBlockActive();
        applyFilters();
        updateUrlHash();
      });
    });
  }

  function openLegalModal() {
    if (!legalModal) return;
    if (typeof legalModal.showModal === "function") {
      legalModal.showModal();
    } else {
      legalModal.setAttribute("open", "");
    }
  }

  function closeLegalModal() {
    if (!legalModal) return;
    if (typeof legalModal.close === "function") {
      legalModal.close();
    } else {
      legalModal.removeAttribute("open");
    }
    if (window.location.hash === "#legal") {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }

  function initLegalModal() {
    if (legalBtn) {
      legalBtn.addEventListener("click", () => {
        openLegalModal();
        history.replaceState(null, "", "#legal");
      });
    }
    if (legalCloseBtn) legalCloseBtn.addEventListener("click", closeLegalModal);
    if (legalOkBtn) legalOkBtn.addEventListener("click", closeLegalModal);
    if (legalModal) {
      legalModal.addEventListener("click", (e) => {
        if (e.target === legalModal) closeLegalModal();
      });
      legalModal.addEventListener("cancel", () => {
        if (window.location.hash === "#legal") {
          history.replaceState(null, "", window.location.pathname + window.location.search);
        }
      });
    }
  }

  let isSyncingHash = false;

  function getTestShortId(test) {
    if (!test?.testUri) return "";
    const hashIndex = test.testUri.lastIndexOf("#");
    if (hashIndex !== -1 && hashIndex < test.testUri.length - 1) {
      return test.testUri.substring(hashIndex + 1);
    }
    const slashIndex = test.testUri.lastIndexOf("/");
    if (slashIndex !== -1 && slashIndex < test.testUri.length - 1) {
      return test.testUri.substring(slashIndex + 1);
    }
    return "";
  }

  function matchesTest(test, testParam) {
    if (!test || !testParam) return false;
    if ((test.displayName || test.name) === testParam) return true;
    if (test.testUri === testParam) return true;
    return Boolean(test.testUri?.endsWith("#" + testParam) || test.testUri?.endsWith("/" + testParam));
  }

  function updateUrlHash() {
    if (isSyncingHash) return;
    const params = new URLSearchParams();
    if (currentSuite && currentSuite !== "all") params.set("suite", currentSuite);
    if (currentStatus && currentStatus !== "all") params.set("status", currentStatus);
    if (searchQuery) params.set("q", searchQuery);
    if (currentModalTest) {
      const testIdentifier = getTestShortId(currentModalTest) || currentModalTest.displayName || currentModalTest.name;
      if (testIdentifier) params.set("test", testIdentifier);
    }
    const hash = params.toString();
    const newUrl = hash ? `#${hash}` : window.location.pathname + window.location.search;
    history.replaceState(null, "", newUrl);
  }

  function applyUrlFilterParams(params) {
    const suite = params.get("suite") || "all";
    currentSuite = suite;
    if (suiteSelect) suiteSelect.value = suite;
    updateSuiteItems();

    const status = params.get("status") || "all";
    currentStatus = status;
    updateStatusPills();
    updateMetricBlockActive();

    const q = params.get("q") || "";
    searchQuery = q;
    if (searchInput) searchInput.value = q;
  }

  function applyUrlTestParam(testName) {
    if (!testName) {
      if (currentModalTest) closeModal();
      return;
    }
    let found = null;
    if (currentSuite && currentSuite !== "all") {
      found = allTests.find(t => t.suiteId === currentSuite && matchesTest(t, testName));
    }
    if (!found) {
      found = allTests.find(t => matchesTest(t, testName));
    }
    if (found) {
      openModal(found);
    } else if (currentModalTest) {
      closeModal();
    }
  }

  function readUrlHash() {
    isSyncingHash = true;
    try {
      const rawHash = window.location.hash.replace(/^#/, "");
      if (!rawHash) {
        applyUrlFilterParams(new URLSearchParams());
        applyFilters();
        if (currentModalTest) closeModal();
        if (legalModal?.open) closeLegalModal();
        return;
      }
      if (rawHash === "legal") {
        if (currentModalTest) closeModal();
        openLegalModal();
        applyFilters();
        return;
      }
      if (legalModal?.open) {
        closeLegalModal();
      }

      const params = new URLSearchParams(rawHash);
      applyUrlFilterParams(params);
      applyFilters();
      applyUrlTestParam(params.get("test"));
    } finally {
      isSyncingHash = false;
    }
  }

  window.addEventListener("hashchange", () => {
    readUrlHash();
  });

  function isAnyModalOpen() {
    return Boolean(modal?.open || legalModal?.open);
  }

  function isTypingInInput(target) {
    if (!target) return false;
    const tag = target.tagName?.toLowerCase() || "";
    return tag === "input" || tag === "textarea" || tag === "select" || Boolean(target.isContentEditable);
  }

  function initGlobalShortcuts() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "/" && !e.ctrlKey && !e.metaKey && !e.altKey) {
        if (isAnyModalOpen() || isTypingInInput(e.target)) return;
        e.preventDefault();
        if (searchInput) {
          searchInput.focus();
          searchInput.select();
        }
      } else if (e.key === "Escape" && document.activeElement === searchInput) {
        if (searchInput.value) {
          searchQuery = "";
          searchInput.value = "";
          applyFilters();
        } else {
          searchInput.blur();
        }
      }
    });
  }

  // Init
  initTheme();
  initMetricBlocks();
  initLegalModal();
  initGlobalShortcuts();
  loadVersions();
})();
