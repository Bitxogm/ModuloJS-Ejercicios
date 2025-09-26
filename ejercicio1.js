const usuario = {
  Nombre: 'Juan',
  Apellidos: 'Diaz',
  Temas: [
    { Tema: 'Node.js', Inicio: '2025-10-20' },
    { Tema: 'Git', Inicio: '2025-09-10' },
    { Tema: 'React', Inicio: '2025-08-12' },
  ],
  Buscando: false,
};

const inicioReact =` ${usuario.Temas[2].Inicio}`
console.log(inicioReact);
