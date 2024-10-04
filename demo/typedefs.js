export const typeDefs = `
type Query {
  books: [Book]
  favoriteMovie: Movie!
  movies: [Movie!]!
  getMovieById(id: Int!): Movie
  filterMovie(input: FilterMovieInput!): [Movie!]!
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

type Movie {
    title: String!
    director: Director
    releaseYear: Int!
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
