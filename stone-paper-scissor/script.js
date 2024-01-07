let items = [null, "Stone", "Paper", "Scissor"];

function displayStone() {
  const btn = document.getElementById("stone");
  const myResult = document.getElementById("myResult");
  const comResult = document.getElementById("comResult");
  const message = document.getElementById("message");
  const myScore = document.getElementById("myScore");
  const compScore = document.getElementById("comScore");
  const finalMsg = document.getElementById("final-msg");
  myResult.innerHTML = btn.value;
  comResult.innerHTML = items[Math.trunc(Math.random() * 3) + 1];

  if (myResult.innerHTML === "Stone" && comResult.innerHTML === "Scissor") {
    message.innerHTML = "Your Point";
    myScore.value = parseInt(myScore.value) + 1;
  } else if (
    myResult.innerHTML === "Stone" &&
    comResult.innerHTML === "Paper"
  ) {
    compScore.value = parseInt(compScore.value) + 1;
    message.innerHTML = "Loss";
  } else if (
    myResult.innerHTML === "Stone" &&
    comResult.innerHTML === "Stone"
  ) {
    message.innerHTML = "Draw";
  }

  if (myResult.innerHTML === "Paper" && comResult.innerHTML === "Stone") {
    message.innerHTML = "Your Point";
    myScore.value = parseInt(myScore.value) + 1;
  } else if (
    myResult.innerHTML === "Paper" &&
    comResult.innerHTML === "Scissor"
  ) {
    compScore.value = parseInt(compScore.value) + 1;
    message.innerHTML = "Loss";
  } else if (
    myResult.innerHTML === "Paper" &&
    comResult.innerHTML === "Paper"
  ) {
    message.innerHTML = "Draw";
  }

  if (myResult.innerHTML === "Scissor" && comResult.innerHTML === "paper") {
    message.innerHTML = "Your Point";
    myScore.value = parseInt(myScore.value) + 1;
  } else if (
    myResult.innerHTML === "Scissor" &&
    comResult.innerHTML === "Stone"
  ) {
    compScore.value = parseInt(compScore.value) + 1;
    message.innerHTML = "Loss";
  } else if (
    myResult.innerHTML === "Scissor" &&
    comResult.innerHTML === "Scissor"
  ) {
    message.innerHTML = "Draw";
  }

  // FINAL RESULT:
  if (parseInt(myScore.value) === 5) {
    finalMsg.innerHTML = "You Won the match";
  } else if (parseInt(compScore.value) === 5) {
    finalMsg.innerHTML = "Bro Won the match";
  }
}

function displayPaper() {
  const btn = document.getElementById("paper");
  const myResult = document.getElementById("myResult");
  const comResult = document.getElementById("comResult");
  const message = document.getElementById("message");
  const myScore = document.getElementById("myScore");
  const compScore = document.getElementById("comScore");
  const finalMsg = document.getElementById("final-msg");
  myResult.innerHTML = btn.value;
  comResult.innerHTML = items[Math.trunc(Math.random() * 3) + 1];

  if (myResult.innerHTML === "Stone" && comResult.innerHTML === "Scissor") {
    message.innerHTML = "Your Point";
    myScore.value = parseInt(myScore.value) + 1;
  } else if (
    myResult.innerHTML === "Stone" &&
    comResult.innerHTML === "Paper"
  ) {
    compScore.value = parseInt(compScore.value) + 1;
    message.innerHTML = "Loss";
  } else if (
    myResult.innerHTML === "Stone" &&
    comResult.innerHTML === "Stone"
  ) {
    message.innerHTML = "Draw";
  }

  if (myResult.innerHTML === "Paper" && comResult.innerHTML === "Stone") {
    message.innerHTML = "Your Point";
    myScore.value = parseInt(myScore.value) + 1;
  } else if (
    myResult.innerHTML === "Paper" &&
    comResult.innerHTML === "Scissor"
  ) {
    compScore.value = parseInt(compScore.value) + 1;
    message.innerHTML = "Loss";
  } else if (
    myResult.innerHTML === "Paper" &&
    comResult.innerHTML === "Paper"
  ) {
    message.innerHTML = "Draw";
  }

  if (myResult.innerHTML === "Scissor" && comResult.innerHTML === "paper") {
    message.innerHTML = "Your Point";
    myScore.value = parseInt(myScore.value) + 1;
  } else if (
    myResult.innerHTML === "Scissor" &&
    comResult.innerHTML === "Stone"
  ) {
    compScore.value = parseInt(compScore.value) + 1;
    message.innerHTML = "Loss";
  } else if (
    myResult.innerHTML === "Scissor" &&
    comResult.innerHTML === "Scissor"
  ) {
    message.innerHTML = "Draw";
  }

  // FINAL RESULT:
  if (parseInt(myScore.value) === 5) {
    finalMsg.innerHTML = "You Won the match";
  } else if (parseInt(compScore.value) === 5) {
    finalMsg.innerHTML = "Bro Won the match";
  }
}

