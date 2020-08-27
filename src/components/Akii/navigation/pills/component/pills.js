
import React,{Component} from 'react'
import {BrowserRouter,Link} from 'react-router-dom'
import styles from './styles'



class PillsNav extends Component{

    

       constructor(props){

            super(props)
            this.state = {

                styles:{

                    default: {
                        
                        ul: {className:"list list__hr"},
                        li: {className:"fg-light mg-right-fd-md d-inline-block list__item list__item--marg-offthist-bottom-small"},
                        a: {className: "font-fd-xx-tn  d-inline-block link"}
                    }
                }
            }
       }

       componentWillMount(){

        console.log('THE TABBED NAVIGATION COMPONENT DATA') 
        console.log(this.props)
       }

       style(v){

        return v.styles 
                    ? v.styles.child 
                        ? v.styles.child.add 
                            ? `pills__pill pills__pill-size-fl-xx-bg ${v.styles.child.className}`
                            : v.styles.child.className
                        : v.styles.child.className
                    : "pills__pill pills__pill-size-fl-xx-bg"
       }

       renderList(){

          
          return(


                    <nav className="pills">

                 

                            {this.props.nav.items.map((v,i)=>{

                                return(

                                 
                                   
                                        <Link to={v.path} key={i}  className={this.style(v)}>

                                            <span className="pills__item">
                                                {v.name}
                                            </span>
                                            

                                        </Link>
                                    
                                )

                            })}
                           

                    

                    </nav>
                        
                        
            )
                        
           

       


       }



        render(){

            return(

                this.props.nav.items 
                    ?  <nav className={this.props.nav.styles ? this.props.nav.styles: ""}>
                            {this.renderList()}
                       </nav>
                    : null
                
            )
        }

} 


export default PillsNav