const ten = document.querySelector("#ten");
const eight = document.querySelector("#eight");
const seven = document.querySelector("#seven");
const minus10 = document.querySelector("#minus10");
const plus1 = document.querySelector("#plus1");
const minus1 = document.querySelector("#minus1");

let goldTurn = document.querySelectorAll(".goldTurn");
let blackTurn = document.querySelectorAll(".blackTurn");

let menuDiv = document.querySelector("#menuDiv");
let menu = document.querySelector("#menu");

// $(document).ready(function () {
//   $("#menuDiv").click(function (event) {
//     event.stopPropagation();
//     $("#menu").show();
//   });
// });

function openMenu(e) {
  e.stopPropagation();
  let menu = document.querySelector("#menu");
  menu.style.display = "block";
  menu.style.width = "250px";
}

let menuIcon = document.querySelector("#menuIcon");
menuIcon.addEventListener("click", openMenu);

$(document).ready(function () {
  $("#menu").click(function () {
    $("#menu").css({"width": "0"});
  });
});

$(document).ready(function () {
  $("body").click(function (event) {
    event.stopPropagation();
    $("#menu").css({"width": "0"});
  });
});

let del = document.querySelector("#delete");

// const base = document.querySelector("#base");
// const baseblk = document.querySelector("#baseblk");
// const baseylo = document.querySelector("#baseylo");

// let [gTurn1, gTurn2, gTurn3, gTurn4, gTurn5, gTurn6, gTurn7, gTurn8] = goldTurn;
// let [bTurn1, bTurn2, bTurn3, bTurn4, bTurn5, bTurn6, bTurn7, bTurn8] =
//   blackTurn;

const baseDiv = document.querySelector("#baseDiv");
const yloDiv = document.querySelector("#yloDiv");
const blkDiv = document.querySelector("#blkDiv");

//figure out how to go down to 0 points after everything in array is deleted
//===========================================
// Make an array of scores
let goldScores = [0];
let blackScores = [0];

let goldArray = document.querySelector("#goldArray");
let blackArray = document.querySelector("#blackArray");

// Frames selection
let allFrames = document.querySelectorAll(".allFrames");

//using the change event listener for choosing how many frames. The howMany variable is declared in the function. Interesting.
howMany.addEventListener("change", frameSelect);

// let submit = document.querySelector("#submit");
// submit.addEventListener("click", frameSelect);

// Frames one through four, 5 to 8, 9 and 10
const onefr = document.querySelectorAll(".onefr");
const fvet = document.querySelectorAll(".fvet");
const ninten = document.querySelectorAll(".ninten");

function frameSelect() {
  let howMany = document.querySelector("#howMany").value;
  let onefr = document.querySelectorAll(".onefr");
  let fvet = document.querySelectorAll(".fvet");
  let ninten = document.querySelectorAll(".ninten");
  if (howMany == 4) {
    for (let one of onefr) {
      one.style.display = "table-cell";
    }
    for (let fv of fvet) {
      fv.style.display = "none";
    }
    for (let nin of ninten) {
      nin.style.display = "none";
    }
  } else if (howMany == 8) {
    for (let one of onefr) {
      one.style.display = "table-cell";
    }
    for (let fv of fvet) {
      fv.style.display = "table-cell";
    }
    for (let nin of ninten) {
      nin.style.display = "none";
    }
  } else {
    for (let one of onefr) {
      one.style.display = "table-cell";
    }
    for (let fv of fvet) {
      fv.style.display = "table-cell";
    }
    for (let nin of ninten) {
      nin.style.display = "table-cell";
    }
  }
}

// making names editable
function editing(e) {
  e.target.contentEditable = true;
}

//Make uneditable after string length too long. This part is not working
function unedit(e) {
  if (e.target.innerText.length > 7) {
    e.target.contentEditable = false;
  }
}

let goldName = document.querySelector(".GoldName");
let blackName = document.querySelector(".BlackName");
goldName.addEventListener("click", editing);
blackName.addEventListener("click", editing);
goldName.addEventListener("change", unedit);
blackName.addEventListener("change", unedit);

// highlighting next round frame and adding score of previous round
function nextRound(next, prior, after) {
  if (prior !== null && after.innerText == "") {
    next.innerText = parseInt(prior.innerText);
  }
}

// Looping the nextRound function for gold team.  It works!!!
for (let i = 1; i < goldTurn.length; i++) {
  let goldTurn = document.querySelectorAll(".goldTurn");
  goldTurn[i].addEventListener("click", () => {
    nextRound(goldTurn[i], goldTurn[i - 1], goldTurn[i + 1]);
  });
}

// Looping nextRound for black team.
for (let i = 1; i < blackTurn.length; i++) {
  let blackTurn = document.querySelectorAll(".blackTurn");
  blackTurn[i].addEventListener("click", () => {
    nextRound(blackTurn[i], blackTurn[i - 1], blackTurn[i + 1]);
  });
}

// this will turn off the click ability if next frame is higher number
const turnOff = () => {
  let goldTurn = document.querySelectorAll(".goldTurn");
  for (let i = 0; i <= goldTurn.length; i++) {
    goldTurn[i].addEventListener.length("click", function () {
      if (goldTurn[i + 1] > goldTurn[i]) {
      }
    });
  }
};

// adds 'not yet' to frames
for (let i = 1; i < goldTurn.length; i++) {
  goldTurn[i].addEventListener("click", () => {
    if (goldTurn[i - 1].innerText == "") {
      goldTurn[i].innerText = "";
    }
  });
}
for (let i = 1; i < blackTurn.length; i++) {
  blackTurn[i].addEventListener("click", () => {
    if (blackTurn[i - 1].innerText == "") {
      blackTurn[i].innerText = "";
    }
  });
}

