
import * as types from './types'
import * as props from './props'



const manipulateFilter =(state,action)=>{

    const {search} = state 
    // const {filters} = search
    const {payload} = action
    const {key,value = '',operation} = payload 

    let filter = search[key] 

    console.log('THE VALUE OF FILTER')
    console.log(filter)

    if(operation === 'remove'){


        if(filter instanceof Array){
    	  	  
            let keyIndex = filter.indexOf(value) 
            let modifiedKey = filter.splice(keyIndex) 
            //filters[key] = modifiedKey 
            
            return {
                  ...state,
                  search: {...state.search,[key]:modifiedKey}
                
            }
          
        }else if(filter instanceof String){
          
            return {
            ...state,
            search: {...state.search,[key]:value}
            }
          
        }else{
          return {...state}
        } 

    }else if(operation === 'add'){

        console.log('THE OPERATION EQUALS ADD') 
        console.log('THE FILTER')
        console.log(filter)
        if(!filter){
               
            console.log('THE FILTER IN UNDEFIEND') 
            let identifier = ''
            if(key !== 'datePosted' && key !== 'location'){

                identifier = [value]

            }else{

                identifier = value
            } 


            return {
                    
                     ...state,
                     search: {...search,[key]:identifier}
                }
          
        }else{
              
            console.log('THE FILTER EXISTS')
            console.log(filter instanceof String)
            console.log(filter)
           if(filter instanceof Array){
               
               console.log('THE FILTER IS AN INSTANCE OF ARRAY')
               console.log(filter)
               return {
                   
                   ...state,
                   search: {...search,[key]:[...filter,value]}
               }
               // filter = [...filter,value]
               
           }else if(typeof filter === 'string'){
            
               console.log('THE FILTER IS AN ISTANCE OF STRING') 
               console.log(value) 
               console.log(filter)
               return {
                   
                   ...state,
                   search: {...search,[key]:value} 
               }
               
           }else{
               return {...state}
           }
         }

    }else{

        return {...state}

    }

}


export default (state = props, action)=>{

    switch (action.type) {

        case types.FETCH_JOBS_REQUEST:

            return  {

                ...state,
                isSkipRender: false,
                isFetching: true
                
            }

        case types.FETCH_JOBS_SUCCESS:

            console.log('THE LISTING REDUCER')
            console.log(state)
            return  {

                ...state,
                isFetching: false,
                isSkipRender: false,
                listFetched: true,
                jobs: {...state.jobs,posts: action.response.posts,categories: action.response.categories,locations: action.response.states},
                search: {...state.search,fetchJobs: false,initLoad: false,totalJobs: action.response.totalJobs}
               
                
            }

        case types.FETCH_JOBS_FAILURE:

            return  {

                ...state,
                isFetching: false,
                listFetched: false,
                isSkipRender: false,
                jobs: {...state.jobs,posts:[],categories: [],locations: []},
                search: {...state.search,fetchJobs: false,initLoad: false,totalJobs: 0},
                // search: {...state.search,fetchJobs: false,initLoad: false,totalJobs: 0},
                message: action.error
                
            }
        
        case types.FETCH_JOBS_BY_FILTER_REQUEST:

            return  {

                ...state,
                isFetching: true
                
            }

        case types.FETCH_JOBS_BY_FILTER_SUCCESS:


            return  {

                ...state,
                isFetching: false,
                jobs: {...state.jobs},
                search:{...state.search,fetchJobs: false,initLoad: false,totalJobs:action.response.totalJobs}
                
            }

        case types.FETCH_JOBS_BY_FILTER_FAILURE:

            return  {

                ...state,
                isFetching: false,
                jobs: {...state.jobs,posts:[],categories: [],locations: []},
                search:{...state.search,fetchJobs: false,initLoad: false,totalJobs:0},
                message: action.error
                
            }

        case types.FETCH_JOBS_TEXT_SUGGESTIONS_REQUEST:

            return  {

                ...state,
                isFetching: true
                
            }

        case types.FETCH_JOBS_TEXT_SUGGESTIONS_SUCCESS:


            return  {

                ...state,
                isFetching: false,
                suggestions: [...action.response.suggestions]
            }
                

        case types.FETCH_JOBS_TEXT_SUGGESTIONS_FAILURE:

            return  {

                ...state,
                isFetching: false,
                suggestions: []
            }


        case types.SEND_USER_JOB_BOOKMARK_REQUEST:

            return  {

                ...state,
                isSkipRender: true,
                isFetching: true
                
            }

        case types.SEND_USER_JOB_BOOKMARK_SUCCESS:


            return  {

                ...state,
                isFetching: false,
                isSkipRender: true,
                isJobSaved: action.response.actionStatus
            }
                

        case types.SEND_USER_JOB_BOOKMARK_FAILURE:

            return  {

                ...state,
                isFetching: false,
                isJobSaved: false,
                isSkipRender: true,
                message: action.error
            }


        case types.SEND_USER_JOB_SEARCH_HISTORY_REQUEST:

            return  {

                ...state,
                isFetching: true,
                isSkipRender: true,
                search: {...state.search,canSetHistory:false}
                
            }

        case types.SEND_USER_JOB_SEARCH_HISTORY_SUCCESS:


            return  {

                ...state,
                isFetching: false,
                isSkipRender: true,
                isHistorySaved: action.response.actionStatus,
                search: {...state.search,canSetHistory:false}
            }
                

        case types.SEND_USER_JOB_SEARCH_HISTORY_FAILURE:

            return  {

                ...state,
                isFetching: false,
                isHistorySaved: false,
                isSkipRender: true,
                search: {...state.search,canSetHistory:false},
                message: action.error
            }




        case types.SAVE_JOB_SEARCH_PARAMS:

            return  {

                ...state,
                isFetching: false,
                search: {...state.search,...action.payload}
                
            }

        case types.CRUD_JOB_FILTER:

            return manipulateFilter(state,action)
    
    
        default:
        return state
    }


}