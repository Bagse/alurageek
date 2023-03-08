const cargarProductos = async () => {
  try {
    const respuesta = await fetch("https://apimocha.com/alurageekapi/products");

    // si la respuesta es correcta
    if (respuesta.status === 200) {
      const datos = await respuesta.json();

      let productosPlaystation = "";
      let productosNintendo = "";
      let productosConsolas = "";

      // Extrae los primeros cinco datos de la categoria PlayStation
      const cincoPrimerosPlay = datos
        .filter((producto) => producto.category === "PlayStation 5")
        .slice(0, 5);

      cincoPrimerosPlay.forEach((producto) => {
        productosPlaystation += `
          <div class="card bg-transparent border-light" style="width: 16rem;">
            <img src="${producto.image}" class="card-img-top img-fluid imagen-pri" alt="${producto.name}">
            <div class="card-body">
              <h5 class="h6 card-title fw-bold">${producto.name}</h5>
              <p class="card-text text-success fw-bold">$${producto.price}</p>
              <a href="#" class="btn btn-primary">Ver producto</a>
            </div>
          </div>
        `;
      });

      // Extrae los primeros cinco datos de la categoria Nintendo
      const cincoPrimerosNintendo = datos
        .filter((producto) => producto.category === "Nintendo Switch")
        .slice(0, 5);

      cincoPrimerosNintendo.forEach((producto) => {
        productosNintendo += `
          <div class="card bg-transparent border-light" style="width: 16rem;">
            <img src="${producto.image}" class="card-img-top img-fluid imagen-pri" alt="${producto.name}">
            <div class="card-body">
              <h5 class="h6 card-title fw-bold">${producto.name}</h5>
              <p class="card-text text-success fw-bold">$${producto.price}</p>
              <a href="#" class="btn btn-primary">Ver producto</a>
            </div>
          </div>
          `;
      });

      // Extrae los primeros cinco datos de la categoria Consola
      const cincoPrimerosConsola = datos
        .filter((producto) => producto.category === "Consola")
        .slice(0, 5);

      cincoPrimerosConsola.forEach((producto) => {
        productosConsolas += `
          <div class="card bg-transparent border-light" style="width: 16rem;">
            <img src="${producto.image}" class="card-img-top img-fluid imagen-pri" alt="${producto.name}">
            <div class="card-body">
              <h5 class="h6 card-title fw-bold">${producto.name}</h5>
              <p class="card-text text-success fw-bold">$${producto.price}</p>
              <a href="#" class="btn btn-primary">Ver producto</a>
            </div>
          </div>
          `;
      });

      document.getElementById("productos-playstation-container").innerHTML =
        productosPlaystation;
      document.getElementById("productos-nintendo-container").innerHTML =
        productosNintendo;
      document.getElementById("productos-consolas-container").innerHTML =
        productosConsolas;
    } else if (respuesta.status === 401) {
      console.log("Algo salió mal pipipi");
    } else if (respuesta.status === 404) {
      console.log("El producto que buscas no existe pipipi");
    } else {
      console.log("Hubo un error y no se que pex");
    }
  } catch (error) {
    console.log(error);
  }
};

cargarProductos();
