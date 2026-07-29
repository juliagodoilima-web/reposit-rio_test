// Seleciona todos os botões de curtir na página
const botoesCurtir = document.querySelectorAll('.btn-curtir');

// Adiciona o evento de clique para cada botão
botoesCurtir.forEach(botao => {
    botao.addEventListener('click', () => {
        // Encontra o elemento de texto com o número de curtidas dentro do botão
        const contador = botao.querySelector('.contador');
        
        // Pega o valor atual e soma +1
        let curtidasAtuais = parseInt(contador.textContent);
        contador.textContent = curtidasAtuais + 1;

        // Feedback visual rápido
        botao.style.transform = 'scale(1.1)';
        setTimeout(() => {
            botao.style.transform = 'scale(1)';
        }, 150);
    });
});