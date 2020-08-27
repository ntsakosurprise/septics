
import React, { Component } from 'react' 
import FormControl from './formcontrol.js'


 class Form extends Component{
    
    
    constructor(props){
    	
    	 super(props) 
    	 
    	  this.state = {
    	  	
    	  	  form : {
                    
                    
                    alertMail:{
                        
                        control: 'input',
                        value:'',
                        validation: {
                            isRequiredFormat:{
                              
                                specialCharacters: false,
                                isEmail: true,
                                isRequired: true,
                                
                            }
                        
                             
                        },
                        isValid: false,
                        isTouched: false,
                        isSuggest: false,
                        validationMessage: '',
                        validationStyles: {
                            position: 'bottom'
                        },
                        config: {
                            
                            name: "alertMail",
                            type: 'email',
                            placeholder: 'Enter your email'
                            
                        }
                       
                        
                    },
                    
                
            },
            
        
    	  	
    	  }
    	
    } 
    
    
    
    updator = (upControl)=>{
        
        console.log('THE UPDATE CONTROL')
        console.log(upControl) 
        const {state} = this
        let newForm ={...state.form} 
        let updateControl = {...newForm[upControl.id]}
        updateControl.value = upControl.e.target.value 
       


        // if(updateControl.isActive === false) updateControl.isActive = true

    
       
            if(!(updateControl.validation.isPlaceholder && updateControl.value.trim() === '')){

            
                if(upControl.blur){
                
                    let validData = this.controlValidate(updateControl) 
                    
                    updateControl.isValid = validData[0] 
                    updateControl.validationMessage = validData[1] 
              
                    

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
            let specialCharactersRegex = '[`!@#$%^&*()_+\-=\[\]]{};:"\\|<>\/?~]'
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
            if(isRequiredFormat.specialCharacters && containsSpecialCars === true ) return [false,`special characters are not allowed as ${validateControl.config.name}`]
            if(value.length < isRequiredFormat.minLetters ) return [false,`${validateControl.config.name} should be atleast ${isRequiredFormat.minLetters} letters long`]
            if(pieces.length < isRequiredFormat.minPieces ) return [false,`${validateControl.config.name} should be atleast ${isRequiredFormat.minPieces} words`] 
            if(pieces.length > isRequiredFormat.maxPieces ) return [false,`${validateControl.config.name} should be atmost ${isRequiredFormat.maxPieces} words`]
            if(isRequiredFormat.isEmail && emailRegex.test(value) !== true) return [false,`${validateControl.config.name} should be a valid email`]
        
                
        
        }

        
        return validData
        
    }


    submitForm = (e)=>{
                    
       e.preventDefault() 
       console.log('THE FORM IS SUBMITTED')
       
        
        
      
        let submittData = {} 
        let formIsValid = true 
        let {form} = this.state 
        const {props} = this 
        const {actions,closeModal} = props 
        // const {saveJobSearchParams} = actions 
        console.log('THE ALERTSEND FORM')
        console.log(props) 
        return closeModal()

    
        
        
        
        for(let k in form){
            
           
           

                if(form[k].validation && form[k].validation.isRequired){

                    if(form[k].isValid === false){

                
                        formIsValid = false 

                        // notify({message:'Filled form data must be valid',type: 'warn',className: 'notify-warn'})
                        break


                    }else{

                        submittData[k] = form[k].value
                    }

                }else if(form[k].value.trim() !== ''){

                    if(form[k].isValid === false){
                        formIsValid = false 
                        break
                    }else{

                        submittData[k] = form[k].value

                    }
                
                }
            
        
        
        } 

        console.log('THE SUBMIT CONTROL')
        console.log(submittData)

        if(!formIsValid) return 

        
            // closeModal(true)
              // saveJobSearchParams({
        //     keywords: submittData.jobKeyword,
        //     location: submittData.jobLocation,
        //     fetchJobs: true
        // })


    


        
        

    }

   
   
   
  
    render(){ 
    
    //   const {props,state,hideSuggestScreen,showSuggestScreen,searchLocations } = this 
    //   const {suggestions,locations} = props 
    //   const {showSuggest,showSuggestId,searchedLocations} = state 
    //   let  newLocations = [...locations] 
    //   let refinedLocations = searchedLocations.length >= 1 ? searchedLocations : newLocations.splice(0,4)
      
    
    return(

      
            <section className="alert__modalbody--form">

                <form className="form" autocomplete="off">

                <p className="alert__modalbody--form-i">

                       <FormControl 

                                    styles={{child:'bx-raised alert__modalbody--form-text',error: ''}}
                                    id = 'alertMail'
                                    controlData={this.state.form.alertMail}
                                    change={(control)=>this.updator(control)} 
                                   
                                   
                          />
                        
                    
            

                    
                </p>

              
                <strong className="clearfix" />
               


                <p className="alert__modalbody--form-submit">

                    <input onClick={(e)=>this.submitForm(e)} type="submit" className="cursor-pointer" value="Email me jobs"/>

                </p>


            </form>
        
    </section>
        
    )
    
    }

}


export default Form