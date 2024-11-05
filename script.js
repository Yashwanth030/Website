

const headerImage = document.querySelector(".logohrbg.png");

document.addEventListener("mousemove", (e) => {
    const { clientX: x, clientY: y } = e;
    const { innerWidth: width, innerHeight: height } = window;

    const rotateX = ((y / height) - 0.5) * 15; // Adjust tilt effect strength
    const rotateY = ((x / width) - 0.5) * -15;

    headerImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});


