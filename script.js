let agua = 1.5;
let treinos = [];
let refeicoes = [];
let metas = [];

function showScreen(screenId){
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");
}

function salvarTreino(){
    let nome = document.getElementById("treinoNome").value;
    let horario = document.getElementById("treinoHorario").value;

    if(nome === "" || horario === ""){
        alert("Preencha todos os campos!");
        return;
    }

    treinos.push(`${nome} - ${horario}`);
    atualizarTreinos();

    document.getElementById("treinoNome").value = "";
    document.getElementById("treinoHorario").value = "";

    showScreen("listaTreinos");
}

function atualizarTreinos(){
    let div = document.getElementById("treinosSalvos");
    div.innerHTML = "";

    if(treinos.length === 0){
        div.innerHTML = "<p>Nenhum treino cadastrado.</p>";
        return;
    }

    treinos.forEach(treino => {
        div.innerHTML += `<p>🏋️ ${treino}</p>`;
    });
}

function salvarRefeicao(){
    let nome = document.getElementById("refeicaoNome").value;
    let calorias = document.getElementById("refeicaoCalorias").value;

    if(nome === "" || calorias === ""){
        alert("Preencha todos os campos!");
        return;
    }

    refeicoes.push(`${nome} - ${calorias} kcal`);
    atualizarRefeicoes();

    document.getElementById("refeicaoNome").value = "";
    document.getElementById("refeicaoCalorias").value = "";

    showScreen("listaRefeicoes");
}

function atualizarRefeicoes(){
    let div = document.getElementById("refeicoesSalvas");
    div.innerHTML = "";

    if(refeicoes.length === 0){
        div.innerHTML = "<p>Nenhuma refeição cadastrada.</p>";
        return;
    }

    refeicoes.forEach(refeicao => {
        div.innerHTML += `<p>🥗 ${refeicao}</p>`;
    });
}

function adicionarAgua(){
    agua += 0.25;
    document.getElementById("aguaTotal").innerText = agua.toFixed(2);
}

function salvarMeta(){
    let texto = document.getElementById("metaTexto").value;
    let prazo = document.getElementById("metaPrazo").value;

    if(texto === "" || prazo === ""){
        alert("Preencha todos os campos!");
        return;
    }

    metas.push(`${texto} - prazo: ${prazo}`);
    atualizarMetas();

    document.getElementById("metaTexto").value = "";
    document.getElementById("metaPrazo").value = "";

    showScreen("listaMetas");
}

function atualizarMetas(){
    let div = document.getElementById("metasSalvas");
    div.innerHTML = "";

    if(metas.length === 0){
        div.innerHTML = "<p>Nenhuma meta cadastrada.</p>";
        return;
    }

    metas.forEach(meta => {
        div.innerHTML += `<p>🎯 ${meta}</p>`;
    });
}