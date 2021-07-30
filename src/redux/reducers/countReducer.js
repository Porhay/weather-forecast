// import { COUNTER_CHANGE } from '../constants';

// const initialState = {
//     count: 0
// };

// const countReducer = (state = initialState, action) => {

//     switch(action.type) {
//         case COUNTER_CHANGE:
//             return {
//             ...state, count: action.payload
//             }
//         default:
//             return state;
//     }
// }

// export default countReducer;


const initialState = {
    counter: 0,
  };
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREASE_COUNTER':
        return {counter: state.counter + 1};
      case 'DECREASE_COUNTER':
        return {counter: state.counter - 1};
    }
    return state;
};

export default reducer