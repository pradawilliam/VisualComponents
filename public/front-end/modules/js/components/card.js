import VisualComponent from '../VisualComponent/Visual_Component.js'

class Card extends VisualComponent {
    constructor() {
        super();
        this.top = "5%"
        this.left = "100%"
        this.padding = "2.5%"
        this.backgroundColor = "yellow"
        this.borderRadius = "1.5%"
        this.display = "inline-block"
        this.position = "relative"
        this.textAlign = "center"
        this.boxShadow = "3px 5px #868181"
        this.margin = "1%" 
    }

    connectedCallback() {
  
    }
}
customElements.define("card-component", Card);
