import React, { Component } from 'react' 
import filters from './filters/filters'
import Accordion from './accordion'







class Filter extends Component{
    
    constructor(props){

        super(props)

    }

    


    render(){


        const {filtersData,actions} = this.props
        console.log('FiltersData')
        console.log(filtersData)
        return(

           

            <section>

               {filters.map((f,i)=>{

                   console.log('CURRENT FILTER')
                   console.log(f)
                   console.log(filtersData[`${f.data}`])

                  let data =  f.data ? filtersData[f.data] ? filtersData[f.data] : '' :''
                  console.log(data)

                 if(f.component){

                    return(<Accordion data={data} name={f.name} actions={actions} component={f.component} key={i} />)


                 }else{
                     return null
                 }
                
               })} 
            
           </section>
        )
    }

}


export default Filter