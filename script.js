// Array de objetos para armazenar as perguntas e respostas
const questions = [
    {
        question: "Qual é o maior país do mundo em área territorial?",
        options: ["Estados Unidos", "China", "Canadá", "Rússia"],
        answer: "Rússia",
        image: "images/russia.jpg" // Imagem para a pergunta 1
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci",
        image: "images/monalisa.jpg" // Imagem para a pergunta 2
    },
    {
        question: "Em que ano o homem pisou pela primeira vez na Lua?",
        options: ["1969", "1975", "1982", "1959"],
        answer: "1969",
        image: "images/lua.jpg" // Imagem para a pergunta 3
    },
    {
        question: "Qual é o maior oceano do planeta?",
        options: ["Oceano Atlântico", "Oceano Índico", "Oceano Ártico", "Oceano Pacífico"],
        answer: "Oceano Pacífico",
        image: "images/oceano.jpg" // Imagem para a pergunta 4
    },
    {
        question: "Qual é o símbolo químico do ouro?",
        options: ["Ag", "Au", "Fe", "Hh"],
        answer: "Au",
        image: "images/ouro.jpg" // Imagem para a pergunta 5
    },
    {
        question: "Quem foi o primeiro presidente do Brasil?",
        options: ["Getúlio Vargas", "Juscelino Kubitschek", "Marechal Deodoro da Fonseca", "Dom Pedro II"],
        answer: "Marechal Deodoro da Fonseca",
        image: "images/deodoro.jpg" // Imagem para a pergunta 6
    },
    {
        question: "O que significa a sigla ONU?",
        options: ["Organização Nacional das Nações Unidas", "Organização das Nações Unidas", "Organização de Navegação Universal", "Observatório Nacional de Unidades"],
        answer: "Organização das Nações Unidas",
        image: "images/onu.jpg" // Imagem para a pergunta 7
    },
    {
        question: "Qual é a capital da Austrália?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra",
        image: "images/canberra.jpg" // Imagem para a pergunta 8
    },
    {
        question: "Em que continente está localizado o deserto do Saara?",
        options: ["Ásia", "África", "América do Norte", "América do Norte"],
        answer: "África",
        image: "images/saara.jpg" // Imagem para a pergunta 9
    },
    {
        question: "Quem escreveu a obra Dom Casmurro?",
        options: ["Machado de Assis", "José de Alencar", "Graciliano Ramos", "Monteiro Lobato"],
        answer: "Machado de Assis",
        image: "images/domcasmurro.jpg" // Imagem para a pergunta 10
    }
];

let currentQuestionIndex = 0;
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const resultMessage = document.getElementById("result-message");

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
    options.forEach(option => option.disabled = true); // Desativa os botões após a resposta

    if (selectedOption === correctAnswer) {
        resultMessage.textContent = "Parabéns, você acertou!";
        resultMessage.style.color = "#28a745"; // Verde
    } else {
        resultMessage.textContent = `Ops, a resposta correta era: ${correctAnswer}`;
        resultMessage.style.color = "#dc3545"; // Vermelho
    }

    // Passa para a próxima pergunta após um pequeno atraso
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
            options.forEach(option => option.disabled = false); // Reativa os botões
        } else {
            questionElement.textContent = "Quiz finalizado!";
            optionsContainer.innerHTML = '';
            resultMessage.textContent = "Você respondeu a todas as perguntas.";
        }
    }, 2000); // 2 segundos de atraso
}

// Inicia o jogo
showQuestion();
