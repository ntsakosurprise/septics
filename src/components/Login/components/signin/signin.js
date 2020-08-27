
import React,{Component} from 'react'
import FormControl from '../formcontrol'



class SigninForm extends Component{
    
    
    constructor(props) {
        super(props);
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

           

                
                <div  className="access__signin">

                    <form>

                        <section className="access__signin--group">

                            <FormControl 
                                
                                styles={{parent:'access__signin--i',child:'access__signin--i-input',error: ''}}
                                id = 'email'
                                controlData={this.state.form.email }
                                change={(control)=>this.updator(control)}
                            
                            />

                            <FormControl 
                                
                                styles={{parent:'access__signin--i',child:'access__signin--i-input',error: ''}}
                                id = 'password'
                                controlData={this.state.form.password }
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
                            <span className="access__signin--registered">Forgot password?</span>
                            <span className="access__signin--signin">Recover</span></p>
                    </section>

                    <section className="access__signin--btn">
                        <input className="access__signin--submit" onClick={(e)=>this.submitForm(e)} type="submit" value="Sign in" />
                    </section>



                    
                     
                    </form>
                    
                    
                </div>
               
                

           
        )
    }

}


export default SigninForm