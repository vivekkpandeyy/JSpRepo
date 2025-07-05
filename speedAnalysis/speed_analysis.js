let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // Set the test text
    document.getElementById("inputText").value = testText;
    
    // Clear user input and enable typing
    document.getElementById("userInput").value = "";
    document.getElementById("userInput").readOnly = false;
    document.getElementById("userInput").focus();
    
    // Reset results
    document.getElementById("output").innerHTML = "";
    
    // Record start time
    startTime = new Date().getTime();
    
    // Update button
    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
    button.classList.remove("start-btn");
    button.classList.add("end-btn");
}

function endTest() {
    // Record end time
    endTime = new Date().getTime();
    
    // Disable user input
    document.getElementById("userInput").readOnly = true;
    
    // Calculate metrics
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;
    
    // Word count (split by whitespace and filter empty strings)
    var typedWords = userTypedText.split(/\s+/).filter(function(word) {
        return word !== "";
    }).length;
    
    // Character count (including spaces)
    var charCount = userTypedText.length;
    
    // Words per minute
    var wpm = 0;
    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }
    
    // Accuracy calculation
    var originalWords = testText.split(/\s+/);
    var userWords = userTypedText.split(/\s+/);
    var correctWords = 0;
    
    for (let i = 0; i < Math.min(originalWords.length, userWords.length); i++) {
        if (originalWords[i] === userWords[i]) {
            correctWords++;
        }
    }
    
    var accuracy = typedWords > 0 ? Math.round((correctWords / originalWords.length) * 100) : 0;
    
    // Display results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <h2>Typing Test Results:</h2>
        <p><strong>Text Length:</strong> ${testText.length} characters</p>
        <p><strong>Characters Typed:</strong> ${charCount}</p>
        <p><strong>Words Typed:</strong> ${typedWords}</p>
        <p><strong>Time Elapsed:</strong> ${timeElapsed.toFixed(2)} seconds</p>
        <p><strong>Words Per Minute (WPM):</strong> ${wpm}</p>
        <p><strong>Accuracy:</strong> ${accuracy}%</p>
    `;
    
    // Reset button
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
    button.classList.remove("end-btn");
    button.classList.add("start-btn");
}