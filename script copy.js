const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('password-two')

//addEventListener = permite que você configure funções a serem chamadas quando um evento específico acontece, como, por exemplo, quando um usuário clica em um botão.
//preventDefault = evitar as ações padrão que normalmente ocorrem quando certos eventos são acionados, a principal razão do uso do preventDefault é impedir que os eventos sejam propagados pelos elementos do DOM, evitando que eles sejam manipulados por outros elementos. Ao utilizar essa função, é possível evitar que ações indesejadas sejam executadas, como redirecionamentos de página ou abertura de links.
//querySelector = faz uma busca em todo o documento por aquilo que foi especificado, diferente do getElementById que procura somente id, portanto, não sendo necessário usar o "#" para especificar que é um id, no querySelector deve sim informar.
form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
})


function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small')

  small.innerText = message

  formControl.className = 'form-control error'
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = 'form-control success'
}

function isEmail(email) {
  return /^(?:[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\[\x01-\x09\x0b\x0c\x0e-\x7f])")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])/.test(email)
}

function checkInputs() {
    if(usernameValue === '') {
      // mostrar erro
      
      // add classe
      username.classList.remove("success")
      username.classList.add("error")
      setErrorFor(username, 'Preencha esse campo')

    } else if(usernameValue.length < 5) { 
      setErrorFor(username, 'Usuário deve ter mais que 5 caracteres')
      username.classList.remove("success")
      username.classList.add("error")

    } else {
      // adicionar a classe de sucesso
      setSuccessFor(username)
      username.classList.remove("error")
      username.classList.add("success")
    }

    if(emailValue === '') {
      // mostrar erro
      // add classe
      setErrorFor(email, 'Preencha esse campo')

    } else if (!isEmail(emailValue)) {
      setErrorFor(email, 'Email inválido')

    } else {
      // adicionar a classe de sucesso
      setSuccessFor(email)
    }

    if(passwordValue === '') {
      // mostrar erro
      // add classe
      setErrorFor(password, 'Preencha esse campo')

    } else if(passwordValue.length < 8) { 
      setErrorFor(password, 'Senha deve ter mais que 8 caracteres')
    } else {

      // adicionar a classe de sucesso
      setSuccessFor(password)
    }

    if(passwordtwoValue === '') {
      // mostrar erro
      // add classe
      setErrorFor(passwordtwo, 'Preencha esse campo')

    } else if(passwordValue !== passwordtwoValue) { 
        setErrorFor(passwordtwo, 'Senhas não tão iguais')

    } else {
      // adicionar a classe de sucesso
      setSuccessFor(passwordtwo)
    }

}