
import React,{Component} from 'react'
import Jobseeker from './jobseeker/jobseeker' 
import Employer from './employer/employer' 
import Service from './service/service'


class Services extends Component{
    
    
    render(){

        return(

           

                
                <div  className="about__us">
                      <Service />
                     <Jobseeker />
                     <Employer />
                     
                </div>
               
                

           
        )
    }

}


export default Services