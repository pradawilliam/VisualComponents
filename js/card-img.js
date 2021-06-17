class cardImg extends HTMLElement{
    
    constructor(){
        super();
        this.title
        this.text
        this.colo;
        this.img;

    }

    static get observedAttributes(){
        return['title',"text","colo","img"]
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
            case"img":
            this.img = newValue;
            break;
    }
}
  

    connectedCallback(){
        this.innerHTML = `<style>
        .card2 {
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
        .img2{
            
            width: 80%;
            height: 50%;
            padding: 20px 20px;
            border-radius: 100px;

        }
        
        .card2:hover {
            transform: scale(1.15);
            box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
        }
        
        .container {
          padding: 100px 100px;
          font-family: roboto;
        }
      
    
        </style>
       <div class="w3-container">
    
        <div class="card2">
        
        <img class= "img2" src="${this.img}" alt="Image">
       <h1 class ="tittle"><b>${this.title}</b></h1>
              <p clas= "text">${this.text}</p>
              <dic></div>
            </div>
          </div>
        
          
          `;
        
        


    }
}

window.customElements.define("card-img", cardImg);
