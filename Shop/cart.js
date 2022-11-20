let myCart;
try {
    myCart = JSON.parse(sessionStorage.my_cart);
} catch {
    myCart = [];
}

const app = new Vue({
    el: '#app',
    data: {
        myCart,
    },
});