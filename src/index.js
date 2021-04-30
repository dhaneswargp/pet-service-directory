import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/layout/App';

import store from './stores';
import {Provider} from 'react-redux';

const app = (
	<Provider store={store.initialize()}>
		<App />
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'));
