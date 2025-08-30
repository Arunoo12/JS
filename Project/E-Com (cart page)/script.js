document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "product1", price: 2000 },
    { id: 2, name: "product2", price: 3000 },
    { id: 3, name: "product3", price: 500 },
    { id: 4, name: "product4", price: 10 },
  ];
  const cart = [];
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const displayCartEmpty = document.getElementById("empty-cart");
  const cartTotal = document.getElementById("cart-total");
  const totalPrice = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  products.forEach(function (elem) {
    const newProductDiv = document.createElement("div");
    newProductDiv.classList.add("product");
    newProductDiv.innerHTML = `<span>${elem.name} - $${elem.price}</span>
    <button id="${elem.id}">Add to cart</button>`;
    productList.appendChild(newProductDiv);
  });
  productList.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      const buttonId = parseInt(e.target.getAttribute("id"));
      console.log(buttonId);
      const compareId = products.find(function (a) {
        return a.id === buttonId;
      });
      console.log(compareId);
      addToCart(compareId);
    }
  });
  function addToCart(product) {
    console.log(product);
    cart.push(product);
    renderProduct();
  }
  cartItems.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      console.log("clicked");
      const buttonnIdd = parseInt(e.target.getAttribute("id"));
      console.log(buttonnIdd);
      const compareCartID = cart.findIndex((f) => f.id === buttonnIdd);
      console.log(compareCartID);
      removeProduct(compareCartID);
    }

    // console.log("clicked");
  });
  function renderProduct() {
    cartItems.innerText = "";
    // displayCartEmpty.classList.add("hidden");
    if (cart.length > 0) {
      let totalP = 0;
      cart.forEach(function (elem) {
        totalP += elem.price;
        const newPDiv = document.createElement("div");
        newPDiv.classList.add("CartProduct");
        // newPDiv.setAttribute("id", `${elem.id}`);
        newPDiv.innerHTML = `${elem.name} - $${elem.price}
        <button id="${elem.id}">remove from Cart</button>`;
        cartItems.appendChild(newPDiv);
        cartTotal.classList.remove("hidden");
        totalPrice.textContent = `$${totalP}`;
      });
    } else {
      displayCartEmpty.classList.remove("hidden");
      cartTotal.classList.add("hidden");
    }
  }
  function removeProduct(productId) {
    if (cart.length > -1) {
      cart.pop(productId);
      renderProduct();
    }
  }
  checkOutBtn.addEventListener("click", (e) => {
    // cartItems.innerHTML = "";
    cart.length = 0;
    displayCartEmpty.classList.remove("hidden");
    renderProduct();
  });
});
