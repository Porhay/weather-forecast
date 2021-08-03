import { INCREASE_COUNTER, DECREASE_COUNTER, CLEAR_DATA } from "../constants";

const initialState = {
    counter: 0,
  };
  
export default function reducer(state = initialState, action) {
    switch (action.type) {
      case INCREASE_COUNTER:
        return {counter: state.counter + 1}
      case DECREASE_COUNTER:
        return {counter: state.counter - 1}
      case CLEAR_DATA:
        return initialState
      default:
        return state
    }
}

