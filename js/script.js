document.addEventListener("DOMContentLoaded", () => {
    // Inicialização do FAQ
    const faqItems = document.querySelectorAll(".faq-item");
    
    faqItems.forEach(item => {
        const button = item.querySelector(".faq-pergunta");
        if (button) {
            button.addEventListener("click", () => {
                // Comportamento de sanfona: fecha os outros
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains("active")) {
                        otherItem.classList.remove("active");
                    }
                });
                
                // Abre/fecha o item atual
                item.classList.toggle("active");
            });
        }
    });
});
