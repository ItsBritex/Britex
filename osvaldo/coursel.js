document.querySelector('.prev').addEventListener('click', () => {
    document.querySelector('.carousel-container').scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

document.querySelector('.next').addEventListener('click', () => {
    document.querySelector('.carousel-container').scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});
