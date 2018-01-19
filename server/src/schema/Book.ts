const Book: string = `
    type Book { 
        title: String, 
        author: String, 
        author_info(name: String): Person 
    }
`;

export default Book;