import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./data/schema";
import resolvers from "./data/resolvers";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}/graphql`);
});
