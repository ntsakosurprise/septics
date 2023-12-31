
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


 class NotifyLaunch extends Component{
    
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
                            placeholder: 'notifylaunch@gmail.com',
                            
                        }
                        
                    }
                   
                  
                
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

        
            <section className="">

                <form className="footer__launch--notify-form">

                <section className="footer__launch--notify-form-mail">

                    <FormControl 
                        
                        styles={{parent:'po__promo--action-join-i',child:'po__promo--action-join-i-input footer__launch-notify-form-input',error: ''}}
                        id = 'email'
                        controlData={this.state.form.email }
                        change={(control)=>this.updator(control)}
                    
                    />

                </section>

                <section className="po__promo--action-join-btn footer__launch--notify-form-notify">

                    <input className="po__promo--action-join-submit" onClick={(e)=>this.submitForm(e)} type="submit" value="Notify me" />
                </section>

                <strong className="clearfix" />


                </form>


            
            </section>
        
        )
    }

}


export default withStyles(styles)(NotifyLaunch)