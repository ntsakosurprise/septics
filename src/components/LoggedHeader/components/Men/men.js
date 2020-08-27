import React, { Component } from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import Contacts from '@material-ui/icons/People';
import { withStyles } from '@material-ui/core/styles'
import Dropdown from '../Dropdown/dropdown'

// import Navigation from "../../../Common/navigation/navigation"
// import links from './links'

const styles = {
    root: {
     
      color:"green",
      fontSize: 20,
      
    },
    iconhover:{
        '&:hover':{

            content: ""
        }
    }
  };




class Men extends Component{

    constructor(props){


        super(props)

        this.state = {
          location: [
            {
                id: 0,
                title: 'My account',
                selected: false,
                key: 'location',
                to: '/access'
            },
            {
              id: 1,
              title: 'Jobs',
              selected: false,
              key: 'location',
              to: '/jobs'
            },
            {
              id: 2,
              title: 'Post jobs',
              selected: false,
              key: 'location',
              to: '/postjob'

            },
            {
              id: 3,
              title: 'Job alert',
              selected: false,
              key: 'location',
              to: '/alert'
            },
            {
              id: 4,
              title: 'About',
              selected: false,
              key: 'location',
              to: '/about'
            },
            {
              id: 5,
              title: 'Blog',
              selected: false,
              key: 'location',
              to: '/blog'
            }
          ]
        }

      }



      toggleSelected(id, key){

        let temp = this.state[key]
        temp[id].selected = !temp[id].selected
        this.setState({
          [key]: temp
        })

      }

  
   render(){
    return(

        <div >


        

                
                    <section className={`bg-primary ${this.props.path === '/' ? 'menu-default': 'menu-custom'}`}>
                       

                        <Dropdown

                            
                            activator={true}
                            list={this.state.location}
                            toggleItem={this.toggleSelected.bind(this)}

                        />

                    </section>
               
        </div>
    )
  }
}

export default withStyles(styles)(Men)