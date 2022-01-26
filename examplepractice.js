const input =
  "If man was meant to stay on the ground, god would have given us roots.";
const normalizedInput = input.replace(/[^\w]/g, "").toLowerCase();
const length = normalizedInput.length;
const cols = Math.ceil(Math.sqrt(length));
const rows = Math.ceil(length / cols);

var cypherText = "";

for (let i = 0; i < cols; i++) {
  for (let j = i; j < normalizedInput.length; j += cols) {
    cypherText += normalizedInput[j];
  }
  cypherText += "\n";
}

console.log(cypherText);
