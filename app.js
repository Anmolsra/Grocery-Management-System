let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'apple',
        image: 'apple.png',
        price: 100
    },
    {
        id: 2,
        name: 'Oranges',
        image: 'Oranges.jpg',
        price: 120
    },
    {
        id: 3,
        name: 'chili',
        image: 'chili.png',
        price: 100
    },
    {
        id: 4,
        name: 'Garlic',
        image: 'garlic.png',
        price: 100
    },
    {
        id: 5,
        name: 'onion',
        image: 'onion.png',
        price: 100
    },
    {
        id: 5,
        name: 'patota',
        image: 'patato.png',
        price: 50
    },
    {
        id: 6,
        name: 'tamato',
        image: 'tamato.png',
        price: 100
    },
    //Medicine
    {
        id: 7,
        name: 'Cetirizine',
        image: 'Cetirizine.jpg',
        price: 50
    },
    {
        id: 8,
        name: 'Cheston Cold',
        image: 'Cheston Cold.jpg',
        price: 50
    },
    {
        id: 9,
        name: 'CUFRIL-D cough sysrup ',
        image: 'CUFRIL-D cough syrup.jpg',
        price: 50
    },
    {
        id: 10,
        name: 'Dolo ',
        image: 'Dolo.jpg',
        price: 50
    },
    {
        id: 11,
        name: 'Gelusil',
        image: 'Gelusil 1.jpg',
        price: 50
    },
    {
        id: 12,
        name: 'Metolar XR 50',
        image: 'Metolar XR 50.jpg',
        price: 50
    },
    {
        id: 13 ,
        name: 'Baby Cream',
        image: 'Baby Cream.jpg',
        price: 50
    },
    {
        id: 14,
        name: 'Baby Powder',
        image: 'Baby Powder.jpg',
        price: 50
    },
    {
        id: 15,
        name: 'Baby Shampoo',
        image: 'Baby Shampoo.jpg',
        price: 50
    },
    {
        id: 16,
        name: 'Baby wipes',
        image: 'Baby wipes.jpg',
        price: 50
    },
    {
        id: 17,
        name: 'Diapers ',
        image: 'Diapers.jpg',
        price: 50
    },
    {
        id: 18,
        name: 'Johnsons Baby Oil',
        image: "Johnson's Baby Oil.jpg",
        price: 50
    },
    {
        id: 19,
        name: 'pencil ',
        image: 'Pencils.jpg',
        price: 50
    },
    {
        id: 1,
        name: 'pens ',
        image: 'Pens.jpg',
        price: 50
    },
    {
        id: 1,
        name: 'pins ',
        image: 'Pins.jpg',
        price: 50
    },
    {
        id: 1,
        name: 'puncher ',
        image: 'Puncher.jpg',
        price: 50
    },
    {
        id: 1,
        name: 'Stepler ',
        image: 'Stapler.jpg',
        price: 50
    },
    {
        id: 1,
        name: 'Sticky Notes ',
        image: 'Sticky Notes.jpg',
        price: 50
    },
    {
        id: 1,
        name: 'Beared oil ',
        image: 'Beard Oil.jpg',
        price: 50
    },
   
    {
        id: 1,
        name: 'face Cream ',
        image: 'Face Cream.jpg',
        price: 50
    },
    {
        id: 1,
        name: 'Lakme Facewash',
        image: 'Lakme Facewash.jpg',
        price: 50
    },
    {
        id: 1,
        name: 'Lip balm',
        image: 'Lip Balm.jpg',
        price: 50
    },
    {
        id: 1,
        name: 'mens face wash',
        image: "Men's Face Wash.jpg",
        price: 50
    },
    {
        id: 1,
        name: 'Moisturizer',
        image: 'Moisturizer.jpg',
        price: 50
    },
    {
        id: 1,
        name: 'Atta',
        image: 'atta.jpg',
        price: 50
    },
    {
        id: 1,
        name: 'Gloves',
        image: 'Gloves.jpg',
        price: 50
    },
    {
        id: 1,
        name: 'Maggie',
        image: 'maggi.jpg',
        price: 50
    },
    {
        id: 1,
        name: 'Watwering can',
        image: 'Watering Can.jpg',
        price: 50
    },
   
    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}