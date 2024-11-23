<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link your external CSS -->
    <script>
        // JavaScript for form validation
        function validateForm() {
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
    </div>
</body>
</html>
