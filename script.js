// ========================================
// RECEITAS À MESA
// JavaScript principal
// ========================================


// ========================================
// RECEITAS INICIAIS
// ========================================

const receitasIniciais = [

    {
        id: 1,
        nome: "Lasanha de Carne",
        categoria: "Massas",
        tempo: 60,
        pessoas: 4,
        imagem: "🍝",
        ingredientes: [
            "500 g de carne picada",
            "250 g de massa para lasanha",
            "1 cebola",
            "2 dentes de alho",
            "400 g de tomate triturado",
            "200 g de queijo ralado",
            "Sal e pimenta q.b."
        ],
        preparacao: [
            "Picar a cebola e o alho.",
            "Refogar a cebola e o alho numa frigideira.",
            "Adicionar a carne picada e cozinhar.",
            "Adicionar o tomate e deixar cozinhar durante alguns minutos.",
            "Montar a lasanha alternando massa, carne e queijo.",
            "Levar ao forno a 180°C durante aproximadamente 30 minutos."
        ]
    },

    {
        id: 2,
        nome: "Bolo de Chocolate",
        categoria: "Sobremesas",
        tempo: 45,
        pessoas: 8,
        imagem: "🍫",
        ingredientes: [
            "200 g de farinha",
            "150 g de açúcar",
            "3 ovos",
            "100 g de chocolate",
            "100 g de manteiga",
            "1 colher de chá de fermento"
        ],
        preparacao: [
            "Derreter o chocolate juntamente com a manteiga.",
            "Bater os ovos com o açúcar.",
            "Adicionar o chocolate derretido.",
            "Juntar a farinha e o fermento.",
            "Colocar a massa numa forma.",
            "Levar ao forno a 180°C durante aproximadamente 35 minutos."
        ]
    },

    {
        id: 3,
        nome: "Bacalhau com Batatas",
        categoria: "Peixes",
        tempo: 50,
        pessoas: 4,
        imagem: "🐟",
        ingredientes: [
            "4 postas de bacalhau",
            "800 g de batatas",
            "1 cebola",
            "2 dentes de alho",
            "Azeite q.b.",
            "Sal e pimenta q.b."
        ],
        preparacao: [
            "Descascar e cortar as batatas.",
            "Cortar a cebola em rodelas.",
            "Colocar as batatas e a cebola num tabuleiro.",
            "Adicionar o bacalhau.",
            "Temperar com alho, azeite e pimenta.",
            "Levar ao forno a 190°C durante aproximadamente 40 minutos."
        ]
    },

    {
        id: 4,
        nome: "Frango Assado",
        categoria: "Carnes",
        tempo: 70,
        pessoas: 4,
        imagem: "🍗",
        ingredientes: [
            "1 frango inteiro",
            "4 batatas",
            "3 dentes de alho",
            "Azeite",
            "Sumo de 1 limão",
            "Paprika",
            "Sal e pimenta"
        ],
        preparacao: [
            "Temperar o frango com alho, limão, paprika, sal e pimenta.",
            "Descascar e cortar as batatas.",
            "Colocar tudo num tabuleiro.",
            "Regar com azeite.",
            "Levar ao forno a 190°C.",
            "Assar durante aproximadamente 60 minutos."
        ]
    },

    {
        id: 5,
        nome: "Salada Mediterrânica",
        categoria: "Saladas",
        tempo: 15,
        pessoas: 2,
        imagem: "🥗",
        ingredientes: [
            "2 tomates",
            "1 pepino",
            "100 g de queijo feta",
            "Azeitonas",
            "Azeite",
            "Orégãos"
        ],
        preparacao: [
            "Lavar os legumes.",
            "Cortar os tomates e o pepino.",
            "Adicionar o queijo feta.",
            "Juntar as azeitonas.",
            "Temperar com azeite e orégãos.",
            "Misturar todos os ingredientes."
        ]
    },

    {
        id: 6,
        nome: "Caril de Legumes",
        categoria: "Vegetarianas",
        tempo: 35,
        pessoas: 3,
        imagem: "🥕",
        ingredientes: [
            "1 cenoura",
            "1 courgette",
            "1 pimento",
            "1 cebola",
            "200 ml de leite de coco",
            "Caril em pó",
            "Sal e pimenta"
        ],
        preparacao: [
            "Cortar todos os legumes.",
            "Refogar a cebola.",
            "Adicionar os restantes legumes.",
            "Juntar o caril.",
            "Adicionar o leite de coco.",
            "Deixar cozinhar durante aproximadamente 20 minutos."
        ]
    },

    {
        id: 7,
        nome: "Bolo de Cenoura",
        categoria: ["Sobremesas", "Vegetarianas"],
        tempo: 60,
        pessoas: 10,
        imagem: "🥕",
        ingredientes: [
            "MASSA:",
            "3 ovos (150g)",
            "3/4 de xícara (chá) de óleo (150ml)",
            "1 e 1/2 xícara (chá) de cenoura picadinha (200g)",
            "1 e 1/2 xícara (chá) de açúcar (275g)",
            "1 e 1/2 xícara (chá) de farinha de trigo (205g)",
            "1 colher (sopa) de fermento em pó (14g)",
            "COBERTURA:",
            "200g de chocolate meio amargo",
            "1/2 xícara (chá) de leite condensado (140g)",
            "1/2 xícara (chá) de creme de leite (110g)"
        ],
        preparacao: [
            "Bata no liquidificador os ovos, o óleo e a cenoura por 3 a 5 minutos até obter um creme liso e bem alaranjado.",
            "Junte o açúcar e bata por mais 1 a 2 minutos para homogeneizar.",
            "Peneire a farinha e misture delicadamente de baixo para cima com um fouet ou espátula.",
            "Adicione o fermento em pó e misture levemente apenas até incorporar.",
            "Asse em forno preaquecido a 180°C até passar no teste do palito.",
            "Derreta o chocolate em banho-maria ou no micro-ondas, mexendo de 30 em 30 segundos.",
            "Adicione o leite condensado e o creme de leite ao chocolate ainda morno e misture até ficar liso e brilhante.",
            "Cubra o bolo com a cobertura generosamente."
        ]
    },

    {
        id: 8,
        nome: "Manta de Linguiça Recheada",
        categoria: "Carnes",
        tempo: 45,
        pessoas: 6,
        imagem: "🌭",
        ingredientes: [
            "1,2kg de linguiça de pernil",
            "200g de mussarela fatiada",
            "4 colheres de sopa de orégano",
            "2 colheres de sopa de cebola, alho e salsa desidratados",
            "1 colher de pimenta calabresa",
            "1 colher de café de louro em pó",
            "1 colher de café de pimenta-do-reino",
            "40ml de água morna",
            "50ml de vinagre de vinho tinto",
            "100ml de azeite",
            "1 colher de sopa de salsinha fresca picada",
            "1 pitada de sal"
        ],
        preparacao: [
            "Prepare o chimichurri: misture os secos com a água morna, o vinagre, o azeite, a salsinha fresca e o sal.",
            "Retire a massa da linguiça ainda gelada — assim fica mais fácil de moldar.",
            "Passe um pouco de óleo nas mãos e molde metade da massa em formato de retângulo sobre papel-filme.",
            "Coloque as fatias de queijo no centro, deixando espaço nas bordas para não vazar.",
            "Cubra com a outra metade da massa e feche bem.",
            "Coloque em uma grelha de peixe e retire o papel-filme.",
            "Asse em calor médio por 15 minutos de cada lado ou até o ponto preferido.",
            "Corte ainda quente e finalize com o chimichurri."
        ]
    },

    {
        id: 9,
        nome: "Fraldinha com Maionese de Bacon",
        categoria: "Carnes",
        tempo: 45,
        pessoas: 4,
        imagem: "🥓",
        ingredientes: [
            "1 peça de fraldinha",
            "Pão francês para servir",
            "200g de bacon picado",
            "2 ovos",
            "1/2 limão (suco)",
            "350ml de óleo gelado",
            "1 dente de alho",
            "Azeite, sal e pimenta a gosto"
        ],
        preparacao: [
            "Em fogo forte, frite o bacon até dourar bem. Reserve o bacon e o óleo que soltou.",
            "Bata no mixer ou liquidificador os ovos, o alho, o suco de limão, o óleo do bacon, o sal e a pimenta.",
            "Despeje o óleo gelado em fio, bem devagar, batendo até o creme ficar bem espesso, no ponto de maionese.",
            "Junte o bacon frito e bata novamente até incorporar em pedacinhos pequenos.",
            "Leve à geladeira para firmar.",
            "Tempere a fraldinha com azeite, sal e pimenta.",
            "Grelhe na churrasqueira em brasa forte dos dois lados, no ponto preferido.",
            "Corte em pedaços contra a fibra, coloque no pão francês e sirva com a maionese de bacon."
        ]
    },

    {
        id: 10,
        nome: "Filé de Peixe Assado no Forno",
        categoria: "Peixes",
        tempo: 40,
        pessoas: 4,
        imagem: "🐟",
        ingredientes: [
            "1 kg de filé de pescada",
            "Sal a gosto",
            "Suco de 1 limão",
            "2 dentes de alho triturados",
            "Pimenta-do-reino a gosto",
            "2 colheres de café de páprica picante (ou colorau)",
            "Azeite para untar"
        ],
        preparacao: [
            "Limpe e seque os filés com papel-toalha.",
            "Misture o limão, o alho, a páprica, o sal e a pimenta até formar uma pastinha líquida.",
            "Tempere os filés dos dois lados.",
            "Deixe marinar na geladeira por 15 a 20 minutos (o limão pode 'cozinhar' a carne se passar disso).",
            "Opção 1: grelhe na frigideira por 3 a 4 minutos de cada lado em fogo médio-alto até dourar.",
            "Opção 2: asse no forno a 200°C por 15 minutos coberto com papel-alumínio e mais 5 a 10 minutos até dourar."
        ]
    },

    {
        id: 11,
        nome: "Macarrão Alho e Óleo",
        categoria: ["Massas", "Vegetarianas"],
        tempo: 20,
        pessoas: 4,
        imagem: "🍝",
        ingredientes: [
            "300g de espaguete",
            "4 dentes de alho grandes fatiados em lâminas",
            "3 colheres de sopa de azeite de oliva",
            "Sal a gosto",
            "Pimenta-do-reino a gosto",
            "2 colheres de sopa de salsinha picada"
        ],
        preparacao: [
            "Cozinhe o espaguete em bastante água com sal até ficar al dente. Reserve 1 xícara da água do cozimento.",
            "Em uma frigideira em fogo médio-baixo, aqueça o azeite e frite o alho em lâminas até dourar levemente.",
            "Cuidado para não queimar o alho, pois ele amarga.",
            "Adicione um pouco da água do cozimento e misture para criar um molho cremoso.",
            "Junte o macarrão e envolva bem no molho.",
            "Ajuste o sal, finalize com a salsinha e a pimenta-do-reino e sirva."
        ]
    },

    {
        id: 12,
        nome: "Pão de Queijo",
        categoria: "Vegetarianas",
        tempo: 40,
        pessoas: 15,
        imagem: "🧀",
        ingredientes: [
            "500g de polvilho azedo",
            "250ml de leite",
            "100ml de óleo",
            "1 colher (chá) de sal",
            "2 ovos",
            "250g de queijo meia cura ralado (ou minas padrão/parmesão)"
        ],
        preparacao: [
            "Coloque o leite, o óleo e o sal em uma panela e leve ao fogo até ferver.",
            "Despeje o líquido quente sobre o polvilho em uma tigela grande e misture bem para escaldar.",
            "Deixe amornar por alguns minutos.",
            "Acrescente os ovos, um a um, misturando bem após cada adição.",
            "Adicione o queijo ralado e misture até obter uma massa homogênea e levemente pegajosa.",
            "Modele bolinhas com as mãos untadas e distribua em uma assadeira.",
            "Asse no forno preaquecido a 180°C por 25 a 30 minutos, até crescerem e dourarem.",
            "Sirva quentinho."
        ]
    },

    {
        id: 13,
        nome: "Frango com Mel e Shoyu",
        categoria: "Carnes",
        tempo: 35,
        pessoas: 4,
        imagem: "🍯",
        ingredientes: [
            "500g de filé de frango cortado em cubos",
            "3 colheres de sopa de shoyu (molho de soja)",
            "2 colheres de sopa de mel",
            "2 dentes de alho picados",
            "1 colher de chá de gengibre ralado",
            "1 colher de sopa de óleo de gergelim",
            "1/2 xícara de água",
            "1 colher de sopa de amido de milho",
            "Sal e pimenta-do-reino a gosto",
            "Sementes de gergelim e cebolinha para finalizar"
        ],
        preparacao: [
            "Tempere o frango com sal e pimenta.",
            "Em uma frigideira, aqueça o óleo de gergelim e doure o frango de todos os lados.",
            "Junte o alho e o gengibre e mexa por 1 minuto.",
            "Adicione o shoyu, o mel e a água e misture bem.",
            "Dissolva o amido de milho em um pouco de água e adicione à frigideira, mexendo até o molho engrossar.",
            "Cozinhe até o frango ficar bem envolvido no molho caramelizado.",
            "Finalize com gergelim e cebolinha e sirva."
        ]
    }

];


