// Add interactivity if needed
// Example: Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // Select the header element
const header = document.querySelector('header');

// Function to handle scroll events
function handleScroll() {
  if (window.scrollY > 50) {
    // Add the 'sticky' class when scrolled down
    header.classList.add('sticky');
  } else {
    // Remove the 'sticky' class when at the top
    header.classList.remove('sticky');
  }
}

// Add a scroll event listener
window.addEventListener('scroll', handleScroll);