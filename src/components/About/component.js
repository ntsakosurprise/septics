
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'



import Bio from './bio/bio' 
import Im from './im/im'
import Clients from './clients/clients'
import ServiceReq from './servicereq/servicereq'

 



class About extends Component{


    constructor(props){

        super(props)
    }

    componentWillMount(){

        console.log('THE ABOUT COMPONENT IS GOING TO MOUNT')
        console.log(this.constructor.name)
    }


    render(){

        return(

            <article className="about">
                
                <Bio />
                <Im />
                <strong className="clearfix" /> 
                <Clients />
                <ServiceReq />
               
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

export default connect(mapStateToProps,mapDispachToProps)(About)