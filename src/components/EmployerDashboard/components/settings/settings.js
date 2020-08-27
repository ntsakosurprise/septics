
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions'



// import Jobs from './jobs/jobs'
// import Brand from './brand/brand'
// import Primary from './primary/primary'
// import Secondary from './secondary/secondary'



class Settings extends  Component{


    constructor(props){

        super(props)
    }

   

    render(){

        return(

            
                
                    <div className="grid-col-1">

                      I am the settings component
                        
                        
                    </div>


            
        )
    }




}

const mapStateToProps = (state) => {
    return {
        state: {
            ...state.accounts,
           
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // actions: bindActionCreators({ ...actions }, dispatch)
    }
}

export default connect()(Settings)