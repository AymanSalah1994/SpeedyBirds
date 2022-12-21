class Modal {
  constructor(
    modalMessage,
    modalImageSrc,
    textForbutton,
    actionExpression = 0
  ) {
    this.modalBody = document.createElement("div");
    this.modalImage = document.createElement("img");
    this.modalButton = document.createElement("button");
    this.modalBody.classList.add("message");
    this.modalImage.classList.add("msgImage");
    this.modalBody.innerText = modalMessage;
    this.modalImage.src = modalImageSrc;
    this.modalButton.innerText = textForbutton;
    this.modalBody.append(this.modalImage);
    this.modalBody.append(this.modalButton);
    if (actionExpression) {
      this.modalButton.addEventListener("click", () => {
        this.modalBody.remove();
        actionExpression();
      });
    }
  }
}

export { Modal };
