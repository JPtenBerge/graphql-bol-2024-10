import { books } from '../data/books.js';
import { movies } from '../data/movies.js';

export const resolvers = {
	Query: {
		books: () => books,
		favoriteMovie: () => movies[0],
        movies: () => movies,
	},
};
