document.addEventListener('DOMContentLoaded', () => {
	const burger = document.getElementById('burger');
	const navMenu = document.getElementById('navMenu');
  
	if (burger && navMenu) {
	  burger.addEventListener('click', () => {
		navMenu.classList.toggle('show');
	  });
	} else {
	  console.error("Missing 'burger' or 'navMenu' element");
	}
  });






  $(document).ready(function () {
   
    $("#year").text(new Date().getFullYear());

  
    setTimeout(function () {
        $("#service-title, #service-description").addClass("show-title");
    }, 200);
});



const infoBoxes = document.querySelectorAll('.contact-info .info-box');


infoBoxes.forEach(box => {
  box.addEventListener('mouseover', function() {
    box.style.transition = 'transform 0.2s ease'; 
    box.style.transform = 'scale(1.02)';  
  });

  box.addEventListener('mouseout', function() {
    box.style.transition = 'transform 0.2s ease';  
    box.style.transform = 'scale(1)';  
  });
});





const familyTextCards = document.querySelectorAll('.family-text .card');

familyTextCards.forEach(card => {
  card.addEventListener('mouseover', function() {
    card.style.transition = 'transform 0.2s ease'; 
    card.style.transform = 'scale(1.02)';  
  });

  card.addEventListener('mouseout', function() {
    card.style.transition = 'transform 0.2s ease'; 
    card.style.transform = 'scale(1)';  
  });
});






















const cards = document.querySelectorAll('.services .card ');


cards.forEach(card => {
  card.addEventListener('mouseover', function() {
    card.style.transition = 'transform 0.3s ease';  
    card.style.transform = 'scale(1.05)';  
  });

  card.addEventListener('mouseout', function() {
    card.style.transition = 'transform 0.3s ease'; 
    card.style.transform = 'scale(1)';  
  });
});






const newsCards = document.querySelectorAll('.news-card');


newsCards.forEach(card => {
  card.addEventListener('mouseover', function() {
    card.style.transition = 'transform 0.3s ease';  
    card.style.transform = 'scale(1.05)';  
  });

  card.addEventListener('mouseout', function() {
    card.style.transition = 'transform 0.3s ease'; 
    card.style.transform = 'scale(1)';  
  });
});



const values = document.querySelectorAll('.core-values .value');


values.forEach(value => {
  value.addEventListener('mouseover', function() {
    value.style.transition = 'transform 0.3s ease';  
    value.style.transform = 'scale(1.05)'; 
  });

  value.addEventListener('mouseout', function() {
    value.style.transition = 'transform 0.3s ease';  
    value.style.transform = 'scale(1)';  
  });
});




const teamCards = document.querySelectorAll('.team-card');


teamCards.forEach(card => {
  card.addEventListener('mouseover', function() {
    card.style.transition = 'transform 0.3s ease';  
    card.style.transform = 'scale(1.05)';  
  });

  card.addEventListener('mouseout', function() {
    card.style.transition = 'transform 0.3s ease';  
    card.style.transform = 'scale(1)';  
  });
});















