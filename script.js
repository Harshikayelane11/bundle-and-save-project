document.addEventListener("DOMContentLoaded", () => {
    const options = document.querySelectorAll(".option");

    options.forEach(option => {
        option.addEventListener("click", () => {
            // Remove 'selected' class and hide additional details for all options
            options.forEach(opt => {
                opt.classList.remove("selected");
                opt.querySelector(".additional-details").style.display = "none";
            });

            // Add 'selected' class and show additional details for the clicked option
            option.classList.add("selected");
            option.querySelector(".additional-details").style.display = "block";
        });
    });
});
