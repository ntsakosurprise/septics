import React, { Component } from 'react' 
import Checkbox from './checkbox/checkbox'






class Qualification extends Component{
    
    constructor(){
        super()

        this.state = {
            form : 'form'
        };
    }

    doLabel(list){


        let doneList = []

        list.map((i,p)=>{

            let checked = p === 0 ? true : false
            doneList.push({

                label: `${i.label}`,
                value: i.value,
                checked: checked
            })

        })

        return doneList

    }

    handleChecked(i){

        const {props} = this
        const {actions} = props 
        const {crudJobFilter} = actions 
        
        if(i.checked){
        	 
        	 crudJobFilter({
        	 	key: 'jqf',
        	 	value: i.value,
        	 	operation: 'add'
        	 })
        	
        }else{
        	
        	crudJobFilter({
        		key:'jqf',
        		value: i.value,
        		operation: 'remove'
        	})
        } 
        
        // console.log('THE VALUE OF FROM THE CHECKBOX SURPRISE')
        // console.log(i)
        // alert('the value of e',i.value)
    }


    
    render(){

        return(

           

           

            <section className="cat__filter pd-left-fl-xxx-tn hr-size-fl-xx-bg">
                
                <Checkbox list={this.doLabel(qualification)} help={false} legend={false} handle={(e)=>{this.handleChecked(e)}} />

             </section>
          
        )
    }

}


export default Qualification 

const qualification =[

   
    {label: 'Matriculation',value: 'matriculation'},
    {label: 'graduate',value: 'graduate'}
    
   
   
]