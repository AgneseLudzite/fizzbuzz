var slider1 = document.getElementById('myStartRange');
var output1 = document.getElementById('myStartValue');
output1.innerHTML = slider1.value;

slider1.oninput = function() {
output1.innerHTML = this.value;
}

var slider2 = document.getElementById('myEndRange');
var output2 = document.getElementById('myEndValue');
output2.innerHTML = slider2.value;

slider2.oninput = function() {
output2.innerHTML = this.value;
}

function addListeners() {
    const submit = document.getElementById('defaultGame');
    submit.onclick = onClickDefault;
    const submitCustom = document.getElementById('customGame');
    submitCustom.onclick = onClickCustom;
}

function myFunction() {
    addListeners();
    var clearBtn = document.getElementById('clear');
    clearBtn.addEventListener("click", onClickClear);
}

function onClickDefault() {
    onClickClear();
        for(let x = 1; x<101; x++){
            let element = document.createElement('div');
            element.className="element" + x;
            elements.appendChild(element);
                if (x % 15 === 0){
                element.setAttribute("id", "element" +x);
                element.setAttribute("class", "FizzBuzz");
                element.innerText="FizzBuzz";
                }
                else if (x % 3 === 0) {
                element.setAttribute("id", "element" +x);
                element.setAttribute("class", "Fizz");
                element.innerText="Fizz";
                }
                else if (x % 5 === 0){
                element.setAttribute("id", "element" +x);
                element.setAttribute("class", "Buzz");
                element.innerText="Buzz";
                }
                else {
                element.setAttribute("id", "element" +x);
                element.setAttribute("class", "None");
                element.innerText=x;
                }
        }
    }
  
function onClickClear() {
    while (elements.firstChild) {
        elements.removeChild(elements.firstChild);
    }
}

document.getElementById('fizzColor').addEventListener('change', function() {  this.style.color = this.value });
document.getElementById('buzzColor').addEventListener('change', function() {  this.style.color = this.value });

function onClickCustom() {
    onClickClear();
    showAlert();
    var start = document.getElementById('myStartValue').value;
    start.innerHTML = start.value;
    var end = document.getElementById('myEndValue').value;
    end.innerHTML = end.value;
    var fizzValue = document.getElementById('fizzValue').value;
    fizzValue.innerHTML = fizzValue.value;
    var buzzValue = document.getElementById('buzzValue').value;
    buzzValue.innerHTML = buzzValue.value;
    var fizzColor = document.getElementById('fizzColor').value;
    fizzColor.innerHTML = fizzColor.value;
    var buzzColor = document.getElementById('buzzColor').value;
    buzzColor.innerHTML = fizzColor.value;
      
        for(start; start <=  end; start++){
            const element = document.createElement('div');
            element.className="element" + start;
            elements.appendChild(element);
      
        if (start % (fizzValue*buzzValue) === 0) {
            element.setAttribute("id", "element" +start);
            element.setAttribute("class", "FizzBuzz");
            element.innerText="FizzBuzz";
            }
      
        else if (start % fizzValue === 0){
            element.setAttribute("id", "element" +start);
            element.setAttribute("class", "Fizz");
            element.style.backgroundColor=fizzColor;
            element.innerText="Fizz";
            }
        
        else if (start % buzzValue === 0){
            element.setAttribute("id", "element" +start);
            element.setAttribute("class", "Buzz");
            element.style.backgroundColor=buzzColor;
            element.innerText="Buzz";
            }
        
        else {
            element.setAttribute("id", "element" +start);
            element.setAttribute("class", "None");
            element.innerText=start;
            }
        }  
    }

function showAlert() {
const fizzValue = document.getElementById('fizzValue').value;
fizzValue.innerHTML = fizzValue.value;
const buzzValue = document.getElementById('buzzValue').value;
buzzValue.innerHTML = buzzValue.value;
      if (fizzValue === buzzValue) {
        window.alert("Fizz and Buzz values must differ!");
        throw Error();
      }
    }

myFunction();
