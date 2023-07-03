import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import store from './store/store';

import App from './App';
import './index.css';

import { createStore, bindActionCreators } from 'redux';
import rootReducer, * as actions from './store/counter';

const store = new createStore(rootReducer);
console.log('###: store: ', store.getState());
store.subscribe(() => console.log('store subscribe ', store.getState()));
const {plusAction, minusAction} = bindActionCreators(actions, store.dispatch);

plusAction(5);
plusAction(3);
plusAction(10);
minusAction(25);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

