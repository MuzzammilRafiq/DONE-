let entry = document.querySelector("table");
let resetButton = document.querySelector("button");
let count = 0;
let entryElement = "";
let arr1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let arr = new Array(9);
let B = false;
let endgame = true;

document.getElementById("result").innerText = "Player 'O' turn";

entry.addEventListener("click", function (e) {
  let alpha = parseInt(e.target.id);

  if (count < 9 && document.getElementById(ap).innerText == "") {
    if (entryElement == "O" && endgame) {
      document.getElementById(ap).innerText = "X";
      count++;
      entryElement = "X";
      arr[alpha - 1] = "X";
      document.getElementById("result").innerText = "Player 'O' turn";
    } else {
      if (endgame) {
        document.getElementById(ap).innerText = "O";
        count++;
        entryElement = "O";
        arr[alpha - 1] = "O";
        document.getElementById("result").innerText = "Player 'X' turn";
      }
    }
  }

  if (count >= 4) {
    if (
      (arr[0] == "X" && arr[1] == "X" && arr[2] == "X") ||
      (arr[3] == "X" && arr[4] == "X" && arr[5] == "X") ||
      (arr[6] == "X" && arr[7] == "X" && arr[8] == "X") ||
      (arr[0] == "X" && arr[4] == "X" && arr[8] == "X") ||
      (arr[2] == "X" && arr[4] == "X" && arr[6] == "X") ||
      (arr[0] == "X" && arr[3] == "X" && arr[6] == "X") ||
      (arr[4] == "X" && arr[1] == "X" && arr[7] == "X") ||
      (arr[8] == "X" && arr[5] == "X" && arr[2] == "X")
    ) {
      document.getElementById("result").innerText = "Player 'X' won";
      B = true;
      endgame = false;
    } else if (
      (arr[0] == "O" && arr[1] == "O" && arr[2] == "O") ||
      (arr[3] == "O" && arr[4] == "O" && arr[5] == "O") ||
      (arr[6] == "O" && arr[7] == "O" && arr[8] == "O") ||
      (arr[0] == "O" && arr[4] == "O" && arr[8] == "O") ||
      (arr[2] == "O" && arr[4] == "O" && arr[6] == "O") ||
      (arr[0] == "O" && arr[3] == "O" && arr[6] == "O") ||
      (arr[4] == "O" && arr[1] == "O" && arr[7] == "O") ||
      (arr[8] == "O" && arr[5] == "O" && arr[2] == "O")
    ) {
      document.getElementById("result").innerText = "Player 'O' won";
      B = true;
      endgame = false;
    } else;
  }
  if (count == 9 && !B) {
    document.getElementById("result").innerText = "No one won";
  }
});

resetButton.addEventListener("click", function () {
  endgame = true;
  B = false;
  count = 0;
  arr1.forEach((e) => {
    document.getElementById(e).innerText = "";
    arr[parseInt(e) - 1] = "";
  });
  if (entryElement == "O") document.getElementById("result").innerText = "Player 'X' turn";
  else document.getElementById("result").innerText = "Player 'O' turn";
});
