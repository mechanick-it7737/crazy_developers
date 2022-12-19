(() => {
  //------- Order modal -------
  const openModalBtn = document.getElementById("openOrderModal");
  const closeModalBtn = document.getElementById("closeOrderModal");
  const orderModal = document.getElementById("modalConnection");
  const openOrderFromHeroBtn = document.getElementById("openOrderFromHero");
  const orderForm = document.getElementById("orderForm");

  openModalBtn.addEventListener("click", () => toggleIsHidden(orderModal, true));
  closeModalBtn.addEventListener("click", () => toggleIsHidden(orderModal));
  openOrderFromHeroBtn.addEventListener("click", () => toggleIsHidden(orderModal, true));
  //------- End order modal -------

  //------- Modal Thanks -------
  const modalThanks = document.getElementById("modalThanks");
  const closeThanksModalBtn = document.getElementById("closeThanksModal");
  const continueThanksModalBtn = document.getElementById("continueThanksModal");

  closeThanksModalBtn.addEventListener("click", () => toggleIsHidden(modalThanks));
  continueThanksModalBtn.addEventListener("click", () => toggleIsHidden(modalThanks));
  //------- End Modal Thanks -------

  //------- Modal Subscribe -------
  const subscribeForm = document.getElementById("subscribeForm");
  const blogModal = document.getElementById("blogModal");
  const subscribeBtn = document.getElementById("subscribe");
  const closeSubscribeBtn = document.getElementById("closeSubscribe");

  closeSubscribeBtn.addEventListener("click", () => toggleIsHidden(blogModal));
  subscribeBtn.addEventListener("click", () => toggleIsHidden(blogModal, true));
  //------- End modal Subscribe -------

  function toggleIsHidden(object, shoudDisableScroll = false) {
    object.classList.toggle("is-hidden");
    if (shoudDisableScroll) {
      document.body.style.overflowY = "hidden";
      return;
    }

    document.body.style.overflowY = null;
  }

  subscribeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var checkValid = validatInputs(subscribeForm.getElementsByTagName("input"));
    if (checkValid) {
      toggleIsHidden(blogModal);
      clearInputs(subscribeForm.getElementsByTagName("input"));
    }
  });

  orderForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var checkValid = validatInputs(orderForm.getElementsByTagName("input"));
    if (checkValid) {
      toggleIsHidden(orderModal, true);
      toggleIsHidden(modalThanks, true);
      clearInputs(orderForm.getElementsByTagName("input"));
    }
  });

  function validatInputs(inputs) {
    for (let element of inputs) {
      if (!element.validity.valid) {
        return false;
      }
    }

    return true;
  }

  function clearInputs(inputs) {
    for (let element of inputs) {
      element.value = null
    }
  }
})();

