
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
import * as navigatorActions from '../ReduxFirstNavigator/actions'
import ProgressBarCircular from '../ProgressBarCircular/component'
import Dashboard from './components/dashboard/dashboard'

 



class CandidateDashboard extends Component{


    constructor(props){

        super(props)
        this.state ={update: false}
    }

    componentDidMount(){

        console.log('The component did mount and now we have props')
        

        // const {listing} = this.props
        // const {search} = listing
        // console.log('THE SEARCH INFORMATION FROM THE REDUX STATE')
        // console.log(search)
        this.props.actions.fetchDashStats(1)
       
        
    }

    
    render(){

         const {candidateDashboard,actions} = this.props
         const {applicantStats,isFetching} = candidateDashboard 
         if(isFetching) return  <article className="dashboard__candsettings"><ProgressBarCircular /></article>;


        // console.log('THE JOBS PROP')
        // console.log(listing)

        return(

            <article className="dashboard__candidatedash">
                
                <div>

                     <Dashboard stats={applicantStats} push={actions.push} />

                   </div>
               
             </article>
        )
    }




}

const mapStateToProps = (state)=>{

    return{
        candidateDashboard:{
            ...state.candidateDashboard
        }
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions,...navigatorActions},dispatch)
    }
}

export default connect(mapStateToProps,mapDispachToProps)(CandidateDashboard)


