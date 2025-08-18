const litepaperQuestions = [
    {
        question: "What is Drosera?",
        answers: [
            "A decentralized finance protocol",
            "A security automation layer on Ethereum",
            "A smart contract auditing tool",
            "A decentralized exchange platform"
        ],
        correct: 1
    },
    {
        question: "What inspired the name 'Drosera'?",
        answers: [
            "A genus of carnivorous plants",
            "A type of blockchain algorithm",
            "A popular DeFi token",
            "A smart contract auditing framework"
        ],
        correct: 0
    },
    {
        question: "What is the primary function of Drosera?",
        answers: [
            "To provide liquidity to DeFi protocols",
            "To detect and mitigate security incidents in DeFi protocols",
            "To facilitate token swaps",
            "To create NFTs"
        ],
        correct: 1
    },
    {
        question: "Which blockchain does Drosera operate on?",
        answers: ["Solana", "Binance Smart Chain", "Ethereum", "Cardano"],
        correct: 2
    },
    {
        question: "What is the role of 'Operators' in Drosera?",
        answers: [
            "Users who stake tokens",
            "Entities that execute security responses to incidents",
            "Developers who write smart contracts",
            "Validators who confirm transactions"
        ],
        correct: 1
    },
    {
        question: "What are 'Traps' in Drosera?",
        answers: [
            "Smart contracts that detect security issues",
            "Users who report bugs",
            "Tokens used for staking",
            "Decentralized applications"
        ],
        correct: 0
    },
    {
        question: "How do Operators in Drosera achieve consensus?",
        answers: [
            "Through a central authority",
            "By aggregating signatures using elliptic curve cryptography",
            "By voting on a centralized platform",
            "Through proof-of-stake mechanisms"
        ],
        correct: 1
    },
    {
        question: "What is the minimum number of signatures required for a claim to be valid in Drosera?",
        answers: ["1", "2", "3", "2/3 majority"],
        correct: 3
    },
    {
        question: "What happens if an Operator performs malicious or incorrect actions?",
        answers: [
            "They receive additional rewards",
            "They are slashed (penalized)",
            "They are promoted to a higher role",
            "They are ignored"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of slashing Operators in Drosera?",
        answers: [
            "To incentivize them to perform tasks",
            "To penalize malicious or incorrect actions",
            "To reward good behavior",
            "To increase their voting power"
        ],
        correct: 1
    },
    {
        question: "What does Drosera aim to reduce in the Ethereum ecosystem?",
        answers: ["Transaction fees", "Security risks and incident response time", "Block sizes", "Token supply"],
        correct: 1
    },
    {
        question: "Which of the following is a challenge addressed by Drosera?",
        answers: ["Insufficient security coverage in DeFi protocols", "High transaction fees", "Low token liquidity", "Centralized governance"],
        correct: 0
    },
    {
        question: "What is the main advantage of offloading security infrastructure to Operators?",
        answers: ["Increased transaction speed", "Reduced gas costs for users", "Higher token rewards", "Centralized control"],
        correct: 1
    },
    {
        question: "What is the purpose of the 'TrapConfig' contract in Drosera?",
        answers: ["To manage user accounts", "To configure the logic for incident response", "To store transaction history", "To handle token transfers"],
        correct: 1
    },
    {
        question: "How does Drosera ensure the integrity of incident responses?",
        answers: [
            "By relying on a single authority",
            "Through a network of Operators with slashing conditions",
            "By using centralized servers",
            "Through manual intervention"
        ],
        correct: 1
    },
    {
        question: "What cryptographic method is used for signature aggregation in Drosera?",
        answers: ["RSA encryption", "Elliptic curve cryptography", "SHA-256 hashing", "AES encryption"],
        correct: 1
    },
    {
        question: "What is the role of the 'Aggregator' in Drosera's consensus process?",
        answers: ["To collect and aggregate signatures from Operators", "To execute smart contracts", "To validate transactions", "To stake tokens"],
        correct: 0
    },
    {
        question: "What happens when a 'Submission' is made in Drosera?",
        answers: [
            "A new block is created",
            "An incident response is executed on the Trap's TrapConfig contract",
            "A token transfer occurs",
            "A user is rewarded"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of the 'shouldRespond' claim in Drosera?",
        answers: [
            "To indicate whether an Operator believes an incident has occurred",
            "To vote on governance proposals",
            "To initiate a token swap",
            "To validate transactions"
        ],
        correct: 0
    },
    {
        question: "How does Drosera handle incident response in a decentralized manner?",
        answers: [
            "By using a central authority",
            "Through a network of Operators with consensus mechanisms",
            "By relying on manual interventions",
            "By using automated bots"
        ],
        correct: 1
    },
    {
        question: "What rewards do Operators receive in Drosera?",
        answers: ["Transaction fees", "Trap Rewards for performing incident detection and response", "Governance tokens", "Staking rewards"],
        correct: 1
    },
    {
        question: "What is the purpose of the reward system in Drosera?",
        answers: ["To incentivize Operators to perform their tasks", "To penalize malicious actions", "To distribute tokens to users", "To fund development"],
        correct: 0
    },
    {
        question: "How does Drosera ensure fairness in its reward system?",
        answers: [
            "By distributing rewards equally among all Operators",
            "Through slashing conditions for malicious actions",
            "By rewarding only the fastest Operators",
            "By allowing users to vote on rewards"
        ],
        correct: 1
    },
    {
        question: "What is the role of 'Trap Rewards' in Drosera?",
        answers: ["To reward users for staking tokens", "To incentivize Operators for performing incident detection and response", "To fund development", "To pay transaction fees"],
        correct: 1
    },
    {
        question: "What happens if an Operator fails to perform their duties correctly?",
        answers: [
            "They receive additional rewards",
            "They are penalized through slashing",
            "They are promoted to a higher role",
            "They are ignored"
        ],
        correct: 1
    },
    {
        question: "How does Drosera's reward system contribute to Ethereum's security?",
        answers: [
            "By increasing transaction fees",
            "By incentivizing decentralized incident response",
            "By centralizing control",
            "By reducing the number of transactions"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of slashing Operators in Drosera's economic model?",
        answers: ["To increase their rewards", "To penalize malicious or incorrect actions", "To promote them to higher roles", "To reduce their responsibilities"],
        correct: 1
    },
    {
        question: "How does Drosera's economic model enhance the Ethereum ecosystem?",
        answers: [
            "By reducing transaction speeds",
            "By incentivizing secure and timely incident responses",
            "By centralizing governance",
            "By increasing token inflation"
        ],
        correct: 1
    },
    {
        question: "What is the relationship between Drosera's reward system and Ethereum's trust network?",
        answers: [
            "Drosera creates a new trust network",
            "Drosera leverages Ethereum's existing trust network to bolster security",
            "Drosera operates independently of Ethereum's trust network",
            "Drosera competes with Ethereum's trust network"
        ],
        correct: 1
    },
    {
        question: "How does Drosera's economic model align with decentralized principles?",
        answers: [
            "By centralizing control",
            "By incentivizing decentralized incident response through Operators",
            "By reducing user participation",
            "By limiting access to rewards"
        ],
        correct: 1
    },
    {
        question: "What is the primary programming language used for Drosera's smart contracts?",
        answers: ["Solidity", "Rust", "Vyper", "Go"],
        correct: 0
    }
];

const drosera101Questions = [
    { question: "Where does the name Drosera come from?", answers: ["A genus of carnivorous plants", "A type of security software", "A famous blockchain project", "A DeFi token"], correct: 0 },
    { question: "What are Traps in Drosera?", answers: ["Smart contracts that detect issues", "Operators monitoring the network", "Types of DeFi tokens", "Alerts sent via email"], correct: 0 },
    { question: "What are Operators in Drosera?", answers: ["Individuals or organizations monitoring the network and executing Traps", "Smart contracts that detect exploits", "Decentralized applications", "Investors in DeFi protocols"], correct: 0 }
];

const allQuestions = [...litepaperQuestions, ...drosera101Questions];


let questions = [];
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 15;



const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const startBtn = document.getElementById("start-btn");
const discordUsernameInput = document.getElementById("discord-username");
const questionText = document.getElementById("question-text");
const answersDiv = document.getElementById("answers");
const timerEl = document.getElementById("timer");

// quizScreen.style.display = "none";

startBtn.addEventListener("click", () => {
    const username = discordUsernameInput.value.trim();
    if (!username) {
        alert("Please enter your Discord username!");
        return;
    }

    startScreen.classList.add("hidden");
    // quizScreen.classList.remove("hidden");

    console.log("Switched to quiz screen ✅");
    questions = getRandomQuestions(allQuestions, 15);
    showQuestion();
});



function getRandomQuestions(pool, count = 15) {
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function showQuestion() {
    if (currentQuestion >= questions.length) { endQuiz(); return; }

    const q = questions[currentQuestion];
    questionText.textContent = q.question;

    
    const card = quizScreen.querySelector(".card");
    card.classList.remove("question-slide-in");
    void card.offsetWidth; 
    card.classList.add("question-slide-in");

    answersDiv.innerHTML = "";
    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.className = "btn btn-outline-warning fade-in";
        btn.textContent = answer;
        btn.addEventListener("click", () => selectAnswer(index));
        answersDiv.appendChild(btn);
    });

    timeLeft = 15;
    timerEl.textContent = timeLeft;
    timerEl.classList.remove("timer-warning");

    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 5) timerEl.classList.add("timer-warning");
        else timerEl.classList.remove("timer-warning");

        if (timeLeft <= 0) {
            clearInterval(timer);
            currentQuestion++;
            showQuestion();
        }
    }, 1000);
}

