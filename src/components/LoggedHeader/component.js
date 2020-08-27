
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
// import Brand from './brand/brand'
// import Primary from './primary/primary'

import * as navigatorActions from '../ReduxFirstNavigator/actions'
import * as logoutActions from '../Logout/actions'
import { withRouter } from 'react-router-dom';

import Men from './components/Men/men'
import Brand from './components/Brand/brand'
import Primary from './components/Primary/primary' 
import ProgressBarCircular from '../ProgressBarCircular/component'




class LoggedHeader extends Component{


    constructor(props){

        super(props)
    }


    logoutUser(e){

        e.preventDefault()
        this.props.actions.logoutUser()

    }



    render(){

        console.log('I AM THE LOGGEDINHEADER COMPONENT AND I RERENDER')
    

        const {state,actions} = this.props
        const {userProfile} = state
        const {profile,isFetching,isProgressBar} = userProfile 
        if(Object.keys(profile).length === 0) return  <article className="dashboard__candsettings"><ProgressBarCircular /></article>;

        return(

            <header className={`${this.props.location.pathname === '/' ? 'pd-bottom-fd-xxx-sm': 'header__offset'} header--fxd-logged`} >

                
                
                        
                

            <section>
              <div>
                 
                 <section className="hr-size-fl-xx-sm float-left bg-black">
                   <Men path = {this.props.location.pathname} logoutUser={this.logoutUser} />
                 </section>
                 <section className="hr-size-fl-xx-tn float-left">
                    <Brand />
                 </section>

                 <section className="hr-size-fl-md float-left">
                    <Primary actions={actions} profile={profile} />
                   
                 </section>
                 <strong className="clearfix"></strong>

              </div>
            
            
            </section>
          
            
            
           
           
       

    </header>
        )
    }




}

const mapStateToProps = (state)=>{

    const {userProfile} = state

    return{
        state:{
            ...state.router,
            userProfile: userProfile

        }
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions,...logoutActions,...navigatorActions},dispatch)
    }
}

export default withRouter(connect(mapStateToProps,mapDispachToProps)(LoggedHeader))