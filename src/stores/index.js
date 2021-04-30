import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import {addressReducer} from '../reducers';

var store;

export default {

	initialize: () => {

		const reducers = combineReducers({
			address:addressReducer,
			// this should match mapstatetoprops
		})

		store = createStore(
            	reducers,
            	// addressReducer,
			applyMiddleware(thunk)
		)

		return store
	},

	currentStore: () => {
		return store
	}

}