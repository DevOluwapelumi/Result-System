// JavaScript code
const btnTotal = document.querySelector('.btn1');
const btnPercentage = document.querySelector('.btn2');
const btnGrade = document.querySelector('.btn3');

const engInput = document.getElementById('eng');
const mathInput = document.getElementById('math');
const phyInput = document.getElementById('phy');
const cheInput = document.getElementById('che');
const comInput = document.getElementById('com');

btnTotal.addEventListener('click', calculateTotal);
btnPercentage.addEventListener('click', calculatePercentage);
btnGrade.addEventListener('click', calculateGrade);

function calculateTotal() {
    const eng = parseFloat(engInput.value) || 0;
    const math = parseFloat(mathInput.value) || 0;
    const phy = parseFloat(phyInput.value) || 0;
    const che = parseFloat(cheInput.value) || 0;
    const com = parseFloat(comInput.value) || 0;

    const total = eng + math + phy + che + com;
    document.getElementById('total').textContent = `Total Marks: ${total}`;
}

function calculatePercentage() {
    const eng = parseFloat(engInput.value) || 0;
    const math = parseFloat(mathInput.value) || 0;
    const phy = parseFloat(phyInput.value) || 0;
    const che = parseFloat(cheInput.value) || 0;
    const com = parseFloat(comInput.value) || 0;

    const totalMarks = eng + math + phy + che + com;
    const percentage = (totalMarks / 500) * 100;
    document.getElementById('per').textContent = `Percentage: ${percentage.toFixed(2)}%`;
}

function calculateGrade() {
    const eng = parseFloat(engInput.value) || 0;
    const math = parseFloat(mathInput.value) || 0;
    const phy = parseFloat(phyInput.value) || 0;
    const che = parseFloat(cheInput.value) || 0;
    const com = parseFloat(comInput.value) || 0;

    const totalMarks = eng + math + phy + che + com;
    const percentage = (totalMarks / 500) * 100;

    let grade = '';

    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    document.getElementById('grade').textContent = `Grade: ${grade}`;
}