const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se o usuário já tem uma preferência salva
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️ Modo Claro';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    let theme = 'light';
    if (body.classList.contains('dark-mode')) {
        theme = 'dark';
        themeToggle.textContent = '☀️ Modo Claro';
    } else {
        themeToggle.textContent = '🌙 Modo Escuro';
    }
    
    // Salva a escolha no localStorage
    localStorage.setItem('theme', theme);
});

function toggleConsole(button) {
    const output = button.nextElementSibling;
    output.classList.toggle('show');
    
    // Procura a caixa de código onde o botão foi clicado
    const codeBox = button.closest('.code-box');
    
    if (codeBox) {
        // Verifica se existe a imagem antiga (das outras páginas) e liga/desliga
        const cr7Image = codeBox.querySelector('.cr7-image');
        if (cr7Image) {
            cr7Image.classList.toggle('show');
        }
        
        // Verifica se existe a imagem nova de perfil (da página de Strings) e liga/desliga
        const cr7Perfil = codeBox.querySelector('.cr7-perfil');
        if (cr7Perfil) {
            cr7Perfil.classList.toggle('show');
        }
    }
    
    // Troca o visual e texto do botão dependendo se o console está aberto ou não
    if (output.classList.contains('show')) {
        button.innerHTML = "🟢 Fechar Console"; 
        button.style.backgroundColor = "#3776ab"; 
        button.style.color = "white";
    } else {
        button.innerHTML = "▶️ Resultado do Console";
        button.style.backgroundColor = "var(--python-yellow)";
        button.style.color = "var(--nav-bg)";
    }
}
function toggleCorrection(button) {
    const correction = button.nextElementSibling;
    correction.classList.toggle('show');
    
    if (correction.classList.contains('show')) {
        button.innerHTML = "❌ Ocultar Versão";
        button.style.backgroundColor = "#3776ab"; // Azul do Python
        button.style.color = "white";
    } else {
        button.innerHTML = "✅ Versão Correta";
        button.style.backgroundColor = "var(--python-yellow)";
        button.style.color = "var(--nav-bg)";
    }
}
document.addEventListener("DOMContentLoaded", () => {
    // 1. Pega o nome do arquivo atual da URL (ex: "sintaxe.html")
    // Se a URL terminar apenas com "/", ele assume "index.html"
    const activePage = window.location.pathname.split("/").pop() || "index.html";

    // 2. Seleciona todos os links dentro do seu nav
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        // 3. Verifica se o 'href' do link contém o nome da página atual
        if (link.getAttribute('href') === activePage) {
            link.classList.add('active');
        } else {
            // Garante que links antigos percam a marcação
            link.classList.remove('active');
        }
    });
});

