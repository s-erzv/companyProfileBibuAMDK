const navResponsive = document.getElementById('nav-mobile');

function menuOnMobile(){
    navResponsive.classList.toggle('hidden');
}


const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); 

    const targetId = link.getAttribute('href').substring(1);

    document.getElementById(targetId).scrollIntoView({ 
      behavior: 'smooth' 
    });

    if (!navResponsive.classList.contains('hidden')) {
      menuOnMobile(); 
    }
  });
});