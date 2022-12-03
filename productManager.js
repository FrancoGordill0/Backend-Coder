class ProductManager {
    constructor() {
      this.products = [];
    }
  
    agregarProducto(title, description, price, thumbnail, code, stock) {
      const producto = {
        id: this.products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      
      //todos los campos son obligatorios

      if (
        title === undefined ||
        description === undefined ||
        price === undefined ||
        thumbnail === undefined ||
        code === undefined ||
        stock === undefined
      ) {
        return console.log("Todos los campos son obligatorios");
      }
  
      let condition = this.products.find((producto) => producto.code === code);
      if (condition) {
        return console.log("El producto ya existe");
      } else {
        this.products.push(producto);
      }
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      let myID = parseInt(id);
      let miProducto = null;
      this.products.forEach((producto) => {
        if (producto.id === myID) {
          miProducto = producto;
        }
      });
      if (miProducto === null) {
        return console.log("Not found");
      } else {
        return miProducto;
      }
    }
  }
  
  const productManager = new ProductManager();
  productManager.agregarProducto(
    "Guitarra",
    "Fender stratocaster",
    1600,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/076/608/products/unnamed-17-a10749eb60f09b884816233374720144-640-0.jpg",
    "123",
    15
  );
  productManager.agregarProducto(
    "Guitarra",
    1600,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/076/608/products/unnamed-17-a10749eb60f09b884816233374720144-640-0.jpg",
    "1234",
    15
  );
  
  console.log(productManager.getProducts());
  
  console.log("busqueda de producto", productManager.getProductById(1));