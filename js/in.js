function toggleVisibility() {
    const el = document.querySelector('.say-helloo');
    el.classList.toggle('visible');
  } 
  
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper2 = new Swiper(".mySwiper2", {
    direction: "vertical",
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  document.querySelectorAll('.Mentorship').forEach(link => { link.addEventListener('click', function(event) { event.preventDefault(); const targetClass = this.getAttribute('data-target'); const targetElement = document.querySelector(targetClass); if (targetElement) { targetElement.scrollIntoView({ behavior: 'smooth' }); } }); });