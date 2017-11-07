import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./App', () => { render(require('./App').default) })
}


//原来官网文档是这么写的 但是不工作，查了一下谷歌换成上面的写法就work了，牛逼。
//我猜可能是该模块不兼容es6导致的。一会看一下源码
// if (module.hot) {
//   module.hot.accept('./App', () => { render(App) })
// }