import { FETCHING_DATA } from '../constants'

const initialState = {
    data: []
}

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_DATA:
            return {
                data: action.data
            }
    
        default:
            return state
    }
}