const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const arrValues = [];

for (const key in obj) {
    if (Array.isArray(obj[key])) {
        // Если значение ключа — массив, добавляем каждый элемент в arrValues
        arrValues.push(...obj[key]);
    } else {
        // Иначе добавляем само значение ключа
        arrValues.push(obj[key]);
    }
}
console.log(arrValues);
