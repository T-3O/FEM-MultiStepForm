class Form {
  $body;
  currentStep;

  constructor() {
    this.currentStep = 1;
    this.$body = document.querySelector("body");
    this.initEvents();
  };

  goNext() {
    //TODO: validatons
    this.currentStep++;
    this.$body.setAttribute("data-step", this.currentStep);
  };

  goBack() {
    this.currentStep--;
    this.$body.setAttribute("data-step", this.currentStep);
  };

  initEvents() {
    document.querySelector("button[data-role='next']").addEventListener("click", this.goNext.bind(this));
    document.querySelector("button[data-role='back']").addEventListener("click", this.goBack.bind(this));
  };
}