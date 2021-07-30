import { createStore, combineReducers } from 'redux';
import reducer from '../reducers/countReducer';

// const rootReducer = combineReducers(
//     { count: countReducer }
// );

// const configureStore = () => {
//     return createStore(rootReducer);
// }

// export default configureStore;


const store = createStore(reducer);

export default store;