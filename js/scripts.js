const inputEmail = document.querySelector('#input-email')
const inputName = document.querySelector('#input-name')
const recoveryBtn = document.querySelector('#recover-btn')
const doneBtn = document.querySelector('#done-btn')
const inputPassword = document.querySelector('#input-password')
const btnRegister = document.querySelector('#btn-register')

const requiredErrorPassword = document.getElementById('required-error-password')
const invalidErrorPassword = document.getElementById('invalid-error-password')
const requiredErrorEmail = document.getElementById('required-error-email')
const invalidErrorEmail = document.getElementById('invalid-error-email')

//Essa função verifica se o email é valido e se o botão de recuperar senha tem que ficar válido ou não
function onChangeEmail() {
    toggleBtnDisabled()
    toggleEmailErros()
}

function onChangePassword() {
    toggleBtnDisabled()
    togglePasswordErros()
}

function login() {
    window.location.href = 'home.html'
}

function register() {
    window.location.href = 'register.html'
    console.log(window.location)
}

//Função que verifica o se o botão de login e recuprar devem ficar desabilitados ou não
function toggleBtnDisabled() {
    /*Essa variável armazena um valor booleano que vem da função de email
    Se o email não passar em nehum critério, ou seja, for vazia ou não passar pelo regex ele armazena false*/
    const emailValid = isEmailValid()

    //Dependendo do valor da função e se por acaso o valor for false, o botão deve ser true, e vice e versa
    recoveryBtn.disabled = !emailValid

    //Aqui acontece a mesma lógica, porém o botão de login fica desablitado se a senha ou o email forem falsos
    const passwordValid = isPasswordValid()
    doneBtn.disabled = !emailValid || !passwordValid
}

//Função que verifica se o email é valido ou não
function isEmailValid() {
    const email = inputEmail.value
    //Se o email não tiver nenhum conteúdo, ou seja, for vazia, ele retorna false
    if(!email) {
        return false
    }

    //e se o email passar pelo regex ele retorna true, se não passar retorna false
    return validateEmail(email)
}


//Função que verifica se a senha é válida ou não
function isPasswordValid() {
    const password = inputPassword.value
    //Se a senha não tiver nenhum conteúdo, ou seja, for vazia, ele retorna false
    if(!password) {
        return false
    }

    //e se a senha passar pelo regex ele retorna true, se não passar retorna false
    return validatePassword(password)
}


function toggleEmailErros() {
    const email = inputEmail.value

    //Verifica se o email não é vazio e se é valido, se for o display é none
    //se não for o display é block, ou seja, se for vazio e inválido
    requiredErrorEmail.style.display = email ? 'none' : 'block'
    invalidErrorEmail.style.display = validateEmail(email) ? 'none' : 'block'
}

function togglePasswordErros() {
    const password = inputPassword.value

    //Verifica se a senha não é vazia e se é valido, se for o display é none
    //se não for o display é block, ou seja, se for vazio e inválido
    requiredErrorPassword.style.display = password ? 'none' : 'block'
    invalidErrorPassword.style.display = validatePassword(password) ? 'none' : 'block'
}

//Eventos
inputEmail.addEventListener('input', (e) =>  {
    onChangeEmail()
})

inputPassword.addEventListener('input', (e) => {
    onChangePassword()
})

doneBtn.addEventListener('click', (e) => {
    e.preventDefault()
    login()
})

btnRegister.addEventListener('click', (e) => {
    e.preventDefault()
    register()
})
