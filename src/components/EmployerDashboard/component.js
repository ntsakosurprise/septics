
import React, {Component} from 'react' 
import PrimaryFeat from './components/primaryfeat/primaryfeat'
import Dialogue from './components/dialogue/dialogue'
import Detailpane from './components/detailpane/detailpane'
// import FeatureShow from './components/primaryfeat/featureshow'





class Messenger extends Component{


    constructor(props){

        super(props)
    }

    componentWillMount(){

        console.log('THE HEADER COMPONENT IS GOING TO MOUNT')
    }


    render(){

        return(

            <article className="grid-row pd-bottom-fd-xxx-sm">
                  
                  <PrimaryFeat />
                  <Dialogue />
                  <Detailpane />
            </article>
        )
    }




}

export default Messenger