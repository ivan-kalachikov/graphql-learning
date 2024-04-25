import { Widgets } from "./dbConnectors";

const resolvers = {
  getProduct: async ({ id }) => {
    try {
      const product = await Widgets.findById(id);
      return product;
    } catch (error) {
      throw error;
    }
  },
  getAllProducts: async () => {
    try {
      return await Widgets.find();
    } catch (error) {
      throw error;
    }
  },
  createProduct: async ({ input }) => {
    const product = await new Widgets({
      ...input,
    });
    product.id = product._id;
    try {
      product.save();
      return product;
    } catch (error) {
      throw error;
    }
  },
  updateProduct: async ({ input }) => {
    const product = await Widgets.findOneAndUpdate({ _id: input.id }, input, {
      new: true,
    });
    try {
      product.save();
      return product;
    } catch (error) {
      throw error;
    }
  },
  deleteProduct: async ({ id }) => {
    try {
      await Widgets.deleteOne({ _id: id });
      return `Product with id: "${id}" deleted successfully!`;
    } catch (error) {
      throw error;
    }
  },
};

export default resolvers;
