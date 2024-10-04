export const Watchable = {
	__resolveType(obj, context, info) {
		if (obj.nrOfSeasons) {
			return 'Show';
		}

		return 'Movie';
	},
};
