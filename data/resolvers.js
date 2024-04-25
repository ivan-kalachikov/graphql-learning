class Product {
  constructor(id, { name, price, description, stock, stores, size }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.stock = stock;
    this.stores = stores;
    this.size = size;
  }
}

const productDatabase = {};

const resolvers = {
  getProduct: ({ id }) => new Product(id, productDatabase[id]),
  createProduct: ({ input }) => {
    const id = require("crypto").randomBytes(10).toString("hex");
    productDatabase[id] = input;
    return new Product(id, input);
  },
};

export default resolvers;