// ========================================
// LOCAL STORAGE
// ========================================

function obterReceitas() {

    const receitasGuardadas =
        localStorage.getItem("receitas");

    let receitas;

    if (!receitasGuardadas) {

        receitas =
            JSON.parse(JSON.stringify(receitasIniciais));

        localStorage.setItem(
            "receitas",
            JSON.stringify(receitas)
        );

        return receitas;
    }

    receitas = JSON.parse(receitasGuardadas);


    // ADICIONAR NOVAS RECEITAS INICIAIS SEM REMOVER AS EXISTENTES

    let adicionadas = false;

    receitasIniciais.forEach(inicial => {

        if (!receitas.some(item => item.id === inicial.id)) {

            receitas.push(
                JSON.parse(JSON.stringify(inicial))
            );

            adicionadas = true;
        }
    });

    if (adicionadas) {

        localStorage.setItem(
            "receitas",
            JSON.stringify(receitas)
        );
    }

    return receitas;
}


// ========================================
// CATEGORIAS
// ========================================

function obterCategorias(receita) {

    return Array.isArray(receita.categoria)
        ? receita.categoria
        : [receita.categoria];
}


function ehDaCategoria(receita, categoria) {

    return obterCategorias(receita).includes(categoria);
}


function guardarReceitas(receitas) {

    localStorage.setItem(
        "receitas",
        JSON.stringify(receitas)
    );
}


