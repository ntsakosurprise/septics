
import * as types from './types'
import * as props from './props'




export default (state = props, action)=>{

    switch (action.type) {

        case types.FETCH_SAVED_JOBS_LIST_REQUEST:

            return  {

                ...state,
                isFetching: true
                
            }

        case types.FETCH_SAVED_JOBS_LIST_SUCCESS:

            console.log('THE candidateDashboard REDUCER')
            console.log(state)
            return  {

                ...state,
                isFetching: false,
                savedJobsList: [...action.response]
              
               
                
            }

        case types.FETCH_SAVED_JOBS_LIST_FAILURE:

            return  {

                ...state,
                isFetching: false,
                message: action.error
                
            }

        case types.DELETE_SAVED_JOB_REQUEST:

            return  {

                ...state,
                isFetching: true
                
            }

        case types.DELETE_SAVED_JOB_SUCCESS:

            console.log('THE candidateDashboard REDUCER')
            console.log(state)
            return  {

                ...state,
                isFetching: false,
                isJobDeleted: action.response.actionStatus
                
                
                
            }

        case types.DELETE_SAVED_JOB_FAILURE:

            return  {

                ...state,
                isFetching: false,
                message: action.error
                
            }
               
           
    

        default:
        return state
    }


}