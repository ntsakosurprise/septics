
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
import * as navigatorActions from '../ReduxFirstNavigator/actions'
import ProgressBarCircular from '../ProgressBarCircular/component'
import jobs from './jobs'
import ManageAlerts from './components/manage/managealert'






class CandJobAlertsManage extends Component{


    constructor(props){

        super(props)
    }


    componentDidMount(){

        const {candJobAlertsManage,actions} = this.props
        const {candJobAlertsList} = candJobAlertsManage
        const {alertID} = candJobAlertsList
        actions.fetchAlertById({ID:1,alertID:alertID})
        
    }

    shouldComponentUpdate(prevProps,nextProps){

        if(prevProps.isActionSuccessful && nextProps.isActionSuccessful === false ){

            return false
        }else{

            return true
        }


    }

    

    render(){

        const {actions,candJobAlertsManage} = this.props
        const {push,sendUserAlertUpdateData,setAlertUpdateData,removeNotification} = actions
        const {candJobAlertsManageMod} = candJobAlertsManage
        const {manageAlert,isActionSuccessful,isFetching,isProgressBar} = candJobAlertsManageMod 

        console.log('THE ISPROGRESSBAR PROP')
        console.log(candJobAlertsManageMod)
        console.log(isProgressBar)

        if(isFetching && isProgressBar === false) return  <article className="dashboard__candsettings"><ProgressBarCircular /></article>;

        console.log('THE MANAGEALERT:RENDER')
        console.log(manageAlert)
       

        return(


            <article style={isProgressBar ? {pointerEvents:"none",opacity:"0.4"} : {}} className="dashboard__candalertmanage">
                  
                  <div>

                     <ManageAlerts manageAlert={manageAlert} removeNotification={removeNotification} isActionSuccessful={isActionSuccessful} isProgressBar={isProgressBar} isFetching={isFetching} sendAlertUpdate={sendUserAlertUpdateData} setAlertUpdateData={setAlertUpdateData} push={push}/>

                  </div>
                  
                 
            </article>
        )
    }




}

const mapStateToProps = (state)=>{

    const {candJobAlertsManage,candJobAlertsList} = state

    return{
        candJobAlertsManage:{
            candJobAlertsList: candJobAlertsList,
            candJobAlertsManageMod: candJobAlertsManage
        }
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions,...navigatorActions},dispatch)
    }
}

export default connect(mapStateToProps,mapDispachToProps)(CandJobAlertsManage) 