// ========================================
// FAVORITOS
// ========================================

function obterFavoritos() {

    const favoritos =
        localStorage.getItem("favoritos");

    if (!favoritos) {
        return [];
    }

    return JSON.parse(favoritos);
}


function guardarFavoritos(favoritos) {

    localStorage.setItem(
        "favoritos",
        JSON.stringify(favoritos)
    );
}


function ehFavorito(id) {

    const favoritos = obterFavoritos();

    return favoritos.includes(Number(id));
}


function alterarFavorito(id) {

    id = Number(id);

    let favoritos = obterFavoritos();

    if (favoritos.includes(id)) {

        favoritos = favoritos.filter(
            favorito => favorito !== id
        );

    } else {

        favoritos.push(id);
    }

    guardarFavoritos(favoritos);

    carregarReceitas();

    carregarDestaques();

    carregarFavoritos();

    carregarDetalhes();
}


// ========================================
// APAGAR RECEITA
// ========================================

function apagarReceita(id) {

    id = Number(id);

    const receita =
        obterReceitas().find(item => item.id === id);

    if (!receita) {
        return;
    }

    const confirmar = confirm(
        'Tens a certeza que queres apagar "' +
        receita.nome +
        '"? Esta ação não pode ser desfeita.'
    );

    if (!confirmar) {
        return;
    }

    const receitas =
        obterReceitas().filter(item => item.id !== id);

    guardarReceitas(receitas);

    const favoritos =
        obterFavoritos().filter(favorito => favorito !== id);

    guardarFavoritos(favoritos);

    alert("Receita apagada com sucesso.");

    window.location.href = "receitas.html";
}


