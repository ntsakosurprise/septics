
import React,{Component} from 'react'
import {Tab,Pills} from '../../Akii/navigation/index'




class Navigation extends Component{

    constructor(props){

        super(props)
    }

    componentWillMount(){

        console.log('THE PROPS PASSED TO NAVIAGION COMPONENT')
        console.log(this.props)
    }

    handleNavigation(){

        if(this.props.nav.type === 'tab'){

            return(
                <Tab 
                
                  nav= {this.props.nav.nav}
                  styles= {this.props.nav.styles ? this.props.nav.styles: null}
                  actions= {this.props.nav.actions}
                  
                />
            )
        }else if(this.props.nav.type === 'pills'){

           return( <Pills 
                
                    nav= {this.props.nav.nav}
                    styles= {this.props.nav.styles ? this.props.nav.styles: null}
                  
            />
           )
        }
    }



     render(){

        return(

            <div>

                {this.handleNavigation()}

            </div>

        )
     }

}

export default Navigation