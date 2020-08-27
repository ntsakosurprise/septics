import React, { Component } from 'react' 
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import Notifications from '@material-ui/icons/Notifications';

import Filter from './filter'


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




class RightFilter extends Component{
    
    constructor(props){

        super(props)

    }

   getJobs(){
   	
   	 const {actions,search} = this.props 
     const {fetchJobsByFilter} = actions 
     const {searchy,filters} = search
     
     fetchJobsByFilter({
     	
     	 ...searchy,
     	 ...filters
     	
     })
   	
   }

    render(){

        console.log('THE FILTERS DATA')
        console.log(this.props) 
        const {props,state,getJobs} = this
        const {filtersData,actions} = props
       

        return(

           

                <section className="job__jobs--rt">

              
                  <button disabled={true} onClick={getJobs.bind(this)}className="job__jobs--rt-btn">Update Filtered</button>
                 <Filter filtersData={filtersData} actions={actions}/>

               
             
                </section>
        )
    }

}


export default withStyles(styles)(RightFilter)