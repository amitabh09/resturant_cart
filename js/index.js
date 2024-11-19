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
    { category :'Italian',food: [{name:'Pizza',price:799,path:'./images/pizza.jpg'},{name:'Burger',price:129,path:'./images/burger.jpg'}] },
    { category :'Italian',food: [{name:'Pizza',price:799,path:'./images/pizza.jpg'},{name:'Burger',price:129,path:'./images/burger.jpg'}] }
];

function displayDish(arr) {
    let str = ``;
    for(item of arr) {
        str += `<h2>${item.category}</h2>`;
        let temp=``;
        for(i of item.food) {
            temp += `<h3>${i.name}</h3><h3>${i.price}</h3><img class="sec2Image" src=${i.path} alt="no-image">`;
        }
        str+=temp;
    }
    return str;
}
document.querySelector('.sec2').innerHTML = displayDish(dishArray);
// *******************************************************************************************************************************//