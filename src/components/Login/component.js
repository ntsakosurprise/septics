
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
import * as navigatorActions from '../Navigator/actions'
import * as authActions from '../Auth/actions'


import AccessHeader from './components/accessheader/accessheader'
import SignupForm from './components/signup/signup'
import SigninForm from './components/signin/signin'



class Login extends Component{


    constructor(props){

        super(props)
        this.state = {

            currentForm: 'signup'
            

        }
        
    }


    componentDidUpdate(){

        console.log('THE LOGIN COMPONENT WILL MOUNT AT SOME POINT')
        console.log('THE VALUE OF AUTH IN DID UPDATE')
        console.log(this.props.isAuth)

         if(this.props.login.auth.isAuth){

            this.props.actions.navigate('/dashboard')
         }
       
         
        

    }



    renderForm (form,e){

        e.preventDefault()
        this.setState({
            currentForm: form
        })
    }

    registerUser = (user)=>{

        console.log('THIS  LOGIN COMPONENT')
        console.log(this)
        this.props.actions.registerUser(user)
    }

    loginUser = (user)=>{

        console.log('THIS  LOGIN COMPONENT')
        console.log(this)
        this.props.actions.loginUser(user)
    }


    render(){

        console.log('THE RERENDER OF LOGIN')
        console.log(this.props.login)
        console.log(this.props.login.auth)

        return(

            <article className="access">
               
               <AccessHeader />
               <section className="access__body bx-raised-1">
                  
                <div className="access__body--options">
                    <span className={this.state.currentForm === 'signup' ? 'access__body--options-active ' : 'access__body--options-disabled' } onClick={(e)=>this.renderForm('signup',e)}  >Sign up</span>
                    <span className={this.state.currentForm === 'signin' ? 'access__body--options-active access__body--options-offset' : 'access__body--options-disabled ' } onClick={(e)=>this.renderForm('signin',e)} >Sign in</span>
                </div>

                <div className="access__body--access">

                    {this.state.currentForm === 'signin' ? <SigninForm loginUser={this.loginUser} error={this.props.message} />  : <SignupForm error={this.props.message} registerUser={this.registerUser} renderForm={this.renderForm.bind(this)} /> }
                    
                    

                </div>
               
               </section>
              

            </article>
        )
    }




}

const mapStateToProps = (state)=>{

    
    


    return {

        login: {
            ...state.auth
        }
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions,...navigatorActions,...authActions},dispatch)
    }
}

export default connect(mapStateToProps,mapDispachToProps)(Login)