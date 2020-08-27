
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
import * as navigatorActions from '../ReduxFirstNavigator/actions' 
import * as authActions from '../Auth/actions'
import qs from 'query-string'

import Search from './components/search/search' 
import Jobs from './components/jobs/jobs'

 



class Listing extends Component{


    constructor(props){

        super(props)
        this.state ={update: false}
    }


    syncUrlParams(params){

        const {props} = this
        const {listing,actions} = props
        const {saveJobSearchParams} = actions
        // let {search} = listing 
        let linkQuery =  qs.parse(params) 
        let validKeys = ['jq','jl','jt','jcts','jdp','jcl','je','jsr','limit','skip']


        if(!(linkQuery instanceof String)){

            let searchQueryDict = Object.entries(linkQuery) 
            linkQuery = {}
            searchQueryDict.forEach((key,index)=>{

                if(validKeys.indexOf(key[0]) >= 0 ) {

                    if(isNaN(key[1])){
                        return linkQuery[key[0]] = key[1]
                    }else{

                        return linkQuery[key[0]] = parseInt(key[1])
                    }
                  
                }
              
             })


        }
    
    console.log('THE LINK QUERY HAS VALUES') 
    console.log(linkQuery) 
     saveJobSearchParams({...linkQuery,initLoad:true,fetchJobs: true}) 
    }

    parseSearchParameters(search){


        const searchDict = Object.entries(search)
        // const {filters} = search
        // const {keywords,location,skip,pageLimit,currentPage,sort} = searchy 
        

        // let filtersModified = [] 
        let endPoint = '/jobs?'
        let searchString = `` 
        let leadingJq = ''
        let leadingJl = ''
        let searchFields = {} 

        // keywords.trim() !== '' ? searchString += `j=${keywords}` : searchString += ''
        // location.trim() !== '' ? 
        //     filters.location ? searchString += `&l=${filters.location}` : searchString += `&l=${location}`
        //     : filters.location ? searchString += `&l=${filters.location}` : searchString += ''

        console.log('THE REAL SEARCH DICTIONARY')
        console.log(searchDict)
        // console.log('THE LOCATION FROM SEARCH')
        // console.log(location)

         searchDict.forEach((key,index)=>{

            // if(ke[1].inst)
            //  console.log('THE KEY BY DICTIDONARY') 
            //  console.log(key[0])
            if(key[0] === 'jq' ){ leadingJq += `${key[0].toLowerCase()}=${key[1]}`; return searchFields[key[0]] = key[1]}
            if(key[0] === 'jl' ){ leadingJl += `${key[0].toLowerCase()}=${key[1]}`; return searchFields[key[0]] = key[1]}
            if(key[0] === 'initLoad' || key[0] === 'fetchJobs' || key[0] === 'totalPages' || key[0] === 'canSetHistory'
            || key[0] === 'totalJobs' || key[0] === 'isPageFirstLoad' || key[0] === 'isRefresh' ) return 
            if(key[0] === 'currentPage' ) return  searchFields[key[0]] = key[1] 
            if(key[0] === 'pageLimit'){searchString +=`&limit=${key[1]}`; return searchFields['limit'] = key[1]} 
            if(key[1] instanceof Array){searchString += `&${key[0].toLowerCase()}=${key[1].join(' ')}` ;searchFields[key[0]] = key[1].join(' ')}
            searchString += `&${key[0].toLowerCase()}=${key[1]}` 
            searchFields[key[0]] = key[1]
           
            

         })

        //  if(leadingJq.trim() != '') searchString += leadingJq 
        //  if(leadingJl.trim() != '' ) searchString += leadingJl 

          if(leadingJq.trim() != ''){
            // alert('leadingJQ') 
            // alert(leadingJq)
            // alert(leadingJl)
            searchString = `${endPoint}${leadingJq}${leadingJl}${searchString}`

          }else if(leadingJl.trim() != ''){

            // alert('leadingJl')
            // alert(leadingJl)
            searchString = `${endPoint}${leadingJl}${searchString}`
          }else{

            
            searchString = `${endPoint}${searchString.slice(1)}`
          }
         

        // if(Object.keys(filters).length >= 1){

        //     for(let f in filters){

        //         searchString += `&${f.toLowerCase()}=${filters[f]}`
        //         if(f !== 'datePosted' && f !== 'location'){

        //             filters[f] = filters[f].join(' ')
        //         }
        
        //         filtersModified.push({
        //             key: f,
        //             value: filters[f]
        //         })
        //     }

        // }

        // if(location.trim() !== ''){

        //     if(!filters.location){

        //         filters.location = location
        //     }
        // }
       
    
        // let limit = pageLimit
       
        console.log('THE FILTERS')
        console.log(searchFields)

        return {searchString,searchFields}

    }

    
    componentDidMount(){

        console.log('The component did mount and now we have props') 
      
      
        const {props} = this
        const {listing,actions} = props
        const {fetchJobs,push,saveJobSearchParams} = actions
        let {search} = listing 
        console.log('THE LISTING COMPONENT HAS MOUNTED')
        console.log(props.router) 
        this.syncUrlParams(props.router.search)
       
      
        // saveJobSearchParams({...linkQuery,initLoad:true,fetchJobs: true}) 


        // }else{

        //     // console.log('THE LINK IS NULL') 
        //     // console.log(linkQuery)
        //     // alert('the LINKQUERY IS NULL')
            let parseResutls = this.parseSearchParameters(search) 
            const {searchString,searchFields} = parseResutls 
            push(searchString)
            fetchJobs(searchFields)
        // }
        
       

        
        
    }

    

