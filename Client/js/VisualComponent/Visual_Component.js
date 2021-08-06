import Controller from "../Controller/controller";

class VisualComponent extends HTMLElement {
  constructor() {
    super();
  }
  set boxShadow(boxShadow) {
    this.style.boxShadow = boxShadow;
  }
  get boxShadow() {
    return this.boxShadow;
  }
  get display() {
    return this.style.display;
  }
  set display(display) {
    this.style.display = display;
  }
  get position() {
    return this.style.position;
  }
  set position(position) {
    this.style.position = position;
  }
  set textAlign(textAlign) {
    this.style.textAlign = textAlign;
  }
  get textAlign() {
    return this.style.textAlign;
  }
  get Container() {
    return this;
  }
  set width(width) {
    this.style.width = width;
  }
  get width() {
    return this.style.width;
  }
  set height(height) {
    this.style.height = height;
  }
  get height() {
    return this.style.height;
  }
  set top(top) {
    this.style.top = top;
  }
  get top() {
    return this.style.top;
  }
  set left(left) {
    this.style.left = left;
  }
  get left() {
    return this.style.left;
  }
  get backgroundColor() {
    return this.style.backgroundColor;
  }
  set backgroundColor(color) {
    this.style.backgroundColor = color;
  }
  get color() {
    return this.color;
  }
  set color(color) {
    this.style.color = color;
  }
  set borderRadius(radius) {
    this.style.borderRadius = radius;
  }
  get borderRadius() {
    return this.style.borderRadius;
  }
  set padding(padding) {
    this.style.padding = padding;
  }
  get padding() {
    return this.style.padding;
  }
  set margin(margin) {
    this.style.margin = margin;
  }
  get margin() {
    return this.style.margin;
  }
  setEnvioroment(instance, env) {
    Controller.setEnvioroment(instance, env);
  }
}

export default VisualComponent;
