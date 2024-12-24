document.addEventListener("DOMContentLoaded", () => {
    console.log("La página está completamente cargada y lista.");

    const links = document.querySelectorAll(".social-links a");

    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.2)";
        });

        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
        });
    });
});