    // shouldComponentUpdate(nextProps){

    //      console.log('THE SHOULD COMPONENT UPDATE::NEXTPROPS')
    //      const {props} = this
    //      const {actions} = props
    //      const {fetchJobs,push} = actions
    //      const prevListing = this.props.listing
    //      const nextListing = nextProps.listing
    //      console.log(prevListing)
    //      console.log(nextListing)

    //      const { search,isFetching,listFetched } = nextListing 
      
    //     // window.scrollTo(0,0)

    //     if(nextListing.search.initLoad === true && nextListing.search.fetchJobs === true){

    //         console.log('THE COMPONENT IS GOING TO RERENDER') 
    //         // alert('INIT LOAD TRUE') 
    //         // alert(prevListing.search.initLoad)
    //         // alert(nextListing.search.fetchJobs)

           
            
    //         let parseResutls = this.parseSearchParameters(search) 
    //         const {searchString,searchFields} = parseResutls

    //         // push(searchString)
    //         fetchJobs(searchFields)
    //         window.scrollTo(0,0)
    //         return true

    //     }else if(prevListing.search.fetchJobs === false && nextListing.search.fetchJobs === true){


    //         let parseResutls = this.parseSearchParameters(search) 
    //         const {searchString,searchFields} = parseResutls 
    //         alert('PREVFETCH FALSE AND NEXTSEARCH TRUE')
    //         // alert(prevListing.search.fetchJobs)

    //         // push(searchString)
    //         fetchJobs(searchFields)
    //         window.scrollTo(0,0)
    //         return true

    //     }else if(isFetching === true){

    //         // console.log('THE COMPONENT IS NOT GOING TO RERENDER')
    //         return true

    //     }else if(isFetching === false && listFetched === true) {return true}
    //     else{return false}
    // }


    // componentWillUnmount(){

    //     const {props} = this
    //     const {listing,actions} = props
    //     const {fetchJobs,push,saveJobSearchParams} = actions 
    //     saveJobSearchParams({initLoad:true,fetchJobs:true})
    // } 


    shouldComponentUpdate(nextProps){

         console.log('THE SHOULD COMPONENT UPDATE::NEXTPROPS')
         const {props} = this
         const {actions} = props
         const {fetchJobs,push} = actions
         const prevListing = this.props.listing
         const nextListing = nextProps.listing
         console.log(prevListing)
         console.log(nextListing)


        if(nextProps.listing.isSkipRender && nextProps.listing.isSkipRender === true){
            return false
        }else{
            return true
        }

      
    }

    componentDidUpdate(nextProps){

        console.log('THE SHOULD ComponentDIDUPDATE  UPDATE::NEXTPROPS')
         const {props} = this
         const {actions} = props
         const {sendUserSearchHistory} = actions
         const prevListing = this.props.listing
         const nextListing = nextProps.listing 
         const {search} = nextListing
         const {canSetHistory} = search 

         console.log('THE CANSETHISTORY IS SET?')
         console.log(canSetHistory)
        //  console.log(prevListing)
        //  console.log(nextListing)


        if(canSetHistory && canSetHistory === true){
        
            const {jq,jl} = search 

            sendUserSearchHistory({
                keyword: jq,
                location: jl
            },1)

        }
    }
   



    


    render(){

        const {listing,auth,actions} = this.props
        const {jobs,search,suggestions,isFetching} = listing 
        const {locations} = jobs


        console.log('THE JOBS PROP')
        console.log(listing)

        return(

            <article className="job">
                
                <Search search={search} actions={actions} suggestions={suggestions} locations={locations}  />
                <Jobs jobs={jobs} auth={auth} search={search} actions={actions} isFetching={isFetching} />
               
               
               
             </article>
        )
    }




}

const mapStateToProps = (state)=>{

    const {listing,router,auth} = state
    return{
        listing,router,auth
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions,...navigatorActions,...authActions},dispatch)
    }
}

export default connect(mapStateToProps,mapDispachToProps)(Listing)