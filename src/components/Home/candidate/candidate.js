
import React,{Component} from 'react'
import Job from './job/job'
import Design from './design/design' 
import Media from './media/media'
import Made from './made/made'


class Candidate extends Component{
    
    
    render(){

        return(

            <div className="grid-row">

                <Job />
                <Design />
                <Media />
             
                

            </div>
        )
    }

}


export default Candidate