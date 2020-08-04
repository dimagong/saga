
import { CREATE_POST } from './type'
import { showAlert } from './action'

const forbidden = ['fuck', 'spam', 'php']

const forbiddenWordsMidleware = ({ dispatch }) => {
    return (next) => {
        return (action) => {
            if (action.type === CREATE_POST) {
                const found = forbidden.filter(w => action.payload.title.includes(w))
                if (found.length) {
                    return dispatch(showAlert('WARNING!'))
                }
            }
            return next(action)
        }
    }
}

export default forbiddenWordsMidleware;