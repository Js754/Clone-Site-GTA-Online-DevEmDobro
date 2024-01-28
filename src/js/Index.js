/*

Objetivo 1 - quando o usu�rio clicar no bot�o de sele��o de plataformas deve abrir uma caixa com os bot�es de sele��o de plataforma
    Passo 1 - pegar o bot�o de sele��o de plataformas no JS pra poder verificar quando o usu�rio clicar em cima dele
    
    Passo 2 - pegar o elemento do conteudo que precisa ser mostrado

    Passo 3 - pegar o clique do usuario no js

    Passo 4 - quando o usu�rio clicar, adicionar a classe ativo na listagem de plataformas dentro do bot�o pra que o conte�do apare�a


Objetivo 2 - caso a lista de bot�es de plataformas j� esteja aparecendo e o usu�rio clicar em cima do bot�o, o conte�do deve ser escondido

    Passo 1 - verificar se o bot�o j� esta aberto, se sim, devemos remover a classe ativo pra que ele esconda o conte�do novamente

*/

const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});


