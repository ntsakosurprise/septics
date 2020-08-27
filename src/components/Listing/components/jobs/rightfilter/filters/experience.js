import React, { Component } from 'react' 
import Checkbox from './checkbox/checkbox'






class Experience extends Component{
    
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
        	 	key: 'je',
        	 	value: i.value,
        	 	operation: 'add'
        	 })
        	
        }else{
        	
        	crudJobFilter({
        		key:'je',
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
                
                <Checkbox list={this.doLabel(experience)} help={false} legend={false} handle={(e)=>{this.handleChecked(e)}} />

             </section>
          
        )
    }

}


export default Experience 

const experience =[

   
    {label: '1y-2y',value: '1y2y'},
    {label: '3y-4y',value: '3y4y'},
    {label: '5y-6y',value: '5y6y'},
    {label: '6y +',value: '6y+'}
   
   
]