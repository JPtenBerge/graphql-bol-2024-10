export const Movie = {
	__isTypeOf: obj => obj.directorId !== undefined,
	director: (parent, args, context) => {
		console.log('[movie-resolver] resolving director using loader with id:', parent.directorId);
		return context.directorDataLoader.batch(parent.directorId);
	},
};
