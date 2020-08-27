
import React, {Component} from 'react' 
import FormControl from './formcontrol'
import ProgressBarLinear from './progressbarlinear'
import { toast } from 'react-toastify';



class InfoUpdate extends  Component{


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
                                    minPieces: 2,
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
                            disabled: false
                            
                        }
                        
                    },
                    password:{
                        
                        control: 'input',
                        value:'',
                        validation: {
                            isRequiredFormat:{
                                minLetters: 8
                                // isMatch: {
                                //     matchID: 'newpassword'
                                // }
                            },
                    
                        },
                        isValid: true,
                        isTouched: false,
                        validationMessage: '',
                        validationStyles: {
                            position: 'bottom'
                        },
                        config: {
                            
                            name: "password",
                            type: 'password',
                            placeholder: '....',
                            disabled: false
                            
                        }
                        
                    },
                    // newpassword:{
                        
                    //     control: 'input',
                    //     value:'',
                    //     validation: {
                    //         isRequiredFormat:{
                    //             minLetters: 2,
                    //             minPieces: 2,
                    //             maxPieces: 3,
                    //             specialCharacters: true
                    //         }, 
                                
                    
                    //     },
                    //     isValid: true,
                    //     isTouched: false,
                    //     validationMessage: '',
                    //     validationStyles: {
                    //         position: 'bottom'
                    //     },
                    //     config: {
                            
                    //         name: "newpassword",
                    //         type: 'password',
                    //         placeholder: '......',
                    //         disabled: false
                            
                    //     }
                        
                    // }

                  
                
            },
            changePassword: false
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
                console.log('SPECIAL CHARACTER TEST')
                console.log(charsArray)
                console.log(containsSpecialCars)
                console.log(value)
                console.log(specialCharactersRegex)
                let isRequiredFormat =  validateControl.validation.isRequiredFormat 
                if(isRequiredFormat.specialCharacters && containsSpecialCars === true ) return [false,`special characters are not allowed as username`]
                if(value.length < isRequiredFormat.minLetters ) return [false,`${validateControl.config.name} should be atleast ${isRequiredFormat.minLetters} letters long`]
                if(pieces.length < isRequiredFormat.minPieces ) return [false,`${validateControl.config.name} should be atleast ${isRequiredFormat.minPieces} words`] 
                if(pieces.length > isRequiredFormat.maxPieces ) return [false,`${validateControl.config.name} should be atmost ${isRequiredFormat.maxPieces} words`]
            
                    
            
            }
            
            return validData
        
    }

    showPasswordBox(e){

        e.preventDefault()
        const changePassword = !this.state.changePassword
        this.setState({...this.state,changePassword:changePassword })
    }

    submitForm = (e)=>{
                
            e.preventDefault() 
            
            const {actions} = this.props
            const {sendUserProfileUpdate,unsetIsProfile} = actions 
            let submittData = {} 
            let formIsValid = true 
            let {form} = this.state 
            let {notify} = this
            
            
            
            for(let k in form){
                
                console.log('THE SUBMIT CONTROL')
                console.log(form[k])
                if(form[k].validation && form[k].validation.isRequired){

                    if(form[k].isValid === false){

                
                        formIsValid = false 
    
                        notify({message:'Filled form data must be valid',type: 'warn',className: 'notify-warn'})
                        break
    
    
                    }else{
    
                        if(k !== 'password' || form[k].value.trim() !== '' ){
    
                           
                            submittData[k] = form[k].value
                        }
                        
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

            if(!formIsValid) return


            if(submittData.username){

                console.log('THE name')
                console.log(submittData.username)
                let names = submittData.username.split(' ') 
                console.log(names)

                submittData.fullName = {firstName: names[0],lastName: names[1]} 
                delete submittData.username 
                console.log('THE FORM DATA TO BE SUMBITTED')
                console.log(submittData)
              
                 
            }

            if(submittData.newpassword){

                submittData['password'] = submittData.newpassword 
                delete submittData.newpassword

            }

            
            
            
            console.log(submittData)
           
            // console.log('THE SIGN UP DATA')
            // console.log(submittData)
            
            // submittData.strategy = 'anzii'
            sendUserProfileUpdate(submittData,1,'infoUpdate') 
            // unsetIsProfile()
            
            

    }

    notify = (config) => {

        
            const {message} = config || ''
            const type = config.type || 'info'
            toast[type](message,
                {position: toast.POSITION.BOTTOM_LEFT,...config});
        
    }
        
    componentDidUpdate(){
        
                console.log()
                const {isActionSuccessful,launcher,isFetcing,actions} = this.props 
                const  {removeNotification} = actions 
                console.log('THE LAUNCHER INFOUPDATE::')
                console.log(launcher)
        
                if(isActionSuccessful && launcher === 'infoUpdate') {
                    this.notify({message:'Profile info successfully updated',type: 'success',className: 'notify-success'}) 
                    removeNotification()
                }

               
                
    }
    
   

    render(){

            const {changePassword} = this.state 
            const {firstName,lastName,isFetching,isProgressBar} = this.props 
            let name = firstName ? `${firstName} ${lastName}` : ''
            console.log('PROPS IN INFOUPDATE')
            console.log(this.props)
          
            
       

        return(

                    <>

                    <form className="form">
                        
                        <div className="dashboard__candsettings--editpane-name">

                            

                            <label className="form__label dashboard__candsettings--editpane-label">Full Name</label>
                            <FormControl 
                        
                                styles={{child:'form__input dashboard__candsettings--editpane-input  bd-none',error: ''}}
                                id = 'username'
                                controlData={this.state.form.username}
                                change={(control)=>this.updator(control)}
                                placeHolder={name}
                            
                            />



                        </div>

                        <div className="dashboard__candsettings--editpane-pass">
                            <button className="dashboard__candsettings--editpane-changepass" onClick={(e)=>{this.showPasswordBox(e)}}>Change password</button>

                             {
                                changePassword && 
                                
                                  <section>

                                        <div className="dashboard__candsettings--editpane-pass-input">

                                            <label className="form__label dashboard__candsettings--editpane-label">New password</label>
                                            <FormControl 
                        
                                                styles={{child:'form__input dashboard__candsettings--editpane-input  bd-none',error: ''}}
                                                id = 'password'
                                                controlData={this.state.form.password }
                                                change={(control)=>this.updator(control)} 
                                              
                                            
                                            />
                                            
                                        </div>

                                        {/* <div className="dashboard__candsettings--editpane-pass-input">

                                            <label className="form__label dashboard__candsettings--editpane-label">New Password</label>
                                            <FormControl 
                        
                                                styles={{child:'form__input dashboard__candsettings--editpane-input  bd-none',error: ''}}
                                                id = 'newpassword'
                                                controlData={this.state.form.newpassword }
                                                change={(control)=>this.updator(control)}
                                            
                                            />
                                            
                                        </div> */}

                                </section>
                            
                            }
                            </div>

                        <div className="dashboard__candsettings--editpane-submit">

                            <input type="submit" value="Update" onClick={(e)=>this.submitForm(e)} className="dashboard__candsettings--editpane-submit-input" />
                            
                        </div>



                       
                        
                    </form>
                    <div>

                        {
                            
                            isProgressBar === true && isFetching === true
                                ?  <ProgressBarLinear />
                                : null
                        }
    
                    
                    </div>

                    </>

                    
               

             
             
           
        )
    }




}

export default InfoUpdate 