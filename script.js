// List of valid access codes
const validCodes = [
  "1av85mzt",
  "bvmf223",
  "wAxfyn-wesgix-3puqha",
  "secureCode",
]; // Add more codes here

// Function to check the entered code
function checkCode() {
  const userCode = document.getElementById("access-code").value;
  const errorMessage = document.getElementById("error-message");

  if (validCodes.includes(userCode)) {
    document.getElementById("wall").style.display = "none"; // Hide the wall
    document.getElementById("main-content").classList.remove("hidden"); // Show website
  } else {
    errorMessage.textContent = "❌ Incorrect code! Try again.";
  }
}
