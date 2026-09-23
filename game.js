// ================================
// VARIÁVEIS PRINCIPAIS DO JOGO
// ================================

// Guarda em qual cena da história estamos.
let currentScene = 0;

// Guarda a quantidade de afinidade com os personagens.
let affection = 0;

// Guarda se o jogador está escolhendo uma opção.
let choosing = false;


// ================================
// ELEMENTOS DO HTML
// ================================

// Procuramos no HTML os elementos que vamos modificar.
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const endingScreen = document.getElementById("ending-screen");

const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

const characterName = document.getElementById("character-name");
const dialogueText = document.getElementById("dialogue-text");
const choicesContainer = document.getElementById("choices");
const affectionValue = document.getElementById("affection-value");

const endingTitle = document.getElementById("ending-title");
const endingText = document.getElementById("ending-text");


// ================================
// COMEÇAR O JOGO
// ================================

// Quando o jogador clicar em "Começar",
// chamamos a função startGame.
startButton.addEventListener("click", startGame);


// Esta função inicia ou reinicia o jogo.
function startGame() {
    // Começamos novamente pela primeira cena.
    currentScene = 0;

    // A afinidade começa em zero.
    affection = 0;

    // Atualizamos o número mostrado na tela.
    updateAffection();

    // Escondemos a tela inicial.
    startScreen.classList.add("hidden");

    // Mostramos a tela do jogo.
    gameScreen.classList.remove("hidden");

    // Mostramos a primeira cena.
    showScene();
}


// ================================
// MOSTRAR UMA CENA
// ================================

function showScene() {
    // Pegamos a cena atual dentro do array story.
    const scene = story[currentScene];

    // Limpamos as escolhas antigas.
    choicesContainer.innerHTML = "";

    // Por padrão, mostramos o botão Continuar.
    nextButton.classList.remove("hidden");

    // Verificamos se a cena é um diálogo.
    if (scene.type === "dialogue") {
        showDialogue(scene);
        return;
    }

    // Verificamos se a cena é uma escolha.
    if (scene.type === "choice") {
        showChoice(scene);
        return;
    }

    // Verificamos se a cena é um final.
    if (scene.type === "ending") {
        showEnding(scene);
    }
}


// ================================
// MOSTRAR DIÁLOGO
// ================================

function showDialogue(scene) {
    // Mostra o nome de quem está falando.
    characterName.textContent = scene.character;

    // Mostra o texto da fala.
    dialogueText.textContent = scene.text;

    // Permite clicar em Continuar.
    nextButton.classList.remove("hidden");
}


// ================================
// AVANÇAR A HISTÓRIA
// ================================

nextButton.addEventListener("click", nextScene);

function nextScene() {
    // Se estivermos em uma cena de escolha,
    // não avançamos pelo botão Continuar.
    if (choosing) {
        return;
    }

    // Passamos para a próxima posição do array.
    currentScene++;

    // Mostramos a nova cena.
    showScene();
}


// ================================
// MOSTRAR ESCOLHAS
// ================================

function showChoice(scene) {
    // Indicamos que o jogador está fazendo uma escolha.
    choosing = true;

    // Escondemos o botão Continuar.
    nextButton.classList.add("hidden");

    // Colocamos o texto da pergunta.
    characterName.textContent = "Escolha";
    dialogueText.textContent = scene.text;

    // Percorremos todas as opções.
    scene.choices.forEach((choice) => {

        // Criamos um novo botão.
        const button = document.createElement("button");

        // Colocamos a classe visual do botão.
        button.classList.add("choice-button");

        // Colocamos o texto da opção.
        button.textContent = choice.text;

        // Quando o botão for clicado,
        // executamos a função choose.
        button.addEventListener("click", () => {
            choose(choice);
        });

        // Colocamos o botão dentro da área de escolhas.
        choicesContainer.appendChild(button);
    });
}


// ================================
// PROCESSAR ESCOLHA
// ================================

function choose(choice) {
    // Adicionamos ou removemos pontos de afinidade.
    affection += choice.affection;

    // Atualizamos o número na tela.
    updateAffection();

    // A escolha terminou.
    choosing = false;

    // Pulamos para a cena indicada pela escolha.
    currentScene = choice.next;

    // Mostramos a próxima cena.
    showScene();
}


// ================================
// ATUALIZAR AFINIDADE
// ================================

function updateAffection() {
    // Coloca o valor atual no elemento HTML.
    affectionValue.textContent = affection;
}


// ================================
// MOSTRAR FINAL
// ================================

function showEnding(scene) {
    // Escondemos a tela do jogo.
    gameScreen.classList.add("hidden");

    // Mostramos a tela de final.
    endingScreen.classList.remove("hidden");

    // Mostramos o título do final.
    endingTitle.textContent = scene.title;

    // Mostramos o texto do final.
    endingText.textContent =
        scene.text + " Afinidade final: " + affection;
}


// ================================
// RECOMEÇAR
// ================================

restartButton.addEventListener("click", () => {
    // Escondemos a tela de final.
    endingScreen.classList.add("hidden");

    // Iniciamos o jogo novamente.
    startGame();
});


// ================================
// SALVAR
// ================================

document.getElementById("save-button").addEventListener("click", () => {

    // Criamos um objeto com os dados que queremos salvar.
    const saveData = {
        currentScene: currentScene,
        affection: affection
    };

    // Transformamos o objeto em texto JSON.
    const saveText = JSON.stringify(saveData);

    // Salvamos os dados no navegador.
    localStorage.setItem("otomeSave", saveText);

    // Avisamos o jogador.
    alert("Jogo salvo!");
});


// ================================
// CARREGAR
// ================================

document.getElementById("load-button").addEventListener("click", () => {

    // Procuramos o save no navegador.
    const saveText = localStorage.getItem("otomeSave");

    // Se não existir save, avisamos.
    if (!saveText) {
        alert("Nenhum jogo salvo.");
        return;
    }

    // Transformamos o texto JSON novamente em objeto.
    const saveData = JSON.parse(saveText);

    // Recuperamos a cena.
    currentScene = saveData.currentScene;

    // Recuperamos a afinidade.
    affection = saveData.affection;

    // Atualizamos a interface.
    updateAffection();

    // Garantimos que estamos na tela do jogo.
    startScreen.classList.add("hidden");
    endingScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    // Mostramos a cena salva.
    showScene();
});
