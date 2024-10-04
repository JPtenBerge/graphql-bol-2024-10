import { directors } from '../data/directors.js';

export class DirectorRepository {
	getById(id) {
		console.log('[DirectorRepository] resolving director with id:', id);
		return directors.find(x => x.id === id);
	}

	getAllByIds(ids) {
		console.log('[DirectorRepository] resolving directors with ids:', ids);
		return directors.filter(x => ids.includes(x.id));
	}
}
