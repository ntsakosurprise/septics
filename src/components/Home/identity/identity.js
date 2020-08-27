
import React,{Component} from 'react'
import What from './what/what' 
import Who from './who/who'
// import Post from './post/post'


class Employer extends Component{
    
    
    render(){

        return(

            <div className="grid-row">

                
                <div  className="mg-bottom-fd-x-hg">
                    <h2 className="font-fd-tn mg-bottom-fd-x-bg pd-left-fl-x-bt">Jobbri</h2>
                    <What />
                    <Who />
                  
                    <strong className="clearfix" />

                </div>
               
                

            </div>
        )
    }

}


export default Employer