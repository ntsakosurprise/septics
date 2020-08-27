
import React, {Component} from 'react' 
import {Router, Switch,Route,Redirect} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
import * as userActions from '../UserProfile/actions'
import LoggedInHeader from '../LoggedHeader/component'
import UserSideBar from '../UserSideBar/component'
import Footer from '../Footer/component'
import LoggedInFooter from '../LoggedFooter/component'
import ProgressBarCircular from '../ProgressBarCircular/component'
let loggedIn = true




class LoggedIn extends Component{


     constructor(props){

        super(props)
     }


     componentDidMount(){

        if(loggedIn){

            const {userProfile,actions} =  this.props 
            const {profile} = userProfile

            if(Object.keys(profile).length < 1){

                actions.fetchUserProfile({ID:1})
               
            }else{

                console.log('THE USER IS LOGGED IN')
                console.log('PROFILE DATA IS AVAILABLE NO NEED TO FETCH')

            }
            

        }else{
           
            console.log('THE COMPONENT DID MOUNT::::LOGGEDIN COMPONENT')

        }
       
     }

    render(){


        const {userProfile,component: Component,...rest} = this.props 
       
        const {isFetching,isProgressBar} = userProfile 

        if(isFetching && isProgressBar === false) return  <article className="dashboard__candsettings"><ProgressBarCircular /></article>;
        // console.log('THE LOGGED IN COMPONENT:: DOES IT RERENDER ONCE RENDERED') 
        // console.log(this.props)
        // // console.log('THE LOGGEDIN CHECKER')
        // // console.log(isAuth)
        // // console.log({...rest})
        return(

            <>
            
             {
             
             loggedIn ?
                <>
                        <LoggedInHeader />
                        <UserSideBar userType="candiddate" />
                                    
                                
                            <Route {...rest} render={(props)=>{

                                
                                // return loggedIn
                                //         ? <Component {...props} />
                                //         : <Redirect to="/access" /> 
                                return <Component {...props} />
                            }} 
                            
                            />
                    </>
                
                : <Redirect to="/access" />
             }

            
            </>
        )


    }


}


const mapStateToProps = (state)=>{

    const {login,userProfile} = state
    const {isAuth} = login 
    return{
        isAuth,
        userProfile
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions,...userActions},dispatch)
    }
}


export default connect(mapStateToProps,mapDispachToProps)(LoggedIn)
