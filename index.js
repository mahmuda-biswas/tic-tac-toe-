var resetButton = document.getElementById("restartBtn");

var count = 1;
function fill(selectedElement) {
  if (count <= 9) {
    if (count % 2 != 0) {
      document.getElementById(selectedElement.id).innerHTML = "x";
    } else {
      document.getElementById(selectedElement.id).innerHTML = "0";
    }
    count++;
    if (winner()) {
      alert("winner");
      reset();
    }
  } else {
    alert("Match Draw");
    reset();
  }
}

function reset() {
  for (var i = 1; i <= 9; i++) {
    document.querySelectorAll(".box" + i).innerHTML = "";
    console.log(box);
  }
  count = 1;
}

function winner() {
  if (
    document.getElementById("1").innerHTML != "" &&
    document.getElementById("1").innerHTML != "" &&
    document.getElementById("2").innerHTML != "" &&
    document.getElementById("0").innerHTML != "" &&
    document.getElementById("1").innerHTML &&
    document.getElementById("0").innerHTML != "" &&
    document.getElementById("1").innerHTML != "" &&
    document.getElementById("2").innerHTML != "" &&
    document.getElementById("3").innerHTML != "" &&
    document.getElementById("1").innerHTML
  )
    return true;
}
