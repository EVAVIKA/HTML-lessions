function getDog() {
    function sayWoof() {
        console.log("WOOF");
    }
    return {
        name: 'Гаврик',
        age_human: 3,
        age_dogs: 18,
        say_woof: sayWoof,
        another_dog: new Dog(),
    };
}

function getDoberman() {
    function jump() {
        console.log("Собака неистово прыгает.");
    }
    const dober = getDog();
    dober.name = 'Пушок';
    dober.jump = jump;
    console.log("Я создала собаку.");
    return dober;
}

class Dog {
    constructor() {
        this.name = 'Гаврик';
        this.age_human = 3;
        this.age_dogs = 18;
        console.log("Я создала собаку.");
    }
    say_woof() {
        console.log("WOOF");
    }
}

class Doberman extends Dog {
    constructor() {
        super();
        this.name = 'Пушок';
    }
    jump() {
        console.log("Собака неистово прыгает.");
    }
}
