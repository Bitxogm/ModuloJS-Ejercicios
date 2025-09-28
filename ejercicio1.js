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
  buscando: false,
};

const inicioReact = usuario.temas[2].inicio;
console.log({ inicioReact });