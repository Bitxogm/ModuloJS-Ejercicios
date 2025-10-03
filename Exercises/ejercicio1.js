/**
 * @typedef {Object} Modulo
 * @property {string} modulo - Module name
 * @property {string} inicio - Module start date
 */

/**
 * @typedef {Object} User
 * @property {string} nombre - User name
 * @property {string} apellidos - User lastname
 * @property {Modulo[]} temas - Assignatures and themes
 * @property {boolean} [activo=true] - Hiring work or not
 */

const usuario = {
  nombre: 'Juan',
  apellidos: 'Diaz',
  temas: [
    {
      modulo: 'Node.js',
      inicio: '2025-10-20',
    },
    {
      modulo: 'Git',
      inicio: '2025-09-10',
    },
    {
      modulo: 'React',
      inicio: '2025-08-12',
    },
  ],
  activo: true,
};

/**
 * 
 * @param {Object} usuario - user data object that contain the 'temas' array
 * @param {string} nombreModulo - Module name to find
 * @returns {string} - Module star's data or error message if not exits module
 */

const obtenerInicioModulo = (usuario, nombreModulo) => {
  const moduloEncontrado = usuario.temas.find((tema) => tema.modulo === nombreModulo);
  return moduloEncontrado?.inicio ?? 'Modulo no encontrado'
}

const inicioReact = obtenerInicioModulo(usuario, 'React');
console.log(`Inicio del modulo React:  ${inicioReact}`);

