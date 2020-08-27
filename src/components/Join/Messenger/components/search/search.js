
import React, {Component} from 'react' 
import {BrowserRouter as Router,Link} from 'react-router-dom'
import SearchForm from './searchform/searchform'






// import Jobs from './jobs/jobs'
// import Brand from './brand/brand'
// import Primary from './primary/primary'
// import Secondary from './secondary/secondary'



class Search extends  Component{


    constructor(props){

        super(props)
    }


    render(){

        return(

            <div>

                <SearchForm />
               
            </div>
        )
    }




}

export default Search