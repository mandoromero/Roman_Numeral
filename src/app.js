document.getElementById('convert-btn').addEventListener('click', function() {
  const numberInput = document.getElementById('number').value.trim();
  const outputCon = document.getElementById('output-con');
  const output = document.getElementById('output');

  if (numberInput === '') {
    output.textContent = "Please enter a valid number";
    output.style.fontSize = "20px";
    return;
  }

  const parsedNumber = parseInt(numberInput);

  if (isNaN(parsedNumber) || parsedNumber < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    output.style.fontSize = "20px";
    return;
  }
  
  if (parsedNumber >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
    output.style.fontSize = "20px";
    return;
  }

  const romanNumeral = convertToRoman(parsedNumber);
  output.textContent = `${romanNumeral}`;
  output.style.fontSize = "45px"
  
  outputCon.style.display = 'block';
});

document.getElementById('clear-btn').addEventListener('click', function() {
  const numberInput = document.getElementById('number');
  const output = document.getElementById('output');
  const outputCon = document.getElementById('output-con');
  
  numberInput.value = "";
  output.value = "";
  outputCon.style.display = "none";
})

function convertToRoman(num) {
  const romanLookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  
  let roman = '';
  for (let key in romanLookup) {
    while (num >= romanLookup[key]) {
      roman += key;
      num -= romanLookup[key];
    }
  }
  return roman;
}
