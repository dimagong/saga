import { SHOW_LOUDER, HIDE_LOUDER, SHOW_ALERT, HIDE_ALERT } from './type'


const initialState = {
    loading: false,
    alert: null
}


export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOUDER:
            return { ...state, loading: true }
        case HIDE_LOUDER:
            return { ...state, loading: false }
        case SHOW_ALERT:
            return { ...state, alert: action.payload }
        case HIDE_ALERT:
            return { ...state, alert: null }
        default:
            return state
    }

}