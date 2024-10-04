export const typeDefs = `
type Query {
  books: [Book]
  favoriteMovie: Movie!
  watchables: [Watchable!]!
  movies: [Movie!]!
  getMovieById(id: Int!): Movie
  filterMovie(input: FilterMovieInput!): [Movie!]!
  getMoviesByGenre(genre: Genre!): [Movie!]!
}

type Mutation {
  addMovie(input: AddMovieInput!): Movie!
  deleteMovie(id: Int!): Movie!
}

input AddMovieInput {
  title: String!
  releaseYear: Int!
  directorName: String!
}

input FilterMovieInput {
  title: String
  releaseYear: Int
  directorName: String
}

interface Watchable {
    title: String!
    releaseYear: Int!
    genre: Genre!
}

type Movie implements Watchable {
    title: String!
    releaseYear: Int!
    genre: Genre!
    director: Director
}
type Show implements Watchable {
    title: String!
    releaseYear: Int!
    genre: Genre!
    nrOfSeasons: Int!
    whereToWatch: String!
}

enum Genre {
  ACTION
  COMEDY
  DRAMA
  HORROR
  ROMANCE
  THRILLER
  WESTERN
}

type Director {
    name: String!
    birthYear: Int!
}

type Book {
  title: String
  author: String
}
`;
