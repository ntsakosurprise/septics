
import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
import * as navigatorActions from '../ReduxFirstNavigator/actions' 
import ProgressBarCircular from '../ProgressBarCircular/component'
import AlertsList from './components/alertslist/alertslist'





class CandJobAlertsList extends Component{


    constructor(props){

        super(props)
    }


    componentDidMount(){

        const {candJobAlertsList,actions} = this.props
        const {candJobAlertsCat,candJobAlertsListMod} = candJobAlertsList
        const {alertCurrentCategory} = candJobAlertsCat
        actions.fetchAlertsList({ID:1,catID:alertCurrentCategory}) 

        
    }

    
    render(){

        const {actions,candJobAlertsList} = this.props
        const {push} = actions
        const {candJobAlertsListMod} = candJobAlertsList
        const {alertsList,isFetching} = candJobAlertsListMod 

        if(isFetching) return  <article className="dashboard__candsettings"><ProgressBarCircular /></article>;

        return(

            <article className="dashboard__candalertlist">
                  
                  <div>

                     <AlertsList alertsList={alertsList} push={push} setAlertId={actions.setAlertId} />

                  </div>
                  
                 
            </article>
        )
    }




}

const mapStateToProps = (state)=>{

    const {candJobAlertsCat,candJobAlertsList} = state

    return{
        candJobAlertsList:{
            candJobAlertsCat: candJobAlertsCat,
            candJobAlertsListMod: candJobAlertsList
        }
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions,...navigatorActions},dispatch)
    }
}

export default connect(mapStateToProps,mapDispachToProps)(CandJobAlertsList)



