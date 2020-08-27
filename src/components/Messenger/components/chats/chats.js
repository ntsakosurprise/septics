
import React, {Component} from 'react' 
import {BrowserRouter as Router,Link} from 'react-router-dom' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from '../dialogue/components/chatbar/actions'
import chats from './chats.json'
import Card from './card'







class Chats extends  Component{


    constructor(){

        super()
        this.state ={
            chats: []
        }
    }

    componentDidMount(){
        console.log('THE CHATS')
        console.log(chats)
        this.setState({chats: chats},()=>{

            console.log('THE LENGTH OF STATE.CHATS')
            console.log(this.state.chats.length)
            
        })
    }

   

    render(){

     

            
              return(  


                        this.state.chats.length > 0
                    
                                ? 
                                    <div className="grid-col-1">

                                    
                                        { this.state.chats.map((c,i)=>{

                                                return(
                                                    <Card card={c.user} key={i} />
   
                                                )
                                            })

                                        
                                        }
                                                
                                            
                                            
                                    </div>
                                
                                :null
                
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

export default connect(mapStateToProps,mapDispachToProps)(Chats)