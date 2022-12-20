(() => {

  const mainMenuBtn = document.getElementById("mainMenuButton");
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const closeMenuBtn = document.getElementById("closeMenuBtn");
  const menuItems = document.getElementById("mobile-menu").children;

  const closeMenuFunc = (e) => {
    if (
      typeof (e) === typeof (MediaQueryListEvent) &&
      (!e?.matches || menuBtnRef.classList.contains("is-open"))
    ) {
      return;
    }

    if (!menuBtnRef.classList.contains("is-open")) {
      document.body.style.overflowY = null;
    }

    menuBtnRef.classList.add('is-open');
    menuBtnRef.setAttribute('aria-expanded', false);
    mobileMenuRef.classList.remove("is-open");
  }

  for (let element of menuItems) {
    element.addEventListener("click", closeMenuFunc);
  }

  mainMenuBtn.addEventListener("click", () => {
    if (document.body.style.overflowY) {
      document.body.style.overflowY = null;
    }
    else {
      document.body.style.overflowY = "hidden";
    }
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
  });

  closeMenuBtn.addEventListener("click", closeMenuFunc);
  window.matchMedia('(min-width: 768px)').addEventListener('change', closeMenuFunc);
})();

