
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
import Header from '../Header/component'
import Footer from '../Footer/component'
import {Router, Switch,Route,Redirect} from 'react-router-dom' 
let isRestricted = false
let isLoggedIn = true
// import Brand from './brand/brand'
// import Primary from './primary/primary'




export default ({component: Component,...rest})=>{

        console.log('THE CATCHALL')
        console.log(rest)
        return(

            <>

             <Header />
                        
                     {
                        rest.catchAll || rest.error ? <Route component={Component} /> 
                                      : <Route {...rest} render={(props)=>{
                                              
                                              return isRestricted 
                                                ? <Redirect to="/" />
                                                : <Component {...props} />
        
                                        }} 
                            
                                    />
                     }

                     
                     
                     
                 
            {
                !rest.catchAll ? <Footer /> : null
            }


            </>
        )
    

}


