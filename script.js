function toggleMenu() {
    var menu = document.getElementById("myMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Cerrar el menú si se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.dropdown button')) {
        var menu = document.getElementById("myMenu");
        if (menu.style.display === "block") {
            menu.style.display = "none";
        }
    }
}