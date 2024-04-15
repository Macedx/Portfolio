/* 
    Objetivo 1: ao clicar em mostrar mais deve abrir os projetos escondidos no html

    1. Pegar o botão mostrar mais no JS para verificar quando o usuário clicar em cima dele
*/

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

const projetosInativos = document.querySelectorAll('.projeto:not (.ativo)');

console.log(projetosInativos);

botaoMostrarProjetos.addEventListener('click', () => {
    // 2. adicionar a classe "ativo" nos projetos escondidos

    projetosInativos.forEach(projetoInativo => {
        console.log(projetoInativo);
        projetoInativo.classList.add('ativo');
    });

    // Objetivo 2: esconder o botão de mostrar mais

    // 1. Pegar o botão e esconder ele

    botaoMostrarProjetos.classList.add("remover");
})
