import React, { Component } from 'react' 
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import Notifications from '@material-ui/icons/Notifications';
import jobs from './list'
import Card from './card'


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




class ListCard extends Component{

     
    
    constructor(props){

        super(props)

    }

    list(l,i){

        console.log('THE LIST RUNS')
        console.log(l)
        console.log(i)
        console.log(this.props.type)
        console.log(this.props.type === 'mainfeatured') 
        const {props} = this 
        const {actions} = props  

        if(this.props.type === 'mainfeatured'){

            return (<Card key={i} actions={actions} type={this.props.type} job={l}/>)

        }else if(this.props.type === 'jofree'){

            return (<Card key={i} actions={actions} type={this.props.type}  job={l}/>)
        }else if(this.props.type === 'add'){
            
            return (<Card key={i} actions={actions} type={this.props.type} job={l}/>)
        }else if(this.props.type === 'jofeatured'){
            return (<Card key={i} actions={actions} type={this.props.type} job={l}/>)
        }else if(this.props.type === 'josponsored'){

            console.log('THE LISTCARD COMPONENT MATCHES josponsored:::')
            return (<Card key={i} actions={actions} type={this.props.type} job={l}/>)

        }else if(this.props.type === 'agr'){

            return (<Card key={i} actions={actions} type={this.props.type} job={l}/>)
        }else{
            return null
        }

    }



    render(){

        return(

           <section className="list__card">

            {   
                this.props.listItem.map((l,i)=>{

                   return this.list(l,i)

                })
            }

               
             
           </section>
        )
    }

}


export default withStyles(styles)(ListCard)