const passwordInput = document.getElementById('passwordInput');
const feedbackText = document.getElementById('feedbackText');
passwordInput.addEventListener('input', (e) => {
  const val = e.target.value;
  const lowerVal = val.toLowerCase();
  let responseText = "Don't be shy, type something.";
  let responseColor = "#d6c0c0";
  if (val.length === 0){
    responseText = "I'm waiting...";
    responseColor = "#d2cdcd";
  } 
  else if (lowerVal.includes('password')){
    responseText = "I hope you don't have a girlfriend.";
    responseColor = "#ff4d4d";
  }
  else if (lowerVal.includes("pradeesh","idrees","ram")){
    responseText = "Using your own name? Truly a mastery of dumbness.";
    responseColor = "#ff4d4d"; 
  }
  else if (val === '1234' || val === '12345' || val === '123456' || val === '1234567' || val === '12345678'){
    responseText = "Ah, the classic stupidass combination.";
    responseColor = "#ff4d4d";
  } 
  else if (val.length < 5){
    responseText = "Are you even trying? Even a monkey thinks better than you";
    responseColor = "#ffaa00";
  } 
  else if (!/\d/.test(val)){
    responseText = "My grandmother's Wi-Fi is harder to hack than this.";
    responseColor = "#ffaa00";
  } 
  else if (!/[A-Z]/.test(val)){
    responseText = "Caps lock broken? Throw an uppercase letter in there.";
    responseColor = "#ffaa00";
  } 
  else if (val.length > 10){
    responseText = "Wow Finally a decent password..."
    responseColor = "#00e676"; 
  } 
  else{
    responseText = "Dayum Finallyyy!!!";
    responseColor = "#00e676";
  }
  feedbackText.textContent = responseText;
  feedbackText.style.color = responseColor;
});