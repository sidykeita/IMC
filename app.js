const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// sélection des éléments

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const displayBmi = document.querySelector('.imc-value');
const result = document.querySelector('.result');

form.addEventListener('submit',(handleform) => {

  handleform.preventDefault();

  calculBmi();
})

// IMC = poids en kg / taille² en m
function calculBmi()
{
  const height = inputs[0].value;
  const weight = inputs[1].value;

  if(!height || !weight || height <=0 || weight<=0)
  {
   handleError()
   return; // pour s'arreter la 
  }

    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);

    showResult(bmi);

   
}



function handleError(){
  displayBmi.textContent = 'ERREUR';
  displayBmi.style.color = 'red';
  result.textContent = 'remplissez correctement les champs !';
}

function showResult(bmi){

  const rank = BMIData.find(data => {
    if(bmi >= data.range[0] && bmi < data.range[1]) return data;
    else if(typeof data.range ==='number' && bmi >= data.range) return data;
    console.log(data);
  });
    displayBmi.textContent = bmi;
    displayBmi.style.color = `${rank.color}`;
    result.textContent = `résultat : ${rank.name}`;
    result.style.color = `${rank.color}`;
   
}