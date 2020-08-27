import React, { Component } from 'react' 
import Checkbox from './checkbox/checkbox'






class SalaryRange extends Component{
    
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
        	 	key: 'jsr',
        	 	value: i.value,
        	 	operation: 'add'
        	 })
        	
        }else{
        	
        	crudJobFilter({
        		key:'jsr',
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
                
                <Checkbox list={this.doLabel(ranges)} help={false} legend={false} handle={(e)=>{this.handleChecked(e)}} />

             </section>
          
        )
    }

}


export default SalaryRange 

const ranges =[

    {label: '2k-10k',value: '2k10k'},
    {label: '10k-20k',value: '10k20k'},
    {label: '30k-40k',value: '30k40k'},
    {label: '50k-60k',value: '50k60k'},
    {label: '60k +',value: '60k+'},
   
   
]