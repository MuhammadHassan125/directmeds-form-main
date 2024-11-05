function calculateBMI() {
    const feet = document.querySelector('select[name="intake_feet"]').value;
    const inches = document.querySelector('select[name="intake_inches"]').value;
    const weight = document.querySelector('input[name="intake_weight"]').value;

    if (!feet || !weight) {
        alert("Please fill in your height and weight.");
        return;
    }

    const heightInInches = parseInt(feet) * 12 + parseInt(inches);
    const bmi = ((weight / (heightInInches * heightInInches)) * 703).toFixed(2);

    localStorage.setItem("currentWeight", weight);

    
    window.location.href = `../questionnaire-7.html?bmi=${bmi}`;
}
