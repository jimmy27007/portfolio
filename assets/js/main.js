const COMPONENT_VERSION = "20260424-4";

function clearLegacyComponentCache() {
  try {
    if (typeof sessionStorage === "undefined") return;

    const staleKeys = [];
    for (let i = 0; i < sessionStorage.length; i += 1) {
      const key = sessionStorage.key(i);
      if (key?.startsWith("component:")) staleKeys.push(key);
    }

    staleKeys.forEach((key) => sessionStorage.removeItem(key));
  } catch {
    // Ignore storage failures.
  }
}

async function loadComponent(id, file) {
  const target = document.getElementById(id);
  if (!target) return;

  try {
    const res = await fetch(`${file}?v=${COMPONENT_VERSION}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`Unable to load ${file}`);
    target.innerHTML = await res.text();
  } catch (err) {
    console.error(err);
  }
}

function updateThemeButton() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  const isLight = document.body.classList.contains("light");
  btn.innerHTML = isLight
    ? '<span class="material-symbols-rounded">dark_mode</span><span>Dark</span>'
    : '<span class="material-symbols-rounded">light_mode</span><span>Light</span>';
}

function updateThemeMeta() {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) return;
  meta.setAttribute("content", document.body.classList.contains("light") ? "#edf7f7" : "#17252a");
}

function setThemeFromStorage() {
  if (localStorage.theme === "light") {
    document.body.classList.add("light");
  }
}

function setupThemeToggle() {
  document.addEventListener("click", (e) => {
    if (!(e.target instanceof Element) || !e.target.closest("#themeToggle")) return;
    document.body.classList.toggle("light");
    localStorage.theme = document.body.classList.contains("light") ? "light" : "dark";
    updateThemeButton();
    updateThemeMeta();
  });
}

function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function setupProgressBar() {
  const bar = document.createElement("div");
  bar.className = "progress-bar";
  document.body.appendChild(bar);

  const update = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = height > 0 ? (window.scrollY / height) * 100 : 0;
    bar.style.width = `${progress}%`;
  };

  window.addEventListener("scroll", update, { passive: true });
  update();
}

function setupBackToTop() {
  const button = document.createElement("button");
  button.className = "back-top";
  button.type = "button";
  button.setAttribute("aria-label", "Back to top");
  button.innerHTML = '<span class="material-symbols-rounded">arrow_upward</span>';
  document.body.appendChild(button);

  const onScroll = () => button.classList.toggle("show", window.scrollY > 400);
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function setupActiveNavLink() {
  const file = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("#navLinks a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === file) link.classList.add("active");
  });
}

function setupCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const goal = Number(el.getAttribute("data-counter"));
      const duration = 1000;
      const start = performance.now();

      const animate = (time) => {
        const p = Math.min((time - start) / duration, 1);
        el.textContent = Math.floor(goal * p).toLocaleString();
        if (p < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
      obs.unobserve(el);
    });
  }, { threshold: 0.6 });

  counters.forEach((c) => obs.observe(c));
}

function setupCommandPalette() {
  const navItems = [...document.querySelectorAll("#navLinks a")].map((a) => ({
    name: a.textContent.trim(),
    href: a.getAttribute("href")
  }));

  if (!navItems.length) return;

  const palette = document.createElement("div");
  palette.className = "command-palette";
  palette.innerHTML = `
    <div class="command-panel">
      <input type="text" id="commandInput" placeholder="Type a page name..." autocomplete="off" />
      <div class="command-results" id="commandResults"></div>
    </div>
  `;
  document.body.appendChild(palette);

  const input = palette.querySelector("#commandInput");
  const results = palette.querySelector("#commandResults");
  let activeIndex = 0;
  let filtered = navItems;

  const render = () => {
    results.innerHTML = "";
    filtered.forEach((item, index) => {
      const btn = document.createElement("button");
      btn.textContent = item.name;
      if (index === activeIndex) btn.classList.add("active");
      btn.addEventListener("click", () => (window.location.href = item.href));
      results.appendChild(btn);
    });
  };

  const open = () => {
    palette.classList.add("show");
    input.value = "";
    filtered = navItems;
    activeIndex = 0;
    render();
    input.focus();
  };

  const close = () => palette.classList.remove("show");

  document.addEventListener("keydown", (e) => {
    const wantsOpen = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k";
    if (wantsOpen) {
      e.preventDefault();
      open();
      return;
    }

    if (!palette.classList.contains("show")) return;

    if (e.key === "Escape") {
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIndex = Math.min(activeIndex + 1, Math.max(filtered.length - 1, 0));
      render();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIndex = Math.max(activeIndex - 1, 0);
      render();
    } else if (e.key === "Enter" && filtered[activeIndex]) {
      window.location.href = filtered[activeIndex].href;
    }
  });

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    filtered = navItems.filter((item) => item.name.toLowerCase().includes(q));
    activeIndex = 0;
    render();
  });

  palette.addEventListener("click", (e) => {
    if (e.target === palette) close();
  });
}

function setFooterYear() {
  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();
}

function scheduleNonCritical(task) {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(task, { timeout: 1200 });
    return;
  }

  window.setTimeout(task, 1);
}

async function init() {
  setThemeFromStorage();
  clearLegacyComponentCache();

  await Promise.all([
    loadComponent("header", "components/header.html"),
    loadComponent("footer", "components/footer.html")
  ]);

  updateThemeButton();
  updateThemeMeta();
  setFooterYear();
  setupActiveNavLink();
  setupThemeToggle();
  setupReveal();
  setupCounters();
  scheduleNonCritical(() => {
    setupProgressBar();
    setupBackToTop();
    setupCommandPalette();
  });
}

init();
