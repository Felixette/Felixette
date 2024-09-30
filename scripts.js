document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.steam-button');
    const skinsContainer = document.querySelector('.falling-skins-container');
  
    const skinImages = [
      'images/awp.png',
      'images/frog.png',
      'images/frog2.png', // 15x20
    ];
  
    // Function to create and animate skins
    function createFallingSkin() {
      const skin = document.createElement('img');
      skin.src = skinImages[Math.floor(Math.random() * skinImages.length)];
      skin.classList.add('skin');
  
      // Randomize starting position (left or right side)
      const isLeftSide = Math.random() < 0.5;
      skin.style.left = isLeftSide ? '-60px' : 'calc(100% - 60px)';
      
      // Randomize the top starting point
      skin.style.top = `${Math.random() * 30}px`;
  
      // Add the skin to the container
      skinsContainer.appendChild(skin);
  
      // Remove the skin after it falls
      setTimeout(() => {
        skin.remove();
      }, 5000); // Same as the animation duration
    }
  
    // Event listener to trigger skins falling on hover
    button.addEventListener('mouseenter', function() {
      // Start creating skins when the user hovers
      const skinInterval = setInterval(createFallingSkin, 500); // Drop skins every 500ms
  
      // Stop skins falling when hover ends
      button.addEventListener('mouseleave', function() {
        clearInterval(skinInterval);
      });
    });
  });
  