# daenerys

A startup using React & Webpack

## How to build this program?

### Preparation

I recommand you use the node version, 8.0+. Yarn is recommanded.

### Steps:

1. Clone this Git repository to your own PC.

```
$ git clone git@github.com:yuqingc/daenerys.git
```

If you want to build your own project, remove the `.git` directory at the root derectory.

2. Installing packages.

```
$ yarn
```

or

```
$ npm install
```

3. Running

If you want to use the WebPack Dev Server instead your own, run the following

```
$ npm start
```

To run this project on a NodeJS server, run

```
$ node server.js
```
for a developing environment and

```
$ node server.js prod
```

for a production version


4. If you want to build the frontend project ONLY, instead of running it on a server, run
```
$ npm run-script webpack --config webpack.prod.js
```

or

```
webpack --config webpack.dev.js 
```
for a developing version

---

## Have fun coding!
