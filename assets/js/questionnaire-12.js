document.querySelector('.ctaBtn1').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[name="intake_kidneyConditions[]"]:checked');
    
    if (checkboxes.length === 0) {
        alert("Please select at least one option.");
    } else {
        window.location.href = 'questionnaire-13.html';
    }
});