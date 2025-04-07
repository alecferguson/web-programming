function enlargeText() {
  // Getting text area ID
  document.getElementById("textArea").style.fontSize = "24pt";
  // Creating an alert using JS
  alert("Hello, world!");
}

function fancifyText() {
  // Getting text from textArea
  let textArea = document.getElementById("textArea");
  // Styling text
  textArea.style.color = "blue";
  textArea.style.fontWeight = "bold";
  textArea.style.textDecoration = "underline";
}

function boringText() {
  // Getting text from textArea
  let textArea = document.getElementById("textArea");
  // Styling text
  textArea.style.color = "black";
  textArea.style.fontWeight = "normal";
  textArea.style.textDecoration = "none";
}

function moo() {
  let textArea = document.getElementById("textArea");
  let text = textArea.value.toUpperCase();

  // Moo Button logic, adds -Moo to the end of every sentence.
  let str = text.split(".");
  for (let i = 0; i < str.length - 1; i++) {
    let word = str[i].trim().split(" ");
    if (word.length > 0) {
      word[word.length - 1] += "-Moo";
    }
    str[i] = word.join(" ");
  }
  textArea.value = str.join(". ");
}
