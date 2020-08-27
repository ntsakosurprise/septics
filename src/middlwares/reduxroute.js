import * as reduxFirstNavigatorTypes from '../components/ReduxFirstNavigator/types'

export const routerMiddleware = (history) => () => (next) => (action) => {  

        console.log('THE ACTION.PAYLOAD IN ROUTERMIDDLEWARE REDUXFIRSTNAVIGATOR')
        console.log(action.payload)

        switch (action.type) { 

                case reduxFirstNavigatorTypes.PUSH:{ history.push(action.payload)};
                    break;    
                case reduxFirstNavigatorTypes.REPLACE: history.replace(action.payload);
                    break;    
                case reduxFirstNavigatorTypes.GO: history.go(action.payload);      
                    break;   
                case reduxFirstNavigatorTypes.GO_BACK:  history.goBack();      
                    break;    
                case reduxFirstNavigatorTypes.GO_FORWARD: history.goForward();
                    break;    
                default:  return next(action);  
                
            }
    };