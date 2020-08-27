import React, { Component } from 'react' 
import Checkbox from './checkbox/checkbox'
import films from './films'






class Category extends Component{
    
    constructor(){
        super()

        this.state = {
            form : 'form'
        };
    }

    doLabel(list){


        // let doneList = []

       return list.map((i,p)=>{

            let checked = p === 0 ? true : false
            // doneList.push({

            //     label: `${i.category_name}  (${i.job_count})`,
            //     value: i.id,
            //     checked: checked
            // })

           return {

                label: `${i.category_name}  (${i.job_count})`,
                value: i.category_name,
                id: i.id,
                checked: checked
            }

        })

        // console.log('THE DONELIST CATEGORY::')
        // console.log(doneList)
        // return doneList

    }

    handleChecked(i){

        const {props} = this
        const {actions} = props 
        const {crudJobFilter} = actions 
        
        if(i.checked){
        	 
        	 crudJobFilter({
        	 	key: 'jcts',
        	 	value: i.value,
        	 	operation: 'add'
        	 })
        	
        }else{
        	
        	crudJobFilter({
        		key:'jcts',
        		value: i.value,
        		operation: 'remove'
        	})
        } 
        
        console.log('THE VALUE OF FROM THE CHECKBOX SURPRISE')
        console.log(i)
        alert('the value of e',i.value)
    }


    
    render(){

        const {data} = this.props

        console.log('THE CATEGORY FILTER PROPS')
        console.log(data)
        console.log(this.props) 

        if(data.length <= 0) return null

        return(

           

           

            <section className="cat__filter scrollHeight">
                
                <Checkbox list={this.doLabel(data)} help={false} legend={false} handle={(e)=>{this.handleChecked(e)}} />

             </section>
          
        )
    }

}


export default Category