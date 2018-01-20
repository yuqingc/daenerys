import { peopleData } from './fakeData';

export function people () {
    return peopleData;
}

export default {
    Query: {
        people,
    }
}