import { movies } from '../data/movies.js';

export class MovieRepository {
	getMovies() {
		return movies;
	}

	getFavoriteMovie() {
		return movies[0];
	}

	getById(id) {
		return movies.find(x => x.id === id);
	}

	filterMovies(filterOptions) {
		let result = movies;

		console.log('filterOptions:', filterOptions);

		if (filterOptions.title) {
			result = result.filter(x => x.title.toLowerCase().includes(filterOptions.title.toLowerCase()));
		}
		if (filterOptions.releaseYear) {
			result = result.filter(x => x.releaseYear === filterOptions.releaseYear);
		}
		if (filterOptions.directorName) {
			throw new Error('not gonna do that now');
			// result = result.filter(x => x.year === filterOptions.year);
		}
		console.log('result:', result);
		return result;
	}
}
