
import React, {Component} from 'react' 
import FormControl from '../formcontrol'
import ProgressBarLinear from '../progressbarlinear'
import { toast } from 'react-toastify';



class ServiceForm extends  Component{


    constructor(props){

        super(props)

        
        this.state = {
            form : {
                    
                    
                    username:{
                        
                        control: 'input',
                        value:'',
                        validation: {
                                isRequiredFormat:{
                                    minLetters: 2,
        
                                    maxPieces: 3,
                                    specialCharacters: true
                                },
                                isPlaceholder: true
                    
                        },
                        isValid: false,
                        isTouched: false,
                        validationMessage: '',
                        validationStyles: {
                            position: 'right'
                        },
                        config: {
                            
                            name: "username",
                            type: 'text',
                            placeholder: "Ntsako Surprise",
                            disabled: false
                            
                        }
                        
                    },
                   
                    email:{
                        
                        control: 'input',
                        value:'',
                        validation: {
                            isRequiredFormat:{
                                isRequired: true,
                                isEmail: true
                                
                            },
                    
                        },
                        isValid: false,
                        isTouched: false,
                        validationMessage: '',
                        validationStyles: {
                            position: 'bottom'
                        },
                        config: {
                            
                            name: "email",
                            type: 'text',
                            placeholder: 'surprise@turtrozz.co.za',
                            // disabled: false
                            
                        }
                        
                    },
                 
                  

                  
                
            },
            
        };
    }

    
    updator = (upControl)=>{
        
            console.log('THE UPDATE CONTROL')
            console.log(upControl)
            let newForm ={...this.state.form} 
            let updateControl = {...newForm[upControl.id]}
            updateControl.value = upControl.e.target.value 

        
            
            if(!(updateControl.validation.isPlaceholder && updateControl.value.trim() === '')){

                if(upControl.blur){
                
                    let validData = this.controlValidate(updateControl) 
                    
                    updateControl.isValid = validData[0] 
                    updateControl.validationMessage = validData[1]

                    if(!updateControl.isValid){

                        for(let k in newForm){ 


                            if(newForm[k].config.disabled === false && k.trim() !== upControl.id.trim()){
                                newForm[k].config.disabled = true
                            }
                        }
                    }else{

                        for(let k in newForm){ 

                            if(newForm[k].config.disabled === true){
                                newForm[k].config.disabled = false
                            }
                        }

                    }
                    
                }

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
                return validData
                
            }
            if(validateControl.validation.isRequiredFormat){
                
                let value =  validateControl.value.trim() 
                let specialCharactersRegex = '[`!@#$%^&*()_+\-=\[\]]{};:"\\|,.<>\/?~]'
                let charsArray = Array.from(specialCharactersRegex)
                    charsArray.push("'")
                let containsSpecialCars = charsArray.some((v)=>value.indexOf(v) > 0)
                let pieces = value.split(/\W+/) 
                let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                console.log('SPECIAL CHARACTER TEST')
                console.log(charsArray)
                console.log(containsSpecialCars)
                console.log(value)
                console.log(specialCharactersRegex)
                let isRequiredFormat =  validateControl.validation.isRequiredFormat 
                if(isRequiredFormat.specialCharacters && containsSpecialCars === true ) return [false,`special characters are not allowed as username`]
                if(isRequiredFormat.minLetters && (value.length < isRequiredFormat.minLetters) ) return [false,`${validateControl.config.name} should be atleast ${isRequiredFormat.minLetters} letters long`]
                if(isRequiredFormat.minPieces && (pieces.length < isRequiredFormat.minPieces) ) return [false,`${validateControl.config.name} should be atleast ${isRequiredFormat.minPieces} words`] 
                if(isRequiredFormat.maxPieces && (pieces.length > isRequiredFormat.maxPieces) ) return [false,`${validateControl.config.name} should be atmost ${isRequiredFormat.maxPieces} words`] 
                if(isRequiredFormat.isNumber && isNaN(value) ) return [false,`${validateControl.config.name} should be a number with no spaces`] 
                if(isRequiredFormat.isLen && (value.length !== isRequiredFormat.isLen) ) return [false,`${validateControl.config.name} should be a total of ${isRequiredFormat.isLen} numbers`] 
                if(isRequiredFormat.isEmail && emailRegex.test(value) !== true) return [false,`${validateControl.config.name} Should be a valid email`]
            
                    
            
            }
            
            return validData
        
    }

    
    submitForm = (e)=>{
                
            e.preventDefault() 

            
            
            const {actions} = this.props
            const {sendContactData} = actions 
            let submittData = {} 
            let formIsValid = true 
            let {form} = this.state 
            let {notify} = this
            
            
            
            for(let k in form){
                
                console.log('THE SUBMIT CONTROL')
                console.log(form[k])
                if(form[k].validation && form[k].validation.isRequiredFormat){

                    

                    if(form[k].isValid === false){

                
                        formIsValid = false 
    
                        notify({message:'Filled form data must be valid',type: 'warn',className: 'notify-warn'})
                        break
    
    
                    }else{
     
                        submittData[k] = form[k].value
                    
                    }

                }else{

                    if(form[k].value.trim() !== ''){

                        submittData[k] = form[k].value

                    }
                   

                }
              
            
            } 

            if(!formIsValid) return


        
            console.log(submittData)
            sendContactData(submittData)  
            
            
            

    }