function displayScissor() {
  const btn = document.getElementById("scissor");
  const myResult = document.getElementById("myResult");
  const comResult = document.getElementById("comResult");
  const message = document.getElementById("message");
  const myScore = document.getElementById("myScore");
  const compScore = document.getElementById("comScore");
  const finalMsg = document.getElementById("final-msg");
  myResult.innerHTML = btn.value;
  comResult.innerHTML = items[Math.trunc(Math.random() * 3) + 1];

  if (myResult.innerHTML === "Stone" && comResult.innerHTML === "Scissor") {
    message.innerHTML = "Your Point";
    myScore.value = parseInt(myScore.value) + 1;
  } else if (
    myResult.innerHTML === "Stone" &&
    comResult.innerHTML === "Paper"
  ) {
    compScore.value = parseInt(compScore.value) + 1;
    message.innerHTML = "Loss";
  } else if (
    myResult.innerHTML === "Stone" &&
    comResult.innerHTML === "Stone"
  ) {
    message.innerHTML = "Draw";
  }

  if (myResult.innerHTML === "Paper" && comResult.innerHTML === "Stone") {
    message.innerHTML = "Your Point";
    myScore.value = parseInt(myScore.value) + 1;
  } else if (
    myResult.innerHTML === "Paper" &&
    comResult.innerHTML === "Scissor"
  ) {
    compScore.value = parseInt(compScore.value) + 1;
    message.innerHTML = "Loss";
  } else if (
    myResult.innerHTML === "Paper" &&
    comResult.innerHTML === "Paper"
  ) {
    message.innerHTML = "Draw";
  }

  if (myResult.innerHTML === "Scissor" && comResult.innerHTML === "Paper") {
    message.innerHTML = "Your Point";
    myScore.value = parseInt(myScore.value) + 1;
  } else if (
    myResult.innerHTML === "Scissor" &&
    comResult.innerHTML === "Stone"
  ) {
    compScore.value = parseInt(compScore.value) + 1;
    message.innerHTML = "Loss";
  } else if (
    myResult.innerHTML === "Scissor" &&
    comResult.innerHTML === "Scissor"
  ) {
    message.innerHTML = "Draw";
  }

  // FINAL RESULT:
  if (parseInt(myScore.value) === 5) {
    finalMsg.innerHTML = "You Won the match";
  } else if (parseInt(compScore.value) === 5) {
    finalMsg.innerHTML = "Bro Won the match";
  }
}

// document.addEventListener("DOMContentLoaded", function () {
//   const num = document.getElementById("num").value;
//   console.log(num);
//   console.log(typeof num);
// });
//   if (myResult.innerHTML === "Stone" && comResult.innerHTML === "Paper") {
//     message.innerHTML = "Stone loses -- paper Wins!";
//     myScore.value = parseInt(myScore.value) + 1
//   } else if (
//     myResult.innerHTML === "Stone" &&
//     comResult.innerHTML === "Scissor"
//   ) {
//     message.innerHTML = "Stone Wins -- Scissor Loses";
//     myScore.value = parseInt(myScore.value) + 1;
//   } else if (
//     myResult.innerHTML === "Paper" &&
//     comResult.innerHTML === "Scissor"
//   ) {
//     message.innerHTML = "Paper Loses -- Scissor Wins";
//     myScore.value = parseInt(myScore.value) + 1;
//   } else if (
//     myResult.innerHTML === "Paper" &&
//     comResult.innerHTML === "Stone"
//   ) {
//     message.innerHTML = "Paper Wins -- Stone Loses";
//     myScore.value = parseInt(myScore.value) + 1;
//   } else if (
//     myResult.innerHTML === "Scissor" &&
//     comResult.innerHTML === "Stone"
//   ) {
//     message.innerHTML = "Scissor Loses -- Stone Wins";
//     myScore.value = parseInt(myScore.value) + 1;
//   } else if (
//     myResult.innerHTML === "Scissor" &&
//     comResult.innerHTML === "Paper"
//   ) {
//     message.innerHTML = "Scissor Wins -- Paper Loses";
//     myScore.value = parseInt(myScore.value) + 1;
//   } else {
//     message.innerHTML = "DRAW -- No Points!";
//     compScore.value = parseInt(compScore.value) + 1;
//   }
// }
