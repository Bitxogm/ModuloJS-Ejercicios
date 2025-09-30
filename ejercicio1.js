/**
 * @typedef {Object} Modulo
 * @property {string} modulo - El nombre del módulo/tema del bootcamp.
 * @property {string} inicio - La fecha de inicio del módulo (YYYY-MM-DD).
 */

/**
 * @typedef {Object} User
 * @property {string} nombre - El nombre del usuario.
 * @property {string} apellidos - Los apellidos del usuario.
 * @property {Modulo[]} temas - Los modulos del bootcamp y fecha inicio
 * @property {boolean} [activo=true] - Indica si el usuario está activo (opcional).
 */


const usuario = {
  nombre: 'Juan',
  apellidos: 'Diaz',
  temas: [
    {
      modulo: 'Node.js',
      inicio: '2025-10-20'
    },
    {
      modulo: 'Git',
      inicio: '2025-09-10'
    },
    {
      modulo: 'React',
      inicio: '2025-08-12'
    },
  ],
  activo: true,
};

const moduloReact = usuario.temas.find( (tema) => tema.modulo === 'React');
const inicioReact = moduloReact ? moduloReact.inicio : 'Modulo no encontrado';
console.log({ inicioReact });