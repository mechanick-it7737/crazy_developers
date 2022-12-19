(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-blog]"),
      closeModalBtn: document.querySelector("[data-modal-close-blog]"),
      modal: document.querySelector("[data-modal-blog]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();