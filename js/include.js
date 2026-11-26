async function carregarComponente(id, arquivo) {
    try {
        const resposta = await fetch(arquivo);
        if (resposta.ok) {
            const html = await resposta.text();
            document.getElementById(id).innerHTML = html;
        } else {
            console.error(`Erro ao carregar o componente ${arquivo}: Status ${resposta.status}`);
        }
    } catch (erro) {
        console.error(`Erro de rede ao carregar ${arquivo}:`, erro);
    }
}

async function inicializar() {
    await Promise.all([
        carregarComponente("header", "componentes/header.html"),
        carregarComponente("footer", "componentes/footer.html")
    ]);
    
    // Destacar o menu ativo correspondente à página atual
    const path = window.location.pathname;
    let urlCorrente = path.split("/").pop();
    
    // Fallback para index.html se estiver na raiz do diretório
    if (urlCorrente === "" || urlCorrente === undefined) {
        urlCorrente = "index.html";
    }
    
    const links = document.querySelectorAll(".menu-link");
    links.forEach(link => {
        const href = link.getAttribute("href");
        if (href === urlCorrente) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

inicializar();