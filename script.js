document.addEventListener('DOMContentLoaded', () => {
    // Add some simple interactivity
    const header = document.querySelector('.head');
    const footer = document.querySelector('.head1');
    const links = document.querySelectorAll('.container a');

    // Change the header background color on click
    header.addEventListener('click', () => {
        header.style.backgroundColor = header.style.backgroundColor === 'black' ? 'green' : 'black';
    });

    // Change the footer text color on hover
    footer.addEventListener('mouseenter', () => {
        footer.style.color = 'yellow';
    });

    footer.addEventListener('mouseleave', () => {
        footer.style.color = 'red';
    });

    // Add an alert when clicking a recipe link
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('You are about to navigate to an external recipe!');
            window.location.href = link.href;
        });
    });
});
