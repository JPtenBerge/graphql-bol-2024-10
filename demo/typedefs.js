export const typeDefs = `
type Query {
  books: [Book]
  favoriteMovie: Movie!
  movies: [Movie!]!
}

type Movie {
    title: String!
    director: String!
    releaseYear: Int!
}

type Book {
  title: String
  author: String
}
`;
