
import React, {Component} from 'react' 


import { bindActionCreators } from 'redux'
// import Brand from './brand/brand'
// import Primary from './primary/primary'




class History extends Component{


    constructor(props){

        super(props)
    }

    componentWillMount(){

        console.log('THE HEADER COMPONENT IS GOING TO MOUNT')
    }


    render(){

        return(

            <article className="grid-row pd-bottom-fd-xxx-sm">
                   <FledjaWork />
                   <Culture />
                   <Traits />
                   <Posts />
                  

            </article>
        )
    }




}

const mapDispachToProps = (state)=>{

    return{
        state:{
            ...state.history
        }
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions},dispatch)
    }
}

export default connect(mapStateToProps,mapDispachToProps)(History)