
class MenuComponent extends HTMLElement{

    constructor(){
        super();
		this.name1;
        this.styles;
    }

	static get observedAttributes(){
		return ["name1","styles"];
	}

	attributeChangedCallback(nameAtr, oldValue, newValue){
		switch(nameAtr){
			case "name1":
				this.name1 = newValue;
			break;
            case "styles":
                this.styles = newValue;
            break;
		}
	}


    connectedCallback(){
        this.innerHTML = `
		<style>${this.styles}</style>
		<div id="menu">
	
			<ul>
				<li id="item"><a href="#" >${this.name1}</a>
					<ul id="desplegable" >
						<li><a href="#">AAAAAAAA</a></li>
						<li><a href="#">BBBBBBBB</a></li>	
						<li><a href="#">CCCCCCCC</a></li>			 
					</ul>
				</li>		
		</div> 
		`;    
    }
}
window.customElements.define('menu-component', MenuComponent);