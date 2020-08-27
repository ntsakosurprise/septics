
import React, {Component} from 'react' 
import {BrowserRouter as Router,Link} from 'react-router-dom'
import Icon from '@material-ui/core/Icon';
// import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles'
import { deepOrange } from '@material-ui/core/colors';
import Settings from '@material-ui/icons/BrightnessLow';
import Chats from '@material-ui/icons/Chat';
import Contacts from '@material-ui/icons/People';
import Notifications from '@material-ui/icons/Notifications';
import Calls from '@material-ui/icons/Call';
import Add from '@material-ui/icons/Add';

import { fontSize } from '@material-ui/system';

const styles = {
    root: {
     
      color:"#999",
      fontSize: 30,
      
    },
    iconhover:{
        '&:hover':{

            content: ""
        }
    }
  };





// import Jobs from './jobs/jobs'
// import Brand from './brand/brand'
// import Primary from './primary/primary'
// import Secondary from './secondary/secondary'



class FeatBox extends  Component{


    constructor(props){

        super(props)
        this.state={
            modal: {
                open:false
            }
        }
    }

    icon(ic,classes,ev){

       switch(ic.icon){

        case "Settings": {

           
           

                return(
                    <Settings  className={`${classes.root} ${classes.iconhover}`}  onClick={ev}  />
                )
            
            
        }
        break
        case "Chats": {
            return(
                <Chats  className={`${classes.root} ${classes.iconhover}`} onClick={ev} />
            )
        }
        break;
        case "Contacts": {
            return(
                <Contacts  className={`${classes.root} ${classes.iconhover}`} onClick={ev}/>
            )
        }
        break;
        case "Notifications": {
            return(
                <Notifications  className={`${classes.root} ${classes.iconhover}`} onClick={ev} />
            )
        }
        break;
        case "Calls": {
            return(
                <Calls  className={`${classes.root} ${classes.iconhover}`} onClick={ev} />
            )
        }
        break;
        case "Add": {
            return(
                <Add  className={`${classes.root} ${classes.iconhover}`} onClick={ev} />
            )
        }
        break;
        default: {
            return(null)
        }
       }
    }
    handleChange(feat,e){

        e.preventDefault()
        e.stopPropagation()
        console.log('THE CLICKED TARGET')
        console.log(feat)
       
       this.props.handle(feat)

    }

    stoPropa(e){

        e.stopPropagation()

    }

   

    render(){

        

        return(

            <div className="messenger__box" title={this.props.feature.name}>
                <span className="messenger__box__item" >

                 <Icon>
                   {this.icon(this.props.feature,this.props.classes,this.handleChange.bind(this,this.props.feature.icon))}
                 </Icon>

               
                </span>
            </div>
        )
    }




}

export default withStyles(styles)(FeatBox)