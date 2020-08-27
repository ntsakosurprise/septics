
import React,{Component} from 'react'
import SearchBar from './searchbar/searchbar'
import Form from './form/form' 
import Common from './common/common'



class Search extends Component{
    
    
    render(){
        

        const {props} = this 
        const {actions,locations,suggestions,search} = props 
        
        return(

           

                
                <div  className="job__search">
                    
                     <SearchBar />
                     <Form actions={actions} search={search} suggestions={suggestions} locations={locations}  /> 
                     <Common actions={actions} />
                </div>
               
                

           
        )
    }

}


export default Search