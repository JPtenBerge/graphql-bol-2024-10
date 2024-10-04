export const Movie = {
	__isTypeOf: obj => obj.directorId !== undefined,
	director: (parent, args, context) => {
		return context.directorRepo.getById(parent.directorId);
	},
};
