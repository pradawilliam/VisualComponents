export class Controller {
  static registroController = new Map();

  static registro(instance) {
    this.registroController.set(instance.id, instance);
  }

  static setScript(instance, env) {
    console.log(this.registroController.has(instance.id));
    if (this.registroController.has(instance.id)) {
      instance.setEnvioroment(env);
      instance.setScript();
    }
  }

  registro(file) {
    const s = document.createElement("script");
    s.src = file + ".js";
    s.type = "text/javascript";
    s.setAttribute("language", "JavaScript");
    s.type = "module";
    document.getElementsByTagName("head")[0].appendChild(s);
  }
}

const controller = new Controller();

controller.registro("./front-end/scripts/styles");
controller.registro("./front-end/js/components/button");
controller.registro("./front-end/js/components/card");
controller.registro("./front-end/js/components/navbar");
