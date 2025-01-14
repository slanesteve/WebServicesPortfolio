document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('mouseover', function () {
            link.style.color = 'red';
            link.style.fontWeight = 'bold';
        });

        link.addEventListener('mouseout', function () {
            link.style.color = 'white';
            link.style.fontWeight = 'normal';   
        });
    });
});
