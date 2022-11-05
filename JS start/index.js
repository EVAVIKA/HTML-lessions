includeScript('./objects.js');
includeScript('./task.js');
includeScript('./shop.js');
includeScript('./oop.js');
includeScript('./store.js');
includeScript('./async.js')
window.addEventListener("DOMContentLoaded", () => {
    const timeout = setTimeout(() => {
        main();
        clearTimeout(timeout);
    }, 500);
});

function main() {

    console.log('Hello world');

    let userinfo1 = {};
    userinfo1.age = 16;
    userinfo1.name = 'Vika';
    userinfo1.birthday = new Date(2006, 01 - 1, 24);

    let userinfo2 = {
        age: 16,
        name: 'Vika',
        birthday: new Date(2006, 01 - 1, 24),
    };

    console.log(userinfo1, userinfo2);
    // for (let a = 0; a <= 10; a++) {
    //     checkNumber(a);
    // }
    //logic(userinfo1.age);
    OnStart();
}

function checkNumber(n) {
    switch (n) {
        case 0:
            console.log('Это число 0');
            break;
        case 3:
            console.log('Это число 3');
            break;
        case 10:
            console.log('Это число 10');
            break;
        default:
            console.log('Я отрабатываю по-умолчанию');
    }
}

function primeNumber() {
    const iteratePrev = () => {
        k = 2;
        while (k < n) {
            if (n % k === 0) return false;
            k++;
        }
        return true;
    }
    let n = 2;
    let res = [];
    while (n <= 100000) {
        if(iteratePrev())
            res.push(n);
        n++;
    }
    return res;
}

function pyramid() {
    // const multiplyChar = (char, mValue) => {
    function multiplyChar(char, mValue) {
        let res = '';
        for(let i = 1; i <= mValue; i++) {
            res += char;
        }
        return res;
    }
    let n = 20;
    let res = '';
    for (let a = 0; a < n; a++) {
        let row = multiplyChar('x', a + 1);
        res += row + '\n';
        console.log(row);
    }
    return res;
}

String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}

function reverseReq(str = 'asdasd') {
    let res = '';
    function req(i, end) {
        if(i >= end) return;
        req(i+1, end); // переход к сл. символу
        res += str[i]; // запиши символ
    }
    let len = str.length;
    req(0, len);
    return res;
}

function includeScript(path) {
    const scrElement = document.createElement('script'); // создать элемент
    scrElement.setAttribute('src', path); // установить атрибут src из path
    document.head.appendChild(scrElement); // добавить созданный элемент в документ, голову
}