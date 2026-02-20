
    var products = [
      { id: 1, name: "Smartphone X", title: "Smartphone X Pro", description: "High-performance smartphone with OLED display.", price: 799, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
      { id: 2, name: "Laptop Air", title: "Ultra Slim Laptop", description: "Lightweight laptop for work and gaming.", price: 1299, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
      { id: 3, name: "Bluetooth Headphones", title: "Wireless Noise Cancelling", description: "Immersive sound with deep bass.", price: 199, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
      { id: 4, name: "Smartwatch", title: "Fitness Smartwatch 2025", description: "Tracks health metrics all day.", price: 149, image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" },
      { id: 5, name: "Gaming Keyboard", title: "RGB Mechanical Keyboard", description: "Blue switch mechanical keyboard.", price: 89, image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68" },
      { id: 6, name: "Samrt Watch", title: "Ergonomic Pro Mouse", description: "Precision sensor and programmable buttons.", price: 49, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80" },
      { id: 7, name: "4K Monitor", title: "Ultra HD 27-inch Monitor", description: "Sharp and vivid colors for work and gaming.", price: 399, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
      { id: 8, name: "DSLR Camera", title: "Professional DSLR Camera", description: "High-quality photography tool.", price: 999, image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500&q=80" },
      { id: 9, name: "Wireless Speaker", title: "Portable Bluetooth Speaker", description: "Crystal clear sound on the go.", price: 59, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80" },
      { id: 10, name: "KeyBoard Pro", title: "10-inch HD Tablet", description: "Perfect for study, movies, and work.", price: 349, image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&q=80" },
      { id: 11, name: "Speaker", title: "Virtual Reality Set", description: "Immersive VR gaming experience.", price: 299, image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?w=500&q=80" },
      { id: 12, name: "Drone", title: "4K Camera Drone", description: "Perfect aerial photography.", price: 499, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794" },
      { id: 13, name: "Wireless Charger", title: "Wireless Earbuds", description: "With active noise cancellation.", price: 129, image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&q=80" },
      { id: 14, name: "SSD HardDesk", title: "Fast Charging 20000mAh", description: "Charge devices multiple times.", price: 39, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80" },
      { id: 15, name: "Powe Bank", title: "50-inch 4K Smart TV", description: "Netflix, YouTube, and more built-in.", price: 699, image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&q=80" }
]


var desc = document.querySelectorAll('.desc');
var search = document.querySelector('#search');
var input = document.querySelector('input')
var product_row= document.querySelector('.product_row');
var cart = document.querySelector('.cart');

/////////////////////////////Show Product//////////////////////////////////////

for (var index = 0; index < products.length; index++) {
     product_row.innerHTML +=  `
      <div class="desc">
               <img src="${products[index].image}" alt="${"$ " + products[index].name}">
               <p>${ products[index].name}</p>
               <span id="price">${"$ " + products[index].price}</span> <br> 
               <input type="button" value="Add to Cart" class="btn_to_cart" id=${products[index].id}><br><br>
               <input type="button" value="🤍" class="btn_for_fav" id=${products[index].id}>
         </div> 
   `
}


//////////////////////////////////////Search////////////////////////////////////////
var value_without_Space;
 search.addEventListener('input' , function(){
       value_without_Space = input.value.trim().toLowerCase();
      console.log(value_without_Space)
      var Product_Search= products.filter(function(item){
            return  (item.name.toLowerCase().includes(value_without_Space) );
      })
      console.log(Product_Search)
      product_row.innerHTML=''
      for (let index = 0; index < Product_Search.length; index++) {
           product_row.innerHTML += `
              <div class="desc">
                  <img src="${Product_Search[index].image}" alt="${"$ " + Product_Search[index].name}">
                  <p>${ Product_Search[index].name}</p>
                  <span id="price">${"$ " + Product_Search[index].price}</span> <br>
                  <input type="button" value="Add to Cart" class="btn_to_cart" id=${Product_Search[index].id}><br>
                  <input type="button" value="🤍" class="btn_for_fav" id="${Product_Search[index].id}>
              </div> 
            `  
      } 
 })




 
// //////////////////////////cart.js///////////////////////////////////////////////

var btn_to_cart = document.querySelectorAll('.btn_to_cart');
var btn_for_fav = document.querySelectorAll('.btn_for_fav');

btn_to_cart.forEach(function(btn){
 btn.addEventListener('click', function (e) {
            // var target= e.target ; 
            // console.log(e.target.id);
            var cards_Clicked=products.find(function(item){
                  return (item.id === Number(e.target.id))
            })
             
            var cart_item = JSON.parse(localStorage.getItem('cart')) || [];
            
            cart_item.push(
                  {
                   id: cards_Clicked.id,
                   name: cards_Clicked.name,
                   price: cards_Clicked.price,
                   image: cards_Clicked.image,
                   quantity: 1
                  }
            );
            localStorage.setItem('cart', JSON.stringify(cart_item));
             alert(`${cards_Clicked.name} Added to cart`);
      })
})
     






// //////////////////////////favourat.js///////////////////////////////////////////////



btn_for_fav.forEach(function(btn){
 btn.addEventListener('click', function (e) {
            this.style.backgroundColor="#c22f48";
            // console.log(e.target.id)
            var heart_prod=products.find(function(item){
                  return (item.id === Number(e.currentTarget.id))
            })
            if(!heart_prod){
                  console.log('product not found! ID: '+ this.id)
            }
            //  console.log(heart_prod)
            var fav_item = JSON.parse(localStorage.getItem('heart')) || [];
            fav_item.push(heart_prod);
            localStorage.setItem('heart', JSON.stringify(fav_item));
             alert(`${heart_prod.name} Added to heart`);
      })
})
     













































































