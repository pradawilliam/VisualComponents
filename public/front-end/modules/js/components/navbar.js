import VisualComponent from "../VisualComponent/Visual_Component.js";

class NavBarComponent extends VisualComponent{
  constructor () {
    super();
    this.top = "-50%"
    this.left = "120%"
    this.padding = "15px 115px"
    this.backgroundColor = "rgb(214, 212, 212)"
    this.borderRadius = "1.5%"
    this.display = "block"
    this.position = "relative"
    this.textAlign = "center"
    this.boxShadow = "3px 0.5px #868181"
    this.float = "left"
    this.fontFamily = "Arial, Helvetica, sans-serif"
    this.fontSize = "18px"
    this.textDecorater = "none"
    this.margin = "0%"
  }
  
    connectedCallback() {

    }
}

customElements.define("navbar-component", NavBarComponent)