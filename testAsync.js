var co = require('co');

// co(function* () {
//     try{
//         var res = yield new Promise((resolve, reject)=>{
//             setTimeout(() => resolve('hello'), 2000);
//         });
//         console.log('res in co is ', res);

//         var res1 = yield cb => {
//             setTimeout(() => {
//                 console.log('这条语句在延迟一秒执行');
//                 cb('');
//             }, 2000);
//         }
//         console.log('这条语句在第二条 yield 执行完执行', res1);
//     }catch(e){
//         console.log('发生错误', e);
//     }
    
// });

// var foo = co.wrap(function* (){});
// var boo = co(function* () {});

// console.log('foo is promise ', !!foo.then);
// console.log('boo is promise ', !!boo.then);
// console.log('The type of foo is ', Object.prototype.toString.call(foo));
// console.log('The type of boo is ', Object.prototype.toString.call(boo));

async function hoo() {

    try{
        var a = await 9;
        console.log('a in async is', 9);

        var b = await Promise.resolve('Hi');
        console.log('b in async is', b);

        var res = await new Promise((resolve, reject)=>{
            setTimeout(() => resolve('hello'), 1000);
        });
        console.log('res in co is ', res); 

        // var res1 = await new Promise((resolve, reject)=>{
        //     setTimeout(() => reject('hehe'), 1000);
        // });
        // console.log('拒绝之后能收到吗', res1);

        var res2 = await cb => {
            setTimeout(
                () => {
                    console.log('这条语句在延迟一秒执行');
                    cb()
                }, 1000
            );
        }
        console.log('res2 也执行完了', res2);

        return 0;
    } catch (e) {
        console.log('发生错误', e);
    }
    
 }

hoo();

// console.log('The type of a async function is ', Object.prototype.toString.call(hoo));
// console.log('The returned value of the async function is ', hoo());
