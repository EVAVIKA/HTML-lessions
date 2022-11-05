class GoodsItem {
    constructor(title, price, img = 'https://oldestatespa.com/files/oldestatespa/image/no_product.jpg') {
        this.title = title;
        this.price = price;
        this.imgSrc = img;
    }
    render() {
        return `<div class="goods-item">
                    <img class='item-img' src=${this.imgSrc}>
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150, img: 'https://avatars.mds.yandex.net/get-mpic/4901709/img_id9176866033113156252.jpeg/orig' },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price, good.img);
            listHtml += goodItem.render();
        });
        document.querySelector('.container').innerHTML = listHtml;
    }
}

const list = new GoodsList();
// list.fetchGoods();
// list.render();