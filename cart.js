var cart_item = JSON.parse(localStorage.getItem('cart')) || [];
var Product_Cart = document.querySelector('.Product_Card');
// var Total_Price = document.querySelector(".Total_Price");

// Product_Cart.innerHTML = "";
var Total_Price = 0;
if (cart_item.length === 0) {
    Product_Cart.innerHTML = `
                <p>Cart is empty</p><br>
                <p style="font-weight: bold; margin-left:40px;"class="total">Total: 0$</p>
                `;
}

else{
  cart_item.forEach(function (product, index) {
    Product_Cart.innerHTML += `
       <div class="cart" data-id=${product.id}>
           <img src="${product.image}" alt="${product.name}">
           <br>
            <p>${product.name}</p>
              <span>$ ${product.price}</span><br><br>
            <div class="prod-controls">
                <input type="button" value="-" class="dec" >
                <span class="quant" data-count=${product.quantity}>${product.quantity}</span>
                <input type="button" value="+" class="inc" >
            </div>
            <br>
            <p class="num_of_item">Num_of_item: ${product.price * product.quantity} </p>
            <br>
           <input type="button" value="Remove" class="remove_btn" data-id=${product.id}>
       </div>
    `;
});
       
Product_Cart.innerHTML += `
            <div class="totaly">
              <p id="cartTotal" style="font-weight: bold;">Total: </p>
            </div>
          
            `;
updateTotalPrice();

function updateTotalPrice() {
    var totalPrice = 0;
    cart_item.forEach(item => {
        totalPrice += item.price * item.quantity;
    });
    // document.getElementById('.cartTotal').textContent = `Total: $${totalPrice}`;
    var totalElem = document.getElementById('cartTotal');
    if(totalElem) totalElem.textContent = `Total: $${totalPrice}`;
}

Product_Cart.addEventListener('click', function (e) {
    var cart = e.target.closest('.cart');
    if (!cart) return;

    var productID = Number(cart.dataset.id);
    var index = cart_item.findIndex((item) => item.id == productID);
    var numOfItemElem = cart.querySelector('.num_of_item');

    if (e.target.classList.contains('inc')) {
        var productQuantityINC = Number(cart.querySelector('.quant').dataset.count);
        productQuantityINC++;

        cart.querySelector('.quant').dataset.count = productQuantityINC;
        cart.querySelector('.quant').textContent = productQuantityINC;

        if (index !== -1 && cart_item[index]) {
            cart_item[index].quantity = productQuantityINC;
            localStorage.setItem("cart", JSON.stringify(cart_item));
             numOfItemElem.textContent = `Num_of_item: $ ${cart_item[index].price * productQuantityINC}`;

        }

        updateTotalPrice();

    }
    else if (e.target.classList.contains('dec')) {
        var productQuantityDEC = Number(cart.querySelector('.quant').dataset.count);
        productQuantityDEC--;

        if (productQuantityDEC < 1) productQuantityDEC = 1;

        cart.querySelector('.quant').dataset.count = productQuantityDEC;
        cart.querySelector('.quant').textContent = productQuantityDEC;

        if (index !== -1 && cart_item[index]) {
            cart_item[index].quantity = productQuantityDEC;
            localStorage.setItem("cart", JSON.stringify(cart_item));
            numOfItemElem.textContent = `Num_of_item: $ ${cart_item[index].price * productQuantityDEC}`;

        }

        updateTotalPrice();


    }
    else if (e.target.classList.contains("remove_btn")) {

        if (index !== -1) {
            cart_item.splice(index, 1);
            cart.remove()
        }
        localStorage.setItem("cart", JSON.stringify(cart_item));
        updateTotalPrice();
        return;

    }
})
}
