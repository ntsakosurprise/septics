
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'

// import Brand from './brand/brand'
// import Primary from './primary/primary'




class Join extends Component{


    constructor(props){

        super(props)
    }

    componentWillMount(){

        console.log('THE HEADER COMPONENT IS GOING TO MOUNT')
    }


    render(){

        return(

            <article className="grid-row pd-bottom-fd-xxx-sm">
                  
                  I'M THE JOIN 
                  

            </article>
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

export default connect(mapStateToProps,mapDispachToProps)(Join)