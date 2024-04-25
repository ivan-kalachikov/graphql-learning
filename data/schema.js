import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Store {
    store: String
  }

  input StoreInput {
    store: String
  }

  enum Size {
    SMALL
    MEDIUM
    LARGE
  }
  
  type Product {
    id: ID!
    name: String!
    price: Float!
    description: String
    stock: Int!
    stores: [Store]!
    size: Size
  }

  input ProductInput {
    id: ID
    name: String!
    price: Float!
    description: String
    stock: Int!
    stores: [StoreInput]!
    size: Size
  }

  type Query {
    getProduct(id: ID!): Product
    getAllProducts: [Product]
  }

  type Mutation {
    createProduct(input: ProductInput!): Product
    updateProduct(input: ProductInput!): Product
    deleteProduct(id: ID!): String
  }
`);

export default schema;
