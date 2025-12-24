document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".subcategory-link");
    const sections = document.querySelectorAll(".category-section");

    // Função central
    function showCategory(category) {
        // Esconder tudo
        sections.forEach(section => {
            section.classList.remove("active");
        });

        buttons.forEach(button => {
            button.classList.remove("active");
        });

        // Mostrar só a categoria certa
        const activeSection = document.getElementById(`${category}-category`);
        if (activeSection) {
            activeSection.classList.add("active");
        }

        // Ativar botão certo
        const activeButton = document.querySelector(
            `.subcategory-link[data-category="${category}"]`
        );
        if (activeButton) {
            activeButton.classList.add("active");
        }
    }

    // Eventos de clique
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            showCategory(button.dataset.category);
        });
    });

    // 🔑 ESTADO INICIAL — SÓ QUADROS
    showCategory("quadros");
});
