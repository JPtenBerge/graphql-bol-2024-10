import { books } from '../data/books.js';
import { MovieRepository } from '../repositories/movie.repository.js';
import { DirectorRepository } from '../repositories/director.repository.js';

let movieRepo = new MovieRepository();
let directorRepo = new DirectorRepository();

export const resolvers = {
	Query: {
		books: () => books,
		favoriteMovie: () => movieRepo.getFavoriteMovie(),
        movies: () => movieRepo.getMovies(),
	},
	Movie: {
		director: (parent, args, context) => {
			return directorRepo.getById(parent.directorId);
		}
	}
};
