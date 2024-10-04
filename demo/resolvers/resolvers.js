import { books } from '../data/books.js';

export const resolvers = {
	Query: {
		books: () => books,
		favoriteMovie: (parent, args, context) => context.movieRepo.getFavoriteMovie(),
		movies: (parent, args, context) => context.movieRepo.getMovies(),
		getMovieById: (parent, args, context) => {
			return context.movieRepo.getById(args.id);
		},
		filterMovie: (parent, args, context) => {
			return context.movieRepo.filterMovies(args.input);
		},
	},
	Mutation: {
		addMovie: (parent, args, context) => {
			return context.movieRepo.addMovie(args.input);
		},
	},
	Movie: {
		director: (parent, args, context) => {
			return context.directorRepo.getById(parent.directorId);
		},
	},
};
