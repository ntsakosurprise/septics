
import React, {Component} from 'react' 
import {BrowserRouter as Router,Link} from 'react-router-dom'


// import Jobs from './jobs/jobs'
// import Brand from './brand/brand'
// import Primary from './primary/primary'
// import Secondary from './secondary/secondary'



class PlatformCircles extends  Component{


    constructor(props){

        super(props)
        this.state = {
            styles: {
                figure:'',
                
            }
        }
    }

   

    render(){

        return(

            <figure className={this.props.ck.figure.styles.className}>

                    <small className={this.props.ck.small.styles.className} styles={this.props.ck.small.inline ? `${this.props.ck.small.inline}` :''}>
                        {this.props.ck.small.text}
                    </small>

                    {
                    this.props.ck.li 
                        ? <li className={this.props.ck.li.styles.className}></li>
                        : null
                    }
                    

            </figure>
            
        )
    }




}

export default PlatformCircles