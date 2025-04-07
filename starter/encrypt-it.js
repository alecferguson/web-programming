/*
 * Starter file
 */
(function () {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * Init runs on start up, here we are creating event handlers
   */
  function init() {
    // Setting up Event Handlers
    console.log("Window loaded!");
    let encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleClick);
    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  /**
   * Handles encrypt button logic
   */
  function handleClick() {
    console.log("Button clicked!");
    let input = document.getElementById("input-text").value;
    let encryptedText = shiftCipher(input);
    document.getElementById("result").innerText = encryptedText;
  }

  /**
   * Handles reset button logic
   */
  function handleReset() {
    document.getElementById("result").innerText = "";
    document.getElementById("input-text").value = "";
  }

  /**
   * Returns an encrypted version of the given text, where
   * each letter is shifted alphabetically ahead by 1 letter,
   * and 'z' is shifted to 'a' (creating an alphabetical cycle).
   */
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < "a" || text[i] > "z") {
        result += text[i];
      } else if (text[i] == "z") {
        result += "a";
      } else {
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }
})();
