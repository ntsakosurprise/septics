
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


 class Campaign extends Component{
    
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

        
            <section className="po__promo--action-camp bx-raised-1">

                <form>

                <section className="po__promo--action-camp-group">

                    <h2 className="po__promo--action-camp-head">Campaign Name</h2>
                    <FormControl 
                        
                        styles={{parent:'po__promo--action-camp-i',child:'po__promo--action-camp-i-input',error: ''}}
                        id = 'email'
                        controlData={this.state.form.email }
                        change={(control)=>this.updator(control)}
                    
                    />

                   

                
                

                

                </section>

                <section className="po__promo--action-camp-group">

                    
                    <h2 className="po__promo--action-camp-head">Campaign duration</h2>
                    <FormControl 
                        
                        styles={{parent:'po__promo--action-camp-i',child:'po__promo--action-camp-i-input',error: ''}}
                        id = 'password'
                        controlData={this.state.form.password }
                        change={(control)=>this.updator(control)}
                    
                    />

                
                

                

                </section>



                <section className="po__promo--action-camp-btn">
                <input className="po__promo--action-camp-submit" onClick={(e)=>this.submitForm(e)} type="submit" value="Continue" />
                </section>





                </form>

            
            </section>
        
        )
    }

}


export default withStyles(styles)(Campaign)