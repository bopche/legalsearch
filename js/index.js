// Optional: Click event for nested dropdown
document.querySelectorAll('.nested-dropbtn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent closing the parent dropdown
        const nestedContent = this.nextElementSibling;
        nestedContent.style.display = nestedContent.style.display === 'block' ? 'none' : 'block';
    });
});

// Close the nested dropdown if clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.nested-dropbtn')) {
        const dropdowns = document.getElementsByClassName("nested-dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = 'none';
        }
    }
};

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}