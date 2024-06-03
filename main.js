const form = document.getElementById('form')

form.addEventListener('submit', function(e) {

e.preventDefault();

const numeroA = document.getElementById('numeroA');
const numeroB = document.getElementById('numeroB');
const sucesso = `Parábens! O numero: <b>${numeroB.value}</b> é maior que: <b>${numeroA.value}</b>`;
const erro = `Errado! O numero: <b>${numeroB.value}</b> não é maior que: <b>${numeroA.value}</b>`;
let formValido = numeroA.value < numeroB.value;

if (formValido) {
    const cointainerMsgSucesso = document.querySelector('.msg-sucesso');
    cointainerMsgSucesso.innerHTML = sucesso;
    cointainerMsgSucesso.style.display = 'block';

    numeroA.value = '';
    numeroB.value = '';
} else {
    numeroA.style.border = '2px solid red'
    document.querySelector('.msg-erro').style.display = 'block';
}

})

console.log(form);