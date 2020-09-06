
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'

import Search from './search/search'
import Identity from './identity/identity' 
import Septic from './septic/septic' 
import Contact from './contact/contact'
import Choose from './choose/choose'
import Gallery from './gallery/gallery'
import Goal from './goal/goal'
import Quote from  './quote/quote'
import Pledge from  './pledge/pledge'
import Passion from  './passion/passion' 
import About from './about/about'
import Services from './services/services'
import Jobdash from './jobdash/jobdash'
import Top from './gallery/gallery'
import Employer from './employer/employer'
import Candidate from './candidate/candidate'




class Home extends Component{


    constructor(props){

        super(props)
    }

    componentWillMount(){

        console.log('THE HEADER COMPONENT IS GOING TO MOUNT')
    }


    render(){
        console.log('THE LOCATION STATE SHAPE')
        console.log(this.props.state.pathname)

        return(

             <article className="grid-row">

                <div className="home">

                   
                    <div>

                        <Septic />
                    </div>

                    <Contact />

                    <About />

                    <Gallery />

                    <Services />

                    <div>

                        <Goal />
                    </div>

                    <div>

                        <Pledge />
                    </div>

                    <div>

                        <Passion />
                    </div>

                    <div>
                        <Choose />
                    </div>

                    <div>
                       <Quote />
                   </div>
                    

                </div>
                
             </article>
        )
    }




}

const mapStateToProps = (state)=>{

    return{
        state:{
            ...state.router
        }
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions},dispatch)
    }
}

export default connect(mapStateToProps,mapDispachToProps)(Home)