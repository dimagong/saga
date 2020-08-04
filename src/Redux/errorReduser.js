import { ERROR_DATA } from './type'

const initialState = {
    error: ''
}

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ERROR_DATA:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