// ========================================
// CRIAR CARD
// ========================================

function criarCard(receita) {

    const favorito = ehFavorito(receita.id);

    return `
        <article class="card">

            <div class="card-imagem">
                ${receita.imagem}
            </div>

            <button
                class="favorito"
                onclick="alterarFavorito(${receita.id})"
                title="Adicionar aos favoritos"
            >
                ${favorito ? "❤️" : "♡"}
            </button>

            <div class="card-conteudo">

                <span class="card-categoria">
                    ${obterCategorias(receita).join(" · ")}
                </span>

                <h3>
                    <a href="receita.html?id=${receita.id}">
                        ${receita.nome}
                    </a>
                </h3>

                <div class="card-info">

                    <span>
                        ⏱ ${receita.tempo} min
                    </span>

                    <span>
                        👥 ${receita.pessoas} pessoas
                    </span>

                </div>

            </div>

        </article>
    `;
}


// ========================================
// PÁGINA DE RECEITAS
// ========================================

let categoriaAtual = "Todas";


function carregarReceitas() {

    const container =
        document.getElementById("listaReceitas");

    if (!container) {
        return;
    }

    const pesquisaInput =
        document.getElementById("pesquisa");

    const pesquisa =
        pesquisaInput
            ? pesquisaInput.value.toLowerCase().trim()
            : "";

    const receitas = obterReceitas();

    const resultados = receitas.filter(receita => {

        const correspondeNome =
            receita.nome
                .toLowerCase()
                .includes(pesquisa);

        const correspondeCategoria =
            categoriaAtual === "Todas" ||
            ehDaCategoria(receita, categoriaAtual);

        return correspondeNome && correspondeCategoria;

    });

    container.innerHTML = "";

    resultados.forEach(receita => {

        container.innerHTML += criarCard(receita);

    });

    const mensagem =
        document.getElementById("semResultados");

    if (mensagem) {

        mensagem.style.display =
            resultados.length === 0
                ? "block"
                : "none";
    }
}


