//All elements
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const cartBtn = document.getElementById("cart-btn");
const cart = document.getElementById("cart");
const cartClose = document.getElementById("cart-close");
const containerProductsInInventory = document.getElementById(
  "products-inventory-all"
);
const addToCart = document.getElementById("add-to-cart");
const cartQuantity = document.getElementById("cart-quantity");
const cartBody = document.getElementById("cart-body");
const cartSubtotal = document.getElementById("cart-subtotal");
const displayItemQuantity = document.getElementById("display-quantity");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactMessage = document.getElementById("contact-message");

//Data
let tea = [
  {
    name: "Ginger peach tea",
    price: 399,
    reviews: 21,
    ratings: 5,
    quantity: 0,
  },
  { name: "Fruit sangria", price: 349, reviews: 21, ratings: 4, quantity: 0 },
  { name: "Clear tea", price: 499, reviews: 21, ratings: 5, quantity: 0 },
  {
    name: "Moonlight Serenade Oolong",
    price: 449,
    reviews: 21,
    ratings: 5,
    quantity: 0,
  },
  {
    name: "Dragon's Breath",
    price: 449,
    reviews: 21,
    ratings: 5,
    quantity: 0,
  },
  {
    name: "Sunset Blossom Rooibos",
    price: 449,
    reviews: 21,
    ratings: 2,
    quantity: 0,
  },
  {
    name: "Verdant Orchard Elixir",
    price: 449,
    reviews: 21,
    ratings: 5,
    quantity: 0,
  },
  {
    name: "Lemon Frost Oasis",
    price: 449,
    reviews: 21,
    ratings: 5,
    quantity: 0,
  },
  {
    name: "dooars terai",
    price: 449,
    reviews: 21,
    ratings: 5,
    quantity: 0,
  },
];

//Run When Called functions
const updateCartQuantity = function () {
  cartQuantity.textContent = tea.reduce((acc, prod) => acc + prod.quantity, 0);
};
updateCartQuantity();

const addQuantity = function (x) {
  tea[x].quantity++;
  updateCartQuantity();
  showAllCartItems(tea);
};

const subQuantity = function (x) {
  tea[x].quantity--;
  updateCartQuantity();
  showAllCartItems(tea);
};

const inputQuantity = function (x, quantity) {
  tea[x].quantity = Number(quantity);
  console.log(quantity);
  updateCartQuantity();
  showAllCartItems(tea);
};

const checkout = function () {
  alert("Thank you!");
  tea.map((prod) => (prod.quantity = 0));
  showAllCartItems(tea);
  updateCartQuantity();
  cart.classList.remove("showCart");
};

const buyNow = function (x) {
  console.log(x);
  cart.classList.add("showCart");
  addQuantity(x);
};

const submitForm = function () {
  contactName.value = "";
  contactEmail.value = "";
  contactMessage.value = "";
  alert("Thank you for submitting :)");
};

//Action handlers
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

cartBtn.addEventListener("click", () => {
  cart.classList.add("showCart");
});

navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});

cartClose.addEventListener("click", () => {
  cart.classList.remove("showCart");
});

//Run Everytime functions
const showAllCartItems = function (tea) {
  cartBody.innerHTML = "<hr/>";
  const itemsInCart = tea.filter((prod) => prod.quantity > 0);
  const positionItemsInCart = tea
    .map((prod, i) => prod.quantity > 0 && i + 1)
    .filter((prod) => prod);
  console.log(positionItemsInCart);
  let sum = 0;

  if (itemsInCart.length === 0) {
    const html = `<p style="text-align:center; font-size:1rem; padding:0.5rem;">Your cart is empty<p/>`;
    cartBody.insertAdjacentHTML("beforeend", html);
  } else {
    itemsInCart.forEach(function (prod, i) {
      const html = `<div class="cart-item">
          <div class="cart-item-image-container">
            <img src="./images/product-${
              positionItemsInCart[i]
            }.jpg" alt="ginger peach tea" />
          </div>
          <div class="cart-item-data">
            <div class="item-name">
              <h4>${prod.name}</h4>
            </div>
            <div class="item-quantity-container">
              <div class="subtract-quantity" onclick="subQuantity(${
                positionItemsInCart[i] - 1
              })">
                <i class="fas fa-minus"></i>
              </div>
              <div class="display-quantity">
                <input type="text" class="input-quantity" value="${
                  prod.quantity
                }" onchange="inputQuantity(${
        positionItemsInCart[i] - 1
      },this.value)"/>
              </div>
              <div class="add-quantity" onclick="addQuantity(${
                positionItemsInCart[i] - 1
              })">
                <i class="fas fa-plus"></i>
              </div>
            </div>
            <div class="item-price">
              <p>Rs. ${prod.price * prod.quantity}</p>
            </div>
          </div>
        </div>
        <hr />`;
      cartBody.insertAdjacentHTML("beforeend", html);

      sum += prod.quantity * prod.price;
    });
  }
  cartSubtotal.textContent = `Rs. ${sum}`;
};
showAllCartItems(tea);

const showAllProducts = function (tea) {
  containerProductsInInventory.innerHTML = "";

  tea.forEach(function (prod, i) {
    const html = ` <div class="product product-all">
  <img src="./images/product-${
    i + 1
  }.jpg" alt="product 1" class="product-img" />
  <h4 class="ratings">
    ${
      '<i class="fas fa-star"></i>'.repeat(prod.ratings) +
      '<i class="far fa-star"></i>'.repeat(5 - prod.ratings)
    }
  </h4>
  <h4 class="product-title">${prod.name}</h4>
  <h4 class="product-price">Rs. ${prod.price}</h4>
  <button class="btn product-btn" onclick="addQuantity(${i})">add to cart</button>
  <button class="btn product-btn" onclick="buyNow(${i})">buy now</button>
</div> `;

    containerProductsInInventory.insertAdjacentHTML("beforeend", html);
  });
};
showAllProducts(tea);
