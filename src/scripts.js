/**
 * Core Navigation Controller
 * Gerencia a interatividade e o fluxo de navegação entre os módulos de aprendizado.
 */

document.addEventListener("DOMContentLoaded", function() {

    // --- Módulo: Navegação Inicial (index.html) ---
    
    // Encaminha para o Guia de HTML
    const passo1 = document.getElementById("cont1");
    if (passo1) {
        passo1.onclick = () => window.open("p1.html", "_self");
    }

    // Encaminha para o Guia de CSS
    const passo2 = document.getElementById("cont2");
    if (passo2) {
        passo2.onclick = () => window.open("p2.html", "_self");
    }

    // Encaminha para o Guia de JavaScript
    const passo3 = document.getElementById("cont3");
    if (passo3) {
        passo3.onclick = () => window.open("p3.html", "_self");
    }

    // --- Módulo: Interatividade das Páginas Internas (p1, p2, p3) ---

    // Handler da página de HTML
    const btnP1 = document.getElementById("p1");
    if (btnP1) {
        btnP1.addEventListener("click", function() {
            alert("🛠️ Estrutura validada! O HTML é a base de tudo.");
        });
    }

    // Handler da página de CSS
    const btnP2 = document.getElementById("p2");
    if (btnP2) {
        btnP2.onclick = function() {
            alert("🎨 Design aplicado! O CSS deu vida ao seu projeto.");
        };
    }

    // Handler da página de JavaScript
    const btnP3 = document.getElementById("p3");
    if (btnP3) {
        btnP3.onclick = function() {
            alert("🏆 Jornada Concluída! Você dominou os fundamentos do Front-end.");
            window.open("index.html", "_self");
        };
    }

});