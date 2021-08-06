class Controller {
  registro(file) {
    const s = document.createElement("script")
    s.src = file + '.js'
    s.type = 'text/javascript';
    s.setAttribute("language", "JavaScript")
    s.type = "module"
    document.getElementsByTagName('head')[0].appendChild(s);
  }
}

const controller = new Controller()

controller.registro("./js/comunication/request")
controller.registro("./js/components/navbar")
controller.registro("./js/components/card")
controller.registro("./js/components/button")

