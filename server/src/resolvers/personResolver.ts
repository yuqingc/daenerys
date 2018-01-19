import { peopleData } from './fakeData';

function people () {
    return peopleData;
}

export default {
    Query: {
        people,
    }
}