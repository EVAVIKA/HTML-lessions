window.addEventListener("DOMContentLoaded", main);

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
    for (let a = 0; a <= 10; a++) {
        checkNumber(a);
    }
    //logic(userinfo1.age);
}

function checkNumber (n) {
    switch(n) {
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