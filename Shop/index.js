const items = [
    {
        img: `./res/catalog (1).png`,
        name: 'Бородатый мужчина',
        price: 1000,
    },
    {
        img: `./res/catalog (2).png`,
        name: 'Смазливый мальчик',
        price: 1000,
    },
    {
        img: `./res/catalog (3).png`,
        name: 'Блондиночка',
        price: 1000,
    },
    {
        img: `./res/catalog (4).png`,
        name: 'Секретарша',
        price: 1000,
    },
    {
        img: `./res/catalog (5).png`,
        name: 'Зебра',
        price: 1000,
    },
    {
        img: `./res/catalog (6).png`,
        name: 'Модник огородник',
        price: 1000,
    },
    {
        img: `./res/catalog (7).png`,
        name: 'Ноги',
        price: 1000,
    },
    {
        img: `./res/catalog (8).png`,
        name: 'Священник',
        price: 1000,
    },
];
items.forEach((e, i) => e.id = i);
let isShowedAllItems = false;

const cart = [];

const app = new Vue({
    el: '#app',
    data: {
        items,
    },
    methods: {
        browseAllClickHandler(event) {
            const thisElement = event.srcElement;
            const catalog = document.querySelector('.catalog-content');
            if (isShowedAllItems) {
                thisElement.setAttribute('value', 'Browse All Product');
                const additional = catalog.querySelectorAll('.additional_card');
                for(let elem of additional) {
                    elem.remove();
                }
                isShowedAllItems = false;
            } else {
                for (let i = 4; i < items.length; i++) {
                    const itemHTML = `
                <div data-id="${items[i].id}" class="catalog-content__card additional_card">
                <img src="${items[i].img}" class="catalog-content__card-img">
                <div class="catalog-content__card-descr">
                    <div class="catalog-content__card-descr__name">
                        ${items[i].name}
                        </div>
                        <div class="catalog-content__card-descr__price">
                        ${items[i].price}
                        </div>
                    </div>
                </div>`;
                    catalog.innerHTML += itemHTML;

                }
                isShowedAllItems = true;
                thisElement.setAttribute('value', 'Show Less')
                // поменять у кнопки value (текст)
            }
        },
        itemCardClickHandler(event) {
            const itemId = event.srcElement?.dataset?.id ?? -1;
            // 1. найти по id товар в items
            // 2. добавить найденный товар в cart, но только если этого товара в cart еще нет, если есть, то не добавляй
            const item = items.find((e) => e.id == itemId);
            const cartItem = cart.find((e) => e.id == itemId);
            if (cartItem) {
                return
            }
            cart.push(item);
            sessionStorage.setItem('my_cart', JSON.stringify(cart));
            // прочитай про sessionStorage и localStorage
            // прочитай про JSON.parse и JSON.stringify
        },
    }
});

console.log(app);