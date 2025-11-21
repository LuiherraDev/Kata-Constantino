const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood"
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl"
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore"
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner"
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger"
        }
    ]
}

function imprimePregunta(pregunta) {
  let newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);

  return newHTML;
}

function imprimeTitulo(pregunta) {
  let salidaFuncion = ""
  salidaFuncion = "<p>"+pregunta["titulo"]+"</p>"
  return salidaFuncion
}

function imprimeTodasLasRespuestas(pregunta) {
  let salidaFuncion = []
  for (let i = 0; i < pregunta.respuestas.length; i++) {
   salidaFuncion.push(imprimeUnaRespuesta(pregunta.respuestas[i]))
    // console.log(pregunta.respuestas[i])
  }
  // console.log(salidaFuncion)
  return salidaFuncion
}

function imprimeUnaRespuesta(respuesta) {
  let salidaFuncion = ""
  salidaFuncion = imprimeLabel(respuesta)+imprimeInput(respuesta)
  return salidaFuncion
}

function imprimeLabel(respuesta) {
  let salidaFuncion = ""
  salidaFuncion = `<label for="${respuesta.id}">${respuesta.label}</label>`
  return salidaFuncion
}

function imprimeInput(respuesta) {
  let salidaFuncion = ""
  salidaFuncion = `<input id="${respuesta.id}" name="${respuesta.name}" type="radio" value="${respuesta.value}">`
  return salidaFuncion

}

document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(pregunta);