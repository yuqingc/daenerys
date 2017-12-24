import { TestActionType } from './ActionTypes';

export function changeAge (age: number): TestActionType {
    return {
        type: 'TEST',
        age,
    }
}

// export function changeAgeAsync ( age: number) {
//     return function (dispatch: Function) {
//         dispatch(changeAge(age));
//     }
// }

//co 找不到 types的包 不好用 ts可以直接用 async 函数 就不用 co了

export function changeAgeAsync ( age: number) {
    return async function (dispatch: Function) {
        await 10;
        dispatch(changeAge(age));
    }
}