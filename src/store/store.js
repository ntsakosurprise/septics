import {applyMiddleware,createStore} from 'redux'
// import {routerMiddleware} from 'connected-react-router'
import {reducer as notificationsReducer} from 'reapop';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import history from '../history' 

import {routerMiddleware} from '../middlwares/reduxroute'
import apiMiddleware from '../middlwares/api'
import {operationalErrorMiddleware} from '../middlwares/operationalError';

// import syncStoreHistoryWithBrowser from '../middlwares/history'
import appRall from '../middlwares/rall'
import reducers from '../reducers/reducers'
import startListener from '../utilities/listener'
import {push} from '../middlwares/withcustommiddlewares'


// const catchHistoryActionCreators = routerMiddleware(history)

const store = createStore(
        reducers,
        composeWithDevTools(
            applyMiddleware(
                thunk,
                routerMiddleware(history),
                apiMiddleware,
                operationalErrorMiddleware
              
               
              
                )
        )
    )

startListener(history,store)
export {
    store,
    history
}


