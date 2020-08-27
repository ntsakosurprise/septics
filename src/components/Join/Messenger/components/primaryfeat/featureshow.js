
import React, {Component} from 'react' 
import {BrowserRouter as Router,Link} from 'react-router-dom'
import Search from '../search/search'
import Settings from '../settings/settings'
import Chats from '../chats/chats'



// import Jobs from './jobs/jobs'
// import Brand from './brand/brand'
// import Primary from './primary/primary'
// import Secondary from './secondary/secondary'



class FeatureShow extends  Component{


    constructor(props){

        super(props)
    }

    feat(feat){

        switch(feat){
            case 'Settings':{

                return(
                    <Settings />
                )
            }
            break;
            case 'Chats':{

                return(
                    <Chats />
                )
            }
            break;
            default:{
                return(null)
            }
        }

    }

   

   

    render(){


        return(

            
                
                    <div className="grid-col-12 pd-left-fl-bt">

                       <Search />
                       <div className="mg-left-fl-bt bg-red">
                            {this.props.feat ? this.feat(this.props.feat) :null}
                       </div>
                      
                        
                        
                    </div>


            
        )
    }




}

export default FeatureShow