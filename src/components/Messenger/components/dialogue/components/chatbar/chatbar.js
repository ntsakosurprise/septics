
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions' 
import Avatar from './avatar'
import Barfeatures from './barfeatures'




class Chatbar extends  Component{


    render(){

        
        return(

            
                
                    <div className="grid-row">

                        <section className="grid-col-9">

                            <Avatar />
                        </section>
                        <section className="grid-col-3">
                            <Barfeatures />
                        </section>
                        
                       
                    </div>


            
        )
    }




}

const mapStateToProps = (state)=>{

    return{
        state:{
            ...state.setting
        }
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions},dispatch)
    }
}

export default connect(mapStateToProps,mapDispachToProps)(Chatbar)