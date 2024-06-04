document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const numeroA = document.getElementById('numeroA');
    const numeroB = document.getElementById('numeroB');
    const msgErro = document.querySelector('.msg-erro');
    const msgSucesso = document.querySelector('.msg-sucesso');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const valorA = parseFloat(numeroA.value); 
        const valorB = parseFloat(numeroB.value); 
        const sucesso = `Parabéns! O número: <b>${valorB}</b> é maior que: <b>${valorA}</b>`;
        const erro = `Errado! O número: <b>${valorB}</b> não é maior que: <b>${valorA}</b>`;

        let formValido = valorA < valorB; 

        if (formValido) {
            msgSucesso.innerHTML = sucesso;
            msgSucesso.style.display = 'block';
            msgErro.style.display = 'none';
            
            numeroA.value = '';
            numeroB.value = '';
            numeroA.style.border = '';
        } else {
            numeroA.style.border = '2px solid red';
            msgErro.innerHTML = erro;
            msgErro.style.display = 'block';
            msgSucesso.style.display = 'none';
        }
    });
});