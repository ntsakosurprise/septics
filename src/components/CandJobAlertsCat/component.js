
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
import * as navigatorActions from '../ReduxFirstNavigator/actions' 
import ProgressBarCircular from '../ProgressBarCircular/component'
import Categories from './components/categories/categories'

 



class CandJobAlertsCat extends Component{


    constructor(props){

        super(props)
        this.state ={update: false}
    }

    componentDidMount(){

        console.log('The component did mount and now we have props')
        

        // const {listing} = this.props
        // const {search} = listing
        // console.log('THE SEARCH INFORMATION FROM THE REDUX STATE')
        // console.log(search)
        this.props.actions.fetchAlertCats(1)
       
        
    }

    
    render(){

         const {candJobAlertsCat,actions} = this.props
         const {alertCategories,isFetching} = candJobAlertsCat 
         if(isFetching) return  <article className="dashboard__candsettings"><ProgressBarCircular /></article>;


        // console.log('THE JOBS PROP')
        // console.log(listing)

        return(

            <article className="dashboard__candalertscat">
                
                <div>

                     <Categories alertCats={alertCategories} push={actions.push} setAlertsCategory={actions.setAlertsCategory} />

                   </div>
               
             </article>
        )
    }




}

const mapStateToProps = (state)=>{

    return{
        candJobAlertsCat:{
            ...state.candJobAlertsCat
        }
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions,...navigatorActions},dispatch)
    }
}

export default connect(mapStateToProps,mapDispachToProps)(CandJobAlertsCat)


