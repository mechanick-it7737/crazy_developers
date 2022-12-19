(() => {
  //------- Order modal -------
  const openModalBtn = document.getElementById("openOrderModal");
  const closeModalBtn = document.getElementById("closeOrderModal");
  const orderModal = document.getElementById("modalConnection");
  const openOrderFromHeroBtn = document.getElementById("openOrderFromHero");
  const orderForm = document.getElementById("orderForm");

  openModalBtn.addEventListener("click", () => toggleIsHidden(orderModal));
  closeModalBtn.addEventListener("click", () => toggleIsHidden(orderModal));
  openOrderFromHeroBtn.addEventListener("click", () => toggleIsHidden(orderModal));
  //------- End order modal -------
  
  //------- Modal Thanks -------
  const modalThanks = document.getElementById("modalThanks");
  const closeThanksModalBtn = document.getElementById("closeThanksModal");
  const continueThanksModalBtn = document.getElementById("continueThanksModal");

  closeThanksModalBtn.addEventListener("click", () => toggleIsHidden(modalThanks));
  continueThanksModalBtn.addEventListener("click", () => toggleIsHidden(modalThanks));
  //------- End Modal Thanks -------
  
  //------- Modal Subscribe -------
  const blogModal = document.getElementById("blogModal");
  const subscribeBtn = document.getElementById("subscribe");
  const confirmSubscribeBtn = document.getElementById("confirmSubscribe");
  const closeSubscribeBtn = document.getElementById("closeSubscribe");

  confirmSubscribeBtn.addEventListener("click", () => toggleIsHidden(blogModal));
  closeSubscribeBtn.addEventListener("click", () => toggleIsHidden(blogModal));
  subscribeBtn.addEventListener("click", () => toggleIsHidden(blogModal));
  //------- End modal Subscribe -------
  
  function toggleIsHidden(object) {
    object.classList.toggle("is-hidden");
  }

  orderForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var checkValid = validatInputs(orderForm.getElementsByTagName("input"));
    if (checkValid) {
      toggleIsHidden(modalThanks);
      toggleIsHidden(orderModal);
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

