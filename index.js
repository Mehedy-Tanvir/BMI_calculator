const btn = document.querySelector('#btn');
const bmi = document.querySelector('#bmi-result');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const weightCondition = document.querySelector('#weight-condition');

btn.addEventListener('click', () => {
    let heightValue = height.value / 100;
    let weightValue = weight.value;

    let bmivalue = (weightValue) / (heightValue * heightValue);
    bmi.value = bmivalue;

    if (bmivalue < 18.5) {
        weightCondition.innerText = "Under Weight";
    } else if (bmivalue >= 18.5 && bmivalue <= 24.9) {
        weightCondition.innerText = "Normal";
    } else if (bmivalue >= 25 && bmivalue <= 29.9) {
        weightCondition.innerText = "Over Weight";
    } else if (bmivalue >= 30) {
        weightCondition.innerText = "Obesity";
    }
});



