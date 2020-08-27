
import * as types from './types'
import * as props from './props'

export default (state = props, action) => {
    switch (action.type) {
        case types.GET_CHATS:
            return {
                ...state,
                chats: [...state.chats,action.payload],
                
            }
            break;
        case types.HAND_CHAT_MEMBER: 
            return {
                ...state,
                member: action.payload
            }
            break;
       
        default:
            return state
    }
}

