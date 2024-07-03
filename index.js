document.addEventListener("DOMContentLoaded", function() {
    // Select the paragraph element with id="text"
    const textElement = document.getElementById("text");
    
    // Change the text content of the paragraph element
    textElement.textContent = "This is really cool!";
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
  