    notify = (config) => {

        
            const {message} = config || ''
            const type = config.type || 'info'
            toast[type](message,
                {position: toast.POSITION.BOTTOM_LEFT,...config});
        
    }
        
    componentDidUpdate(){
        
                
                const {home,actions} = this.props 
                const {isActionSuccessful,isFetcing} = home
                const  {removeNotification} = actions 
            
              
                if(isActionSuccessful) {
                    this.notify({message:'Profile info successfully sent',type: 'success',className: 'notify-success'}) 
                    removeNotification()
                }

               
                
    }
    
    
   

    render(){

            // const {changePassword} = this.state 
          
            const {home} = this.props
            const {isFetching,isProgressBar} = home 
            
       

        return(

                    <section className="service__modal">

                        <form className="form service__modal--form-cont">
                            
                            <div className="service__modal--form-control">

                                

                                <label className="service__modal--form-label">Name</label>
                                <FormControl 
                            
                                    styles={{child:'service__modal--form-input',error: ''}}
                                    id = 'username'
                                    controlData={this.state.form.username}
                                    change={(control)=>this.updator(control)}
                                    
                                
                                />


                            </div> 

                            <div className="service__modal--form-control">

                                

                                <label className="service__modal--form-label">Phone Number</label>
                                <FormControl 
                            
                                    styles={{child:'service__modal--form-input',error: ''}}
                                    id = 'phone'
                                    controlData={this.state.form.phone}
                                    change={(control)=>this.updator(control)}
                                   
                                
                                />


                            </div> 

                            <div className="service__modal--form-control">

                                

                                <label className="service__modal--form-label">Email</label>
                                <FormControl 
                            
                                    styles={{child:'service__modal--form-input',error: ''}}
                                    id = 'email'
                                    controlData={this.state.form.email}
                                    change={(control)=>this.updator(control)}
                                    
                                
                                />


                            </div> 

                            <div className="service__modal--form-control">

                                

                                <label className="service__modal--form-label">Area/location</label>
                                <FormControl 
                            
                                    styles={{child:'service__modal--form-input',error: ''}}
                                    id = 'area'
                                    controlData={this.state.form.area}
                                    change={(control)=>this.updator(control)}
                                   
                                
                                />


                            </div> 


                            <div className="service__modal--form-control">

                                

                            <label className="service__modal--form-label">Message</label>
                            <FormControl 

                                styles={{child:'service__modal--form-textarea',error: ''}}
                                id = 'message'
                                controlData={this.state.form.message}
                                change={(control)=>this.updator(control)}
                               

                            />


                            </div>


                            <div className="service__modal--form-control">

                                <input type="submit" value="Send" onClick={(e)=>this.submitForm(e)} className="service__modal--form-submit" />
                                
                            </div> 

                            



                        
                            
                        </form>

                       
                        <div>

                            {
                                
                                // isProgressBar === true && isFetching === true
                                //     ?  <ProgressBarLinear />
                                //     : null
                            }
        
                        
                        </div>

                    </section>

                    
               

             
             
           
        )
    }




}

export default ServiceForm