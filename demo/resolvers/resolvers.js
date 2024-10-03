import { books } from '../data/books.js';
import { movies } from '../data/movies.js';
import { MovieRepository } from '../repositories/movie.repository.js';

let movieRepo = new MovieRepository();

export const resolvers = {
	Query: {
		books: () => books,
		favoriteMovie: () => movieRepo.getFavoriteMovie(),
        movies: () => movieRepo.getMovies(),
	},
};
