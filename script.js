const mouse = document.getElementById('mouse');

// Início uma váriavel constante, ou seja, 
// que nunca vai ser alterada com o nome 
// mouse no qual vai pegar do meu html o id que está lá com o nome de mouse.

let x = 0, y = 0, tx = 0, ty = 0;

// As seguintes várias são criadas:
// x se refere a posição x do plano cartesiano do site
// y se refere a posição y do plano cartesiano do site
// tx é a posição x de onde se encontra a posição no eixo x do mouse do usuário
// ty se refere a posição y de onde se encontra a posição no eixo y do mouse do usuário

document.addEventListener('pointermove', bola => {

// no meu html, adiciono um evento no qual o meu código poder ouvir as posição atuais do mouse do usuário
// A seta no caso dessa função, apenas funciona porque está sendo direcionada diretamente com o EventListener.

    tx = bola.clientX;
    ty = bola.clientY;

    // tx recebe a posição X atual de onde se encontra no eixo X, o mouse do usuário.
    // ty recebe a posição Y atual de onde se encontra no eixo Y, o mouse do usuário.
    
    mouse.style.opacity = 1;
    mouse.classList.toggle('big', !!bola.target.closest('a,button'));
    
    // de acordo com a váriavel constante mouse, altero o estilo dele no css de acordo com a opacidade passe para 1
    // Novamente na constante mouse, chamo na lista de classes uma função para identificar se tal coisa está
    // ativada ou não, e dentro dela chamo a classe (no caso big), que caso o valor seja verdadeiro (!!), ele vai
    // pegar o valor de bola, localizar se está em um 'a'(link) ou button para que seja ativado.
});

(function f() {

    // Diferente da seta, aqui eu preciso iniciar uma função chamando por function, porque ele não está sendo
    // direcionada a nada.

    x += (tx - x) * .18;
    y += (ty - y) * .18;

    // A posição X da tela vai ser a soma dele mais a soma entre a posição do mouse do usuário no eixo X
    // menos a posição geral da tela no eixo X, e a subtração desses dois valores serão multiplicados por
    // .18(que pode ser lido como 0.18), para deixar a transição um pouco mais lerda.

    // Assim como no calculo matemático acima, eu faço a mesma coisa pro eixo y.

    mouse.style.transform = `translate(${x}px,${y}px)`;

    // na váriavel mouse, transformo o seu estilo de acordo com o css em que, ele possa traduzir a posição
    // de x e y para valores em que o computador consiga ler, que no caso é px(pixels).

    requestAnimationFrame(f);
    
    // Essa requisitação faz com que a função se repita infinitamente porque ela chama a si mesma sempre
    // enquanto a posição do mouse estiver na tela.
})();


const botaoTema = document.getElementById("alternar-tema");
const iconeTema = document.getElementById("icone-tema");

function atualizarIconeTema() {
    const modoClaroAtivo =
        document.body.classList.contains("modo-claro");

    if (modoClaroAtivo) {
        iconeTema.src = "img/sol.png";
        iconeTema.alt = "Ativar modo escuro";
    } else {
        iconeTema.src = "img/lua-crescente.png";
        iconeTema.alt = "Ativar modo claro";
    }
}

botaoTema.addEventListener("click", function (evento) {
    evento.preventDefault();

    document.body.classList.toggle("modo-claro");

    atualizarIconeTema();
});

atualizarIconeTema();


const simbolos = document.querySelectorAll(".simbolos-fundo span");

simbolos.forEach((simbolo) => {
    simbolo.style.left = Math.random() * 90 + "%";
    simbolo.style.top = Math.random() * 90 + "%";

    simbolo.addEventListener("click", () => {
        simbolo.style.transform =
            `rotate(${Math.random() * 360}deg) scale(1.5)`;
    });
});


const trevo = document.getElementById("trevo");

trevo.addEventListener("click", () => {
    trevo.classList.toggle("ativo");
});

function mascara_telefone() {
    let telefone = document.getElementById("telefone");

    // Remove tudo que não for número
    let tel = telefone.value.replace(/\D/g, "");

    // Limita a 11 números
    tel = tel.slice(0, 11);

    // Monta a máscara
    if (tel.length > 0) {
        tel = "(" + tel;
    }

    if (tel.length > 3) {
        tel = tel.slice(0, 3) + ") " + tel.slice(3);
    }

    if (tel.length > 10) {
        tel = tel.slice(0, 10) + "-" + tel.slice(10);
    }

    telefone.value = tel;
}


const botaoMenu = document.getElementById("botao-menu");
const menuNavegacao = document.getElementById("menu-navegacao");

botaoMenu.addEventListener("click", () => {
    const menuAberto = menuNavegacao.classList.toggle("aberto");

    botaoMenu.setAttribute("aria-expanded", menuAberto);
    botaoMenu.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );
});

// Fecha o menu ao selecionar uma opção
menuNavegacao.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", () => {
        menuNavegacao.classList.remove("aberto");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    });
});

// Fecha o menu ao clicar fora dele
document.addEventListener("click", (evento) => {
    if (
        !menuNavegacao.contains(evento.target) &&
        !botaoMenu.contains(evento.target)
    ) {
        menuNavegacao.classList.remove("aberto");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    }
});
