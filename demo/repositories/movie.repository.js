import { movies } from '../data/movies.js';

export class MovieRepository {
	getMovies() {
		return movies;
	}

	getFavoriteMovie() {
		return movies[0];
	}
}
