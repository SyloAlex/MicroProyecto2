import { initialState } from "../state";
import { SET_VIEW } from "../actions/type";

const viewReducer = (state = initialState.view, action) => {
    switch (action.type) {
        case SET_VIEW:
            return action.payload;
        default:
            return state;
    }
}

export { viewReducer };