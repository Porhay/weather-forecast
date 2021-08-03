import { INCREASE_COUNTER, DECREASE_COUNTER, CLEAR_DATA } from '../constants';

export function increaseCounter() {
    return {
        type: INCREASE_COUNTER,
    }
}

export function decreaseCounter() {
    return {
        type: DECREASE_COUNTER,
    }
}

export const clearData = {
    type: CLEAR_DATA,
};