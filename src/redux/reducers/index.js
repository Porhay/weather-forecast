import { combineReducers } from 'redux'
import countReducer from './countReducer'
import dataReducer from './dataReducer'

const rootReducer = combineReducers({
    count: countReducer,
    data: dataReducer,
})

export default rootReducer