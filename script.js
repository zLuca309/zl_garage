document.addEventListener("DOMContentLoaded", () => {
    const carsBoxes = document.querySelectorAll(".cars-box");

    carsBoxes.forEach(box => {
        box.addEventListener("click", () => {
            if (box.classList.contains("active-border")) {
                box.classList.remove("active-border");
            } else {
                carsBoxes.forEach(b => b.classList.remove("active-border"));
                box.classList.add("active-border");
            }
        });
    });
});
