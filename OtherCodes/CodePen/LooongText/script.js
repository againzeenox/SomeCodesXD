import Splitting from "https://cdn.skypack.dev/splitting@1.0.6";
console.clear();

const textInput = document.querySelector("#text-input");
const repeatCount = document.querySelector("#repeat-count");
let currentWord = "";
const colors = ["#EE6352", "#59CD90", "#3FA7D6", "#FAC05E", "#F79D84"];

document.addEventListener("DOMContentLoaded", () => generateResult());

document.addEventListener("keyup", (e) => {
  if (e.key.match(/[a-zA-Z\s]/) && e.key.length == 1) {
    currentWord += e.key;
    generateResult();
  } else if (e.key === "Backspace") {
    currentWord = currentWord.slice(0, -1);
    generateResult();
  }
});

document.querySelector("#increment-vowels").addEventListener("click", () => {
  repeatCount.stepUp();
  generateResult();
  changeVowelColor();
});

document.querySelector("#decrement-vowels").addEventListener("click", () => {
  repeatCount.stepDown();
  generateResult();
  changeVowelColor();
});

document.querySelectorAll("button").forEach((b) =>
  b.addEventListener("keyup", (e) => {
    if (e.key == " ") e.preventDefault();
  })
);

repeatCount.addEventListener("input", () => generateResult());

function generateResult() {
  document.getElementById("result").innerHTML = longText(
    currentWord,
    repeatCount.value
  );
  Splitting({
    by: "chars"
  });
}

function longText(text, n) {
  text = !!text ? text : "Start typing...";
  const vowels = "aeiou".split("");
  return (
    text
      .split("")
      .map((letter) =>
        vowels.includes(letter.toLowerCase())
          ? `<span class="vowels" data-splitting>${letter.repeat(n)}</span>`
          : letter
      )
      .join("") + "<span class='word-cursor'>|</span>"
  );
}

function changeVowelColor() {
  document
    .querySelectorAll(".vowels")
    .forEach(
      (vowel) =>
        (vowel.style.color = colors[Math.floor(Math.random() * colors.length)])
    );
}
