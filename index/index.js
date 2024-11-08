function toggleVisibility() {
    const el = document.querySelector('.nav-bb');
    el.classList.toggle('visible');
  } 

  function animateNumber(elementId, finalNumber, duration) {
    const startNumber = 0;
    const startTime = performance.now();

    function updateNumber(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentNumber = Math.floor(progress * finalNumber);

      document.getElementById(elementId).textContent = currentNumber;

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    }

    requestAnimationFrame(updateNumber);
  }

  animateNumber('number1', 150, 2000); // Animates 'number1' to 100 over 2 seconds
  animateNumber('number2', 15, 3000); // Animates 'number2' to 200 over 3 seconds
  animateNumber('number3', 250, 4000);