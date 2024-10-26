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

