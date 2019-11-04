export class modalSingleton {

  //var modalInstance;
  constructor() {
    if (modalSingleton.instance) {
      return modalSingleton.instance;
    }
    this.modal = document.getElementById("myModal");

    this.span = document.getElementsByClassName("close")[0];

    this.modalText = document.getElementById("modal-content-text");

    this.span.onclick = () => {
      console.log(this.span)
      this.modal.style.display = "none";
    }

    window.onclick = (event) => {
      if (event.target == this.modal) {
        this.modal.style.display = "none";
      }
    }

    modalSingleton.instance = this;
    return this;
  }

  show() {
    this.modal.style.display = "block";
  }
  setModalText(text) {
    this.modalText.innerHTML = text
  }
}

