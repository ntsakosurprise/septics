
import React, { Component } from 'react' 
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

import FormControl from './formcontrol'



const styles = {
    root: {
     
   
      fontSize: 40,
     
      
    },
    iconhover:{
        '&:hover':{

            content: ""
        }
    }
  };


 class Join extends Component{
    
    constructor(){
        super()

        this.state = {
            form : {
                    
                    
                    email:{
                        
                        control: 'input',
                        value:'',
                        validation: {
                                isRequired: true,
                                isLength:{
                                    min: 3,
                                    max: 15
                                }
                    
                        },
                        isValid: false,
                        isTouched: false,
                        validationMessage: '',
                        config: {
                            
                            name: "email",
                            type: 'email',
                            placeholder: 'youremail@gmail.com',
                            
                        }
                        
                    },
                    password:{
                        
                        control: 'input',
                        value:'',
                        validation: {
                                isRequired: true,
                                isLength:{
                                    min: 3,
                                    max: 15
                                }
                    
                        },
                        isValid: false,
                        isTouched: false,
                        validationMessage: '',
                        config: {
                            
                            name: "password",
                            type: 'password',
                            placeholder: 'Enter password',
                            
                        }
                        
                    },

                  
                
            }
        };
    }


    updator = (upControl)=>{
    
        let newForm ={...this.state.form} 
        let updateControl = {...newForm[upControl.id]}
        updateControl.value = upControl.e.target.value 
        
        if(upControl.blur){
            
            let validData = this.controlValidate(updateControl) 
            
            updateControl.valid = validData[0] 
            updateControl.validationMessage = validData[1]
            
        }
        updateControl.touched = upControl.blur
        newForm[upControl.id] = updateControl
        
        this.setState({
            form: newForm
            
        })


    } 

    controlValidate = (validateControl)=>{
   	
        let validData = [true,''] 
    
     if(validateControl.validation.isRequired){ 
     
         let valid = validateControl.value.trim() !== ''
         let message = ''
         if(!valid){
             message = `${validateControl.config.name} is a required field `
         }
 
         validData = !valid ? [valid,message] : validData
         
     }
    
        return validData
    
}

    submitForm = (e)=>{
            
        e.preventDefault() 
        
        let submittData = {} 
        let formIsValid = true 
        
        
        
        for(let k in this.state.form){
            
            submittData[k] = this.state.form[k].value
        } 
        
        console.log('THE SIGN UP DATA')
        console.log(submittData)
        
        submittData.strategy = 'anzii'
        this.props.loginUser(submittData)
        
        

    }

   
  
    render(){
        return(

        
            <section className="po__promo--action-join bx-raised-1">

                <form>

                <section className="po__promo--action-join-group">

                    <h2 className="po__promo--action-join-head">Email</h2>
                    <FormControl 
                        
                        styles={{parent:'po__promo--action-join-i',child:'po__promo--action-join-i-input',error: ''}}
                        id = 'email'
                        controlData={this.state.form.email }
                        change={(control)=>this.updator(control)}
                    
                    />

                






                </section>

                <section className="po__promo--action-join-group">

                    
                    <h2 className="po__promo--action-join-head">Password</h2>
                    <FormControl 
                        
                        styles={{parent:'po__promo--action-join-i',child:'po__promo--action-join-i-input',error: ''}}
                        id = 'password'
                        controlData={this.state.form.password }
                        change={(control)=>this.updator(control)}
                    
                    />






                </section>


                <section className="mg-bottom-fd-xxx-tn">
                        <p>
                            <span className="po__promo--action-join-registered">Forgot password?</span>
                            <span className="po__promo--action-join-signin">Recover</span>
                        </p>
                </section>
                <section className="mg-bottom-fd-x-tn">
                        <p>
                            <span className="po__promo--action-join-registered">Not registered?</span>
                            <span className="po__promo--action-join-signin" onClick={(e)=>this.props.renderForm('signin',e)}>Register</span></p>
                    </section>
                <section className="po__promo--action-join-btn">

                    <input className="po__promo--action-join-submit" onClick={(e)=>this.submitForm(e)} type="submit" value="Sign in" />
                </section>





                </form>


            
            </section>
        
        )
    }

}


export default withStyles(styles)(Join)