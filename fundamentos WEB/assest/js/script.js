/*
por tag: getElementByTagName()
por Id: gteElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por Seletor: querySelector()

*/

let nome =  window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome () {
  let txt = document.querySelector('#txtNome')
  if (nome.value.length <3){
    txt.innerHTML = 'Nome Inválido'
    txt.style.color = 'red'
  } else{
    txt.innerHTML = 'Nome Válido'
    txt.style.color = 'green'
    let nomeOk = true
  }
}

function validaEmail(){
  let txtEmail = document.querySelector('#txtEmail')

  if (email.value.indexOf('@') == -1){
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = 'red'
  } else{
    txtEmail.innerHTML = 'E-mail válido'
    txtEmail.style.color = 'green'
    let emailOk = true
  }
}

function validaAssunto(){
  let txtAssunto = document.querySelector('#txtAssunto')

  if (assunto.value.length >=100){
    txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
    txtAssunto.style.color = 'red'
  } else{
    txtAssunto.style.display = 'none'
    let assuntoOk = true
  }
}

function enviar(){
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert ('Enviado com sucesso')
  } else{
    alert (' preencha o formlario corretamente antes de enviar ...')
  }
}