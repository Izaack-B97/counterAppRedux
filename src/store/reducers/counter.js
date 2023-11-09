import { types } from "../../types";

const initialState = {
    counter: 0
}

export const counterReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.increment:
            return {
                ...state,
                counter: state.counter + 1
            }
        case types.decrement:
            return {
                ...state,
                counter: state.counter - 1
            }
        case types.reset:
            return {
                ...state,
                counter: 0
            }
        default:
            return state;
    }

}
