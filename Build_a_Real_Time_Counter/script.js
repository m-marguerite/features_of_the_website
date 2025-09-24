// DOM elements
const textArea = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
const maxLength = 50;

// Initialize counter display
function updateCharCount() {
  let currentText = textArea.value;

  // Trim text if it exceeds maxLength
  if (currentText.length >= maxLength) {
    currentText = currentText.slice(0, maxLength);
    textArea.value = currentText;
  }

  const currentCount = currentText.length;

  // Update display text
  charCount.textContent = `Character Count: ${currentCount}/${maxLength}`;

  // Apply red styling when limit is reached
  if (currentCount >= maxLength) {
    charCount.style.color = "red";
    charCount.classList.add("limit-reached");
  } else {
    charCount.style.color = "";
    charCount.classList.remove("limit-reached");
  }
}

// Event listener for real-time updates
textArea.addEventListener("input", updateCharCount);

// Also listen for paste events to handle pasted text
textArea.addEventListener("paste", function () {
  // Use setTimeout to allow paste to complete before updating
  setTimeout(updateCharCount, 0);
});

// Initialize display on page load
updateCharCount();
