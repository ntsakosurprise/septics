
import {combineReducers} from 'redux'
// import {connectRouter} from 'connected-react-router'
import history from '../history'

import allReducers from '../components/all/reducers'
import messengerReducers from '../components/Messenger/reducers'
import routerReducer from '../components/ReduxFirstNavigator/reducer'




export default combineReducers({

    ...allReducers,...messengerReducers,
    router: routerReducer

})