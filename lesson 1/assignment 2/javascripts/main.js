var x, y, plus, minus;

x = document.getElementById('x');
y = document.getElementById('y');
plus = document.getElementById('plus');
minus = document.getElementById('minus');
plus.onclick = performOperation;
minus.onclick = performOperation;

function performOperation(){
  var operator = this.value;
  var xValue = x.value;
  var yValue = y.value;

  if(validateInputs()){
    var result = eval(String(x.value) + operator + String(y.value));
    
    document.getElementById('operator-text').innerText = this.id;
    document.getElementById('result-text').innerText = result;
  }
}

function validateInputs(){
  var verdict = true;

  function validate(element) {
    var value = element.value.trim();

    if(value){
      if(isNaN(value)){
        verdict = false;
      }
    } else {
      element.value = 0;
    }
  }

  validate(x);
  validate(y);

  toggleMessage(verdict);
  return verdict;
}

function toggleMessage(success){
  if(success){
    document.getElementsByClassName('success')[0].style.display = 'block';
    document.getElementsByClassName('error')[0].style.display = 'none';
  } else {
    document.getElementsByClassName('success')[0].style.display = 'none';
    document.getElementsByClassName('error')[0].style.display = 'block';
  }
}
