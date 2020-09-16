
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

    componentDidUpdate(){

        const { about} = this.props
        const {isFetching,isProgressBar} =  about
    
        if(isProgressBar === true && isFetching === true){
    
          document.body.style.overflow = 'hidden'
          document.body.style.pointerEvents ='none'
          document.body.style.opacity = '0.4'
    
        }else{
    
          document.body.style.overflow = 'visible'
          document.body.style.pointerEvents ='all'
          document.body.style.opacity = '1'
        }
       
      }


    render(){

        const {actions, about} = this.props 
        const {isFetching,isProgressBar} =  about

        return(

            <article className="about">
                
                <Bio />
                <Im />
                <strong className="clearfix" /> 
                <Clients />
                <ServiceReq actions={actions} about={about}  />
               
             </article>
        )
    }




}

const mapStateToProps = (state)=>{

    const {about} = state

    return{
        about
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions},dispatch)
    }
}

export default connect(mapStateToProps,mapDispachToProps)(About)