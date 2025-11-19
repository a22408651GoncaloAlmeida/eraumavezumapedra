// Função para mostrar páginas principais (Arte/Biografia)
function showPage(page) {
    event.preventDefault();
    
    // Esconder todas as páginas
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });

    // Remover classe active de todos os links da nav principal
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });

    // Mostrar a página selecionada
    const pageElement = document.getElementById(page);
    if (pageElement) {
        pageElement.classList.add('active');
    }

    // Adicionar classe active ao link clicado
    event.target.classList.add('active');
}

// Função para mostrar categorias dentro da página Arte
function showCategory(category) {
    event.preventDefault();
    
    // Esconder todas as categorias
    document.querySelectorAll('.category-section').forEach(section => {
        section.classList.remove('active');
    });

    // Remover classe active de todos os links das sub-abas
    document.querySelectorAll('.subcategory-link').forEach(link => {
        link.classList.remove('active');
    });

    // Mostrar a categoria selecionada
    const categoryElement = document.getElementById(category + '-category');
    if (categoryElement) {
        categoryElement.classList.add('active');
    }

    // Adicionar classe active ao link clicado
    event.target.classList.add('active');

    // Resetar animações dos produtos
    observeProducts();
}

// Intersectionobserver para animar produtos ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

function observeProducts() {
    // Observar todos os produtos que ainda não têm a classe reveal
    document.querySelectorAll('.product-card:not(.reveal)').forEach(card => {
        observer.observe(card);
    });
}

// Inicializar quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar página de Arte por padrão
    showPage('arte');
    
    // Iniciar observação de produtos
    observeProducts();
});