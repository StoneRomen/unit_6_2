
// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let arr = [1, 'hello', 3, true, 5];

function onlyNumbers(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
            count++;
        }
    }
    return count > 0 ? sum / count : 0;
}

console.log(onlyNumbers(arr));

