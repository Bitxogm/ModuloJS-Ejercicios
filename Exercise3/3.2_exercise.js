/* 3.2 Ejercicio
 Crea una función para que con estos datos de entrada se produzca los siguientes resultados:
 */

const input = 10;
// create your function here

/**
 * Convert to string and separate each number received with -
 * @param {number} inputNumber 
 * @returns string
 */
const separateNumber = (inputNumber) => {
  const stringInput = inputNumber.toString();
  const arrayInput = stringInput.split('');
  const output = arrayInput.join('-');
  return output
}

const firstResult = separateNumber(input); // '1-0'
console.log(firstResult);

const secondInput = 1;
const secondResult = separateNumber(secondInput); // '1'
console.log(secondResult);

const thirdInput = 11234;
const thirdResult = separateNumber(thirdInput); // '1-1-2-3-4'
console.log(thirdResult);

