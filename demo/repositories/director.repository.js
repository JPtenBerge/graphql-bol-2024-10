import { directors } from '../data/directors.js';

export class DirectorRepository {
	getById(id) {
		return directors.find(x => x.id === id);
	}
}
