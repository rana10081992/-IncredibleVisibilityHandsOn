import { ApolloServer, gql } from 'apollo-server';

// Define your data
const books = [
  {
    title: 'The Awakeningssssssssssss',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glassssssssss',
    author: 'Paul Auster',
  },
];

// Define the GraphQL schema
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

// Provide resolver functions for the schema fields
const resolvers = {
  Query: {
    books: () => books,
  },
};

// Create the Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
