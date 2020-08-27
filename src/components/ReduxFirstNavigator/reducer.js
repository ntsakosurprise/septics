
import * as types from './types'
import * as props from './props'


export default (state = props,action)=>{

        console.log('THE REDUXFIRSTNAVIGATOR ACTION:ACTION PAYLOAD')
        console.log(action)
        console.log(action.payload)

        switch (action.type) {

               
                case types.LOCATION_CHANGE: 
                    return {...state,...action.payload,};
                  
                default: 
                    return state;  
        }

}
