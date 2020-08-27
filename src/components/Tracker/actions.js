
import * as types from './types'

export const addToBrowserHistory = (entry)=>{

    return{

        type: type.ADD_TO_BROWSER_HISTORY,
        payload: entry
    }

}

export const goFowardToBrowserItem = ()=>{

    return{
        type: types.GO_FOWARD_TO_BROWSER_ITEM,
    }

}

export const goBackToBrowserItem = ()=>{

    return{

        type: types.GO_BACK_TO_BROWSER_ITEM
       
    }

}

export const resetBrowserHistory = ()=>{

    return{

        type: types.RESET_BROWSER_HISTORY,

    }

}