const pizzas = [
    {name: "Pizza Italiana",   price: "49,99", image: "pizza1.jpeg"},
    {name: "Pizza Portuguesa", price: "54,99", image: "pizza2.jpeg"},
    {name: "Pizza 4 Queijos",  price: "49,99", image: "pizza3.jpeg"},
    {name: "Pizza Calabresa",  price: "44,99", image: "pizza4.jpeg"},
    {name: "Pizza Doce",       price: "59,99", image: "pizza5.jpeg"},
    {name: "Pizza de Abacaxi", price: "49,99", image: "pizza6.jpeg"},
    {name: "Pizza Napolitana", price: "44,99", image: "pizza7.jpeg"},
    {name: "Pizza Marguerita", price: "44,99", image: "pizza8.jpeg"}
];

const grids = [
    {name: "Maminha",                 price: "64,99", image: "grill1.jpeg"},
    {name: "Picanha",                 price: "59,99", image: "grill2.jpeg"},
    {name: "Hamburguer Artesanal",    price: "59,99", image: "grill3.jpeg"},
    {name: "Hamburguer de Picanha",   price: "69,99", image: "grill4.jpeg"},
    {name: "Hamburguer Caramelizado", price: "79,99", image: "grill5.jpeg"},
    {name: "Hamburguer com Salada",   price: "74,99", image: "grill6.jpeg"},
    {name: "Costela",                 price: "64,99", image: "grill7.jpeg"},
    {name: "Costela Desfiada",        price: "74,99", image: "grill8.jpeg"}
];

const salads = [
    {name: "", price: "24,99", image: ""},
    {name: "", price: "19,99", image: ""},
    {name: "", price: "29,99", image: ""},
    {name: "", price: "14,99", image: ""},
    {name: "", price: "19,99", image: ""},
    {name: "", price: "19,99", image: ""}
];

const sweets = [
    {name: "", price: "29,99", image: ""},
    {name: "", price: "14,99", image: ""},
    {name: "", price: "14,99", image: ""},
    {name: "", price: "14,99", image: ""},
    {name: "", price: "19,99", image: ""},
    {name: "", price: "19,99", image: ""},
    {name: "", price: "9,99", image: ""}
];

const createCard = (menuItemSelected, category) => {
    return `
        <div class="menuCard">

            <div class="imageCard" style="background-image: url('src/images/${category}/${menuItemSelected.image}')">
                
                <div class="informationCard">
                    <i class="fa-regular fa-clock"> 
                        <span>37min</span>
                    </i>
                    <i class="fa-regular fa-heart"></i>
                </div>

                <i class="fa-solid fa-star"> 
                    <span>4,5</span>
                </i>

            </div>

            <div class="descriptionCard">

                <div class="nameCard">
                    <h4>${menuItemSelected.name}</h4>
                    <p>R$${menuItemSelected.price}</p>
                </div>

                <button class="btnCard">
                    <a href="">Peça Agora</a>
                </button>

            </div>

        </div>
    `;
};

const menuItemClick = (event) => {
    const menuItem = event.target.id;
    const menuContainer = document.getElementById("menuContainer");

    menuContainer.innerHTML = "";
    
    if (menuItem === "pizzas"){
        return pizzas.forEach((menuItemSelected) => {
            menuContainer.innerHTML += createCard(menuItemSelected, "pizzas");
        });
    };

    if (menuItem === "grids"){
        return grids.forEach((menuItemSelected) => {
            menuContainer.innerHTML += createCard(menuItemSelected, "grids");
        });
    };
    
    if (menuItem === "salads"){    
        return salads.forEach((menuItemSelected) => {
            menuContainer.innerHTML += createCard(menuItemSelected, "salads");
        });
    };
    
    if (menuItem === "sweets"){
        return sweets.forEach((menuItemSelected) => {
            menuContainer.innerHTML += createCard(menuItemSelected, "sweets");
        });
    };
};

const menuOptions = document.getElementById("menuOptions");

menuOptions.addEventListener("click", menuItemClick);