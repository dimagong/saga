import { CREATE_POST, FETCH_POST } from './type'

const initialState = {
    posts: [],
    fetchPosts: []
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
                //post: state.posts.concat(action.payload)
            }
        case FETCH_POST:
            return {
                ...state,
                fetchPosts: [...state.fetchPosts, ...action.payload]
            }
        default: return state;
    }

}