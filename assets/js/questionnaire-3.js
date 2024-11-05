function nextStep(event) {
    event.preventDefault(); 

    const state = document.querySelector('select[name="intake_state"]').value;

    if (!state) {
        alert("Please select your state.");
        return; 
    }

    window.location.href = 'questionnaire-4.html'; 
}
