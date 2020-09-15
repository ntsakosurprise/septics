
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
import * as navigatorActions from '../ReduxFirstNavigator/actions' 
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

   

    componentDidUpdate(){

        const {home} = this.props
        const {isFetching,isProgressBar} = home
    
        if(isProgressBar === true && isFetching === true){
    
          document.body.style.overflow = 'hidden'
          document.body.style.pointerEvents ='none'
          document.body.style.opacity = '0.4'
    
        }else{
    
          document.body.style.overflow = 'visible'
          document.body.style.pointerEvents ='all'
          document.body.style.opacity = '1'
        }
       
      }


    render(){

        
        const {actions,home} = this.props 
        const {isFetching,isProgressBar} = home

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

                        <Goal actions={actions} home={home} />
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

    const {home} = state

    return{
        home
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions,...navigatorActions},dispatch)
    }
}

export default connect(mapStateToProps,mapDispachToProps)(Home)