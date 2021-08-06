export default class VisualComponent extends HTMLElement {
    constructor() {
        super();
    }

    // -------------------------------- SETTERS -------------------------------- //
    set boxShadow(boxShadow)   {    this.style.boxShadow = boxShadow   }
    set display(display)       {    this.style.display = display   }
    set position(position)     {    this.style.position = position   }
    set textAlign(textAlign)   {    this.style.textAlign = textAlign   }
    set display(display)       {    this.style.display = display   }
    set width(width)           {    this.style.width = width   }
    set height(height)         {    this.style.height = height   }
    set top(top)               {    this.style.top = top   }
    set left(left)             {    this.style.left = left   }
    set backgroundColor(color) {    this.style.backgroundColor = color   }
    set color(color)           {    this.style.color = color   }
    set borderRadius(radius)   {    this.style.borderRadius = radius   }
    set padding(padding)       {    this.style.padding = padding   }
    set margin(margin)         {    this.style.margin = margin   }
    set float(float)           {    this.style.float = float   }
    set fontFamily (fontFamily){    this.style.fontFamily = fontFamily }
    set fontSize (fontSize)    {    this.style.fontSize = fontSize }
    set textDecorater (textDecorater){    this.style.textDecorater = textDecorater }
    // --------------------------------------------------------------------//


    // ---------------------------- GETTERS ------------------------------//
    get boxShadow()       {   return this.boxShadow   }
    get float()           {   return this.style.float   }
    get fontFamily()      {   return this.style.fontFamily   }
    get fontSize()        {   return this.style.fontSize   }
    get textDecorater()   {   return this.style.textDecorater   }
    get display()         {   return this.style.display   }
    get position()        {   return this.style.position   }
    get textAlign()       {   return this.style.textAlign   }
    get Container()       {   return this;   }
    get width()           {   return this.style.width   }
    get height()          {   return this.style.height   }
    get top()             {   return this.style.top   }
    get left()            {   return this.style.left   }
    get backgroundColor() {   return this.style.backgroundColor   }
    get color()           {   return this.color   }
    get borderRadius()    {   return this.style.borderRadius   }
    get padding()         {   return this.style.padding   }
    get margin()          {   return this.style.margin   }
}
