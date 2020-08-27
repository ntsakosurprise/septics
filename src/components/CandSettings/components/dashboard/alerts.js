
import React, {Component} from 'react' 
import Icon from '@material-ui/core/Icon';
import Search from '@material-ui/icons/Search';
import Trash from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles'

import FormControl from './formcontrol'
import ProgressBarLinear from './progressbarlinear'
import { toast } from 'react-toastify';
import Tooltip from './tooltip'



const styles = {
    root: {
     
      color: '#cc3333',
      opacity: '.7',
      fontSize: 22,
      
    },
    iconhover:{
        '&:hover':{

            content: "",
            opacity: 1,

        }
    }
  };


class Alerts extends  Component{


    constructor(props){

        super(props)

        // const {compData} = this.props 
        // const {mainEmail= {},altEmail={}} = compData 
        // const mainAlertMail = mainEmail.alertEmail || '' 
        // const altAlertMail = altEmail.alertEmail || ''
        this.state = {
            form : {
                    
                    
                    mainMail:{
                        
                        control: 'input',
                        isActive: false,
                        value:'',
                        validation: {
                            isRequiredFormat:{
                                minLetters: 2,
                                minPieces: 2,
                                maxPieces: 3,
                                specialCharacters: false,
                                isEmail: true
                            },
                            isPlaceholder: true
                             
                        },
                        isValid: false,
                        isTouched: false,
                        validationMessage: '',
                        config: {
                            
                            name: "mainEmail",
                            type: 'email',
                            disabled: true
                            
                        }
                        
                    },
                    altMail:{
                        
                        control: 'input',
                        isActive: false,
                        value:'',
                        validation: {
                            isRequiredFormat:{
                                minLetters: 2,
                                minPieces: 2,
                                maxPieces: 3,
                                specialCharacters: false,
                                isEmail: true
                            },
                            isPlaceholder: true
                             
                        },
                        isValid: false,
                        isTouched: false,
                        validationMessage: '',
                        config: {
                            
                            name: "altMail",
                            type: 'email',
                           
                            
                        }
                        
                    },
                    newMail:{
                        
                        control: 'input',
                        isActive: false,
                        value:'',
                        validation: {

                            isRequiredFormat:{
                                isEmail: true
                            },
                        
                             
                        },
                        isValid: false,
                        isTouched: false,
                        validationMessage: '',
                        config: {
                            
                            name: "newMail",
                            type: 'email',
                            placeholder: 'altalertmail@mail'
                            
                            
                        }
                        
                    },
                    jobAlert:{
                        
                        control: 'input',
                        isActive: false,
                        value:'',
                        validation: {
                            isRequiredFormat:{
                                minLetters: 2,
                                minPieces: 1,
                                maxPieces: 4,
                                specialCharacters: false,
                              
                            },
                            
                             
                        },
                        isValid: false,
                        isTouched: false,
                        validationMessage: '',
                        config: {
                            
                            name: "jobAlert",
                            type: 'text',
                            placeholder: 'Accountant',
                            
                        }
                        
                    },
                   
                  
                
            },
            addAlertEmail: false,
            // showAlt: true,
            showToolTipMain: false,
            showToolTipAlt: false,
            notifMessage: ''

        };
    }

    
    updator = (upControl)=>{
        
        console.log('THE UPDATE CONTROL')
        console.log(upControl)
        let newForm ={...this.state.form} 
        let updateControl = {...newForm[upControl.id]}
        updateControl.value = upControl.e.target.value 


        if(updateControl.isActive === false) updateControl.isActive = true

    
        
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
            if(value.length < isRequiredFormat.minLetters ) return [false,`${validateControl.config.name} should be atleast ${isRequiredFormat.minLetters} letters long`]
            if(pieces.length < isRequiredFormat.minPieces ) return [false,`${validateControl.config.name} should be atleast ${isRequiredFormat.minPieces} words`] 
            if(pieces.length > isRequiredFormat.maxPieces ) return [false,`${validateControl.config.name} should be atmost ${isRequiredFormat.maxPieces} words`]
            if(isRequiredFormat.isEmail && emailRegex.test(value) !== true) return [false,`${validateControl.config.name} should be a valid email`]
        
                
        
        }

        
        return validData
        
    }

    showPasswordBox(e){

        e.preventDefault()
        const addAlertEmail = !this.state.addAlertEmail
        this.setState({...this.state,addAlertEmail:addAlertEmail })
    }

    submitForm = (e)=>{
                    
        e.preventDefault() 
        
        const {actions,compData} = this.props
        const {sendUserAlertSettingsUpdate,sendUserNewAlert} = actions 
        let submittData = {} 
        let formIsValid = true 
        let {form} = this.state 
        let {notify} = this
        
        
        
        for(let k in form){
            
            console.log('THE SUBMIT CONTROL')
            console.log(form[k])
            if(form[k].isActive === true){

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
        
        
        } 


        console.log('THE LENGTH OF THE SUBMITTED FORM DATA')
        console.log(submittData)
        if(Object.keys(submittData).length <= 0) formIsValid = false 
        if(!formIsValid) return 
        console.log('THE FORM IS VALID')

        if(submittData.newMail){

            this.setState({...this.state,notifMessage: 'New Alert email has been successfully added'},()=>{
                sendUserNewAlert({email: submittData.newMail},1,'saveAlertsSubscriptions','alerts')
            })
           

        }else{

            this.setState({...this.state,notifMessage: 'Alert email has been successfully updated'},()=>{
                if(submittData.mainMail){
                
                    submittData.email = submittData.mainMail 
                    submittData.alertMailID = compData.mainEmail.alertMailID
                }else{
                    submittData.email = submittData.altMail 
                    submittData.alertMailID = compData.altEmail.alertMailID
                }
                sendUserAlertSettingsUpdate(submittData,1,'updateAlertsSubscriptions','alerts') 
            })
            
            
        }
    
       
        
        

    }

    notify = (config) => {


        const {message} = config || ''
        const type = config.type || 'info'
        toast[type](message,
            {position: toast.POSITION.BOTTOM_LEFT,...config});

    }
    showTip (key) {

        this.setState({[key]: true})
    }
    hideTip (key) {
        this.setState({[key]: false})
    }

    removeAlertItem(item,e){

        e.preventDefault()
        console.log('THE REMOVE ITEM')
        console.log(item)
        const {compData,actions} = this.props 
        const updateItem = compData[item] || {}
        const  {unsubscribeFromAlerts} = actions 
        let message = item === 'all' ? 'You have successfully unsubscribed from all job alerts' : 'Email successfully unsubscribed from job alerts'
        let alertID = updateItem.alertMailID || 0

        this.setState({...this.state,notifMessage: message},()=>{

            unsubscribeFromAlerts({alertMailID: alertID},1,'deleteAlertsSubscriptions','alerts')
        })
       

    }

    componentDidUpdate(){

            console.log(this.props)
            const {isActionSuccessful,launcher,actions} = this.props 
            const  {removeNotification} = actions 
            const {notifMessage=''} = this.state
            console.log('THE COMPONENT DID UPDATE IN ALERTS::')
            console.log(isActionSuccessful)
            console.log(launcher)

            if(isActionSuccessful && launcher === 'alerts') {
               
                this.notify({message: notifMessage,type: 'success',className: 'notify-success'}) 
                removeNotification()
            }
            
    }



    render(){

            const {compData} = this.props 
            console.log('THE COMPS DATA')
            console.log(compData)
            if(Object.keys(compData).length === 0) return <div>Create Alerts</div>


            const {mainEmail= null,altEmail= null} = compData 
            const mainAlertMail =  mainEmail ? mainEmail.alertEmail : compData[Object.keys(compData)[0]].alertEmail 
            const altAlertMail = altEmail ?  altEmail.alertEmail : ''
            const showAlt = altEmail ? altEmail.alertEmail : false
            const { addAlertEmail,showToolTipMain,showToolTipAlt} = this.state 
            const {classes} = this.props 

           
       

        return(

                  

                    <form className="form">
                        
                        <section className="d-block mg-bottom-fd-md">

                            <div className="dashboard__candsettings--editpane-name">

                                

                                <label className="form__label dashboard__candsettings--editpane-label">Main Alert Email</label>
                                <FormControl 

                                    styles={{child:'form__input dashboard__candsettings--editpane-input  bd-none',error: ''}}
                                    id = 'mainMail'
                                    controlData={this.state.form.mainMail}
                                    change={(control)=>this.updator(control)} 
                                    placeHolder={mainAlertMail}

                                />
                                 



                            </div>

                           
                            <button onMouseOver={this.showTip.bind(this,'showToolTipMain')} onMouseLeave={this.hideTip.bind(this,'showToolTipMain')} onClick={this.removeAlertItem.bind(this,'mainEmail')} className="d-inline-block cursor-pointer bd-none bg-transparent pos-rel left-offset-fl-xx-tn">
                                <Icon><Trash className={`${classes.root} ${classes.iconhover}`} /></Icon>
                                {showToolTipMain ? <Tooltip message="Click to unscribe from alerts" position={'bottom'} active={true} /> : null }
                            </button>
                        



                        </section>
                       
                            {

                                showAlt && 
                                    <section className="d-block mg-bottom-fd-md">

                                        <div className="dashboard__candsettings--editpane-name">

                                            

                                            <label className="form__label dashboard__candsettings--editpane-label">Aleternative Alert Email</label>
                                            <FormControl 

                                                styles={{child:'form__input dashboard__candsettings--editpane-input  bd-none',error: ''}}
                                                id = 'altMail'
                                                controlData={this.state.form.altMail}
                                                change={(control)=>this.updator(control)}
                                                placeHolder={altAlertMail}

                                            />



                                        </div>

                                        <button onMouseOver={this.showTip.bind(this,'showToolTipAlt')} onMouseLeave={this.hideTip.bind(this,'showToolTipAlt')} onClick={this.removeAlertItem.bind(this,'altEmail')} className="d-inline-block cursor-pointer bd-none bg-transparent pos-rel left-offset-fl-xx-tn">
                                            <Icon><Trash className={`${classes.root} ${classes.iconhover}`} /></Icon>
                                            {showToolTipAlt ? <Tooltip message="Click to unscribe from alerts" position={'bottom'} active={true} /> : null }
                                        </button>
                          

                                    </section>
                            } 

                            {showAlt &&
                                
                                <section className="d-block">
                                    <button className="dashboard__candsettings--editpane-changepass" onClick={(e)=>{this.removeAlertItem('all',e)}}>Unsubscribe from all alerts</button>
                                </section>
                            }

                          {

                            !showAlt && 
                                <section>
                                    <div className="dashboard__candsettings--editpane-pass">
                                        <button className="dashboard__candsettings--editpane-changepass mg-bottom-fd-md" onClick={(e)=>{this.showPasswordBox(e)}}>+ Add another(optional)</button>

                                        {
                                            addAlertEmail && 
                                            
                                            <section>

                                                    <div className="dashboard__candsettings--editpane-pass-input">

                                                        <label className="form__label dashboard__candsettings--editpane-label">Alert Email</label>
                                                        <FormControl 
                                    
                                                            styles={{child:'form__input dashboard__candsettings--editpane-input  bd-none',error: ''}}
                                                            id = 'newMail'
                                                            controlData={this.state.form.newMail }
                                                            change={(control)=>this.updator(control)}
                                                        
                                                        />
                                                        
                                                    </div>

                                                    {/* <div className="dashboard__candsettings--editpane-pass-input">

                                                        <label className="form__label dashboard__candsettings--editpane-label">Alert Job</label>
                                                        <FormControl 
                                    
                                                            styles={{child:'form__input dashboard__candsettings--editpane-input  bd-none',error: ''}}
                                                            id = 'jobAlert'
                                                            controlData={this.state.form.jobAlert }
                                                            change={(control)=>this.updator(control)}
                                                        
                                                        />
                                                        
                                                    </div> */}

                                            </section>
                                        
                                        }
                                        </div>
                                    </section>
                                    
                            }

                        <div className="dashboard__candsettings--editpane-submit">

                            <input type="submit" onClick={(e)=>this.submitForm(e)} value="Update" className="dashboard__candsettings--editpane-submit-input" />
                            
                        </div>

                       
                        
                    </form>
               

             
             
           
        )
    }




}

export default withStyles(styles)(Alerts)