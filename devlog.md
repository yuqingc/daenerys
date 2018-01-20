# Development Log

This log was created on Nov 3, 2017. All rights reserved.

### Oct 1 2017
- This project was created under MIT License
- Test WebPack
- Use WebPack server. Run `npm start` to start the server
- TODO: I will put the web page on a koa server later


### Nov 3 2017

- Babel added
- React added
- Remove `dist` directory. Make webpack put my html in `dist`.
- `npm start` create no `dist` directory on the disk. It creates dist in memory instead.
- `build` to build and create output files on the disk.

### Nov 7 2017

- Express.js with Webpack Middleware finally worked, probably because of the new version (3.8.1) of Webpack.
- I added the Webpack Hot Middleware (HMR) to my express server. (See api of 'webpack-hot-middleware' docs in npm).
- Create prod config and dev config.

### Nov 8 2017
- Code splitting and caching was applied to my project.

### Nov 9 2017
- I tried to put Typescript in this project but I failed. I will not continue to put Redux and other stuffs because I still want TypeScript/TSX.
- I will keep working on TypeScript. Onece I finish I will continue my TS Daenerys project.

### Nov 23 2017
- Redux
- Test async actions

### Nov 27 2017
- Hot Module Reaplace worked again. I think it is tmux that makes HMR fail.
- When I tried to use a Component imported from node_modules, I got a ts compile error 2339
```
ERROR in /home/yuqing/proj/daenerys/src/components/common/MtNavHeader.tsx(35,19)
      TS2339: Property 'Item' does not exist on type '(props: any) => any'.
```
I googled it. I add this to the tsconfig.json and it worked.

```json
"moduleResolution": "node",
```

### Nov 29 2017
- 加了一个 react-router 还是有一点小坑的，填坑完毕。

### Jan 18 2018
- 准备加入 apollo

### Jan 20 2018
- 加入了 facebook 出品的 dataloader
- dataloader 解决了 graphql 最大的痛点，让 graphql 成为一个近乎完美的 api 请求用语言