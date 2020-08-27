
import React, { Component } from 'react' 
import FormControl from './formcontrol.js'
import Suggestions from './suggestions'

 class Form extends Component{
    
    
    constructor(props){
    	
    	 super(props) 
    	 
    	  this.state = {
    	  	
    	  	  form : {
                    
                    
                    jobKeyword:{
                        
                        control: 'input',
                        value:'',
                        validation: {
                            isRequiredFormat:{
                              
                                specialCharacters: true,
                                
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
                            
                            name: "keyword",
                            type: 'text',
                            // placeholder: 'job title, keyword'
                            
                        }
                       
                        
                    },
                    jobLocation:{
                        
                        control: 'input',
                        value:'',
                        validation: {
                            isRequiredFormat:{
                               
                                specialCharacters: true,
                            },
                            
                             
                        },
                        isValid: false,
                        isTouched: false,
                        isSuggest: false,
                        validationMessage: '',
                        validationStyles: {
                            position: 'bottom'
                        },
                        config: {
                            
                            name: "location",
                            type: 'text',
                            placeholder: 'city,region,country'
                            
                        }
                        
                    }
                
            },
            showSuggest: false,
            showSuggestId: '',
            searchedLocations: [],
        
    	  	
    	  }
    	
    } 
    
    
    
    updator = (upControl)=>{
        
        console.log('THE UPDATE CONTROL')
        console.log(upControl)
        const {props,state} = this 
        const {actions} = props
        const {getTextSuggestions} = actions
        let newForm ={...state.form} 
        let updateControl = {...newForm[upControl.id]}
        updateControl.value = upControl.e.target.value 
        let getSuggestions = false


        // if(updateControl.isActive === false) updateControl.isActive = true

    
        if(!(updateControl.isSuggest)){
            if(!(updateControl.validation.isPlaceholder && updateControl.value.trim() === '')){

            
                if(upControl.blur){
                
                    let validData = this.controlValidate(updateControl) 
                    
                    updateControl.isValid = validData[0] 
                    updateControl.validationMessage = validData[1] 
                    if(updateControl.value.length >= 2) getSuggestions = true
                    

                }

            }
        }
    
        if(updateControl.isSuggest && updateControl.value.length >= 2) getSuggestions = true
        updateControl.touched = upControl.blur
        newForm[upControl.id] = updateControl
        
        if(!getSuggestions){
        	
        	this.setState({
            form: newForm
            
            })
        	
        	
        }else{
        	
        	
               
                this.setState({
                    form: newForm
                
                },()=>{
                    
                    
                    
                    if(upControl.id === 'jobLocation'){

                        this.searchLocations(updateControl.value)
  
                    }else{

                        //getTextSuggestions(updateControl.value)

                    }
                    
                })

            
        	
                
        }
        


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

        
        
      
        let submittData = {} 
        let formIsValid = true 
        let {form} = this.state 
        const {props} = this 
        const {actions} = props 
        const {saveJobSearchParams} = actions

    
        
        
        
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
        console.log(form)

        if(!formIsValid) return 

        saveJobSearchParams({
            jq: submittData.jobKeyword,
            jl: submittData.jobLocation,
            canSetHistory: true,
            fetchJobs: true
        })


        
        

    }

    showSuggestScreen(e,key){

        e.preventDefault() 

        
    
        // console.log('THE FORM SUGGESTIONS')
        // console.log(key)
        // console.log(e)
        const {state} = this 
        let newForm ={...state.form} 

        if(newForm[key].value.length >= 2) return
        newForm[key].isSuggest = true
        this.setState({...this.state,form: newForm,showSuggest: true,showSuggestId: key})

    }

    hideSuggestScreen(key,value=''){



       
        const {state} = this 
        let newForm ={...state.form} 
        newForm[key].isSuggest = false
        if(value.trim() !== ''){
            newForm[key].value = value 
            newForm[key].isValid = true
        }
      

        

        this.setState({
            ...state,
            form: newForm,
            showSuggest: false,
            showSuggestId: ''
            
            }) 
        


    }
    searchLocations(searchTerm){

        console.log('THE SEARCH LOCATIONS FUNCTION GETS A CALL WITH VALUE')
        console.log(searchTerm)
        const {props,state} = this 
        const {searchedLocations} = state 
        const {locations} = props 
        searchTerm = searchTerm.toLowerCase()

        let filteredList = locations.filter((l,i)=> l.state_name.toLowerCase().includes(searchTerm)
        )
        console.log('THE VALUE OF FILTERS')
        console.log(filteredList)
        this.setState({...state,searchedLocations: filteredList})

    }
   
   
  
    render(){ 
    
      const {props,state,hideSuggestScreen,showSuggestScreen,searchLocations } = this 
      const {suggestions,locations,search} = props 
      const {showSuggest,showSuggestId,searchedLocations} = state 
      let  newLocations = [...locations] 
      let refinedLocations = searchedLocations.length >= 1 ? searchedLocations : newLocations.splice(0,4) 
      let searchKeywords = ''
       search.jq ? searchKeywords = search.jq : searchKeywords = 'job title, keyword' 
       console.log('THE SEARCH KEYWORDS')
       console.log(searchKeywords)
      
    
    return(

      
            <section className="job__search--form">

                <form className="form pd-bottom-fd-lg " autocomplete="off">

                <p className="job__search--form-i">

                       <FormControl 

                                    styles={{child:'bx-raised job__search--form-text',error: ''}}
                                    id = 'jobKeyword'
                                    controlData={this.state.form.jobKeyword}
                                    change={(control)=>this.updator(control)} 
                                    click={showSuggestScreen.bind(this)} 
                                    placeHolder= {searchKeywords}
                                   
                                    
                                    

                          />
                        {showSuggest && suggestions && showSuggestId  === 'jobKeyword' ? <Suggestions list={suggestions} id="jobKeyword" hideScreen={hideSuggestScreen.bind(this)} /> : null}
                    
                      


                    
                </p>

                <p className="job__search--form-i"> 
                
                
                      <FormControl 

                                    styles={{child:'bx-raised job__search--form-text',error: ''}}
                                    id = 'jobLocation'
                                    controlData={this.state.form.jobLocation}
                                    change={(control)=>this.updator(control)} 
                                    click={showSuggestScreen.bind(this)} 
                                    
                                    

                          />
                     {showSuggest && refinedLocations && showSuggestId === 'jobLocation' ? <Suggestions list={refinedLocations} id="jobLocation" hideScreen={hideSuggestScreen.bind(this)} /> : null}

                   

                
                </p>

                {/* <p className="job__search--form-i">

                    <input type="text" className="bx-raised job__search--form-text" placeholder="category"/>

                
                </p> */}
                <strong className="clearfix" />
               


                <p className="job__search--form-submit">

                    <input onClick={(e)=>this.submitForm(e)} type="submit" className="cursor-pointer font-fd-xx-tn fg-light mg-top-fl-x-sm  d-inline-block pd-fd-bt bd-none" value="Search"/>

                </p>


            </form>
        
    </section>
        
    )
    
    }

}


export default Form