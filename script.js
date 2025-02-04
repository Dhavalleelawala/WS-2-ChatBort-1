const chatboxBody = document.getElementById('chatbox-body');
const userInput = document.getElementById('user-input');

// Predefined responses for simple AI logic
const responses = {
    "hi": "Hello! How can I help you today?",
    "how are you": "I'm doing great! How about you?",
    "bye": "Goodbye! Have a great day!",
    "default": "Sorry, I didn't understand that."
};

// Function to send user message and bot's response
function sendMessage() {
    const message = userInput.value.trim();

    if (message) {
        // Display user message
        displayMessage(message, 'user');

        // Show typing indicator for the bot
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('typing-indicator');
        typingIndicator.innerHTML = '<span></span><span></span><span></span>';
        chatboxBody.appendChild(typingIndicator);

        // Display bot response after a short delay
        setTimeout(() => {
            const response = responses[message.toLowerCase()] || responses["default"];
            displayMessage(response, 'bot');
            typingIndicator.remove();  // Remove typing indicator after response
        }, 1500); // Typing delay
    }

    // Clear the input field
    userInput.value = '';
}

// Function to display messages in the chatbox
function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatboxBody.appendChild(messageElement);
    chatboxBody.scrollTop = chatboxBody.scrollHeight; // Auto-scroll to latest message
}

// Add event listener for the Enter key to send message
userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  // Prevent the default behavior (like adding a new line in the input field)
        sendMessage();  // Call sendMessage when Enter is pressed
    }
});
