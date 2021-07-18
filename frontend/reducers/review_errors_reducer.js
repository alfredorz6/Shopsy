import { RECEIVE_REVIEW_ERRORS, RECEIVE_REVIEW } from "../actions/reviews_actions";

const ReviewErrorsReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_REVIEW_ERRORS:
            return action.errors;
            
        case RECEIVE_REVIEW:
            return [];
    
        default:
            return [];
    }
}

export default ReviewErrorsReducer;