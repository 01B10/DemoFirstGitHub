// let carts = document.querySelectorAll(".add-cart");

let products = [{
        name: "Grey Tshirt",
        tag: "food",
        price: 15,
        incart: 0
    },
    {
        name: "Grey Hoddie",
        tag: "food1",
        price: 20,
        incart: 0
    },
    {
        name: "Black Tshirt",
        tag: "food3",
        price: 10,
        incart: 0
    },
    {
        name: "Black Hoddie",
        tag: "food4",
        price: 25,
        incart: 0
    },
]

// carts.forEach((e, id) => {
//     e.addEventListener("click", (x) => {
//         x.preventDefault();
//         cartNumbers(products[id]);
//     })
// })

// function onLoadCartNumbers() {
//     let productNumbers = localStorage.getItem("cartNumbers");
//     if (productNumbers) {
//         document.querySelector(".cart span").textContent = productNumbers;
//     }
// }

// function cartNumbers(products) {
//     let productNumbers = localStorage.getItem("cartNumbers");
//     productNumbers = parseInt(productNumbers);
//     if (productNumbers) {
//         localStorage.setItem("cartNumbers", productNumbers + 1);
//         document.querySelector(".cart span").textContent = productNumbers + 1;
//     } else {
//         localStorage.setItem("cartNumbers", 1);
//         document.querySelector(".cart span").textContent = 1;
//     }
//     setItems(products);
// }

// function setItems(products) {
//     let cartItems = localStorage.getItem("productsInCart");
//     cartItems = JSON.parse(cartItems);
//     if (cartItems) {
//         if (cartItems[products.tag] == undefined) {
//             cartItems = {
//                 ...cartItems,
//                 [products.tag]: products
//             }
//         }
//         cartItems[products.tag].incart += 1;
//     } else {
//         products.incart = 1;
//         cartItems = {
//             [products.tag]: products
//         }
//     }
//     localStorage.setItem("productsInCart", JSON.stringify(cartItems));
// }


// onLoadCartNumbers();
let carts = document.querySelectorAll(".add-cart");
carts.forEach((e, id) => {
    e.addEventListener("click", (x) => {
        x.preventDefault();
        UpPoint(products[id]);
        totalCost(products[id]);
    })
})

function ByPoint() {
    let productNumbers = localStorage.getItem("productNumbers");
    document.querySelector(".cart span").textContent = productNumbers;
}

function UpPoint(products) {
    let productNumbers = localStorage.getItem("productNumbers");
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem("productNumbers", productNumbers + 1);
        document.querySelector(".cart span").textContent = productNumbers + 1;
    } else {
        localStorage.setItem("productNumbers", 1);
        document.querySelector(".cart span").textContent = 1;
    }
    everyPoint(products);
}

function everyPoint(products) {
    let productsItem = localStorage.getItem("products");
    productsItem = JSON.parse(productsItem);
    if (productsItem != null) {
        if (productsItem[products.tag] == undefined) {
            productsItem = {
                ...productsItem,
                [products.tag]: products
            }
        }
        productsItem[products.tag].incart += 1;
    } else {
        products.incart = 1;
        productsItem = {
            [products.tag]: products
        }
    }
    localStorage.setItem("products", JSON.stringify(productsItem));
}

function totalCost(products) {
    let total = localStorage.getItem("totalCost");
    if (total) {
        total = parseInt(total);
        localStorage.setItem("totalCost", total + products.price);
    } else {
        localStorage.setItem("totalCost", products.price);
    }
}

function displayCart() {
    let cartItem = localStorage.getItem("products");
    cartItem = JSON.parse(cartItem);
    let productContainer = document.querySelector(".products");
    if (cartItem && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItem).map(item => {
            productContainer.innerHTML += `
            <div class = "product">
                <ion-icon name="close-circle-outline"></ion-icon>
                <img src = "/img/${item.tag}.png">
                <span>${item.name}</span>
            </div>
            <div class = "price">${item.price}</div>
            <div class = "quantity">${item.incart}</div>
            <div class = "total">${item.incart * item.price}</div>
                `
        })
    }
}

displayCart();

ByPoint();