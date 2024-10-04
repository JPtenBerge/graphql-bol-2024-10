export const Mutation = {
	addMovie: (parent, args, context) => {
		return context.movieRepo.addMovie(args.input);
	},
};
