// --- Activity 1: Fact Recall Quiz Data ---
const quizQuestions = [
    {
        question: "Which dispute was settled by the League supervising a vote (plebiscite) and then dividing the area between Germany and Poland?",
        options: ["Corfu Crisis", "Upper Silesia", "Vilna Dispute", "Greece-Bulgaria"],
        answer: "Upper Silesia",
        fact: "Upper Silesia (1921) was successfully divided by the League after a plebiscite, which prevented a war between Germany and Poland."
    },
    {
        question: "In which crisis did a powerful state (Italy/Mussolini) ignore the League and settle the dispute directly through the Conference of Ambassadors?",
        options: ["Vilna Dispute", "Upper Silesia", "Corfu Crisis", "Greece-Bulgaria"],
        answer: "Corfu Crisis",
        fact: "The Corfu Crisis (1923) showed the League's weakness when a strong state like Italy defied it and bypassed its authority."
    },
    {
        question: "The League successfully ordered Greece to withdraw and pay compensation to Bulgaria after a border clash in which year?",
        options: ["1920", "1921", "1923", "1925"],
        answer: "1925",
        fact: "The Greece-Bulgaria dispute (1925) was a clear success, showing the League could act quickly and enforce rulings on smaller states."
    },
    {
        question: "Which failure demonstrated that the League was too weak to protect a smaller country (Lithuania) when a stronger member (Poland) refused to withdraw its forces?",
        options: ["Corfu Crisis", "Upper Silesia", "Vilna Dispute", "Aaland Islands"],
        answer: "Vilna Dispute",
        fact: "The Vilna Dispute (1920) was a failure because Poland ignored the League's order to withdraw, and the League did nothing serious to enforce it."
    }
];

let currentQuestionIndex = 0;
let score = 0;

// --- Activity 1: Quiz Functions ---

function loadQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        const q = quizQuestions[currentQuestionIndex];
        const quizArea = document.getElementById('quiz-area');
        quizArea.innerHTML = `
            <div class="quiz-question">
                <p>Question ${currentQuestionIndex + 1}: ${q.question}</p>
                <div class="quiz-options">
                    ${q.options.map(option => `
                        <label>
                            <input type="radio" name="answer" value="${option}">
                            ${option}
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
        document.getElementById('feedback').className = '';
        document.getElementById('feedback').innerHTML = '';
    } else {
        document.getElementById('quiz-area').innerHTML = '<h2>Quiz Complete!</h2><p>Review the facts below and start the Essay Builder!</p>';
        document.querySelector('#quiz-section button').disabled = true;
    }
    updateScoreDisplay();
}

function checkQuiz() {
    const q = quizQuestions[currentQuestionIndex];
    const selected = document.querySelector('input[name="answer"]:checked');
    const feedback = document.getElementById('feedback');
    
    if (!selected) {
        feedback.className = 'failure';
        feedback.innerHTML = 'Please select an answer!';
        return;
    }

    if (selected.value === q.answer) {
        score++;
        feedback.className = 'success';
        feedback.innerHTML = `✅ **Correct!** ${q.fact}`;
    } else {
        feedback.className = 'failure';
        feedback.innerHTML = `❌ **Incorrect.** The correct answer was **${q.answer}**. ${q.fact}`;
    }
    
    currentQuestionIndex++;
    updateScoreDisplay();
    // Use a timeout to show feedback then load the next question
    setTimeout(loadQuestion, 3000); 
}

function updateScoreDisplay() {
    document.getElementById('score-display').textContent = `Score: ${score}/${quizQuestions.length}`;
}

// --- Activity 2: Essay Builder Data ---
const essayPoints = [
    { id: 'us', text: "Success: Upper Silesia (1921) - Fair division after a plebiscite between Germany and Poland.", type: 'success' },
    { id: 'gb', text: "Success: Greece-Bulgaria (1925) - Quick action; ordered Greece to withdraw and pay compensation. Greece obeyed.", type: 'success' },
    { id: 'v', text: "Failure: Vilna (1920) - Poland ignored the League's order to withdraw, and the League did nothing to enforce it.", type: 'failure' },
    { id: 'c', text: "Failure: Corfu Crisis (1923) - Italy (Mussolini) defied the League, bypassed it, and used force to get compensation.", type: 'failure' },
    { id: 'p1', text: "Thesis: The League was more successful in small border disputes between weaker states.", type: 'success' },
    { id: 'p2', text: "Thesis: The League struggled with serious challenges from stronger states that refused to accept its authority.", type: 'failure' }
];

// --- Activity 2: Essay Builder Functions ---

function initEssayBuilder() {
    const pool = document.getElementById('essay-points-pool');
    pool.innerHTML = essayPoints.map(point => 
        `<div id="${point.id}" class="essay-point" draggable="true" ondragstart="drag(event)">${point.text}</div>`
    ).join('');
}

function allowDrop(ev) {
    ev.preventDefault(); // Allows the drop
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id); // Store the ID of the dragged element
}

function drop(ev, targetType) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text"); // Get the dragged element's ID
    const draggedElement = document.getElementById(data);
    
    // Simple check to ensure dropping into a container, not on another item
    if (ev.target.classList.contains('essay-drag-area')) {
        draggedElement.dataset.target = targetType; // Mark which target area it was dropped into
        ev.target.appendChild(draggedElement);
    }
}

function checkEssayPlan() {
    let correctCount = 0;
    let totalPoints = essayPoints.length;
    const feedback = document.getElementById('essay-feedback');
    feedback.innerHTML = '';
    
    essayPoints.forEach(point => {
        const element = document.getElementById(point.id);
        const actualTargetType = element.parentElement.id.includes('successes') ? 'success' : 
                                 element.parentElement.id.includes('failures') ? 'failure' : 'pool';

        if (actualTargetType === point.type) {
            correctCount++;
            element.style.backgroundColor = '#9aeab7'; // Green for correct
        } else if (actualTargetType !== 'pool') {
            element.style.backgroundColor = '#ff8f8f'; // Red for incorrect
        }
        // If it's still in the pool, leave the original yellow color
    });

    if (correctCount === totalPoints) {
        feedback.className = 'success';
        feedback.innerHTML = `🎉 **Perfect Essay Plan!** You correctly sorted all ${totalPoints} points. You are ready to write a balanced essay!`;
    } else {
        feedback.className = 'failure';
        feedback.innerHTML = `⚠️ **Good start!** You correctly sorted **${correctCount} out of ${totalPoints}** points. The highlighted points need review. Check your facts!`;
    }
}

// Start the game when the script loads
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
    initEssayBuilder();
});