const progressBar = document.querySelector('.progress-bar');
let width = 0;

const interval = setInterval(() => {
    if (width >= 100) {
        clearInterval(interval);
    } else {
        width++;
        progressBar.style.width = width + '%';
    }
}, 40); 

setTimeout(() => {
    document.getElementById('progressResults').style.display = 'none';
    document.getElementById('calculatingalert').style.display = 'block'; 
}, 4000); 