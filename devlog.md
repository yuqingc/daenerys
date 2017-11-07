# Development Log

This log was created on Nov 3, 2017. All rights reserved.

### Oct 1 2017
- This project was created uncer MIT License
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

- Express.js with Webpack Middleware finally worked, probably because of the new version (3.8.0) of Webpack.
- I added the Webpack Hot Middleware (HMR) to my express server. (See api of 'webpack-hot-middleware' docs in npm)