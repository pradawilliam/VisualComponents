
class ButtonComponent extends HTMLElement {
  constructor () {
    super();
  }
  
  connectedCallback () {
    this.innerHTML = `
      <div>
        <button>Oprimir Boton</button>
      </div>
    `;
  }
}

window.customElements.define('button-component', ButtonComponent)