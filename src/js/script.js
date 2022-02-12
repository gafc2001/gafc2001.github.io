window.addEventListener('DOMContentLoaded',function(e) {
    const year = document.getElementById('year');
    let yearValue = new Date();
    year.innerText = yearValue.getFullYear();
})