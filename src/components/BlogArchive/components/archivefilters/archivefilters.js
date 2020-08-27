
import React,{Component} from 'react'
import {Link} from 'react-router-dom' 

import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import DateRangeIcon from '@material-ui/icons/DateRange';




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



class ArchiveFilters extends Component{
    
    
    constructor(props) {
        super(props);
      
    }

   
    controlValidate = (validateControl)=>{
   	
        let validData = [true,''] 
    
     if(validateControl.validation.isRequired){ 
     
         let valid = validateControl.value.trim() !== ''
         let message = ''
         if(!valid){
             message = `${validateControl.config.name} is a required field `
         }
 
         validData = !valid ? [valid,message] : validData
         
     }
    
        return validData
    
}


      
    
    render(){

        return(

           

                
                <div  className="archive__filters">

                  
                        <section className="archive__filters--title">
                            Filters
                        </section>
                        <div className="archive__filters--collection">

                            
                          <button className="archive__filters--collection-all">All</button>
                          <button className="archive__filters--collection-up">Update</button>
                          <button className="archive__filters--collection-ca">Career</button>
                            

                        </div>

                        <section className="archive__filters--date">

                            <button className="archive__filters--date-btn">Sort by date</button>
                            <div className="archive__filters--date-wrap">
                                <span className="archive__filters--date-icon">
                                    <Icon>
                                        <DateRangeIcon />
                                    </Icon>
                                </span>
                                <span className="archive__filters--date-text">Any date</span>
                            </div>
                        </section>

                        

                           
                 
                       

                  

                  
                </div>
               
                

           
        )
    }

}


export default withStyles(styles)(ArchiveFilters)