
var fav_item = JSON.parse(localStorage.getItem('heart')) || [];
var favouraites = document.querySelector('.fav');



if (fav_item.length === 0) {
    favouraites.innerHTML = `<p> No Favourites yet</p>`;
}


fav_item.forEach(function (favProduct) {
    if (!favProduct) return;
    favouraites.innerHTML += `
        <div class="fav-card" data-id="${favProduct.id}">
            <img src="${favProduct.image}">
            <p>${favProduct.name}</p>
            <span>$ ${favProduct.price}</span><br>
            <button class="remove_btn">Remove</button>
        </div>
    `;
});

favouraites.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove_btn")) {
        var productID = Number(e.target.parentElement.dataset.id);
        var index = fav_item.findIndex((item) => item.id === productID)

        if (index !== -1) {
            fav_item.splice(index, 1);
        }
        localStorage.setItem("heart", JSON.stringify(fav_item));
        e.target.parentElement.remove();
    }

});