// ========================================
// PESQUISA
// ========================================

function configurarPesquisa() {

    const pesquisa =
        document.getElementById("pesquisa");

    if (!pesquisa) {
        return;
    }

    pesquisa.addEventListener(
        "input",
        carregarReceitas
    );
}


// ========================================
// FILTROS
// ========================================

function configurarFiltros() {

    const filtros =
        document.querySelectorAll(".filtro");

    filtros.forEach(filtro => {

        filtro.addEventListener("click", function() {

            filtros.forEach(item => {
                item.classList.remove("ativo");
            });

            this.classList.add("ativo");

            categoriaAtual =
                this.dataset.categoria;

            carregarReceitas();

        });

    });
}


// ========================================
// RECEITAS EM DESTAQUE
// ========================================

function carregarDestaques() {

    const container =
        document.getElementById("receitasDestaque");

    if (!container) {
        return;
    }

    const receitas = obterReceitas();

    const destaques =
        receitas.slice(0, 3);

    container.innerHTML = "";

    destaques.forEach(receita => {

        container.innerHTML += criarCard(receita);

    });
}


// ========================================
// RECEITA DO DIA
// ========================================

function carregarReceitaDoDia() {

    const nome =
        document.getElementById("receitaDiaNome");

    if (!nome) {
        return;
    }

    const receitas = obterReceitas();

    if (receitas.length === 0) {
        return;
    }

    const diaAtual =
        new Date().getDate();

    const indice =
        diaAtual % receitas.length;

    const receita =
        receitas[indice];

    document.getElementById("receitaDiaNome")
        .textContent = receita.nome;

    document.getElementById("receitaDiaDescricao")
        .textContent =
            "Uma receita deliciosa com " +
            receita.ingredientes.length +
            " ingredientes. Perfeita para " +
            receita.pessoas +
            " pessoa" +
            (receita.pessoas > 1 ? "s" : "") +
            ".";

    document.getElementById("receitaDiaTempo")
        .textContent =
            "⏱ " + receita.tempo + " min";

    document.getElementById("receitaDiaPessoas")
        .textContent =
            "👥 " + receita.pessoas + " pessoas";

    document.getElementById("receitaDiaCategoria")
        .textContent =
            receita.imagem + " " +
            obterCategorias(receita).join(" · ");

    document.getElementById("receitaDiaLink")
        .href =
            "receita.html?id=" + receita.id;

    const imagem =
        document.querySelector(".receita-dia-imagem");

    if (imagem) {
        imagem.textContent = receita.imagem;
    }
}


