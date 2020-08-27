
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
import * as navigatorActions from '../ReduxFirstNavigator/actions' 
import * as userActions from '../UserProfile/actions'
import ProgressBarCircular from '../ProgressBarCircular/component'
import ProgressBarLinear from '../ProgressBarLinear/component'
import Settings from './components/dashboard/settings' 






class CandSettings extends Component{


    constructor(props){

        super(props)
    }


    componentDidMount(){

        // const {candJobAlertsManage,actions} = this.props
        // const {candJobAlertsList} = candJobAlertsManage
        // const {alertID} = candJobAlertsList
        console.log('THE COMONENTDIDMOUNT PROFILE')
        const {actions} = this.props
        actions.fetchUserAlertsSubscriptions({ID:1})
        
    }

    componentDidUpdate(){

        const {actions,userProfile} = this.props 
        const {isProfile,isFetching} = userProfile 
        const {unsetIsProfile} = actions

        console.log('SETTINGS COMPONENT DID UPDATE') 
        console.log(isProfile)

        if(isProfile && isFetching === false){

            console.log('isProfile is true, about to unset it') 
            console.log(this.name)
            unsetIsProfile()
        }
    }

    // shouldComponentUpdate(prevProps,nextProps){

    //     if(prevProps.isActionSuccessful && nextProps.isActionSuccessful === false ){

    //         return false
    //     }else{

    //         return true
    //     }


    // }



    render(){


       
        const {actions,candSettings,userProfile} = this.props 
        const {profile,isProfile} = userProfile 
        const {alertsEmails = null} = candSettings
        console.log('IS THIS A PROFILE')
        console.log(isProfile)


        const {isFetching,isProgressBar,isActionSuccessful,launcher} = isProfile ? userProfile : candSettings 
        //const {profile,isFetching,isProgressBar,isActionSuccessful} = candSettings  
        if(isFetching && isProgressBar === false) return  <article className="dashboard__candsettings"><ProgressBarCircular /></article>;

        console.log('THE CANDIDATE SETTINGS')
        console.log(candSettings) 
        console.log(isActionSuccessful)

        return(

            <article className="dashboard__candsettings">
                  
                  <Settings style={isProgressBar ? {pointerEvents:"none",opacity:"0.4"} : {}} profile={profile} alertsEmails={alertsEmails} isActionSuccessful={isActionSuccessful} isFetching={isFetching} isProgressBar={isProgressBar} launcher={launcher} actions={actions} />
                  {/* <ProgressBarCircular /> */}
                  {/* <ProgressBarCircular />  */}
                  {/* <ProgressBarLinear /> */}
                 
            </article>
        )
    }




}



const mapStateToProps = (state)=>{

    const {candSettings,userProfile} = state

    return{
        candSettings: candSettings,
        userProfile: userProfile
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions,...navigatorActions,...userActions},dispatch)
    }
}

export default  connect(mapStateToProps,mapDispachToProps)(CandSettings)