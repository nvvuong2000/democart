import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import SanPham from './SanPham';
// import ActionProducts from './ActionProducts';
// import ListProducts from './ListProducts'
import * as serviceWorker from './serviceWorker';
import { createStore,applyMiddleware} from 'redux';
import rootReducers from './reducer/index'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
const store = createStore(rootReducers,applyMiddleware(thunk));

ReactDOM.render(

  <React.StrictMode>
  <Provider store={store}> 
    <App />
 </Provider>
    
    
     {/* <SanPham />
     <ActionProducts/>
     <ListProducts/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
