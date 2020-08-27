
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
// import * as errorActions from '../ErrorHandler/actions'
import Routes from '../Routes/component' 





class Root extends Component{


    constructor(props){

        super(props)
    }



    render(){

        return(

            
            <>    
                <Routes/>
               
            </>

           
        )
    }




}

const mapStateToProps = (state)=>{

    return{
        state:{
            ...state.history
        }
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions},dispatch)
    }
}

export default connect(mapStateToProps,mapDispachToProps)(Root)