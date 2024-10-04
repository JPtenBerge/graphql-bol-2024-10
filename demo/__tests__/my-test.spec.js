import { ApolloServer } from '@apollo/server';
import { typeDefs } from '../typedefs.js';
import { resolvers } from '../resolvers/resolvers.js';

test('gets my favorite movie', async () => {
	const server = new ApolloServer({
		typeDefs,
		resolvers,
	});
	let result = await server.executeOperation(
		{
			query: `{ favoriteMovie { title } }`,
		},
		{
			contextValue: {
				movieRepo: {
					getFavoriteMovie: jest.fn().mockReturnValue({ title: 'The Minions' }),
				},
			},
		}
	);
	expect(result.body.kind).toBe('single');
	expect(result.body.singleResult.data.favoriteMovie.title).toBe('The Minions');
});
