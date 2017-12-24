import immutable from 'immutable';
import { TestActionType } from '../actions/ActionTypes'

interface testState {
    name : string;
    age: number
}

const initialStateJs: testState = {
    name: 'matt',
    age: 26,
}

const initialState = immutable.fromJS(initialStateJs);

export default function test (state = initialState, action: TestActionType) {
    switch ( action.type ) {
        case "TEST":
            return state.set("age", action.age);
        default:
            return state;
    }       
}