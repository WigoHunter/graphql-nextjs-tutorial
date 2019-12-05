import { ApolloServer, gql } from "apollo-server-micro";
import connectDB from "../../src/lib/mongoose";
import { habitsResolvers } from "../../src/api/habits/resolvers";
import { habitsMutations } from "../../src/api/habits/mutations";
import { mergeResolvers, mergeTypeDefs } from "graphql-toolkit";
import Habits from "../../src/api/habits/Habits.graphql";

const fakeTypeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const fakeResolvers = {
  Query: {
    sayHello: () => {
      return "Hello World";
    }
  }
};

const typeDefs = mergeTypeDefs([fakeTypeDefs, Habits]);
const resolvers = mergeResolvers([
  fakeResolvers,
  habitsResolvers,
  habitsMutations
]);

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false
  }
};

const server = apolloServer.createHandler({
  path: "/api/graphql"
});

export default connectDB(server);
