const text = "Abdul Kabeer.";
const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".ak").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    // Increase the delay for a slower typing effect
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]) + 200); // Added 200 ms to the existing interval
  } else {
    // Start clearing the text letter by letter
    clearText(arr.length);
  }
}

function clearText(length) {
  if (length > 0) {
    const currentText = document.querySelector(".ak").textContent;
    document.querySelector(".ak").textContent = currentText.slice(0, -1); // Remove the last letter
    setTimeout(function () {
      clearText(length - 1);
    }, 100); // Adjust the speed of clearing
  } else {
    // After clearing, reset index and start over
    i = 0;
    setTimeout(function () {
      dashOut(paragraph);
    }, 1000); // Delay before starting over
  }
}

function interval(letter) {
  console.log(letter);
  if (letter === ";" || letter === "." || letter === ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
