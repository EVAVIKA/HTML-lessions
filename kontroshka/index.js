function ConvertToTf(Tc) {
    let Tf = (9 / 5) * Tc + 32;
    alert(Tf);
    return Tf;
}

function SwitchVars(a, b) {
    a = {
        oldA: a,
        oldB: b,
    };
    b = a.oldA;
    a = a.oldB;

    console.log("a", a);
    console.log("b", b);
}

const OP = {
    plus: "+",
    minus: "-",
    mult: "*",
    div: "/",
    rest: "%",
}

function Calc(numb1, numb2, op = OP.plus) {
    let result;
    numb1 = Number(numb1);
    numb2 = Number(numb2);
    switch (op) {
        case OP.plus:
            result = numb1 + numb2
            break;
        case OP.minus:
            result = numb1 - numb2
            break;
        case OP.mult:
            result = numb1 * numb2
            break;
        case OP.div:
            if(numb2 === 0) return "Деление на 0";
            result = numb1 / numb2
            break;
        case OP.rest:
            result = numb1 % numb2
            break;
        default:
            console.error("Операция не поддерживается.");
    };
    return result;
}

function Power(numb, pow) {
    if (pow > 1) {
        return numb * Power(numb, pow - 1);
    } else {
        return numb;
    }
}

const cart = [
    { name: "Milk", price: 199, count: 1 },
    { name: "Pepper", price: 350, count: 2 },
    { name: "Tomato", price: 200, count: 2 },
    { name: "Eggs", price: 150, count: 10 },
]
function CartSum() {
    let result = 0;
    for (let item of cart) {
        result += item.count * item.price;
    }
    return result;
}

function FromZeroToNine() {
    for (let item = 0; item <= 9; console.log(item++)) { }
}