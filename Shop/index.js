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
let isShowedAllItems = false;
const app = new Vue({
    el: '#app',
    data: {
        items,
    },
    methods: {
        browseAllClickHandler() {
            if (isShowedAllItems) {
                // убираем лишнее
                isShowedAllItems = false;
            } else {
                const catalog = document.querySelector('.catalog-content');
                for (let i = 4; i < items.length; i++) {
                    const itemHTML = `
                <div class="catalog-content__card">
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
            }
        }
    }
});

console.log(app);