(function () {
  "use strict";

  const THEME_KEY = "smartmoney_hub_theme_v1";
  const CFG = window.HUB_CONFIG;
  const $ = (id) => document.getElementById(id);

  let activeFilter = "all";
  let searchQuery = "";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (_) {}
    $("themeToggleBtn").textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
  }

  function openPreview(item) {
    $("previewModalBadge").textContent = item.badge;
    $("previewModalTitle").textContent = item.title;
    $("previewModalDesc").textContent = item.summary;
    $("previewModalList").innerHTML = (item.modules || []).map((m) => `<li>${m}</li>`).join("");
    const modal = $("previewModal");
    if (modal && typeof modal.showModal === "function") modal.showModal();
  }

  function renderFinder() {
    $("finderGrid").innerHTML = CFG.decisionFinder.map((f) => `
      <a class="finder-card" href="${f.url}" target="_blank" rel="noopener noreferrer">
        <span class="finder-q">${f.question}</span>
        <span class="finder-go">${f.targetName} &rarr;</span>
      </a>
    `).join("");
  }

  function renderAllCards() {
    $("webToolsGrid").innerHTML = CFG.calculators.map((c) => `
      <article class="hub-card" data-cat="web" data-search="${(c.title + " " + c.summary + " " + c.tags).toLowerCase()}">
        <div>
          <span class="offer-badge">${c.badge}</span>
          <h3>${c.title}</h3>
          <p>${c.summary}</p>
          <ul class="hub-bullets">${c.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>
        </div>
        <div class="hub-card-actions">
          <a class="btn btn-primary btn-sm" href="${c.url}" target="_blank" rel="noopener noreferrer">Open Free Calculator &rarr;</a>
        </div>
      </article>
    `).join("");

    $("sheetsGrid").innerHTML = CFG.sheetsOs.map((s, idx) => {
      const hasUrl = Boolean(s.url && s.url.trim());
      const action = hasUrl
        ? `<a class="btn btn-primary btn-sm" href="${s.url}" target="_blank" rel="noopener noreferrer">Get on Gumroad &rarr;</a>`
        : `<button type="button" class="btn btn-primary btn-sm" data-preview-type="sheets" data-preview-idx="${idx}">Preview Inside (Free Lite)</button>`;
      return `
        <article class="hub-card" data-cat="sheets" data-search="${(s.title + " " + s.summary + " " + s.tags).toLowerCase()}">
          <div>
            <span class="offer-badge">${s.badge}</span>
            <h3>${s.title}</h3>
            <p>${s.summary}</p>
            <ul class="hub-bullets">${s.modules.slice(0, 3).map((m) => `<li>${m}</li>`).join("")}</ul>
          </div>
          <div class="hub-card-actions">${action}</div>
        </article>
      `;
    }).join("");

    $("extensionsGrid").innerHTML = CFG.extensions.map((e, idx) => {
      const hasUrl = Boolean(e.url && e.url.trim());
      const action = hasUrl
        ? `<a class="btn btn-primary btn-sm" href="${e.url}" target="_blank" rel="noopener noreferrer">Install Free Extension &rarr;</a>`
        : `<button type="button" class="btn btn-sm" data-preview-type="ext" data-preview-idx="${idx}">View Features &amp; Setup</button>`;
      return `
        <article class="hub-card" data-cat="extensions" data-search="${(e.title + " " + e.summary + " " + e.tags).toLowerCase()}">
          <div>
            <span class="offer-badge">${e.badge}</span>
            <h3>${e.title}</h3>
            <p>${e.summary}</p>
            <ul class="hub-bullets">${e.modules.map((m) => `<li>${m}</li>`).join("")}</ul>
          </div>
          <div class="hub-card-actions">${action}</div>
        </article>
      `;
    }).join("");

    document.querySelectorAll("[data-preview-type]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const type = btn.dataset.previewType;
        const idx = Number(btn.dataset.previewIdx);
        const item = type === "sheets" ? CFG.sheetsOs[idx] : CFG.extensions[idx];
        if (item) openPreview(item);
      });
    });
  }

  function applyFilters() {
    const q = searchQuery.trim().toLowerCase();
    let totalVisible = 0;

    document.querySelectorAll(".hub-section").forEach((sec) => {
      const secKey = sec.dataset.sec;
      const catMatch = activeFilter === "all" || activeFilter === secKey;
      let secVisible = 0;

      sec.querySelectorAll(".hub-card").forEach((card) => {
        const textMatch = !q || card.dataset.search.includes(q);
        const show = catMatch && textMatch;
        card.hidden = !show;
        if (show) {
          secVisible++;
          totalVisible++;
        }
      });

      sec.hidden = secVisible === 0;
    });

    $("emptyStateBox").hidden = totalVisible > 0;
  }

  function init() {
    $("brandNameText").textContent = CFG.brand.name;
    $("brandSubText").textContent = CFG.brand.subtitle;
    applyTheme(localStorage.getItem(THEME_KEY) || "light");

    renderFinder();
    renderAllCards();

    $("themeToggleBtn").addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme") || "light";
      applyTheme(cur === "dark" ? "light" : "dark");
    });

    document.querySelectorAll(".filter-pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeFilter = btn.dataset.filter;
        document.querySelectorAll(".filter-pill").forEach((b) => b.setAttribute("aria-selected", String(b === btn)));
        applyFilters();
      });
    });

    $("hubSearchInput").addEventListener("input", (e) => {
      searchQuery = e.target.value;
      applyFilters();
    });

    $("clearSearchBtn").addEventListener("click", () => {
      searchQuery = "";
      activeFilter = "all";
      $("hubSearchInput").value = "";
      document.querySelectorAll(".filter-pill").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.filter === "all")));
      applyFilters();
    });

    const closeM = () => {
      const m = $("previewModal");
      if (m && m.open) m.close();
    };
    $("closeModalBtn").addEventListener("click", closeM);
    $("modalCloseFooterBtn").addEventListener("click", closeM);
  }

  init();
})();
