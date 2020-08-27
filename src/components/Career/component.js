
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'



import FledjaWork from './components/fledjawork/fledjawork'
import Culture from './components/culture/culture'
import Traits from './components/traits/traits'
import Posts from './components/posts/posts'


class Career extends Component{


    constructor(props){

        super(props)
    }

    componentWillMount(){

        console.log('THE Careers COMPONENT IS GOING TO MOUNT')
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

const mapStateToProps = (state)=>{

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

export default connect(mapStateToProps,mapDispachToProps)(Career)