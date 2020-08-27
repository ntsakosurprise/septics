
import { combineReducers } from 'redux';
// import accountReducers from './modules/viewiks/account/reducers'
import routerReducer from '../src/components/ReduxFirstNavigator/reducer'



export default combineReducers({
   
    
    ...accountReducers,
    router: routerReducer

   
})


