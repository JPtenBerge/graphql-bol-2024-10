import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './typedefs.js';
import { resolvers } from './resolvers/resolvers.js';

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4600 },
});

console.log(`🚀  Server ready at: ${url}`);