function selectAnswer(selectedIndex) {
    clearInterval(timer);
    const btns = answersDiv.querySelectorAll("button");
    btns[selectedIndex].classList.add("btn-clicked");

    if (selectedIndex === questions[currentQuestion].correct) score++;

    setTimeout(() => {
        currentQuestion++;
        showQuestion();
    }, 300);
}

function endQuiz() {
    quizScreen.innerHTML = `
        <div class="card p-4 text-center w-100" style="max-width: 500px;">
            <h2>Quiz Completed!</h2>
            <p>Your Score: ${score} / ${questions.length}</p>
            <p>Enter your wallet address to claim rewards:</p>
            <input type="text" id="wallet" class="form-control mb-3" placeholder="Wallet Address">
            <button id="submit-wallet" class="btn btn-warning w-100">Submit</button>
        </div>
    `;

    document.getElementById("submit-wallet").addEventListener("click", () => {
        const wallet = document.getElementById("wallet").value.trim();
        if (!wallet) { alert("Please enter your wallet address!"); return; }
        claimRewards(wallet);
    });
}

function claimRewards(wallet) {
    quizScreen.innerHTML = `
        <div class="card p-4 text-center w-100" style="max-width: 500px;">
            <h2>Processing Transaction...</h2>
            <p>Sending rewards to ${wallet}.</p>
        </div>
    `;

    // Call backend with wallet + score
    fetch("api/claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wallet, score }) // score from quiz
    })
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            quizScreen.innerHTML = `
                <div class="card p-4 text-center w-100" style="max-width: 500px;">
                    <h2>Error!</h2>
                    <p>${data.error}</p>
                </div>
            `;
            return;
        }

        quizScreen.innerHTML = `
            <div class="card p-4 text-center w-100" style="max-width: 500px;">
                <h2>Success!</h2>
                <p>${data.message}</p>
                <p>Trx Hash: ${data.txHash ? data.txHash : 'Check backend for transaction hash'}</p>
                <p>Add CA: 0xFba1bc0E3d54D71Ba55da7C03c7f63D4641921B1 on Hoodi Testnet Network</p>
            </div>
        `;
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    })
    .catch(err => {
        console.error(err);
        quizScreen.innerHTML = `
            <div class="card p-4 text-center w-100" style="max-width: 500px;">
                <h2>Transaction Failed!</h2>
                <p>Something went wrong, please try again later.</p>
            </div>
        `;
    });
}


