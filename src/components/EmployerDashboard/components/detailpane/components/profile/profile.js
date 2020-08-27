
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions' 
import Avatar from './avatar'
import Media from './media'




class Profile extends  Component{


    render(){

        
        return(

            
                
                    <div className="grid-row">

                        <section>

                            <Avatar />
                        </section>

                        <section>

                            <Media />
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

export default connect(mapStateToProps,mapDispachToProps)(Profile)