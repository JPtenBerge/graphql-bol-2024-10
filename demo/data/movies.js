import { directors } from './directors.js';

export const movies = [
	{
		id: 4,
		// title: 'The Matrix',
		title: 'The Matrix',
		directorId: directors[0].id,
		releaseYear: 1999,
	},
	{
		id: 8,
		title: 'The Matrix Reloaded',
		directorId: directors[0].id,
		releaseYear: 2003,
	},
	{
		id: 15,
		title: 'The Matrix Revolutions',
		directorId: directors[0].id,
		releaseYear: 2003,
	},
	{
		id: 16,
		title: 'The Matrix Resurrections',
		directorId: directors[1].id,
		releaseYear: 2021,
	},
	{
		id: 23,
		title: 'The Animatrix',
		directorId: directors[0].id,
		releaseYear: 2003,
	},
];
