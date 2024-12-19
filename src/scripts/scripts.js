// Mobile Button

const mobileBtn = document.getElementById("mobileBtn");

const mobileMenuBar = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    const icon = mobileBtn.querySelector("i");

    mobileMenu.classList.toggle("active");
    icon.classList.toggle("fa-x");
};

mobileBtn.addEventListener("click", mobileMenuBar);

// Nav List Effect

const navList = document.getElementById("navList");

const navListEffect = (event) => {
    const navItemClick = event.target.id;

};

navList.addEventListener("click", navListEffect);