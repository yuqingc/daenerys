import { merge } from 'lodash';
import { booksData, peopleData } from './fakeData';

async function books () {
    let res = await booksData;
    return res;
}

function author_info (book: any) {
    console.log('哈哈哈哈哈哈哈哈', book);
    for (let person of peopleData) {
        if (person._id && person._id === book.author) return person;
    }
    return null;
}

function people () {
    return peopleData;
}

const resolvers = {
    Query: {
        books,
        people,
    },
    Book: {
        author_info,
    }
};

export default resolvers;