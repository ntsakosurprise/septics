
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
import * as navigatorActions from '../Navigator/actions'
import { withRouter } from 'react-router-dom';



import Men from './components/Men/men'
import Brand from './components/Brand/brand'
import Primary from './components/Primary/primary'






class Header extends Component{


    constructor(props){

        super(props)
    }

    componentWillMount(){

        console.log('THE HEADER COMPONENT IS GOING TO MOUNT')
        console.log(this.props.state)
    }


    render(){

        return(

            <header className={` ${this.props.location.pathname === '/' ? 'pd-bottom-fd-xxx-sm': 'header__offset'}`} >

                
                
                        
                

                    <section>
                      <div>
                         
                         <section className="hr-size-fl-xx-sm float-left bg-black">
                           <Men path = {this.props.location.pathname} />
                         </section>
                         <section className="hr-size-fl-xx-tn float-left">
                            <Brand />
                         </section>

                         <section className="hr-size-fl-md float-left">
                            <Primary actions={this.props.actions} />
                           
                         </section>
                         <strong className="clearfix"></strong>

                      </div>
                    
                    
                    </section>
                  
                    
                    
                   
                   
               

            </header>
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

        actions: bindActionCreators({...actions,...navigatorActions},dispatch)
    }
}

export default withRouter(connect(mapStateToProps,mapDispachToProps)(Header))