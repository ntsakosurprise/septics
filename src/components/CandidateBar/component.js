
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
import * as navigatorActions from '../Navigator/actions'
import * as authActions from '../Auth/actions'
import { withRouter } from 'react-router-dom';



import Tools from './components/tools/tools'
import SettingOffset from './components/settingoffset/settingoffset'
import Navigation from './components/navigation/navigation'






class CandidateBar extends Component{


    constructor(props){

        super(props)
    }

    componentWillMount(){

        console.log('THE HEADER COMPONENT IS GOING TO MOUNT')
        console.log(this.props.state)
    }

    logoutUser(){

        this.props.actions.logoutUser()
    }


    render(){

        return(

            <div className="dashboard__sidebar" >

                 

                      <div>
                         
                         <section className="dashboard__sidebar--tools">
                           <Tools />
                         </section>

                         <section className="dashboard__sidebar--nav">

                            <Navigation  />
                         </section>

                         <section className="dashboard__sidebar--settingoffset">
                             <SettingOffset logoutUser={this.logoutUser.bind(this)} />
                         </section>
                        
                         

                      </div>
                    
            

            </div>
        )
    }




}

const mapStateToProps = (state)=>{

    return{
        state:{
            ...state.router
        }
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions,...navigatorActions,...authActions},dispatch)
    }
}

export default withRouter(connect(mapStateToProps,mapDispachToProps)(CandidateBar))