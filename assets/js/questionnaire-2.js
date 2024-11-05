function nextStep(event) {
    event.preventDefault();

    const month = document.querySelector('select[name="intake_dob_month"]').value;
    const day = document.querySelector('select[name="intake_dob_day"]').value;
    const year = document.querySelector('select[name="intake_dob_year"]').value;

    if (!month || !day || !year) {
        alert("Please select your complete date of birth.");
        return; 
    }

    window.location.href = 'questionnaire-3.html';
}
