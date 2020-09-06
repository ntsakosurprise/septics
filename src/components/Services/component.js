
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'



import Bio from './bio/bio' 
import Im from './im/im'
import Clients from './clients/clients' 
import Prices from './prices/prices'
import ServiceReq from './servicereq/servicereq'

 



class Services extends Component{


    constructor(props){

        super(props)
    }

    componentWillMount(){

        console.log('THE services COMPONENT IS GOING TO MOUNT')
        console.log(this.constructor.name)
    }


    render(){

        return(

            <article className="services">

                <h2 className="services__title">
                    <span className="services__title-primary">Our</span> 
                    <span className="services__title-secondary">Services</span>
                    
                </h2>

                 <Im />
                <Bio />
                <strong className="clearfix" /> 
                <Clients />
                {/* <Prices /> */}
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

export default connect(mapStateToProps,mapDispachToProps)(Services)