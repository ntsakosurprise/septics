
import React, {Component} from 'react' 


import { bindActionCreators } from 'redux'
// import Brand from './brand/brand'
// import Primary from './primary/primary'




class Employees extends Component{


    constructor(props){

        super(props)
    }

    componentWillMount(){

        console.log('THE HEADER COMPONENT IS GOING TO MOUNT')
    }


    render(){

        return(

            <article className="grid-row pd-bottom-fd-xxx-sm">
                  
                  I AM THE EMPLOYEES PAGE
                  

            </article>
        )
    }




}

const mapDispachToProps = (state)=>{

    return{
        state:{
            ...state.setting
        }
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions},dispatch)
    }
}

export default connect(mapStateToProps,mapDispachToProps)(Employees)