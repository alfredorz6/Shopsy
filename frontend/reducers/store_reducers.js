import {RECEIVE_STORE, RECEIVE_ALL_STORES} from '../actions/store_actions'

const StoreReducers = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_STORE:
            nextState[action.store.id] = action.store
            return nextState
        case RECEIVE_ALL_STORES:
            return Object.assign(nextState, action.stores);
    
        default:
            return state;
    }
}

export default StoreReducers;