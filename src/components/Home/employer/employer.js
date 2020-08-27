
import React,{Component} from 'react'
import Epane from './epane/epane' 
import Post from './post/post'


class Employer extends Component{
    
    
    render(){

        return(

            <div className="grid-row">

                <div  className="mg-bottom-fd-xx-hg">

                    <Epane />
                    <Post />
                    <strong className="clearfix" />

                </div>
               
                

            </div>
        )
    }

}


export default Employer