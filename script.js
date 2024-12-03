
        let currentQuestionIndex = 0;
        const totalQuestions = 10;
        let timerInterval;
        const answers = {
            q1: "B",
            q2: "A",
            q3: "B",
            q4: "B",
            q5: "A",
            q6: "B",
            q7: "C",
            q8: "B",
            q9: "B",
            q10: "C"
        };

        function startQuiz() {
            const name = document.getElementById("name").value;
            const id = document.getElementById("id").value;
            if (!name || !id) {
                alert("Please enter your name and ID.");
                return;
            }
            document.getElementById("user-info").classList.add("hidden");
            document.getElementById("quiz-form").classList.remove("hidden");
            document.getElementById("timer").classList.remove("hidden");
            showQuestion();
            startTimer(120);
        }

        function startTimer(duration) {
            const timer = document.getElementById("timer");
            let timeRemaining = duration;
            timerInterval = setInterval(() => {
                const minutes = Math.floor(timeRemaining / 60);
                const seconds = timeRemaining % 60;
                timer.textContent = `Time Left: ${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
                if (timeRemaining <= 0) {
                    clearInterval(timerInterval);
                    gradeQuiz();
                }
                timeRemaining--;
            }, 1000);
        }

        function showQuestion() {
            const allQuestions = document.querySelectorAll(".question");
            allQuestions.forEach(q => q.classList.add("hidden"));
            document.getElementById(`question-${currentQuestionIndex}`).classList.remove("hidden");
            const nextButton = document.getElementById("next-button");
            const submitButton = document.querySelector('button[onclick="gradeQuiz()"]');
            if (currentQuestionIndex === totalQuestions - 1) {
                nextButton.classList.add("hidden");
                submitButton.classList.remove("hidden");
            } else {
                nextButton.classList.remove("hidden");
                submitButton.classList.add("hidden");
            }
        }

        function nextQuestion() {
            currentQuestionIndex++;
            showQuestion();
        }

        function gradeQuiz() {
            clearInterval(timerInterval);
            const form = document.getElementById("quiz-form");
            const formData = new FormData(form);
            let score = 0;
            for (const [key, value] of formData.entries()) {
                if (answers[key] === value) score++;
            }
            const name = document.getElementById("name").value;
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = `<p>${name}, you scored ${score} out of ${totalQuestions}!</p>`;
            resultDiv.classList.remove("hidden");
            document.getElementById("quiz-form").classList.add("hidden");
            document.getElementById("timer").classList.add("hidden");
        }
        // JavaScript for form validation
       /* function validateForm() {
            // Get form elements
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            let errorMessage = '';

            // Validate Name
            if (name === '') {
                errorMessage += 'Name is required.\n';
            }

            // Validate Email
            const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // Basic email regex
            if (email === '') {
                errorMessage += 'Email is required.\n';
            } else if (!emailPattern.test(email)) {
                errorMessage += 'Please enter a valid email address.\n';
            }

            // Validate Subject
            if (subject === '') {
                errorMessage += 'Subject is required.\n';
            }

            // Validate Message
            if (message === '') {
                errorMessage += 'Message is required.\n';
            }

            // Show error message or submit the form
            if (errorMessage !== '') {
                alert(errorMessage);
                return false; // Prevent form submission
            }

            alert('Form submitted successfully!');
            return true; // Allow form submission
}
          function calculateScore() {
    // Define correct answers
    const correctAnswers = {
        q1: "Charles Babbage",
        q2: "Canberra",
        q3: "Au",
        q4: "Jane Austen",
        q5: "Jupiter",
        q6: "Leonardo da Vinci",
        q7: "Diamond",
        q8: "Alexander Fleming",
        q9: "299,792 km/s",
        q10: "Nitrogen"
    };

    let score = 0;
    const form = document.getElementById('quiz-form');
    const resultsDisplay = document.getElementById('score-display');

    // Check each question's answer
    for (const question in correctAnswers) {
        const userAnswer = form[question]?.value;
        if (userAnswer === correctAnswers[question]) {
            score++;
        }
    }

    // Display the score
    const totalQuestions = Object.keys(correctAnswers).length;
    resultsDisplay.textContent = `You scored ${score} out of ${totalQuestions}!`;
    return false; // Prevent form submission

        }
    </script>
</head>
<body>
    <div class="container">
        <h1>Contact Us</h1>
        <p>Please fill out the form below to get in touch with us.</p>
        <form onsubmit="return validateForm();">
            <!-- Name -->
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your full name" required>
            <br>
            <!-- Email -->
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your email address" required>
            <br>
            <!-- Subject -->
            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" placeholder="Subject of your message" required>
            <br>
            <!-- Message -->
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" placeholder="Your message here" required></textarea>
            <br>
            <!-- Submit Button -->
            <button type="submit">Send Message</button>
        </form>
    </div>*/

