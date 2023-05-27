const form = document.querySelector('form')
const notifyBtn = document.querySelector('.notify-btn')
const emailField = document.querySelector('#email')
const errorMessage = document.querySelector('.erro-message')

form.addEventListener('submit', (e)=> {
    e.preventDefault()
})

notifyBtn.addEventListener('click', ()=> {
    const isEmailFilled = emailField.value

    if(!validateEmail(isEmailFilled)) {
        emailField.classList.add('error')
        errorMessage.style.visibility = 'visible'
    } else {
        emailField.classList.remove('error')
        errorMessage.style.visibility = 'hidden'
    }
})

function validateEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/

    return emailRegex.test(email)
}


