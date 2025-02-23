const menu = document.getElementById("mobile-menu");
const menuBtn = document.getElementById("menu-btn");

function toggleMenu() {
    menu.classList.toggle("translate-y-0");
    menu.classList.toggle("-translate-y-full");
}

function closeMenu() {
    menu.classList.add("-translate-y-full");
    menu.classList.remove("translate-y-0");
}

// Toggle menu saat tombol hamburger diklik
menuBtn.addEventListener("click", function (event) {
    toggleMenu();
    event.stopPropagation(); // Cegah klik dari menutup langsung
});

// Tutup menu saat klik link di dalamnya
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener("click", function () {
        closeMenu();
    });
});

// Tutup menu saat klik di luar menu
document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        closeMenu();
    }
});