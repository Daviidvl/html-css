const checkbox = document.getElementById("status");

checkbox.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode", checkbox.checked);
});