const questions = [
    {
        question: "Qual é o maior país do mundo em área territorial?",
        options: ["Estados Unidos", "China", "Canadá", "Rússia"],
        answer: "Rússia",
        image: "images/russia.jpg"
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci",
        image: "images/monalisa.jpg"
    },
    {
        question: "Em que ano o homem pisou pela primeira vez na Lua?",
        options: ["1969", "1975", "1982", "1959"],
        answer: "1969",
        image: "images/lua.jpg"
    },
    {
        question: "Qual é o maior oceano do planeta?",
        options: ["Oceano Atlântico", "Oceano Índico", "Oceano Ártico", "Oceano Pacífico"],
        answer: "Oceano Pacífico",
        image: "images/oceano.jpg"
    },
    {
        question: "Qual é o símbolo químico do ouro?",
        options: ["Ag", "Au", "Fe", "Hh"],
        answer: "Au",
        image: "images/ouro.jpg"
    },
    {
        question: "Quem foi o primeiro presidente do Brasil?",
        options: ["Getúlio Vargas", "Juscelino Kubitschek", "Marechal Deodoro da Fonseca", "Dom Pedro II"],
        answer: "Marechal Deodoro da Fonseca",
        image: "images/deodoro.jpg"
    },
    {
        question: "O que significa a sigla ONU?",
        options: ["Organização Nacional das Nações Unidas", "Organização das Nações Unidas", "Organização de Navegação Universal", "Observatório Nacional de Unidades"],
        answer: "Organização das Nações Unidas",
        image: "images/onu.jpg"
    },
    {
        question: "Qual é a capital da Austrália?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra",
        image: "images/canberra.jpg"
    },
    {
        question: "Em que continente está localizado o deserto do Saara?",
        options: ["Ásia", "África", "América do Norte", "América do Norte"],
        answer: "África",
        image: "images/saara.jpg"
    },
    {
        question: "Quem escreveu a obra Dom Casmurro?",
        options: ["Machado de Assis", "José de Alencar", "Graciliano Ramos", "Monteiro Lobato"],
        answer: "Machado de Assis",
        image: "images/domcasmurro.jpg"
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const resultMessage = document.getElementById("result-message");
const startScreen = document.getElementById("start-screen");
const quizContainer = document.getElementById("quiz-container");
const endScreen = document.getElementById("end-screen");
const correctCountElement = document.getElementById("correct-count");
const incorrectCountElement = document.getElementById("incorrect-count");

// Função para iniciar o quiz
document.getElementById("start-btn").addEventListener("click", () => {
    startScreen.style.display = "none";
    quizContainer.style.display = "block";
    showQuestion();
});

// Função para sair do quiz
document.getElementById("exit-btn").addEventListener("click", () => {
    alert("Até a próxima!");
    window.close();
});

// Função para exibir a pergunta atual
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Define o fundo da página com a imagem da pergunta
    document.body.style.backgroundImage = `url(${currentQuestion.image})`;

    // Limpa as opções anteriores
    optionsContainer.innerHTML = '';

    // Cria os botões para as opções
    currentQuestion.options.forEach(optionText => {
        const button = document.createElement("button");
        button.textContent = optionText;
        button.classList.add("option");
        button.addEventListener("click", () => checkAnswer(optionText, currentQuestion.answer));
        optionsContainer.appendChild(button);
    });

    resultMessage.textContent = '';
}

// Função para verificar a resposta
function checkAnswer(selectedOption, correctAnswer) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.disabled = true);

    if (selectedOption === correctAnswer) {
        resultMessage.textContent = "Parabéns, você acertou!";


