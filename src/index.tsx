import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './lib/store';

declare const module : any;

const render = (Component:any) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component/>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => { render(require('./components/App').default) })
}


//原来官网文档是这么写的 但是不工作，查了一下谷歌换成上面的写法就work了，牛逼。
//我猜可能是该模块不兼容es6导致的。一会看一下源码
// if (module.hot) {
//   module.hot.accept('./App', () => { render(App) })
// }