// ========================================
// PÁGINA DE DETALHES
// ========================================

function carregarDetalhes() {

    const container =
        document.getElementById("detalhesReceita");

    if (!container) {
        return;
    }

    const parametros =
        new URLSearchParams(window.location.search);

    const id =
        Number(parametros.get("id"));

    const receitas =
        obterReceitas();

    const receita =
        receitas.find(item => item.id === id);

    if (!receita) {

        container.innerHTML = `
            <div class="mensagem-vazia">
                <div>😕</div>

                <h2>Receita não encontrada</h2>

                <p>
                    A receita que procuras não existe.
                </p>

                <a href="receitas.html" class="botao">
                    Voltar às receitas
                </a>
            </div>
        `;

        return;
    }

    const favorito =
        ehFavorito(receita.id);

    const ingredientes =
        receita.ingredientes
            .map(item => `<li>• ${item}</li>`)
            .join("");

    const preparacao =
        receita.preparacao
            .map(
                (passo, index) =>
                `<p><strong>${index + 1}.</strong> ${passo}</p>`
            )
            .join("");

    container.innerHTML = `

        <article class="receita-detalhes">

            <div class="receita-capa">
                ${receita.imagem}
            </div>

            <div class="receita-conteudo">

                <span class="pequeno-titulo">
                    ${obterCategorias(receita).join(" · ")}
                </span>

                <h1>${receita.nome}</h1>

                <div class="receita-meta">

                    <span>
                        ⏱ ${receita.tempo} minutos
                    </span>

                    <span>
                        👥 ${receita.pessoas} pessoas
                    </span>

                </div>

                <div class="receita-corpo">

                    <div>

                        <h2>Ingredientes</h2>

                        <ul class="ingredientes">
                            ${ingredientes}
                        </ul>

                    </div>

                    <div class="preparacao">

                        <h2>Modo de preparação</h2>

                        ${preparacao}

                    </div>

                </div>

                <br>

                <div class="acoes-receita">

                    <button
                        class="botao"
                        onclick="alterarFavorito(${receita.id})"
                    >
                        ${favorito
                            ? "❤️ Remover dos favoritos"
                            : "♡ Adicionar aos favoritos"
                        }
                    </button>

                    <a
                        href="adicionar.html?id=${receita.id}"
                        class="botao-secundario"
                    >
                        ✏️ Editar
                    </a>

                    <button
                        class="botao-perigo"
                        onclick="apagarReceita(${receita.id})"
                    >
                        🗑️ Apagar
                    </button>

                    <a
                        href="receitas.html"
                        class="botao-secundario"
                    >
                        Voltar
                    </a>

                </div>

            </div>

        </article>

    `;
}


