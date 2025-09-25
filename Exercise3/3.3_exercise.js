/* 3.3 Ejercicio
 Crea una función para que con estos datos de entrada se produzca los siguientes resultados:
 Lo importante en estos ejercicios es ver el patrón con cada ejemplo. En ningún caso es
 necesario usar ningún tipo de condicional. 
 */

const input1 = 'string';
/**
 * Reverse the received string and it length
 * @param {string} input 
 * @returns string
*/

// create your function here
const reverseStringFunction = (inputString) => {
  const reverseString = inputString.split('').reverse().join('');
  return inputString.length + ' ' + reverseString;
}

const firstResult = reverseStringFunction(input1); // '6 gnirts'
console.log(firstResult);

const input2 = 'variable';
const secondResult = reverseStringFunction(input2); // '8 elbairav'
console.log(secondResult);

const input3 = 'pointer';
const thirdResult = reverseStringFunction(input3); // '7 retniop'
console.log(thirdResult);
