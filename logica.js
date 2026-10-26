let pokebola = document.getElementById("pokebola");
let area = document.getElementById("area");

let posY = 0;
let posX = 0;
let direcaoY = 1;
let direcaoX = 1;
let velocidade = 100;
let animacao;

function posicaoAleatoria(){
    // Calculando posição X e do Y:
    posX = Math.random() * (area.clientWidth - pokebola.clientWidth);
    posY = Math.random() * (area.clientHeight - pokebola.clientHeight);
    pokebola.style.left - posX + "px";
    pokebola.style.top = posY + "px";
}

function moverImagem(){
    posX += velocidade * direcaoX;
    posY += velocidade * direcaoY;
    pokebola.style.left = posX + "px";
    pokebola.style.top = posY + "px";

    // clientHeight é a altura interna do elemento
    if (posY >= area.clientHeight - pokebola.clientHeight
        || posY <= 0 ) {
            direcaoY *= -1;
        }
    // clientWidtht é a largura interna do elemento
    if (posX >= area.clientWidth - pokebola.clientWidth
        || posX <= 0 ) {
            direcaoX *= -1;
        }

    animacao = requestAnimationFrame(moverImagem);
    
}

function iniciar(){
    cancelAnimationFrame(animacao);
    posicaoAleatoria();
    moverImagem();
}

function pausar(){
    cancelAnimationFrame(animacao);
}

function mudarImagem(){
    const imagens = [
    "./images/pokebola.png",
    "./images/charmander.gif",
    "./images/pokebola_blue.png",
    "./images/pikachu.gif",
    "./images/pokebola_open.png",
    "./images/squirtle.gif",
    "./images/mew.gif",
    "./images/pokevenon.gif",
    "./images/butterfree.gif",
    "./images/gengar.gif",
    "./images/raichu.gif",
    "./images/zapdos.gif",
    "./images/snorlax.gif",
    "./images/charizard.gif"
];

const sorteada = imagens[Math.floor(Math.random()
    //Math.random gera um número aleatório de 0 a 1
* imagens.length )];
    pokebola.src = sorteada;
}