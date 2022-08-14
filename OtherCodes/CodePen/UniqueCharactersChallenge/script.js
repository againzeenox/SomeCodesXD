// https://patrikrizek.github.io/

console.clear();

const {
  core: { describe, it, expect, run },
  prettify
} = window.jestLite;

document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});

function displayResult() {
  const uniqueText = document.getElementById("unique-text").value;
  const agreeWrapper = document.querySelector(".wrapper");
  const agreeForm = document.querySelector(".form-start");

  const charactersOnly = /^[A-Za-z\s]+$/;

  if (!charactersOnly.test(uniqueText)) {
    document.getElementById("unique-text").select();
    alert("Only letters are allowed. No spacing on beginning and the end.");
  } else {
    agreeWrapper.classList.remove("confirmed", "denied");
    agreeForm.classList.remove("confirmed", "denied");

    if (testUniqueChars(uniqueText)) {
      agreeWrapper.classList.add("confirmed");
      agreeForm.classList.add("confirmed");
    } else {
      agreeWrapper.classList.add("denied");
      agreeForm.classList.add("denied");
    }
  }
}

function testUniqueChars(text) {
  // This is where you write the implementation, CodePen Challenge friends!
  const unique = new Set(text);
  return text.length == unique.size;
}

// These are the tests you are trying to make pass, if you choose to use the test suite.
describe("testUniqueChars", () => {
  it("has unique chars", () => {
    expect(testUniqueChars("Code")).toBe(true);
    expect(testUniqueChars("Pen")).toBe(true);
    expect(testUniqueChars("CodePen")).toBe(false);
    expect(testUniqueChars("Challenge")).toBe(false);
  });
});

prettify.toHTML(run(), document.body);
