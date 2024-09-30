document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.steam-button');
    const skinsContainer = document.querySelector('.falling-skins-container');
  
    const skinImages = [
      'images/frog1.png',
      'images/frog2.png',
      'images/awp.png',
      'images/usp.png', // images fillers
    ];
  
    // Function to create and animate skins
    function createFallingSkin() {
      const skin = document.createElement('img');
      skin.src = skinImages[Math.floor(Math.random() * skinImages.length)];
      skin.classList.add('skin');
  
      // Randomize whether the skin starts on the left or right side of the screen
      const isLeftSide = Math.random() < 0.5;
      const randomOffset = Math.random() * (window.innerHeight / 3); // randomize y-offset slightly
  
      if (isLeftSide) {
        skin.style.left = '-60px'; // Start off-screen to the left
      } else {
        skin.style.right = '-60px'; // Start off-screen to the right
      }
  
      // Randomize the top start point for the skin
      skin.style.top = `${randomOffset}px`;
  
      // Add the skin to the container
      skinsContainer.appendChild(skin);
  
      // Remove the skin after it has fallen
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
  