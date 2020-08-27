import React, { Component } from 'react' 
import AutoComplete from './autocomplete/autocomplete'
import films from './films'





class Location extends Component{
    
    constructor(){
        super()

    }

    doLabel(list){


        let doneList = []

        list.map((i,p)=>{

            let checked = p === 0 ? true : false
            doneList.push({

                title: `${i.state_name}`,
                value: i.state_name
                //checked: checked
            })

        })

        return doneList

    }

    handleChecked(i){

        // console.log('THE VALUE OF FROM THE CHECKBOX SURPRISE') 
        // console.log(value.title)
        // alert(value.value) 

        const {props} = this
        const {actions} = props 
        const {crudJobFilter} = actions 
        
        if(i.value.trim() !== ''){
        	 
        	 crudJobFilter({
        	 	key: 'jl',
        	 	value: i.value,
        	 	operation: 'add'
        	 })
        	
        }else{
        	
        	crudJobFilter({
        		key:'jl',
        		value: i.value,
        		operation: 'remove'
        	})
        } 
    }


    
    render(){
    	
    	   const {data} = this.props 
    	   
    	    if(data.length <= 0) return null

        return(

           

           

            <section className="cat__filter">
                
                <AutoComplete  locations={this.doLabel(data)} id='Job location' handle={(e)=>{this.handleChecked(e)}}/>

             </section>
          
        )
    }

}


export default Location