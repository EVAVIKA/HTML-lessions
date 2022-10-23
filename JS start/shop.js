let btnAdd, btnRemove, btnBuy, container;
function OnStart() {
    btnAdd = document.querySelector('#btn-add');
    btnRemove = document.querySelector('#btn-remove');
    btnBuy = document.querySelector('#btn-buy');
    container = document.querySelector('.container');
    initHandlers();
}

function GetItem(name = "Shon", price = "666") {
    const item = document.createElement('div');
    item.classList.add('item');

    const img = document.createElement('img');
    img.classList.add('item-img');
    img.src = 'https://oir.mobi/uploads/posts/2021-04/1619807659_10-oir_mobi-p-malenkii-barashek-zhivotnie-krasivo-foto-10.jpg';
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
    const item = GetItem();
    container.appendChild(item);
}