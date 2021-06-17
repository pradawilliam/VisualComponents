class card extends HTMLElement{
    constructor(){
        super();
        this.title
        this.text
        this.colo;
       
    }

    static get observedAttributes(){
        return['title',"text","colo"]
    }

    attributeChangedCallback(nameAttr,oldValue,newValue){
        switch(nameAttr){
            case"title":
                this.title = newValue;
            break;
            case"text":
                this.text = newValue;
            break;
            case"colo":
                this.colo = newValue;
            break;
         
}
}
  

    connectedCallback(){
        this.innerHTML = `<style>
        .card{
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            width: 25%;
            border-radius: 18px;
            background-color: ${this.colo} ;
            transition: 0.5s ease;
            cursor: pointer;
            margin:30px;
            font-family: roboto;
          
        }
       
        
        .card:hover {
            transform: scale(1.15);
            box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
        }
        
        .container {
          padding: 100px 100px;
          font-family: roboto;
        }
        .title{
          
        }
        .text{
            margin: 25px;
            color: grey;
            font-size:15px;
            font-weight: 300;
            font-family: roboto;
        }
        </style>
       <div class="w3-container">
    
        <div class="card" >
        
      
       <h1 class ="tittle"><b>${this.title}</b></h1>
              <p clas= "text">${this.text}</p>
              <dic></div>
            </div>
          </div>
        
          
          `;
        
        this.style.fontFamily = "sans-serif";


    }
}

window.customElements.define("card-default", card);