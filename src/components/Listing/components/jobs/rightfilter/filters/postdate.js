import React, { Component } from 'react' 
import Radio from './radio/radio'





class PostDate extends Component{
    
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

    handleChecked(e){

        // console.log('THE VALUE OF FROM THE CHECKBOX SURPRISE')
        // console.log(e.target.value)
        // alert(e.target.value) 
        const {props} = this
        const {actions} = props 
        const {crudJobFilter} = actions 
        const i = e.target.value
        
        if(i !== 0){
        	 
        	 crudJobFilter({
        	 	key: 'jdp',
        	 	value: i,
        	 	operation: 'add'
        	 })
        	
        }else{
        	
        	crudJobFilter({
        		key:'jdp',
        		value: i,
        		operation: 'remove'
        	})
        } 

        
    }


    
    render(){

        return(

           
            <section className="postdate__filter hr-size-fl-xx-bg pd-left-fl-xxx-tn">
                
                <Radio list={this.doLabel(dates)} legend={false} handle={(e)=>{this.handleChecked(e)}} />

             </section>
          
        )
    }


}


export default PostDate


const dates =[

    {label: 'All',value: 0},
    {label: 'Last hour',value: 1},
    {label: 'Last 7 days',value: 168},
    {label: 'Last 14 days',value: 336},
    {label: '30 days',value: 672}
   
]