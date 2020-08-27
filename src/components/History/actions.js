
import * as types from './types'

export const addToBrowserHistory = (entry)=>{

    return (dispatch)=>{
        
        dispatch({
            type: types.ADD_TO_BROWSER_HISTORY,
            payload: entry
        })

        console.log('THE WINDOW.HISTORY OBJECT')
        console.log(window.history)
        console.log(window.location)

       
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