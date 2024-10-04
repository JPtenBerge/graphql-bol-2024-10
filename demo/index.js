import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './typedefs.js';
import { resolvers } from './resolvers/resolvers.js';
import { ShowRepository } from './repositories/show.repository.js';
import { MovieRepository } from './repositories/movie.repository.js';
import { DirectorRepository } from './repositories/director.repository.js';

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4600 },
	context: async () => {
		let movieRepo = new MovieRepository();
		let showRepo = new ShowRepository();
		let directorRepo = new DirectorRepository();

		return {
			movieRepo,
			directorRepo,
			showRepo,
		};
	},
});

console.log(`🚀  Server ready at: ${url}`);
