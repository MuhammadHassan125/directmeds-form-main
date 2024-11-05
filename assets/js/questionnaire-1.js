document.querySelectorAll('.triggerNext').forEach((radio) => {
    radio.addEventListener('change', function() {
        window.location.href = 'questionnaire-2.html';
    });
});
