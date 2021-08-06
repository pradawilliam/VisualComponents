import VisualComponent from "../VisualComponent/Visual_Component.js";

class ButtonComponent extends VisualComponent{
  constructor () {
    super();
    this.top = "-50%"
    this.left = "138%"
    this.padding = "2%"
    this.backgroundColor = "rgb(240, 238, 238)"
    this.borderRadius = "1.5%"
    this.display = "inline-block"
    this.position = "relative"
    this.textAlign = "center"
    this.boxShadow = "3px 5px #868181"
    this.width = "120px"
    this.height = "50px"
    this.margin = "0%"
  }
  
    connectedCallback() {

    }
}

customElements.define("button-component", ButtonComponent)

