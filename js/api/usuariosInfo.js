export const getUsuarios = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          nombre: "Juan Álvarez",
          edad: 43,
          ocupacion: "Abogado",
          imgSrc:
            "https://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2022/01/153-man-office-worker-1-coloring-page.png",
        },
        {
          nombre: "Karen Arias",
          edad: 19,
          ocupacion: "Ingeniero Civil",
          imgSrc:
            "https://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2022/01/155-woman-office-worker-1-coloring-page.png",
        },
        {
          nombre: "Ernesto Sandoval",
          edad: 29,
          ocupacion: "Psicólogo",
          imgSrc:
            "https://i.pinimg.com/236x/84/00/23/8400237cc8ffe3660f1eb35edabf89c1.jpg",
        },
        {
          nombre: "Luisa Romero",
          edad: 24,
          ocupacion: "Backend Engineer",
          imgSrc:
            "https://png.pngtree.com/png-vector/20230531/ourlarge/pngtree-printable-female-face-cartoon-coloring-book-vector-png-image_6787023.png",
        },
      ]);
    }, 2000);
  });