// adding yellow bg and yourTurn class
$(document).ready(function () {
  $(".goldTurn").click(function () {
    $(".goldTurn").removeClass("yellowBG yourTurn");
    $(".blackTurn").removeClass("yourTurn");
    $(this).addClass("yellowBG yourTurn");
    $("#yloDiv").show();
    $("#yellowDisk").show();
    $("#blackDisk").hide();
    $("#blkDiv").hide();
    $("#baseDiv").hide();
  });
});
// adding black bg and yourTurn class
$(document).ready(function () {
  $(".blackTurn").click(function () {
    $(".blackTurn").removeClass("blackBG yourTurn");
    $(".goldTurn").removeClass("yourTurn");
    $(this).addClass("blackBG yourTurn");
    $("#blkDiv").show();
    $("#blackDisk").show();
    $("#yellowDisk").hide();
    $("#yloDiv").hide();
    $("#baseDiv").hide();
  });
});

ten.addEventListener("click", () => {
  pushFunc(10);
});

eight.addEventListener("click", () => {
  pushFunc(8);
});

seven.addEventListener("click", () => {
  pushFunc(7);
});

minus10.addEventListener("click", () => {
  pushFunc(-10);
});

plus1.addEventListener("click", () => {
  pushFunc(1);
});
minus1.addEventListener("click", () => {
  pushFunc(-1);
});

// This is the function to add scores to both sides. adds to arrays and sums arrays.
function pushFunc(p) {
  let yourTurn = document.querySelector(".yourTurn");
  if (yourTurn.classList.contains("goldTurn") && yourTurn.innerText !== "") {
    goldScores.push(p);
    yourTurn.innerText = goldScores.reduce(sumFunction);
    goldArray.innerText = goldScores;
    console.log(goldScores.reduce(sumFunction));
  } else if (
    yourTurn.classList.contains("blackTurn") &&
    yourTurn.innerText !== ""
  ) {
    blackScores.push(p);
    yourTurn.innerText = blackScores.reduce(sumFunction);
    blackArray.innerText = blackScores;
    console.log(blackScores.reduce(sumFunction));
  }
}

// Undo last
const delFunc = () => {
  let yourTurn = document.querySelector(".yourTurn");
  if (yourTurn.classList.contains("goldTurn")) {
    goldScores.pop();
    yourTurn.innerText = goldScores.reduce(sumFunction);
    goldArray.innerText = goldScores;
  } else {
    blackScores.pop();
    yourTurn.innerText = blackScores.reduce(sumFunction);
    blackArray.innerText = blackScores;
  }
};

del.addEventListener("click", delFunc);

// adding up all in array
function sumFunction(total, value) {
  return total + value;
}

//reset scores
let reset = document.querySelector("#reset");
reset.addEventListener("click", resetScores);

function resetScores() {
  var reset = window.confirm("Reset scores to zero?");
  let blackTurn = document.querySelectorAll(".blackTurn");
  let goldTurn = document.querySelectorAll(".goldTurn");
  blackTurn[0].innerText = "0";
  goldTurn[0].innerText = "0";
  goldArray.innerHTML = 0;
  blackArray.innerHTML = 0;
  goldScores = [0];
  blackScores = [0];
  if (reset) {
    for (let i = 1; i <= goldTurn.length; i++) {
      if (blackTurn[i] != null) {
        blackTurn[i].innerText = "";
      }
      if (goldTurn[i] != null) {
        goldTurn[i].innerText = "";
      }
    }
  }
}

// Copy text of scores. Not working
let copyScores = document.querySelector("#copyScores");
copyScores.addEventListener("click", () => {
  selectElementContents(horzTable);
});

let horzTable = document.querySelector("#horizontalTable");

function selectElementContents(el) {
  var body = document.body,
    range,
    sel;
  if (document.createRange && window.getSelection) {
    range = document.createRange();
    sel = window.getSelection();
    sel.removeAllRanges();
    try {
      range.selectNodeContents(el);
      sel.addRange(range);
    } catch (e) {
      range.selectNode(el);
      sel.addRange(range);
    }
  } else if (body.createTextRange) {
    range = body.createTextRange();
    range.moveToElementText(el);
    range.select();
  }
  document.execCommand("Copy");
  alert(
    "Scores Copied! In spreadsheet, choose 'paste special' and 'values only'"
  );
}

// $( document ).ready(function() {
// 	$("#copyScores").click(function() {
// 		var export_type = $("#horizontalTable").data('export-type');
// 		$('#horizontalTable').tableExport({
// 			type : export_type,
// 			escape : 'false',
// 			ignoreColumn: []
// 		});
// 	});
// });

//Check this out!!!!!! This is how you get the params in the eventlistener function!
// gTurn2.addEventListener("click", () => {
//   tryThis(gTurn2, gTurn1);
// });

// function tryThis(x, y) {
//   if (parseInt(x.innerText) === parseInt(y.innerText)) {
//     console.log(`${x.innerText} is equal to ${y.innerText}`);
//   } else {
//     console.log(`${x.innerText} is bigger than ${y.innerText}`);
//   }
// }

// This is remove listener, so can't go back. Maybe try the 'once' option again.
// for (let i = 0; i <= 10; i++) {
//   let goldTurn = document.querySelectorAll(".goldTurn");
//   goldTurn[i].addEventListener("click", () => {
//     rmvListener(goldTurn[i], goldTurn[i + 1]);
//   });
// }

// function rmvListener(first, second) {
//   if (parseInt(first.innerText) < parseInt(second.innerText)) {
//     let copy = first.cloneNode();
//     copy.innerText = first.innerText;
//     first.replaceWith(copy);
//   }
// }
