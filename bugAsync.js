/*Ejercicio 5 Arreglar bug de asincronía
Tenemos otro error que nuestro cliente nos pide arreglar. El cliente está pidiendo un usuario
y nos dice que está usando el id correcto el 1. Pero que siempre le da undefined. Nos ha
pasado el código que tenemos que revisar y arreglar. Para este problema crear un archivo
llamado bugAsync.js con la solución.
*/

// Este programa simula una llamada asincrónica para obtener un usuario
// Este programa simula una llamada asincrónica para obtener un usuario
// function obtenerUsuario(id) {
// let usuario;
// setTimeout(() => {
// if (id === 1) {
// usuario = { id: 1, nombre: 'John Doe' };
// }
// }, 2000);
// }
// return usuario;
// const usuario = obtenerUsuario(1);
// console.log(usuario);







// Promise
function obtenerUsuario(id) {
  let usuario;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(id === 1){
         usuario = {id:1, name: 'John Doe'};
        resolve(usuario)
      }else{
        const error = `Id not found in promise`
        reject(error)
      }
    }, 2000);
      console.log(`Calling promise`)
  });
}
obtenerUsuario(1)
.then(usuario => console.log(`Resolviendo promesa`,usuario))
.catch(error => console.log(error)); 


// Async await

function getUserAsync(id) {
  let usuario
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(id === 1){
         usuario = { id: 1, name: 'John Doe'};
        resolve(usuario);
      }else{
        reject((`User with id: ${id} not found`));  
      }
    },4000);
    console.log(`Esperando Async await`);
  });
}

async function showUser() {
  try{
    const encontrarUsuario = await getUserAsync(1);
    console.log('User dentro de async await',encontrarUsuario);
  }catch(error){
    console.log(error);
  }
}
showUser();