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
		getMovieById: (parent, args, context) => {
			return movieRepo.getById(args.id);
		},
		filterMovie: (parent, args, context) => {
			console.log('args:', args);
			return movieRepo.filterMovies(args.input);
		}
	},
	Movie: {
		director: (parent, args, context) => {
			if(parent.directorId === 15) {
				throw new Error('no way');
			}
			return directorRepo.getById(parent.directorId);
		}
	}
};
