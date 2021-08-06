class MethodsResponse {
  holaGente1() {
    console.log('Hola GENTE Reflexiva 1 (NAVBAR)')
    return "Hola GENTE Reflexiva 1 (NAVBAR)'"
  }
  holaGente2() {
    console.log('Hola GENTE Reflexiva 2 (CARD)')
    return "Hola GENTE Reflexiva 2 (CARD)"
  }
  holaGente3() {
    console.log('Hola GENTE Reflexiva 3 (BUTTON)')
    return "Hola GENTE Reflexiva 3 (BUTTON)"
  }
}

const methods = new MethodsResponse()

const request = (req, res) => {
  const {method} = req.body
  if (method) {
    try {
      const msg = methods[method]()
      res.status(200).json({msg})
    } catch (e) {
      console.error(e)
      res.status(404).json({msg: "El metodo no funciona."})
    }
  }else{
    return res.status(400).json({msg: "El metodo no esta especificado."})
  }
}

module.exports = {
  request
}
