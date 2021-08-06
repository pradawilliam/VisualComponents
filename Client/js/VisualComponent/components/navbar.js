import VisualComponent from "../VisualComponent/Visual_Component.js";
import Controller from "../Controller/Controller.js";

export default class Navbar extends VisualComponent {
  constructor(config) {
    super(config);

    Controller.registerObject(this);
    Controller.setCss(this, 0);

    this.links = config.links;
    this.img_logo;

    this.setClassName("Navbar_env_0");

    this.navbar_ul = document.createElement("ul");
    this.navbar_ul.className = "navbar-ul";
    this.container.appendChild(this.navbar_ul);

    this.navbar_logo = document.createElement("div");
    this.navbar_logo.className = "navbar-logo";
    this.navbar_ul.appendChild(this.navbar_logo);

    for (let i = 0; i < config.links.length; i++) {
      //console.log(config.links[i]);
      let li = document.createElement("li");
      li.className = "navbar-li";
      let a = document.createElement("a");
      a.className = "navbar-a";
      a.innerText = config.links[i][0];
      a.href = config.links[i][1];
      li.appendChild(a);
      this.navbar_ul.appendChild(li);
    }
  }

  setBackgroundColor(color) {
    this.navbar_ul.style.backgroundColor = color;
  }

  setLogo(logo_url, link) {
    let a = document.createElement("a");
    if (link) {
      a.href = link;
    }

    this.img_logo = document.createElement("img");
    this.img_logo.src = logo_url;
    a.appendChild(this.img_logo);

    this.navbar_logo.appendChild(a);
  }

  setLogoDimensions(width, height) {
    this.img_logo.style.width = width;
    this.img_logo.style.height = height;
  }

  getLinks() {
    return this.links;
  }

  addLink(text, link) {
    this.links.push([text, link]);
    let li = document.createElement("li");
    li.className = "navbar-li";
    let a = document.createElement("a");
    a.className = "navbar-a";
    a.innerText = text;
    a.href = link;
    li.appendChild(a);
    this.navbar_ul.appendChild(li);
  }

  fixToTop() {
    this.container.style.position = "fixed";
    this.container.style.top = 0;
  }
  fixToBottom() {
    this.container.style.position = "fixed";
    this.container.style.bottom = 0;
  }

  linksOnLeft() {
    let li = document.querySelectorAll(".navbar-li");
    for (let i = 0; i < li.length; i++) {
      li[i].style.float = "left";
    }
  }
  linksOnRight() {
    let li = document.querySelectorAll(".navbar-li");
    for (let i = 0; i < li.length; i++) {
      li[i].style.float = "right";
    }
  }
}
