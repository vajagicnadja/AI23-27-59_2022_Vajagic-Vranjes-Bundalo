// Pozadina
document.body.style.background = '#070c11';

// Navigacija
const navBar = document.getElementById("navAnimacija");
window.addEventListener('scroll', () => {
    if(window.scrollY >= 100) {
        navBar.classList.add('navPozadina');
    } else if (window.scrollY < 100) {
        navBar.classList.remove('navPozadina');
    }
});

// Progress bar za vesti
function updateProgressBar() {
	const { scrollTop, scrollHeight } = document.documentElement;
	const scrollPercent = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`;
	document.querySelector('#progBar').style.setProperty('--progress', scrollPercent);
}

document.addEventListener('scroll', updateProgressBar);

// Animacija recenzija na scroll
const recenzije = document.querySelectorAll('#recenzije .recenzija-kartica');

function checkRecenzije() {
  const triggerBottom = window.innerHeight * 0.85;

  recenzije.forEach(kartica => {
    const karticaTop = kartica.getBoundingClientRect().top;

    if(karticaTop < triggerBottom) {
      kartica.classList.add('animate');
    }
  });
}

window.addEventListener('scroll', checkRecenzije);
window.addEventListener('load', checkRecenzije);