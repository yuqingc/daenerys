import { TestActionType } from './action';

export function changeAge (age: number): TestActionType {
    return {
        type: 'TEST',
        age,
    }
}