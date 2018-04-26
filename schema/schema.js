export default `
type user{
    id: ID!
    name: String!
    email: String!
}

type Query{
    allUsers: [user!]!
}

type Mutation{
    createUser(name: String!, email: String!): user!
}
`;