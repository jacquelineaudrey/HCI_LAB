document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button-selection button');
    const cards = document.querySelectorAll('.video-card');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const level = button.getAttribute('data-level');
        
        // Update button styles to reflect the active button
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        // Show/Hide cards based on the selected level
        cards.forEach(card => {
          if (card.getAttribute('data-level') === level) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  
    // Optionally, you can trigger a click on one of the buttons to set a default view
    document.getElementById('elementary-btn').click();
  });
  