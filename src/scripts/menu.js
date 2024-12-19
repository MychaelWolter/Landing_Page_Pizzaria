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
    {name: "Carne", price: "64,99", image: "grill1.jpeg"},
    {name: "Carne", price: "59,99", image: "grill2.jpeg"},
    {name: "Carne", price: "59,99", image: "grill3.jpeg"},
    {name: "Carne", price: "69,99", image: "grill4.jpeg"},
    {name: "Carne", price: "79,99", image: "grill5.jpeg"},
    {name: "Carne", price: "74,99", image: "grill6.jpeg"},
    {name: "Carne", price: "64,99", image: "grill7.jpeg"},
    {name: "Carne", price: "74,99", image: "grill8.jpeg"}
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

const menuOptions = document.getElementById("menuOptions");




const createCard = (menuItemSelected) => {
    const div = document.createElement("div");
    div.classList.add("menuCard");
    div.innerHTML = `
        <div class="imageCard">

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
                    <h4>${Pizza Italiana} </h4>
                    <p>R$${4999}</p>
                </div>

                <button class="btnCard">
                    <a href="">Peça Agora</a>
                </button>
            </div>
        </div>
    `;

    const imageCard = 

    document.getElementById("menuContainer").appendChild("div");
};



const menuItemClick = (event) => {

    const menuItem = event.target.id;
    
    if (menuItem == "pizza"){


    } else if (menuItem == "grill"){


    } else if (menuItem == "salad"){
        

    } else {


    };
};

menuOptions.addEventListener("click", menuItemClick);