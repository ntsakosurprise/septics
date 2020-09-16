
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions' 

import Brand from './brandi/brandi'
import Company from './company/company'
import AppLaunch from './applaunch/applaunch'







class Footer extends Component{


    constructor(props){

        super(props)
    }

    componentDidUpdate(){

        const {footer} = this.props
        const {isFetching,isProgressBar} = footer
    
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

        const {actions,footer} = this.props 
        const {isFetching,isProgressBar} = footer

        return(

            <footer className="grid-row footer ">

              
                
                <section>
                    <Brand actions={actions} footer={footer} />
                </section>
                   
               

            </footer>
        )
    }





}

const mapStateToProps = (state)=>{

    const {footer} = state

    return{
        footer
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions},dispatch)
    }
}

export default connect(mapStateToProps,mapDispachToProps)(Footer)