import React, { Component } from 'react' 
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import Search from '@material-ui/icons/Search';
import Trash from '@material-ui/icons/Delete';
import Manage from '@material-ui/icons/Edit';



const styles = {
    root: {
    
      fontSize: 20,
      
    },
    iconhover:{
        '&:hover':{

            content: ""
        }
    }
  };




class Card extends Component{

     
    
    constructor(props){

        super(props)

    }

    

   


    render(){

        const {classes,viewPage,alert,setAlertId} = this.props

        return(

          

            <div className="dashboard__candalertlist__card">

                <div className="dashboard__candalertlist__card__alertflag">
                    <span className="jobcard__social-text">Alert for</span>
                </div>
                
                <section className="dashboard__candalertlist__card__i">
                    <h3 className="dashboard__candalertlist__card__i-title-cont">
                        <span className="dashboard__candalertlist__card__i-title">
                            {alert.jobKeyword}
                        </span>
                        
                    </h3>
                    <i className="dashboard__candalertlist__card__i-salary">{alert.alertDate}</i>
                </section>
                <section className="dashboard__candalertlist__card__more">
                    <span className="dashboard__candalertlist__card__more-location">{alert.frequency}</span>
                </section>
                <section className="dashboard__candalertlist__card__extra">
                   
                    <p className="dashboard__candalertlist__card__extra-manage-actions">
                            <button className="dashboard__candalertlist__card__extra-manage-actions-icon">
                                <Icon><Search className={classes.root}  /></Icon>
                            </button>
                            <button className="dashboard__candalertlist__card__extra-manage-actions-icon">
                                <Icon><Manage className={classes.root} onClick={(e)=>{setAlertId(alert.alertID)}} /></Icon>
                            </button>
                            <button className="dashboard__candalertlist__card__extra-manage-actions-icon">
                                <Icon><Trash className={classes.root} /></Icon>
                            </button>
                        </p>
                </section>
                <strong className="clearfix" />
        
        </div>
        )
    }

}


export default withStyles(styles)(Card)