function validateSelection() {
    const checkboxes = document.querySelectorAll('input[name="intake_health[]"]');
    const isSelected = Array.from(checkboxes).some(checkbox => checkbox.checked);

    if (!isSelected) {
        alert("Please select at least one option.");
    } else {
        window.location.href = 'questionnaire-6.html';
    }
}