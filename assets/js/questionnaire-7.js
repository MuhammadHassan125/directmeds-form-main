document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const bmi = parseFloat(urlParams.get('bmi'));

    const bmiElement = document.getElementById("bmiH1");
    const messageElement = document.querySelector(".intersticial h4");
    const buttonContainer = document.querySelector(".row.g-3.justify-content-center");

    buttonContainer.innerHTML = "";

    if (bmi && !isNaN(bmi)) {
        bmiElement.innerText = bmi;

        if (bmi < 30) {
            messageElement.innerText = "You may not qualify based on BMI criteria.";

            const backButton = document.createElement("button");
            backButton.className = "btn btn-lg ctaBtn1";
            backButton.innerText = "Back";
            backButton.onclick = () => window.history.back();
            buttonContainer.appendChild(backButton);
        } else {
            messageElement.innerText = "You look like a great fit for GLP-1 medications! Next, we will need to confirm a few details.";

            const continueButton = document.createElement("button");
            continueButton.className = "btn btn-lg ctaBtn1";
            continueButton.innerText = "Continue";
            continueButton.onclick = () => window.location.href = "questionnaire-8.html";
            buttonContainer.appendChild(continueButton);
        }
    } else {
        bmiElement.innerText = "N/A";
        messageElement.innerText = "Please enter valid height and weight.";
    }
});
