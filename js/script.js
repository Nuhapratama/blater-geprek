// ==================================
// 1. FILTER MENU
// ==================================

const filterButtons = document.querySelectorAll(".filter-button");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedCategory = button.dataset.filter;

        // Mengubah status tombol yang aktif
        filterButtons.forEach(function(item) {
            item.setAttribute(
                "aria-pressed",
                String(item === button)
            );
        });

        // Menampilkan menu sesuai kategori
        menuCards.forEach(function(card) {

            const category = card.dataset.category;

            const isMatch =
                selectedCategory === "all" ||
                category === selectedCategory;

            card.hidden = !isMatch;

        });

    });

});


// ==================================
// 2. NAVIGASI MOBILE
// ==================================

const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

if (navToggle && mainNav) {

    navToggle.addEventListener("click", function() {

        const isOpen = mainNav.classList.toggle("is-open");

        navToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });

    // Tutup menu setelah link dipilih
    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function(link) {

        link.addEventListener("click", function() {

            mainNav.classList.remove("is-open");

            navToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

    document.addEventListener("keydown", function(event) {

        if (event.key === "Escape" && mainNav.classList.contains("is-open")) {
            mainNav.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.focus();
        }

    });

}