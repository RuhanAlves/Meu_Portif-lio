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
