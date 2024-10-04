import { books } from '../data/books.js';
import { Query } from './query-resolver.js';
import { Mutation } from './mutation-resolver.js';

export const resolvers = {
	Query,
	Mutation,
	Movie: {
		__isTypeOf: obj => obj.directorId !== undefined,
		director: (parent, args, context) => {
			return context.directorRepo.getById(parent.directorId);
		},
	},
	Show: {
		__isTypeOf: obj => obj.nrOfSeasons !== undefined,
	},
	Genre: {
		ACTION: 'ac',
		COMEDY: 'co',
		DRAMA: 'dr',
		HORROR: 'ho',
		ROMANCE: 'ro',
		THRILLER: 'th',
		WESTERN: 'we',
	},
	// Watchable: {
	// 	__resolveType(obj, context, info) {
	// 		if (obj.nrOfSeasons) {
	// 			return 'Show';
	// 		}

	// 		return 'Movie';
	// 	},
	// },
};
