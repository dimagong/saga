import { CREATE_POST, FETCH_POST, SHOW_LOUDER, HIDE_LOUDER, ERROR_DATA, SHOW_ALERT, HIDE_ALERT } from './type'

export const createPost = (post) => ({
    type: CREATE_POST,
    payload: post
})

export const showLoader = () => ({
    type: SHOW_LOUDER,
})

export const hideLoader = () => ({
    type: HIDE_LOUDER,
})

export const showAlert = (text) => {
    return dispatch => {
        dispatch(
            {
                type: SHOW_ALERT,
                payload: text
            }
        )
        setTimeout(
            () => {
                dispatch(hideAlert())
            }, 2000)
    }
}

export const hideAlert = () => ({
    type: HIDE_ALERT,
})


export const fetchPost = () => {
    return async (dispatch) => {
        dispatch(showLoader())

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            const json = await response.json()
            setTimeout(() => {
                dispatch({
                    type: FETCH_POST,
                    payload: json
                })
                dispatch(hideLoader())
            }, 500);
        } catch (error) {
            dispatch(showAlert('Something goes on the wrong'))
            dispatch(hideLoader())
        }

    }
}


