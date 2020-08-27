
import React,{Component} from 'react'
import SearchForm from './searchform/searchform' 


class Search extends Component{
    
    
    render(){

        return(

            <div  className="home__search pd-left-fl-x-bt">

                <SearchForm />
            </div>
        )
    }

}


export default Search