// ========================================
// PÁGINA DE FAVORITOS
// ========================================

function carregarFavoritos() {

    const container =
        document.getElementById("listaFavoritos");

    if (!container) {
        return;
    }

    const mensagem =
        document.getElementById("semFavoritos");

    const favoritos =
        obterFavoritos();

    const receitas =
        obterReceitas();

    const receitasFavoritas =
        receitas.filter(receita =>
            favoritos.includes(receita.id)
        );

    container.innerHTML = "";

    receitasFavoritas.forEach(receita => {

        container.innerHTML += criarCard(receita);

    });

    if (mensagem) {

        mensagem.style.display =
            receitasFavoritas.length === 0
                ? "block"
                : "none";
    }
}


// ========================================
// ADICIONAR RECEITA
// ========================================

function configurarFormulario() {

    const formulario =
        document.getElementById("formReceita");

    if (!formulario) {
        return;
    }


    // SELEÇÃO DE CATEGORIAS

    const caixasCategoria =
        document.querySelectorAll(
            "#categorias input[type='checkbox']"
        );

    function sincronizarCategorias() {

        caixasCategoria.forEach(caixa => {

            const etiqueta =
                caixa.closest(".categoria-check");

            if (etiqueta) {
                etiqueta.classList.toggle(
                    "marcada",
                    caixa.checked
                );
            }
        });
    }

    caixasCategoria.forEach(caixa => {

        caixa.addEventListener(
            "change",
            sincronizarCategorias
        );
    });


    // DETETAR MODO DE EDIÇÃO

    const parametros =
        new URLSearchParams(window.location.search);

    const idEdicao =
        parametros.get("id");

    let receitaEmEdicao = null;

    if (idEdicao) {

        receitaEmEdicao =
            obterReceitas().find(
                receita => receita.id === Number(idEdicao)
            );

        if (receitaEmEdicao) {

            document.getElementById("nome")
                .value = receitaEmEdicao.nome;

            const categoriasReceita =
                obterCategorias(receitaEmEdicao);

            caixasCategoria.forEach(caixa => {

                caixa.checked =
                    categoriasReceita.includes(
                        caixa.value
                    );
            });

            sincronizarCategorias();

            document.getElementById("tempo")
                .value = receitaEmEdicao.tempo;

            document.getElementById("pessoas")
                .value = receitaEmEdicao.pessoas;

            document.getElementById("imagem")
                .value = receitaEmEdicao.imagem;

            document.getElementById("ingredientes")
                .value =
                    receitaEmEdicao.ingredientes.join("\n");

            document.getElementById("preparacao")
                .value =
                    receitaEmEdicao.preparacao.join("\n");

            const pequenoTitulo =
                document.getElementById("formPequenoTitulo");

            if (pequenoTitulo) {
                pequenoTitulo.textContent = "EDITAR RECEITA";
            }

            const titulo =
                document.getElementById("formTitulo");

            if (titulo) {
                titulo.textContent = "Editar receita";
            }

            const botaoGuardar =
                document.getElementById("formBotaoGuardar");

            if (botaoGuardar) {
                botaoGuardar.textContent = "Guardar alterações";
            }
        }
    }


    formulario.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const nome =
                document.getElementById("nome")
                    .value.trim();

            const categorias =
                Array.from(
                    document.querySelectorAll(
                        "#categorias input:checked"
                    )
                ).map(caixa => caixa.value);

            const tempo =
                Number(
                    document.getElementById("tempo")
                        .value
                );

            const pessoas =
                Number(
                    document.getElementById("pessoas")
                        .value
                );

            const imagemInput =
                document.getElementById("imagem")
                    .value.trim();

            const ingredientesTexto =
                document.getElementById("ingredientes")
                    .value.trim();

            const preparacaoTexto =
                document.getElementById("preparacao")
                    .value.trim();


            // VALIDAÇÃO

            if (
                !nome ||
                categorias.length === 0 ||
                tempo <= 0 ||
                pessoas <= 0 ||
                !ingredientesTexto ||
                !preparacaoTexto
            ) {

                alert(
                    "Por favor, preenche todos os campos corretamente."
                );

                return;
            }


            // CONVERTER TEXTO EM LISTAS

            const ingredientes =
                ingredientesTexto
                    .split("\n")
                    .map(item => item.trim())
                    .filter(item => item !== "");

            const preparacao =
                preparacaoTexto
                    .split("\n")
                    .map(item => item.trim())
                    .filter(item => item !== "");


            // OBTER RECEITAS EXISTENTES

            const receitas =
                obterReceitas();


            // MODO DE EDIÇÃO

            if (receitaEmEdicao) {

                const indice =
                    receitas.findIndex(
                        receita =>
                            receita.id === receitaEmEdicao.id
                    );

                receitas[indice] = {

                    ...receitas[indice],

                    nome: nome,

                    categoria: categorias,

                    tempo: tempo,

                    pessoas: pessoas,

                    imagem:
                        imagemInput ||
                        receitas[indice].imagem ||
                        "🍴",

                    ingredientes:
                        ingredientes,

                    preparacao:
                        preparacao
                };

                guardarReceitas(receitas);

                alert(
                    "Receita atualizada com sucesso! 🍴"
                );

                window.location.href =
                    "receita.html?id=" +
                    receitaEmEdicao.id;

                return;
            }


            // CRIAR ID

            const novoId =
                receitas.length > 0
                    ? Math.max(
                        ...receitas.map(
                            receita => receita.id
                        )
                    ) + 1
                    : 1;


            // CRIAR RECEITA

            const novaReceita = {

                id: novoId,

                nome: nome,

                categoria: categorias,

                tempo: tempo,

                pessoas: pessoas,

                imagem:
                    imagemInput || "🍴",

                ingredientes:
                    ingredientes,

                preparacao:
                    preparacao
            };


            // GUARDAR

            receitas.push(novaReceita);

            guardarReceitas(receitas);


            // MENSAGEM

            alert(
                "Receita adicionada com sucesso! 🍴"
            );


            // IR PARA RECEITAS

            window.location.href =
                "receitas.html";

        }
    );
}


