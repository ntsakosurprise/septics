import React, { Component } from 'react' 
import Icon from '@material-ui/core/Icon';
import HistoryIcon from '@material-ui/icons/History';
import { withStyles } from '@material-ui/core/styles'




const styles = {
    root: {
     
    //   color:"#999",
      fontSize: 35,
      
    }
    
  };




class Card extends Component{

     
    
    constructor(props){

        super(props)

    }

    

   


    render(){

        const {viewPage,cat,classes} = this.props

        console.log('THE CARD CLASSES')
       

        return(

          

            <section className="dashboard__candalertscat--i">

                <div className="dashboard__candalertscat--i-box" onClick={(e)=>viewPage('/alerts/list')}>

                    
                        <span className="dashboard__candalertscat--i-box-title">{cat.jobAlertCount}</span>
                        <span className="dashboard__candalertscat--i-box-icon"><Icon><HistoryIcon className={classes.root} /></Icon></span>
                        <span className="dashboard__candalertscat--i-box-name">{cat.name}</span>
                        
                        
                </div>


            </section>

        )
    }

}


export default withStyles(styles)(Card)