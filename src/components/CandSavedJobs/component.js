
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
import * as navigatorActions from '../ReduxFirstNavigator/actions'
import ProgressBarCircular from '../ProgressBarCircular/component'
import SavedJobs from './components/dashboard/savedjobs'
import jobs from './jobs'





class CandSavedJobs extends Component{


    constructor(props){

        super(props)
    }

    
    componentDidMount(){

        const {actions} = this.props
        actions.fetchSavedJobsList({ID:1})
        
    }

   

    render(){

        const {candSavedJobs,actions} = this.props
        const {push} = actions
        const {savedJobsList,isFetching} = candSavedJobs 
        if(isFetching) return  <article className="dashboard__savedjobs"><ProgressBarCircular /></article>;
        

        return(

            <article className="dashboard__savedjobs">
                  
                  <div>

                     <SavedJobs savedJobs={savedJobsList} actions={actions} push={push} />

                  </div>
                  
                 
            </article>
        )
    }




}


const mapStateToProps = (state)=>{

    const {candSavedJobs} = state

    return{
        
        candSavedJobs
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions,...navigatorActions},dispatch)
    }
}

export default connect(mapStateToProps,mapDispachToProps)(CandSavedJobs)

