// Étape JavaScript : sélectionne les éléments de la page ici.

function Str_Random(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

  // Loop to generate characters for the specified length
  for (let i = 0; i < length; i++) {
    const randomInd = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomInd);
  }
  return result;
}

function Generate() {
  document.getElementById("curruentvalue").value = Str_Random(16);
}
// Essaie ensuite de faire apparaître « Bonjour » au clic.
let input = document.getElementById("curruentvalue");

// Copy the text of the input
copyText = (e) => {
  // We check that the input is not empty
  if (input.value.length) {
    // We copy the text it contains into the clipboard
    navigator.clipboard.writeText(input.value).then(() => {
      // We confirm the action in the console
      console.log("Text Copied !");
    });
  } else {
    console.log("The input is empty ");
  }
};
