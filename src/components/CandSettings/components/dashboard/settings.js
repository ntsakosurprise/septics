
import React, {Component} from 'react' 
import {BrowserRouter as Router,Link} from 'react-router-dom'
import Navigation from './navigation'
import Profile from './profile'
import Alerts from './alerts'



class Settings extends  Component{


    constructor(props){

        super(props)

        this.state={
            active: null
        }
        this.handleActive = this.handleActive.bind(this)
    }

    handleActive(active){

        this.setState({...this.state,active: active},()=>{

            console.log('THE FEAT VALUE NOW IS: ')
            console.log(this.state.active)
        })

    }

    show(active,compData,isFetching,isProgressBar,isActionSuccessful,launcher,alertsEmails){

        const {url,firstName,lastName,email,id,profileUrl} = compData 
        const {actions} = this.props
        const {sendUserAlertSettingsUpdate} = actions 

        const profileData = {avatar: url,firstName: firstName,lastName: lastName,profileUrl: profileUrl } 
        // const alertsData = {email: email,alertID: id}
        

        switch(active){
            case 'profile':{

                return(
                    <Profile compData={profileData} isFetching={isFetching} isProgressBar={isProgressBar} isActionSuccessful={isActionSuccessful} launcher={launcher} actions={actions} />
                )
            }
            break;
            case 'alerts':{

                return(
                    <Alerts compData={alertsEmails} isFetching={isFetching} isProgressBar={isProgressBar} isActionSuccessful={isActionSuccessful} launcher={launcher} sendUserAlertSettingsUpdate={sendUserAlertSettingsUpdate} actions={actions} />
                )
            }
            break;
            default:{
                return(null)
            }
        }

    }


   

    render(){

        const {profile,isFetching,isProgressBar,isActionSuccessful,launcher,actions,alertsEmails} = this.props 
        const {url,firstName,lastName,profileUrl} = profile
        const profileData = {avatar: url,firstName: firstName,lastName: lastName,profileUrl: profileUrl }

        console.log('THE SETTINGS DATA ')
        console.log(profile)

        return(


               <div>

               
                    <section className="dashboard__candsettings--settingpane">

                        <div className="dashboard__candsettings--settingpane-box ">

                            
                               <h2 className="dashboard__candsettings--settingpane-title">Settings</h2>
                               
                                <Navigation handleActive={this.handleActive} />
                               
                                
                        </div>


                    </section>


                    <section className="dashboard__candsettings--editpane">

                        

                            {this.state.active ? this.show(this.state.active,profile,isFetching,isProgressBar,isActionSuccessful,launcher,alertsEmails) : <Profile compData={profileData} isFetching={isFetching}  isProgressBar={isProgressBar} isActionSuccessful={isActionSuccessful} launcher={launcher} actions={actions} />}
                              
                       


                    </section>


              
                    <strong className="clearfix" />

                </div>

             
             
           
        )
    }




}

export default Settings