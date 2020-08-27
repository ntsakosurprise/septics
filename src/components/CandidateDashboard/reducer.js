
import * as types from './types'
import * as props from './props'



export default (state = props, action)=>{

    switch (action.type) {

        case types.FETCH_DASH_STATS_REQUEST:

            return  {

                ...state,
                isFetching: true
                
            }

        case types.FETCH_DASH_STATS_SUCCESS:

            console.log('THE candidateDashboard REDUCER')
            console.log(state)
            return  {

                ...state,
                isFetching: false,
                applicantStats: {...state.applicantStats,alerts: action.response[0].alertsCount,saved: action.response[1].savedCount,searched: action.response[2].historyCount},
              
               
                
            }

        case types.FETCH_DASH_STATS_FAILURE:

            return  {

                ...state,
                isFetching: false,
                message: action.error
                
            }

      
        default:
        return state
    }


}