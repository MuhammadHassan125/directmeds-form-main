    document.querySelector('.ctaBtn1').addEventListener('click', function() {
        const targetWeightInput = document.querySelector('input[name="intake_goal_weight"]');
        const targetWeight = targetWeightInput.value.trim();

        if (targetWeight === "") {
            alert("Please enter your target weight.");
        } else {
            localStorage.setItem('targetWeight', targetWeight);

            window.location.href = 'calculating.html';
        }
    });
