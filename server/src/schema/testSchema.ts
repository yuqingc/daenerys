const typeDefs = `
    type Query { 
        books: [Book], 
        author_info: Person, 
        people: [Person] 
    }
    type Book { 
        title: String, 
        author: String, 
        author_info(name: String): Person 
    }
    type Person { 
        name: String, 
        age: Int 
    }
`;

export default typeDefs;