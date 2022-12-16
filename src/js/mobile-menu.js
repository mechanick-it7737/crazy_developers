(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    menuBtnRef.addEventListener("click", () => {
      if (document.body.style.overflowY){
        document.body.style.overflowY=null;
      }
      else{
        document.body.style.overflowY="hidden";
      }
      const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
      mobileMenuRef.classList.toggle("is-open");
    });
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
          if (!e.matches || menuBtnRef.classList.contains("is-open"))
          {
            return;
          }
          menuBtnRef.classList.add('is-open');
          menuBtnRef.setAttribute('aria-expanded', false);
          mobileMenuRef.classList.remove("is-open");
          document.body.style.overflowY=null;
        });
  })();