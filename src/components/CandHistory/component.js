
import React, {Component} from 'react' 
import SearchHistory from './components/dashboard/searchhistory'
import jobs from './jobs'





class CandHistory extends Component{


    constructor(props){

        super(props)
    }

    componentWillMount(){

        console.log('THE HEADER COMPONENT IS GOING TO MOUNT')
    }


    render(){

        return(

            <article className="dashboard__savedjobs">
                  
                  <div>

                     <SearchHistory jobs={jobs} />

                  </div>
                  
                 
            </article>
        )
    }




}

export default CandHistory