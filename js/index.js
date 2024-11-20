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

function displayDish(arr) {
    let str = ``;
    for(item of arr) {
        str += `<div>`;
        str += `<h2 class="sec3Caterory">Explore the varities of ${item.category} Dishes </h2> <div class="gridSB30px"> `;
        for(i of item.food) {
            str += `<div class="card columnFlexSBC"> <div><img src=${i.path} alt="noImage"><h3>${i.name}</h3></div> <p>${i.desc}</p> <p>${i.price}</p> <div class="rowFlexSBC"><p>Quantity</p><p>${i.quantity}</p></div> <button id="addToCart">Add To Cart</button></div>`;
        }
        str += `</div></div>`;
    }
    return str;
}
document.querySelector('.sec3').innerHTML = displayDish(dishArray);
// *******************************************************************************************************************************//

