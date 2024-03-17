const $form = document.getElementById('form')
const $nameInput = document.getElementById('name')
const $surnameInput = document.getElementById('surname')
const $mcqueen = document.getElementById('mcqueen')

$form.addEventListener('submit', (e) => {
    e.preventDefault()
    alert('Datos enviados bro. KUCHAO!')
    $nameInput.value = ''
    $surnameInput.value = ''
})

$mcqueen.addEventListener('click', e => {
    document.body.classList.toggle('rayo')
})