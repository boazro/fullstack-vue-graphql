const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

// import typedefs ande resolvers
const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require("./resolvers");

// import environment variables and mongoose models.
require("dotenv").config({ path: "variables.env" });
const User = require("./models/User");
const Post = require("./models/Post");

// connect to mlab DB.
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB Connected!"))
  .catch(err => console.error("Error: ", err));

// create appolo server using typedefs, resolvers & mongoose models.
const server = new ApolloServer({
  typeDefs,
  context: { User, Post },
  resolvers
});

server.listen().then(({ url }) => console.log(`Server listening ${url}`));
