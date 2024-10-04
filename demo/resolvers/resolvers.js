import { books } from '../data/books.js';
import { Query } from './query.resolver.js';
import { Mutation } from './mutation.resolver.js';
import { Genre } from './genre.resolver.js';
import { Watchable } from './watchable.resolver.js';

export const resolvers = {
	Query,
	Mutation,
	Movie,
	Show,
	Genre,
	// Watchable
};
