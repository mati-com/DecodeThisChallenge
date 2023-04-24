// Define a function that encrypts a text using a translation object
function encriptar(traduccion) {
  // Select the warning element and hide it by default
  var warning = document.querySelector("#warning");
  warning.style.display = "none";

  // Get the input text from the textarea element
  var texto = document.querySelector("#text").value;

  // Select the default and result areas
  var area_default = document.querySelector("#default");
  var area_result = document.querySelector("#result");

  // Check if the input text is not empty and contains only lowercase letters or spaces
  if (texto && /^[a-z ]+$/.test(texto)) {
    // Initialize an empty output string
    var out = "";

    // Loop through each character of the input text
    for (var i = 0; i < texto.length; i++) {
      // If the character is a vowel, replace it with the corresponding value from the translation object
      // Otherwise, keep it as it is
      out += traduccion[texto[i]] || texto[i];
    }

    // Hide the default area and show the result area with the output text
    area_default.classList.add("invisible");
    area_result.classList.remove("invisible");
    document.querySelector("#textOut").innerHTML = out;
  } else {
    // If the input text is invalid, show the warning element with red color and large font size
    warning.style.display = "block";
    warning.style.color = "red";
    warning.style.fontSize = "16px";
  }
}

// Define a function that decrypts a text using a translation object
function desencriptar(traduccion) {
  // Select the warning element and hide it by default
  var warning = document.querySelector("#warning");
  warning.style.display = "none";

  // Get the input text from the textarea element
  var texto = document.querySelector("#text").value;

  // Select the default and result areas
  var area_default = document.querySelector("#default");
  var area_result = document.querySelector("#result");

  // Check if the input text is not empty and contains only lowercase letters or spaces
  if (texto && /^[a-z ]+$/.test(texto)) {
    // Loop through each vowel in the translation object
    for (var vowel in traduccion) {
      // Replace all occurrences of the translated vowel with the original vowel using a regular expression
      texto = texto.replace(new RegExp(traduccion[vowel], "g"), vowel);
    }

    // Hide the default area and show the result area with the output text
    area_default.classList.add("invisible");
    area_result.classList.remove("invisible");
    document.querySelector("#textOut").innerHTML = texto;
  } else {
    // If the input text is invalid, show the warning element with red color and large font size
    warning.style.display = "block";
    warning.style.color = "red";
    warning.style.fontSize = "16px";
  }
}

// Define a function that copies the output text to the clipboard
function clipboard() {
    // Select the output text element and use the navigator API to write its value to the clipboard
    const texto_out = document.querySelector("#textOut");
    navigator.clipboard.writeText(texto_out.value);
  }
  
  // Define a translation object that maps vowels to their encrypted values
  var traduccion = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };
  
  // Select the encrypt, decrypt and copy buttons
  const enc = document.querySelector("#Encr");
  const des = document.querySelector("#Decr");
  const copy = document.querySelector("#copy");
  
  // Add event listeners to the buttons that call the corresponding functions
  Encr.addEventListener("click", function () {
    encriptar(traduccion);
  });
  Decr.addEventListener("click", function () {
    desencriptar(traduccion);
  });
  copy.addEventListener("click", function () {
    clipboard();
  });