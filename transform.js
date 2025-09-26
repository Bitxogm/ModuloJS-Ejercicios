/* Ejercicio 4 Transformaciones con map y filter
 Nuestro cliente tiene un array de datos y nos ha pedido que saquemos la siguiente
 información. El listado de los desarrolladores que tengan como habilidad “JavaScript” y el
 listado de los proyectos en el que sus desarrolladores trabajan.
Estos son los datos: */


const datos = [
{
id: 1,
nombre: 'Juan',
habilidades: ['JavaScript', 'HTML', 'CSS'],
proyectos: [
{ id: 1, nombre: 'Proyecto 1' },
{ id: 2, nombre: 'Proyecto 2' }
]
},
{
id: 2,
nombre: 'María',
habilidades: ['Python', 'SQL', 'Django'],
proyectos: [
{ id: 3, nombre: 'Proyecto 3' },
{ id: 4, nombre: 'Proyecto 4' }
]
},
{
id: 3,
nombre: 'Pedro',
habilidades: ['Java', 'Spring', 'Hibernate'],
proyectos: [
{ id: 5, nombre: 'Proyecto 5' },
{ id: 6, nombre: 'Proyecto 6' }
]
}
];

/**
 * Filter the developers that have JavaScript as a skill
 * @param {Array<Oject> } datos - List of developers
 * @returns {Array<Object>} List of developers that have JavaScript
 */
const jsDevelopers = datos.filter((developer) => {
  const jsDeveloper = developer.habilidades.includes('JavaScript');
  return jsDeveloper;
});
console.log('/* desarrolladoresJavascript */ \n',jsDevelopers);

/**
 * Get the names of the projects in an unique list
 * @param {Array<Object>} datos - List of developers
 * @returns {Array<string>} List of projects names
 */
const nombresProyectos = datos.map((person) => {
  const projects = person.proyectos.map((workingProjects) => {
    return workingProjects.nombre;
  });
  return projects;
}).flat();

console.log(nombresProyectos);

// Tenemos que hacer las operaciones necesarias para obtener estos 2 listados:
/* desarrolladoresJavascript 
[
{
"id": 1,
"nombre": "Juan",
"habilidades": ["JavaScript", "HTML", "CSS"],
"proyectos": [
{ "id": 1, "nombre": "Proyecto 1"},
{ "id": 2, "nombre": "Proyecto 2" }
]
}
]
 nombresProyectos 
['Proyecto 1', 'Proyecto 2', 'Proyecto 3', 'Proyecto 4', 'Proyecto 5',
'Proyecto 6'] */

/*Hay que crear un archivo transform.js con la solución. Este archivo tiene que tener 2
funciones que nos retornen los valores correctos. NO USAR FOR NI WHILE. Se trata de un
ejercicio para practicar el uso de map y filter. */