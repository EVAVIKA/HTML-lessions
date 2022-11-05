// function Example() {
//     return new Promise((res, rej) => {
//         const start = Date.now();
//         while(start + 5000 > Date.now()) {}
//         res('Я выполнился после долгой операции (запрос картинок)');
//     });
// }
// function Example2() {
//     return new Promise((res, rej) => {
//         const start = Date.now();
//         while(start + 5000 > Date.now()) {}
//         res('Я выполнился после долгой операции (запрос видео кодека)');
//     });
// }
// function Example3() {
//     const start = Date.now();
//     while(start + 7000 > Date.now()) {}
//     return 'Я выполнился после долгой операции (запрос большой статьи)';
// }

// function Start() {
//     console.log("Start scripta");
//     Example().then(function(res){
//         console.log(res);
//     })
//     Example2().then(function(res){
//         console.log(res);
//     })
//     Example3();
//     console.log("Что-то делаем дальше");
// }

function Start() {
    const t = setTimeout(() => {

        clearTimeout(t);
    }, 5000);
    console.log("Мы продолжили работать");
}