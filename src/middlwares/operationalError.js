
import * as operationalErrorTypes from '../components/ErrorHandler/types'
import  {push} from '../components/ReduxFirstNavigator/actions'

export const operationalErrorMiddleware = (store) => (next) => (action) => {  

        console.log('operational middleware')
        console.log(action)
        console.log(action.type)
        console.log(action.type === operationalErrorTypes.OPERATIONAL_ERROR_503)

        switch (action.type) { 

                case operationalErrorTypes.OPERATIONAL_ERROR_400: store.dipatch(push(action.payload));
                    break;    
                case operationalErrorTypes.OPERATIONAL_ERROR_401: store.dispatch(push(action.payload));
                    break;    
                case operationalErrorTypes.OPERATIONAL_ERROR_403: store.dispatch(push(action.payload));      
                    break;   
                case operationalErrorTypes.OPERATIONAL_ERROR_404:  store.dispatch(push(action.payload));      
                    break;
                case operationalErrorTypes.OPERATIONAL_ERROR_404:  store.dispatch(push(action.payload));      
                break;      
                case operationalErrorTypes.OPERATIONAL_ERROR_500: store.dispatch(push(action.payload));
                    break;
                case operationalErrorTypes.OPERATIONAL_ERROR_503: store.dispatch(push(action.payload));
                break;        
                default:  return next(action);  
                
            }
    };