// ========================================
// MODO ESCURO
// ========================================

function obterTema() {

    return localStorage.getItem("tema") || "claro";
}


function aplicarTema(tema) {

    const escuro =
        tema === "escuro";

    document.documentElement
        .classList.toggle("escuro", escuro);

    const botao =
        document.getElementById("botaoTema");

    if (botao) {

        botao.textContent = escuro ? "☀️" : "🌙";

        botao.setAttribute(
            "aria-label",
            escuro ? "Ativar modo claro" : "Ativar modo escuro"
        );

        botao.setAttribute(
            "title",
            escuro ? "Ativar modo claro" : "Ativar modo escuro"
        );
    }
}


function alternarTema() {

    const novoTema =
        obterTema() === "escuro"
            ? "claro"
            : "escuro";

    localStorage.setItem("tema", novoTema);

    aplicarTema(novoTema);
}


function configurarTema() {

    aplicarTema(obterTema());

    const botao =
        document.getElementById("botaoTema");

    if (botao) {

        botao.addEventListener(
            "click",
            alternarTema
        );
    }
}


// ========================================
// INICIALIZAÇÃO
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        obterReceitas();

        configurarTema();

        carregarReceitas();

        carregarDestaques();

        carregarReceitaDoDia();

        carregarDetalhes();

        carregarFavoritos();

        configurarPesquisa();

        configurarFiltros();

        configurarFormulario();

    }
);