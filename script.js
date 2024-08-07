document.addEventListener("DOMContentLoaded", () => {
    const car = document.querySelector(".car");
    let position = 0;
    const roadWidth = document.querySelector(".road").offsetWidth;

    function moveCar() {
        position += 2; // Speed of the car
        if (position > roadWidth) {
            position = -100; // Reset the car to the start once it goes off screen
        }
        car.style.left = position + "px";
        requestAnimationFrame(moveCar);
    }

    moveCar();
});
