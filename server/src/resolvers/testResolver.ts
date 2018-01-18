const books = [
    {
        title: "Harry Potter and the Sorcerer's stone",
        author: '2',
    },
    {
        title: 'Jurassic Park',
        author: '1',
    },
    {
        title: 'A Song of Ice and Fire',
        author: '4',
    },
    {
        title: '三国演义',
        author: '3',
    },
];

const people = [
    {
        _id: '1',
        name: 'Michael Crichton',
        age: 20,
    },
    {
        _id: '2',
        name: 'J.K. Rowling',
        age: 30,
    },
    {
        _id: '3',
        name: '罗贯中',
        age: 300,
    },
    {
        _id: '4',
        name: 'George R. R. Martin',
        age: 60,
    }
];

export async function fetchBooks () {
    let res = await books;
    return res;
}

export function fetchAuthorInfo (author: string) {
    console.log('哈哈哈哈哈哈哈哈', author);
    for (let person of people) {
        if (person._id && person._id === author) return person;
    }
    return null;
}

export function fetchPeople () {
    return people;
}