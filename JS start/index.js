includeScript('./objects.js');
includeScript('./task.js');
includeScript('./shop.js');
window.addEventListener("DOMContentLoaded", () => {
    const timeout = setTimeout(() => {
        main();
        clearTimeout(timeout);
    }, 10);
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

function includeScript(path) {
    const scrElement = document.createElement('script'); // создать элемент
    scrElement.setAttribute('src', path); // установить атрибут src из path
    document.head.appendChild(scrElement); // добавить созданный элемент в документ, голову
}