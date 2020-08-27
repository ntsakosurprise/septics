import { push } from 'connected-react-router'
import * as types from './types'

export const navigate = (path,ne=false)=>{

    console.log('THE ROUTE ACTION CREATOR GOT A CALL')
    console.log(path)
    return (dispatch)=>{

     
       
        dispatch({
            

                type: types.NAVIGATE,
                payload: {
                    path: path,
                    new: ne
                }
            
        })

        dispatch(push(path))

        
    }
   

}


