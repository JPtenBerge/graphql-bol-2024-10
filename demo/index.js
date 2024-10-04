import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './typedefs.js';
import { resolvers } from './resolvers/resolvers.js';
import { ShowRepository } from './repositories/show.repository.js';
import { MovieRepository } from './repositories/movie.repository.js';
import { DirectorRepository } from './repositories/director.repository.js';
import { DirectorDataLoader } from './data-loaders/movie.dataloader.js';

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4600 },
	context: async () => {

		// JWT  BASIC  Cookies
		// [Authorize]
		// @preauthorize

		let movieRepo = new MovieRepository();
		let showRepo = new ShowRepository();
		let directorRepo = new DirectorRepository();
		let directorDataLoader = new DirectorDataLoader(directorRepo);

		return {
			movieRepo,
			directorRepo,
			showRepo,
			directorDataLoader
		};
	},
});

console.log(`🚀  Server ready at: ${url}`);
