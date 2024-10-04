export const Query = {
	books: () => books,
	favoriteMovie: (parent, args, context) => context.movieRepo.getFavoriteMovie(),
	watchables: (parent, args, context) => {
		let movies = context.movieRepo.getMovies();
		let shows = context.showRepo.getShows();
		return [...movies, ...shows];
	},
	movies: (parent, args, context) => context.movieRepo.getMovies(),
	getMovieById: (parent, args, context) => {
		return context.movieRepo.getById(args.id);
	},
	filterMovie: (parent, args, context) => {
		return context.movieRepo.filterMovies(args.input);
	},
};
