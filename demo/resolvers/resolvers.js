import { books } from '../data/books.js';

export const resolvers = {
	Query: {
		books: () => books,
		favoriteMovie: () => context.movieRepo.getFavoriteMovie(),
		movies: () => context.movieRepo.getMovies(),
		getMovieById: (parent, args, context) => {
			return context.movieRepo.getById(args.id);
		},
		filterMovie: (parent, args, context) => {
			// context. dependency injection

			console.log('args:', args);
			return context.movieRepo.filterMovies(args.input);
		},
	},
	Mutation: {
		addMovie: (parent, args, context) => {
			console.log('args:', args, context);
			return context.movieRepo.addMovie(args.input);
		},
	},
	Movie: {
		director: (parent, args, context) => {
			// if(parent.directorId === 15) {
			// 	throw new Error('no way');
			// }
			console.log('getting by id:', parent.directorId);
			return context.directorRepo.getById(parent.directorId);
		},
	},
};
