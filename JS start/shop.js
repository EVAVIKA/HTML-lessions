let btnAdd, btnRemove, btnBuy, container;
function OnStart() {
    btnAdd = document.querySelector('#btn-add');
    btnRemove = document.querySelector('#btn-remove');
    btnBuy = document.querySelector('#btn-buy');
    container = document.querySelector('.container');
    initHandlers();


    const goods = [
        { title: 'Shirt', price: 150, img: 'https://avatars.mds.yandex.net/get-mpic/4901709/img_id9176866033113156252.jpeg/orig' },
        { title: 'Socks', price: 50, img: 'https://oir.mobi/uploads/posts/2021-04/1619807659_10-oir_mobi-p-malenkii-barashek-zhivotnie-krasivo-foto-10.jpg' },
        { title: 'Jacket', price: 350 },
        { title: 'Shoes', price: 250 },
    ];

    goods.forEach((good) => {
        AddGood(good.title, good.price, good.img);
    });
}

function GetItem(name = "Shon", price = "666", imgSrc = 'https://st12.stpulscen.ru/images/product/201/309/387_big.png') {
    const item = document.createElement('div');
    item.classList.add('item');

    const img = document.createElement('img');
    img.classList.add('item-img');
    img.src = imgSrc;
    img.alt = 'Барашек';

    const descr = document.createElement('div');
    descr.classList.add('item-descr');

    const descrName = document.createElement('h6');
    descrName.classList.add('item-descr_name');
    descrName.innerHTML = name;

    const descrPrice = document.createElement('p');
    descrPrice.classList.add('item-descr_price');
    descrPrice.innerHTML = price;

    item.appendChild(img);
    item.appendChild(descr);
    descr.appendChild(descrName);
    descr.appendChild(descrPrice);

    return item;
}

function initHandlers() {
    btnAdd.onclick = OnAdd;
}

function OnAdd(event) {
    AddGood();
}

function AddGood(title, price, img) {
    const item = GetItem(title, price, img);
    container.appendChild(item);
}