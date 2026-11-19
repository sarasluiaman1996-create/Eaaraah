document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;

            alert("شكرًا " + name + "، تم استلام رسالتك بنجاح!");

            form.reset();
        });
    }
});