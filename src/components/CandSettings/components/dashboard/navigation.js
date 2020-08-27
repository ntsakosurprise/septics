
import React, {Component} from 'react' 
import {BrowserRouter as Router,Link} from 'react-router-dom'


// import Jobs from './jobs/jobs'
// import Brand from './brand/brand'
// import Primary from './primary/primary'
// import Secondary from './secondary/secondary'



class Navigation extends  Component{


    constructor(props){

        super(props)
    }

    notifyActive(active,e){

        e.preventDefault()
        e.stopPropagation()

        this.props.handleActive(active)

    }

   

    render(){

        return(


               <nav>

                 <Link onClick={this.notifyActive.bind(this,'profile')} to="" className="link dashboard__candsettings--settingpane-link"><span>Profile</span></Link>
                 <Link onClick={this.notifyActive.bind(this,'alerts')} to="" className="link dashboard__candsettings--settingpane-link"><span>Job alerts</span></Link>
                 <Link onClick={this.notifyActive.bind(this,'deactivate')} to="" className="link dashboard__candsettings--settingpane-link"><span>Deactivate Account</span></Link>
               

                </nav>

             
             
           
        )
    }




}

export default Navigation