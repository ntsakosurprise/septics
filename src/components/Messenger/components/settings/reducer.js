
import * as types from './types'
import * as props from './props'

export default (state = props, action) => {
    switch (action.type) {
        case types.GET_CHATS:
            return {
                ...state,
                loading: true
            }
       
        default:
            return state
    }
}

