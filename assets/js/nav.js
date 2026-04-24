function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const button = document.getElementById("hamburger");
  if (!nav || !button) return;

  const opened = nav.classList.toggle("show");
  button.setAttribute("aria-expanded", opened ? "true" : "false");
}

function closeMenu() {
  const nav = document.getElementById("navLinks");
  const button = document.getElementById("hamburger");
  if (!nav || !button) return;

  nav.classList.remove("show");
  button.setAttribute("aria-expanded", "false");
}

document.addEventListener("click", (e) => {
  if (!(e.target instanceof Element)) return;

  if (e.target.closest("#hamburger")) {
    toggleMenu();
    return;
  }

  if (e.target.closest("#navLinks a")) {
    closeMenu();
    return;
  }

  const nav = document.getElementById("navLinks");
  const button = document.getElementById("hamburger");
  if (nav && button && !nav.contains(e.target) && !button.contains(e.target)) {
    closeMenu();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});
