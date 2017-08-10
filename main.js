
// need to make a button to toggle dropdown of previous entries.
let layoutData = [
  {"HTML": "div",
  "class": "operator",
  "id": "window",
  "label": "",
  },
  {"HTML": "div",
  "class": "eval",
  "id": "clear",
  "label": "C",
  },
  {"HTML": "div",
  "class": "operator",
  "id": "modulo",
  "label": "%",
  },
  {"HTML": "div",
  "class": "eval",
  "id": "squareRoot",
  "label": "&radic;",
  },
  {"HTML": "div",
  "class": "eval",
  "id": "delete",
  "label": "<[X]",
  },
  {"HTML": "div",
  "class": "number",
  "id": "seven",
  "label": "7",
  },
  {"HTML": "div",
  "name": "eight",
  "class": "number",
  "id": "eight",
  "label": "8",
  },
  {"HTML": "div",
  "name": "nine",
  "class": "number",
  "id": "nine",
  "label": "9",
  },
  {"HTML": "div",
  "name": "divide",
  "class": "operator",
  "id": "divide",
  "label": "/",
  },
  {"HTML": "div",
  "name": "four",
  "class": "number",
  "id": "four",
  "label": "4",
  },
  {"HTML": "div",
  "name": "five",
  "class": "number",
  "id": "five",
  "label": "5",
  },
  {"HTML": "div",
  "name": "six",
  "class": "number",
  "id": "six",
  "label": "6",
  },
  {"HTML": "div",
  "class": "operator",
  "id": "multiply",
  "label": "*",
  },
  {"HTML": "div",
  "class": "number",
  "id": "one",
  "label": "1",
  },
  {"HTML": "div",
  "class": "number",
  "id": "two",
  "label": "2",
  },
  {"HTML": "div",
  "class": "number",
  "id": "three",
  "label": "3",
  },
  {"HTML": "div",
  "class": "operator",
  "id": "subtract",
  "label": "-",
  },
  {"HTML": "div",
  "class": "number",
  "id": "zero",
  "label": "0",
  },
  {"HTML": "div",
  "class": "number",
  "id": "decimal",
  "label": ".",
  },
  {"HTML": "div",
  "class": "eval",
  "id": "equals",
  "label": "=",
  },
  {"HTML": "div",
  "class": "operator",
  "id": "plus",
  "label": "+",
}
]

let calculator = document.querySelector(".calculator");

layoutData.map((pieces) =>{
  let calcPiece = document.createElement("div");
  calcPiece.setAttribute("class", pieces.class);
  calcPiece.setAttribute("id", pieces.id);
  calcPiece.innerHTML = pieces.label;
  calculator.appendChild(calcPiece);
})
// need event listener
let string = "";
let closingParen = false;
calculator.addEventListener("click", buttonFxn);
function buttonFxn(click) {
  if (click.target.id==="squareRoot") {
    string += "Math.sqrt(";
    closingParen = true;
    document.getElementById('window').innerHTML += click.target.innerHTML;
  }
  if (click.target.id==="delete"){
    string = string.slice(0, -1);
    document.getElementById('window').innerHTML = document.getElementById('window').innerHTML.slice(0,-1);
  }
// numbers and operators append to a string. Clear sets the string = ''. equals runs eval on the string
  if (click.target.classList.value != "eval" ) {
    console.log(click.target.id);
    string += click.target.innerHTML;
    document.getElementById('window').innerHTML += click.target.innerHTML;
  }
  if (click.target.id === "clear") {
    string = "";
    document.getElementById('window').innerHTML = "";
  }
  if (click.target.id === "equals") {
    if(closingParen){
      string += ")";
    }
    document.getElementById('window').innerHTML = eval(string);
    add string+"="+result to dropdown list.
  }
}
