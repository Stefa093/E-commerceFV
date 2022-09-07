//-----------------show Menu
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-tgl'),
    closeMenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click', ()=> {
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', ()=> {
    navMenu.classList.remove('show')
})

//-----------------Clik Link

const navLink = document.querySelectorAll('.nlink')

function linkAction() { 
    navMenu.classList.remove('show')
}
//------------------Show Cart
const openCart = document.getElementById('cart'),
    toggleCart = document.getElementById('cart-shop'),
    closeCart = document.getElementById('cart-close')

    toggleCart.addEventListener('click', ()=> {
        openCart.classList.toggle('show-cart')
})

closeCart.addEventListener('click', ()=> {
    openCart.classList.remove('show-cart')
})
//Dark Mode
navLink.forEach(n => n.addEventListener('click', linkAction))

let darkToggle = document.querySelector('#darkToggle');

darkToggle.addEventListener('click', ()=> {
document.body.classList.toggle('dark');
})
//--------------------Loader
window.addEventListener("load", function () {
    const loaded = this.document.querySelector("#load");
    setTimeout(() => {
        loaded.style.display = "none";
    }, 3000);
});
//------------------Mixitup
mixitup(".prod-cont", {
    selectors:{
        target:".prod-card"
    },
    animation: {
        duration: 300
    }
}).filter("all")
//---------------------Cart
const items = [
    {
        id: 1,
        name: "Lipstick Shock Red",
        price: 25.00,
        stock: 8,
        UrlImg: "./images/Lipstick-PNG-Transparent-Image.png"
    },
    {
        id: 2,
        name: "Eyeshadow Perfect Pallete",
        price: 50.00,
        stock: 10,
        UrlImg: "./images/590-5906868_ruby-obsessions-eyeshadow-palette.png"
    },
    {
        id: 3,
        name: "Perfume Anns Paris",
        price: 100.00,
        stock: 2,
        UrlImg: "./images/perfume_PNG10264.png"
    },
];

const cartContainer = document.querySelector(".cart__container");
const cartTotal = document.querySelector("#cart-total");
const itemsCount = document.querySelector("#items-count");
const delAll = document.getElementById("cart-checkout");
let count = document.querySelector(".count");


let cart = {};

function printItemInCart() {
    let html = "";

    const arrayCart = Object.values(cart);
    const itemsCount = document.querySelector("#items-count");
    let contCart = 0;
    let sumTotal = 0;

    arrayCart.forEach(({ id, name, UrlImg, amount, stock, price }) => {
        html += `
        <article class="cart__card ">
        <div class="cart__box">
            <img src=${UrlImg} alt="lips1" class="cart__img">
        </div>
        <div class="cart__details">
            <h3 class="cart__title">${name}</h3>
            <span class="cart__stock">Stock: ${stock} |
                <span class="cart__price">$${price}</span>
            </span>
            <span class="cart_subtotal"></span>
            <div class="cart__amount" id=${id}>
                <div class="cart__amount-content">
                    <span class="cart__amount-box minus" id=${id}>
                        <i class='bx bx-minus'></i>
                    </span>
                    <span class="cart__amount-number">${amount} units</span>
                    <span class="cart__amount-box plus" id=${id}>
                        <i class='bx bx-plus'></i>
                    </span>
                </div>
                <i class='bx bx-trash cart__amount-trash' id=${id}></i>
            </div>    
        </div>
    </article>
        `;
        sumTotal += amount*price
        contCart += amount;
    });
    cartContainer.innerHTML = html;
    count.textContent = contCart;
    itemsCount.textContent = contCart;
    cartTotal.textContent = sumTotal;
}

delAll.addEventListener("click", function() { 
    cartContainer.remove();
    cartTotal.remove();
    itemsCount.remove();
    count.remove();
})


const prodCont = document.querySelector("#prodCont");

prodCont.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn_add")) {
        const idItem = +e.target.parentElement.id;
        
        const findItem = items.find((item) => item.id === idItem);
        if (cart[idItem]) {
            cart[idItem].amount++;
        } else {
            cart[idItem] = findItem;
            cart[idItem].amount = 1;
        }

        printItemInCart();
    }
});

cartContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("bx-minus")) {
        const idItem = +e.target.parentElement.id;
        if (cart[idItem].amount > 1) {
            cart[idItem].amount--;
        }
    }

    if (e.target.classList.contains("bx-plus")) {
        const idItem = +e.target.parentElement.id;
        if (cart[idItem].amount < cart[idItem].stock) {
            cart[idItem].amount++;
        }
    }
    if (e.target.classList.contains("bx-trash")) {
        const idItem = +e.target.parentElement.id;
        delete cart[idItem];
    }

    printItemInCart();
});






