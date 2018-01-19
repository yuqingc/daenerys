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

export default {
    Query: {
        books,
    },
    Book: {
        author_info,
    }
}