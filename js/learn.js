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

  
  document.addEventListener('DOMContentLoaded', (event) => {
    const heartIcons = document.querySelectorAll('.heart-icon');
    heartIcons.forEach(icon => {
      icon.addEventListener('click', () => {
        icon.classList.toggle('red');
      });
    });
  
    const errorTriggerButtons = document.querySelectorAll('.play-button.error-trigger');
    const modal = document.getElementById('errorModal');
    const closeModal = document.querySelector('.close');
  
    errorTriggerButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = 'block';
      });
    });
  
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  