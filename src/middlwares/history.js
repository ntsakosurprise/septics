
import * as navigatorActions from '../components/Navigator/actions'
import * as historyActions from '../components/History/actions'
import * as navigatorTypes from '../components/Navigator/types'
import * as historyTypes from '../components/History/types'

export default (store)=>(next)=>(action)=>{


      switch(action.type){

         case navigatorTypes.NAVIGATE: 

            console.log('THE TYPE IS NAVIGATE:NAVIGATOR MIDDLEWARE')
            console.log(action)
            if(!action.payload.new && action.payload.path !== store.getState().navigator.path){


               console.log('it is a new location')
               console.log(action.payload)
               store.dispatch( historyActions.addToBrowserHistory({

                        path: action.payload.path,
                        search: "",
                        hash: ""
                    
                }))
            }

         
         break;
         case historyTypes.GO_FOWARD_TO_BROWSER_ITEM:

             if(store.getState().history.length === 0) return 
             store.dispatch(
                 navigatorActions.navigate(action.payload.path)
             )

         
         break;
         case historyTypes.GO_BACK_TO_BROWSER_ITEM:

            if(store.getState().history.length === 0) return 
            store.dispatch(
                navigatorActions.navigate(action.payload.path)
            )

        
        break;
        case historyTypes.REPLACE_BROWSER_HISTORY_ITEM:
            if(store.getState().history.length === 0) return 
            store.dispatch(
                navigatorActions.navigate(action.payload.path)
            )

        
        break;
        case historyTypes.RESET_BROWSER_HISTORY:

            if(store.getState().history.length === 0) return 
            store.dispatch(
                navigatorActions.navigate(action.payload.path)
            )

        
        break;
         default:
             break

      }

      next(action)

}