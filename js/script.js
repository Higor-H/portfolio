// obter o elemento do link leia mais
const linkLeiaMais = document.getElementById('leia-mais');

const pop = document.getElementById('leia-mais-popup');

const closeBtn = document.querySelector('.close'); // ja que é classe pega com . na frente

function exibirPopup(){
    pop.style.display = 'block';
}

function fecharPopup(){
    pop.style.display = 'none';
}

linkLeiaMais.addEventListener('click', exibirPopup );

closeBtn.addEventListener('click', fecharPopup);

////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////

const lMF = document.getElementById('leia-maiss1');

const pops1 = document.getElementById('leia-mais-popups1');

const closeBtns1 = document.querySelector('.closes1'); // ja que é classe pega com . na frente

function exibirPopupf1(){
    pops1.style.display = 'block';
}

function fecharPopupf1(){
    pops1.style.display = 'none';
}

lMF.addEventListener('click', exibirPopupf1 );

closeBtns1.addEventListener('click', fecharPopupf1);

///////////////////////////////////////////////////////////////////

const leias2 = document.getElementById('leia-maiss2');

const pops2 = document.getElementById('leia-mais-popups2');

const closeBtns2 = document.querySelector('.closes2'); // ja que é classe pega com . na frente

function exibirPopups2(){
    pops2.style.display = 'block';
}

function fecharPopups2(){
    pops2.style.display = 'none';
}

leias2.addEventListener('click', exibirPopups2 );

closeBtns2.addEventListener('click', fecharPopups2);

///////////////////////////////////////////////////////////////////

const leias3 = document.getElementById('leia-maiss3');

const pops3 = document.getElementById('leia-mais-popups3');

const closeBtns3 = document.querySelector('.closes3'); // ja que é classe pega com . na frente

function exibirPopups3(){
    pops3.style.display = 'block';
}

function fecharPopups3(){
    pops3.style.display = 'none';
}

leias3.addEventListener('click', exibirPopups3 );

closeBtns3.addEventListener('click', fecharPopups3);

///////////////////////////////////////////////////////////////////

const leias4 = document.getElementById('leia-maiss4');

const pops4 = document.getElementById('leia-mais-popups4');

const closeBtns4 = document.querySelector('.closes4'); // ja que é classe pega com . na frente

function exibirPopups4(){
    pops4.style.display = 'block';
}

function fecharPopups4(){
    pops4.style.display = 'none';
}

leias4.addEventListener('click', exibirPopups4 );

closeBtns4.addEventListener('click', fecharPopups4);



/*Ativando o ID da navbar conforme a pagina em destaque*/
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < (offset + height)){
            navLinks.forEach(links => {
                links.classList.remove('ativa');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('ativa');

            });
        };

    });
    ///////////////////////////////////////////////
/* DESENVOLVER DEPOIS NA RESPONSIVIDADE */
/*+++++++++++ header2 navbar - ativando o header2 resposividade ++++++*/
let header = document.querySelector('header');

header.classList.toggle('header2', window.scrollY > 100);
/*add responsividade no css*/


/*+++++++++++++ remove o header2 quando clica no link do menu ++++++*/
menuIcon.classList.remove('bx-x')
navBar.classList.remove('ativa')

};

/*================  Ativando icone navbar na responsividade =========*/

let menuIcon = document.querySelector('#menu-icones');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
/* boxicon 'x'  */
menuIcon.classList.toggle('bx-x')
navBar.classList.toggle('ativa')

};
//////////////////////////////////////////////
// ====Scroll reveal JS (animação site ===)

ScrollReveal({
    distance: '100px',
    duration: 2000,
    delay: 10,
});

//clasees e tag são add dentro de aspas simples, separados com ,
ScrollReveal().reveal('.home-conteiner',{origin: 'top'});
ScrollReveal().reveal('.social-media',{origin: 'left'});
ScrollReveal().reveal('.home-conteiner h1',{origin: 'left'});
//Sobre
ScrollReveal().reveal('.sobre-img',{origin: 'left'});
ScrollReveal().reveal('.sobre-conteiner',{origin: 'right'});
//Serviços
//ScrollReveal().reveal('.servicos-conteiner',{origin: 'right'});
//Portifolio
ScrollReveal().reveal('.portifolio',{origin: 'bottom'});
//contatos
ScrollReveal().reveal('.contato-conteiner',{origin: 'bottom'});
ScrollReveal().reveal('.contato h2',{origin: 'bottom'});
ScrollReveal().reveal('.contato p',{origin: 'bottom'});
//destaques
ScrollReveal().reveal('.destaque',{origin: 'bottom'});

// top, bottom, left, right


// =====Typed js (bib em JS) escreve multi texto na tela ===)

let config = new Typed('.texto-multiplo',{
    // A lista de frases que aparecerão
    // está string podem conter tags html
    strings: ["Desenvolvedor Front-End", "Designer", "Progamador", "Desenvolvedor Back-End"],
    // A velocidade que é digitado
    typeSpeed: 40,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

let configs = new Typed('.texto-multiplos',{
    // A lista de frases que aparecerão
    // está string podem conter tags html
    strings: ["Desenvolvedor Front-End", "Designer", "Progamador", "Desenvolvedor Back-End"],
    // A velocidade que é digitado
    typeSpeed: 40,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

//////////////////////////////////////////////////////////

// cria uma variavel banner e pega o elemento do HTML
var bannerHtml = document.querySelector(".destaques-conteudo img");
var bannerCjt = ["img/Destaques/Dest2.png","img/Destaques/Dest1.png"];

var  bannerAtual = 0;

function trocaBanner(){
    bannerAtual += 1;
    if(bannerAtual == bannerCjt.length){
        bannerAtual = 0;
    }
    bannerHtml.src = bannerCjt[bannerAtual];
}

//executa a função a cada 2000 milisegundos
setInterval(trocaBanner, 5000)

// cria uma variavel banner e pega o elemento do HTML
var bannerHtmlp = document.querySelector(".destaques-conteudo2 img");
var bannerCjtp = ["img/Destaques/Dest3.png","img/Destaques/Dest4.png"];

var  bannerAtualp = 0;

function trocaBannerp(){
    bannerAtualp += 1;
    if(bannerAtualp == bannerCjtp.length){
        bannerAtualp = 0;
    }
    bannerHtmlp.src = bannerCjtp[bannerAtualp];
}

//executa a função a cada 2000 milisegundos
setInterval(trocaBannerp, 5000)

///////////////////////////////////////////////////

// GitHub Pages não aceita arquivo em php :/
//POP up formulario mensagem

/*
function exibirPopUpForm(mensagem){
    var pop = document.createElement('div');
    pop.className = 'pop';
    pop.innerHTML = mensagem;

    // estilizando o pop up

    pop.style.position = 'fixed';
    pop.style.top = '50%';
    pop.style.left = '50%';
    pop.style.transform = 'translate(-50%, -50%)';
    pop.style.background = 'var(--segunda-bg-color)';
    pop.style.fontSize = '1.5rem';
    pop.style.textAlign = 'center';
    pop.style.padding = '2rem';
    pop.style.borderRadius = '2rem';
    pop.style.border = '1px solid var(--main-color)';
    pop.style.boxShadow = '0 0 2rem var(--main-color);';
    pop.style.zIndex= '9999';

    // adficionando o pop up ao corpo do documento
    document.body.appendChild(pop);

    // funçãio fecha o pop up automatico apos 3 seg
    setTimeout(function(){
        pop.remove();
    }, 3000); // , ou . ????
}*/



