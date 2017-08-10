
// need to make a button to toggle dropdown of previous entries.
// want: answer button: after divide,
 // x^y, sin, cos, tan, e, pi,
let layoutData = [
  {"html": "textarea",
  "class": "operator",
  "id": "memoryWindow",
  "label": "",
  },
  {"html": "div",
  "class": "operator",
  "id": "window",
  "label": "",
  },
  {"html": "div",
  "class": "eval",
  "id": "clear",
  "label": "C",
  },
  {"html": "div",
  "class": "operator",
  "id": "modulo",
  "label": "%",
  },
  {"html": "div",
  "class": "eval",
  "id": "squareRoot",
  "label": "&radic;",
  },
  {"html": "div",
  "class": "eval",
  "id": "delete",
  "label": "<[X]",
  },
  {"html": "div",
  "class": "eval",
  "id": "memory",
  "label": "mem",
  },
  {"html": "div",
  "class": "eval",
  "id": "e",
  "label": "e",
  },
  {"html": "div",
  "class": "number",
  "id": "seven",
  "label": "7",
  },
  {"html": "div",
  "name": "eight",
  "class": "number",
  "id": "eight",
  "label": "8",
  },
  {"html": "div",
  "name": "nine",
  "class": "number",
  "id": "nine",
  "label": "9",
  },
  {"html": "div",
  "name": "divide",
  "class": "operator",
  "id": "divide",
  "label": "/",
  },
  {"html": "div",
  "class": "eval",
  "id": "answer",
  "label": "ans",
  },
  {"html": "div",
  "class": "eval",
  "id": "pi",
  "label": "&Pi;",
  },
  {"html": "div",
  "name": "four",
  "class": "number",
  "id": "four",
  "label": "4",
  },
  {"html": "div",
  "name": "five",
  "class": "number",
  "id": "five",
  "label": "5",
  },
  {"html": "div",
  "name": "six",
  "class": "number",
  "id": "six",
  "label": "6",
  },
  {"html": "div",
  "class": "operator",
  "id": "multiply",
  "label": "*",
  },
  {"html": "div",
  "class": "eval",
  "id": "sine",
  "label": "sin",
  },
  {"html": "div",
  "class": "eval",
  "id": "naturalLog",
  "label": "ln",
  },
  {"html": "div",
  "class": "number",
  "id": "one",
  "label": "1",
  },
  {"html": "div",
  "class": "number",
  "id": "two",
  "label": "2",
  },
  {"html": "div",
  "class": "number",
  "id": "three",
  "label": "3",
  },
  {"html": "div",
  "class": "operator",
  "id": "subtract",
  "label": "-",
  },
  {"html": "div",
  "class": "eval",
  "id": "cosine",
  "label": "cos",
  },
  {"html": "div",
  "class": "eval",
  "id": "exponent",
  "label": "x<sup>y</sup>",
  },
  {"html": "div",
  "class": "number",
  "id": "zero",
  "label": "0",
  },
  {"html": "div",
  "class": "number",
  "id": "decimal",
  "label": ".",
  },
  {"html": "div",
  "class": "eval",
  "id": "equals",
  "label": "=",
  },
  {"html": "div",
  "class": "operator",
  "id": "plus",
  "label": "+",
  },
  {"html": "div",
  "class": "eval",
  "id": "tangent",
  "label": "tan",
  },
  {"html": "div",
  "class": "eval",
  "id": "paren",
  "label": "()",
  },
]

let calculator = document.querySelector(".calculator");

layoutData.map((pieces) =>{
  let calcPiece = document.createElement(pieces.html);
  calcPiece.setAttribute("class", pieces.class);
  calcPiece.setAttribute("id", pieces.id);
  calcPiece.innerHTML = pieces.label;
  calculator.appendChild(calcPiece);
})

let string = "";
let closingParen = false;
let answer = "";
// need array to track type of characters to prevent multiple or missing operators
let typeArray = [];
calculator.addEventListener("click", buttonFxn);
function buttonFxn(click) {
  // document.getElementById('window').innerHTML = "";
  console.log(typeof(click.target.label));
  if (click.target.id==="squareRoot") {
    // if(typeof(string[string.length-1])==="number");
    string += "Math.sqrt(";
    closingParen = true;
    document.getElementById('window').innerHTML += click.target.innerHTML+"(";
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
  if (click.target.id === "answer") {
    document.getElementById('window').innerHTML += answer;
    string += answer;
  }
  if (click.target.id === "e") {
    document.getElementById('window').innerHTML += "e";
    string += 2.71828;
  }
  if (click.target.id === "naturalLog") {
    document.getElementById('window').innerHTML += "ln(";
    string += "Math.log(";
  }
  if (click.target.id === "pi") {
    document.getElementById('window').innerHTML += "&Pi;";
    string += "Math.Pi";
  }
  if (click.target.id === "paren") {
    if(closingParen){
      document.getElementById('window').innerHTML += ")";
      string += ")";
      closingParen = false;
    }
    else{document.getElementById('window').innerHTML += "(";
      string += "(";
      closingParen = true;
    }}
  if (click.target.id === "equals") {
    if(closingParen){
      string += ")";
    }
    document.getElementById('memoryWindow').innerHTML += document.getElementById('window').innerHTML+"="+eval(string)+"\n";
    document.getElementById('window').innerHTML = eval(string);
    string = document.getElementById('window').innerHTML;
    answer = eval(string);
    // add string+"="+result to dropdown list.
  }
}
