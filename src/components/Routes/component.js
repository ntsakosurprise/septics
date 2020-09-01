
import React, {Component} from 'react'
import {Router, Switch,Route} from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import all from '../all/routes'
import restricted from '../restricted/routes'
import limited from '../limited/routes'
import Header from '../Header/component'
import LoggedIn from '../LoggedIn/component'
import LoggedOut from '../LoggedOut/component'
import NotFound404 from '../Notfound404/component'
import ScrollToTop from '../ScrollToTop/component' 
import ScrollSmooth from '../scrollSmooth/component'





class Routes extends Component{


  
    render(){

        return(

            <>
               
               <ScrollToTop>
                   <ScrollSmooth>
                        <Switch >
                        
                        

                        {restricted.map((r,i)=>{
                                
                                return <LoggedIn {...this.props} exact path={r.path} component={r.component} key={i} />
            
                            })}

                            {all.map((r,i)=>{
                                
                            let error = r.error || false 
                            let path = r.path || null
                            return r.error || !r.path
                                        ? <LoggedOut {...this.props} path={path} catchAll={true} error={error} component={r.component} key={i} />
                                        : <LoggedOut {...this.props}  exact path={r.path} component={r.component} key={i} />
            
                            })}
            
                            

                        
                        

                        </Switch>

                    </ScrollSmooth>

                 </ScrollToTop>
               
           </>
        )
    }




}


export default withRouter(Routes)