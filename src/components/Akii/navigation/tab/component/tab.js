
import React,{Component} from 'react'
import {BrowserRouter,Link} from 'react-router-dom'
import Icon from '@material-ui/core/Icon';
import Contacts from '@material-ui/icons/People';
import { withStyles } from '@material-ui/core/styles'
import stylez from './styles'

const styles = {
    root: {
     
      color:"green",
      fontSize: 20,
      
    },
    iconhover:{
        '&:hover':{

            content: ""
        }
    }
  };



class TabNav extends Component{

       constructor(props){

            super(props)
            this.state = {

                styles:{

                    default: {
                        
                        ul: {className:"list list__hr"},
                        li: {className:"fg-light mg-right-fd-x-tn d-inline-block list__item list__item--marg-offset-bottom-small"},
                        a: {className: " d-inline-block link"}
                    }
                }
            }
       }

       componentWillMount(){

        console.log('THE TABBED NAVIGATION COMPONENT DATA') 
        console.log(this.props)
       }

       route(to,e){

        console.log('TAB THIS PROPS')
        console.log(this.props)
        e.preventDefault()
        this.props.actions.navigate(to)

       }

       renderList(){

          let se = this
          return(


                    <ul className={se.props.styles ? se.props.styles.className : se.state.styles.default.ul.className}>

                        <BrowserRouter>

                            {se.props.nav.items.map((v,i)=>{

                                return(

                                    <li className={v.styles ? v.styles.me ? v.styles.me.className :se.state.styles.default.li.className:se.state.styles.default.li.className} key={i}>

                                        <Link to={v.path} onClick={this.route.bind(this,v.path)}
                                        className={v.styles ? v.styles.child ? v.styles.child.add ? `${se.state.styles.default.a.className} ${v.styles.child.className}` : v.styles.child.className :se.state.styles.default.a.className:se.state.styles.default.a.className}>

                                            {
                                                typeof v.name === 'object' && v.name.extra
                                                     ? <div><span className="d-inline-block"><small className="mat-icon"><Icon><Contacts className={this.props.classes.root} /></Icon></small></span>
                                                     <span className="mg-left-fd-xxx-tn d-inline-block">{v.name.name}</span></div>
                                                     : v.name
                                            }
                                            

                                        </Link>
                                    </li>
                                )

                            })}
                           

                        </BrowserRouter>

                    </ul>
                        
                        
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


export default withStyles(styles)(TabNav)