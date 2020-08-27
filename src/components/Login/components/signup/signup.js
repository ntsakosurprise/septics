
import React,{Component} from 'react'
import FormControl from '../formcontrol'




class SignupForm extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            form : {
                    
                    firstname:{
                        
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
                            
                            name: "firstname",
                            type: 'text',
                            placeholder: 'First name',
                            
                        }
                        
                    },
                    lastname:{
                        
                        
                        control: 'input',
                        validation: {
                            isRequired: true,
                            isLength:{
                                min: 5,
                                max: 15
                            }
                
                         },
                        isValid: false,
                        isTouched: false,
                        validationMessage:'',
                        config: {
                            
                                name: 'lastname',
                                type: 'text',
                                placeholder: 'Last name'
                            
                        }
                    },
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

                    confirmpassword:{
                        
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
                            
                            name: "confirmpassword",
                            type: 'password',
                            placeholder: 'Re-enter password',
                            
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

        console.log('THE VALIDATION CONTROL')
        console.log(validateControl)
    
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
        submittData.usertype = 'applicant'
        submittData.strategy = 'anzii'
        this.props.registerUser(submittData)
        
        

    }

      
    
    render(){

        return(

           

                
                <div  className="access__signup">

                    <form>

                        <section className="access__signup--group">

                            <FormControl 
                                
                                styles={{parent:'access__signup--i',child:'access__signup--i-input',error: ''}}
                                id = 'firstname'
                                controlData={this.state.form.firstname }
                                change={(control)=>this.updator(control)}
                            
                            />

                            <FormControl 
                                
                                styles={{parent:'access__signup--i',child:'access__signup--i-input',error: ''}}
                                id = 'lastname'
                                controlData={this.state.form.lastname }
                                change={(control)=>this.updator(control)}
                            
                            />

                            <FormControl 
                                
                                styles={{parent:'access__signup--i',child:'access__signup--i-input',error: ''}}
                                id = 'email'
                                controlData={this.state.form.email }
                                change={(control)=>this.updator(control)}
                            
                            />

                    </section>


                    <section className="access__signup--group">

                        <FormControl 
                                    
                            styles={{parent:'access__signup--i',child:'access__signup--i-input',error: ''}}
                            id = 'password'
                            controlData={this.state.form.password }
                            change={(control)=>this.updator(control)}
                        
                        />

                        <FormControl 
                                    
                            styles={{parent:'access__signup--i',child:'access__signup--i-input',error: ''}}
                            id = 'confirmpassword'
                            controlData={this.state.form.confirmpassword }
                            change={(control)=>this.updator(control)}
                        
                        />

                    {this.props.error 
                        ? <section className="access__signup--group">
                            {this.props.error}
                          </section> 
                        : null
                      }

                     

                    </section>
                    <section>
                        <p>
                            <span className="access__signup--registered">Already registered?</span>
                            <span className="access__signup--signin" onClick={(e)=>this.props.renderForm('signin',e)}>Sign in</span></p>
                    </section>

                    <section className="access__signup--btn">
                        <input className="access__signup--submit" onClick={(e)=>this.submitForm(e)} type="submit" value="Sign up" />
                    </section>



                    
                     
                    </form>
                    
                    
                </div>
               
                

           
        )
    }

}


export default SignupForm