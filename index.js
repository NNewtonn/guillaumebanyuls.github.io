function randomizeIcons() {
  const container = document.querySelector('.icon-container');
  const originalIcons = document.querySelectorAll('.icon');
  

  originalIcons.forEach(icon => {
    // Duplicate each icon twice
    for (let i = 0; i < 15; i++) {
      const duplicateIcon = icon.cloneNode(true);
      container.appendChild(duplicateIcon);
    }
  });
    const icons = document.querySelectorAll('.icon');

    icons.forEach(icon => {

      const x = Math.random() * 100 - 50 + 'vw';
      const y = Math.random() * 17 + 15 + 'vh';
      icon.style.left = x;
      icon.style.top = y;

     
   


      
      const floatDuration = Math.random() * 30 + 80;

      setTimeout(() => {
       
        icon.style.animation = `floatAway ${floatDuration}s linear infinite`; 
        container.style.opacity = "1";
      }, 2000); 
    });
    
  }

  window.onload = function () {
    randomizeIcons();
};