
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
import * as navigatorActions from '../Navigator/actions'
import { withRouter } from 'react-router-dom';

import CandidateBar from '../CandidateBar/component'
import EmployerBar from '../EmployerBar/component'

class UserSideBar extends Component{


    constructor(props){

        super(props)
    }

    componentWillMount(){

        console.log('THE HEADER COMPONENT IS GOING TO MOUNT')
        console.log(this.props.state)
    }


    render(){

        return(

            <aside >
                
                {/* {
                    this.props.userType === 'candidate' ? <CandidateBar /> : <EmployerBar />

                } */}

            <CandidateBar />

            </aside>
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

        actions: bindActionCreators({...actions,...navigatorActions},dispatch)
    }
}

export default withRouter(connect(mapStateToProps,mapDispachToProps)(UserSideBar))