
import React, { Component } from 'react' 
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

import Plan from './plan'
import Sponsored from './sponsor'



const styles = {
    root: {
     
   
      fontSize: 40,
     
      
    },
    iconhover:{
        '&:hover':{

            content: ""
        }
    }
  };


 class Price extends Component{
    
    constructor(){
        super()

        this.state ={

            option: 'sponsor',
            current: {

                active: "po__price--options-btn po__price--options-active",
                off: "po__price--options-btn"
                
            }
        }
    }

    changeInsightOption(option,e){

        if(e)  e.preventDefault()

        this.setState({
            option: option
        })

    }

    renderOption(){




        switch(this.state.option){

            case 'plan':
            
                return(<Plan />)
            break;
            case 'sponsor':
                return(<Sponsored />)
            break;
         
            default:
                return null
        }

    }
   
  
    render(){
        return(

        
            <section className="po__price">

                <div className="po__price--options">

                    <button className="po__price--options-btn" onClick={(e)=>this.changeInsightOption('plan',e)}>Plans</button>
                    <button className="po__price--options-btn" onClick={(e)=>this.changeInsightOption('sponsor',e)}>Sponsored</button>
                </div>

                {this.renderOption()}

  
                
            </section>
        
        )
    }

}


export default withStyles(styles)(Price)