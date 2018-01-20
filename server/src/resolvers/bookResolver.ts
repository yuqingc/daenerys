import { booksData, peopleData } from './fakeData';
import DataLoader = require('dataloader');
import { people } from './personResolver';

async function getAuthors (ids: number[]) {
    console.log('看一下这里请求了几次呢', ids);
    return people();
}

//建议每次请求都创建一个新的
// var authorLoader: DataLoader<number, any> = new DataLoader((keys: number[]) => getAuthors(keys));
var authorLoader: DataLoader<number, any>;

// 每一个请求都会创建一个新的 dataloader 的实例 这里可以传入一些用户的信息
function createAuthorLoader () : DataLoader<number, any> {
    return new DataLoader((keys: number[]) => getAuthors(keys))
}

async function books (obj: any) {
    authorLoader = createAuthorLoader()
    let res = await booksData;
    return res;
}

/**
 * 这个就是处理请求的一个resolver 函数 这种写法一般用在嵌套查询里面
 * @param obj 第一个参数是父resolver的结果，就是这个请求所属的那个schema的相关信息
 * @param args 这个是前端传进来的参数
 * @param context 这个就是app.use里面的那个函数传进来的context信息
 * @param info 这是内置的关于这个请求的一些信息
 */
function author_info (obj: any, args?: any, context?: any, info?: any) {
    return authorLoader.load(obj.author);
    // for (let person of peopleData) {
    //     if (person._id && person._id === obj.author) return person;
    // }
    // return null;
}

export default {
    Query: {
        books,
    },
    Book: {
        author_info,
    }
}