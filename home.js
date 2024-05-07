document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".toggle-button");
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const answer = this.parentElement.nextElementSibling;
            answer.style.display = answer.style.display === "block" ? "none" : "block";
            this.textContent = answer.style.display === "block" ? "-" : "+";
        });
    });
});


