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
    }

];


// ========================================
// LOCAL STORAGE
// ========================================

function obterReceitas() {

    const receitasGuardadas =
        localStorage.getItem("receitas");

    if (!receitasGuardadas) {

        localStorage.setItem(
            "receitas",
            JSON.stringify(receitasIniciais)
        );

        return receitasIniciais;
    }

    return JSON.parse(receitasGuardadas);
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
                    ${receita.categoria}
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
            receita.categoria === categoriaAtual;

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
            receita.imagem + " " + receita.categoria;

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
                    ${receita.categoria}
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
                    href="receitas.html"
                    class="botao-secundario"
                >
                    Voltar
                </a>

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

    formulario.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const nome =
                document.getElementById("nome")
                    .value.trim();

            const categoria =
                document.getElementById("categoria")
                    .value;

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
                !categoria ||
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

                categoria: categoria,

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
// INICIALIZAÇÃO
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        obterReceitas();

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