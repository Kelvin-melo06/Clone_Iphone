const imagemPrincipal = document.querySelector('.imgsEBotoes > img');

const corIphones = {
    corVerde: '../img/iphone_green.jpg',
    corPrateado: '../img/iphone_silver.jpg',
    corDourado: '../img/iphone_golden.jpg',
    corGrafite: '../img/iphone_grafite.jpg',
    corAzulSierra: '../img/iphone_blue.jpg'
}

const botoes = document.querySelectorAll('.botoes > label > div')

botoes.forEach(botao => {
    botao.addEventListener('click', () =>{
        const novaImagem = corIphones[botao.className];
        if(novaImagem && imagemPrincipal.src !== novaImagem){
            imagemPrincipal.src = novaImagem;
        }
    })
});