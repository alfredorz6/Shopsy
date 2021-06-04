  
import { RECEIVE_STORE, RECEIVE_STORE_ERRORS } from '../actions/store_actions';

const storeErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_STORE:
            return [];
        case RECEIVE_STORE_ERRORS:
            return action.errors;  
        default:
            return [];
    }
};

export default storeErrorsReducer;