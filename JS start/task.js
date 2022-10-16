function numToObj (num) {
    if (typeof (num) !== 'number' || !(num <= 999 && num >= 0)) {
        throw new Error('Должно быть число от 0 до 999 включит.');
    }

    let numStr = String(num);
    while (numStr.length < 3) {
        numStr = '0' + numStr;
    }
    const obj = {};
    obj['сотни'] = Number(numStr[0]);
    obj['десятки'] = Number(numStr[1]);
    obj['единицы'] = Number(numStr[2]);

    return obj;
}