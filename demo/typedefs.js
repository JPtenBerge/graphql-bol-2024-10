export const typeDefs = `
type Query {
  books: [Book]
  favoriteMovie: Movie!
  movies: [Movie!]!
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
