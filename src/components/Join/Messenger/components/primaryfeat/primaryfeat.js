
import React, {Component} from 'react' 
import {BrowserRouter as Router,Link} from 'react-router-dom'
import FeatBox from './featbox'
import FeatureShow from './featureshow'
import primaryFeatures from '../features'




class PrimaryFeat extends  Component{


    constructor(props){

        super(props)
        this.state={

            showFeat: true,
            feat: null
        }
        this.handleChangeFeat = this.handleChangeFeat.bind(this)
    }

    componentWillMount(){

        console.log('THE MESSENGER COMPONENT')
        console.log(primaryFeatures)
    }

    handleChangeFeat(data){

        // e.preventDefault()
        console.log('THE STATE IS ABOUT TO CHANGE INSIDE FEAT')
        this.setState({...this.state,feat: data},()=>{

            console.log('THE FEAT VALUE NOW IS: ')
            console.log(this.state.feat)
        })
    }

   

    render(){

        console.log('THE PRIMARY FEATURES')
        console.log(primaryFeatures.primaryFeatures)

        return(

            
                
                    <div className="grid-col-4">

                        <div className="grid-row">

                            <section className="grid-col-2">

                                {
                                    primaryFeatures.primaryFeatures.map((f,i)=>{

                                            return(
                                                <FeatBox  feature={f} handle ={this.handleChangeFeat} key={i}></FeatBox>
                                            )

                                    })
                                }

                            </section>
                            <section className="grid-col-10 mg-left-fl-x-bt">

                                <FeatureShow feat={this.state.feat}/>

                            </section>
                           

                       </div>
                     

                       
                        
                        
                    </div>


            
        )
    }




}

export default PrimaryFeat