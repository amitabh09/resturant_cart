// *******************************************************************************************************************************//
const navArray = [
    {title: 'Home',path:'#'},
    {title: 'Contact',path:'./contact.html'},
    {title: 'About',path:'./about.html'},
    {title: 'Cart',path:'./cart.html'}
];

function displayNav(arr) {
    let str = ``;
    for(item of arr) {
        str += `<a href=${item.path}>${item.title}</a>`;
    }
    return str;
}
document.querySelector('nav').innerHTML = displayNav(navArray);
// *******************************************************************************************************************************//

// *******************************************************************************************************************************//

const dishArray = [
    { category :'Italian',food: [{name:'Pizza',price:799,path:'./images/pizza.jpg', desc:'lorem ipsum', quantity:0},{name:'Burger',price:129,path:'./images/burger.jpg', desc:'lorem ipsum', quantity:0},{name:'Burger',price:129,path:'./images/burger.jpg', desc:'lorem ipsum', quantity:0},{name:'Burger',price:129,path:'./images/burger.jpg', desc:'lorem ipsum', quantity:0},{name:'Burger',price:129,path:'./images/burger.jpg', desc:'lorem ipsum', quantity:0}] },
    { category :'North Indian',food: [{name:'Pizza',price:799,path:'./images/pizza.jpg', desc:'lorem ipsum', quantity:0},{name:'Burger',price:129,path:'./images/burger.jpg', desc:'lorem ipsum', quantity:0},{name:'Burger',price:129,path:'./images/burger.jpg', desc:'lorem ipsum', quantity:0},{name:'Burger',price:129,path:'./images/burger.jpg', desc:'lorem ipsum', quantity:0},{name:'Burger',price:129,path:'./images/burger.jpg', desc:'lorem ipsum', quantity:0}] },
    { category :'South Indian',food: [{name:'Pizza',price:799,path:'./images/pizza.jpg', desc:'lorem ipsum', quantity:0},{name:'Burger',price:129,path:'./images/burger.jpg', desc:'lorem ipsum', quantity:0},{name:'Burger',price:129,path:'./images/burger.jpg', desc:'lorem ipsum', quantity:0},{name:'Burger',price:129,path:'./images/burger.jpg', desc:'lorem ipsum', quantity:0},{name:'Burger',price:129,path:'./images/burger.jpg', desc:'lorem ipsum', quantity:0}] }
];

displayDish(dishArray)
function displayDish(arr) {
    let str = ``;
    for(item of arr) {
        str += `<div>`;
        str += `<h2 class="sec3Caterory">Explore the varities of ${item.category} Dishes </h2> <div class="gridSB30px"> `;
        for(i of item.food) {
            str += `<div class="card columnFlexSBC"> <div class="imgDiv"><img src=${i.path} alt="noImage"></div> <h3>${i.name}</h3> <p>${i.desc}</p> <p>₹${i.price}</p> <div id='quantityDiv' class="rowFlexSBC"><p>Quantity</p><p>${i.quantity}</p></div> <button id="addToCart" >Add To Cart</button></div>`;
        }
        str += `</div></div>`;
    }
    
    document.querySelector('.sec3').innerHTML = str;

    let addToCart = document.querySelectorAll('#addToCart');
    let quantityDiv = document.querySelectorAll('#quantityDiv');
    addToCart.addEventListener("click", addToCartFunction);
    function addToCartFunction() {
        console.log('hello mc');
        quantityDiv[0].style.visibility = "visible";
    }
}

// *******************************************************************************************************************************//

