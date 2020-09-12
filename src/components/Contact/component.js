
import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
import * as navigatorActions from '../ReduxFirstNavigator/actions' 
import ContactForm from './contactform/contactform'
import Touch from './touch/touch' 
import ServiceReq from './servicereq/servicereq' 
import ProgressBarLinear from './progressbarlinear'
// import Gmap from './gmap/gmap'




class Contact extends Component{


    constructor(props){

        super(props)
    }

   
   

  componentDidUpdate(){

    const {contact} = this.props
    const {isFetching,isProgressBar} = contact 

    if(isProgressBar === true && isFetching === true){

      document.body.style.overflow = 'hidden'
      document.body.style.pointerEvents ='none'
      document.body.style.opacity = '0.4'

    }else{

      document.body.style.overflow = 'visible'
      document.body.style.pointerEvents ='all'
      document.body.style.opacity = '1'
    }
   
  }


    render(){

      const {actions,contact} = this.props 
      const {isFetching,isProgressBar} = contact 
     


        const streetViewConfig = {
            type: 'street',
            mapOptions: {
              position: {
                lat: 41.8916, 
                lng: -87.6079
              },
              pov: {
                heading: 200,
                pitch: 0
              },
              scrollwheel: false
            }
          };
          
          const mapViewConfig = {
            mapOptions: {
              center: {
                lat: 41.8916, 
                lng: -87.6079,
              },
              zoom: 13,
              streetViewControl: true, 
              scrollwheel: true 
            },
            type: 'map',
            allowClusters: false,
            locations: [
              { 
                lat: 41.8789, 
                lng: -87.6359, 
                infoWindowContent: { 
                  title: 'Willis Tower', 
                  text: 'The new Willis Tower will provide one of the most compelling and dynamic work, dining, shopping and entertainment environments available in any city.', 
                  imgUrl: 'http://static.thousandwonders.net/Willis.Tower.original.1014.jpg'
                } 
              },
              { 
                lat: 41.8916, 
                lng: -87.6079,
                infoWindowContent: { 
                  title: 'Navy Pier', 
                  text: 'Navy Pier is a 3,300-foot-long (1,010 m) pier on the Chicago shoreline of Lake Michigan. It is located in the Streeterville neighborhood of the Near North Side',
                  imgUrl: 'http://www.ncmahq.org/images/default-source/default-album/ev/wc17/wc17_navypier.jpg?sfvrsn=0'
                } 
              },
              { 
                lat: 41.8988, 
                lng: -87.6229,
                infoWindowContent: { 
                  title: 'John Hancock Center', 
                  text: 'The John Hancock Center is a 100-story, 1,128-foot supertall skyscraper at 875 North Michigan Avenue, Chicago, Illinois.',
                  imgUrl: 'https://aptamigo-production.s3.amazonaws.com/uploads/property/profile_photo/1032/a486a78b-54ca-4961-a403-5ea5c05a10be.jpg'
                } 
              }
            ]
          };
          

        return(

            <article className="contact">
                 
                 <Touch />
                 <ContactForm actions={actions} contact={contact}  />
                 <strong className="clearfix" /> 
                 <ServiceReq  />
                 {/* <section className="site__progressbar">
                   <div className="site__progressbar-container">

                    <ProgressBarLinear />

                   </div>
                   
                 </section> */}
             
                 {
                                
                                // isProgressBar === true && isFetching === true
                                //     ? <section lassName="site__progressbar">

                                //         <div className="site__progressbar-container">

                                //             <ProgressBarLinear />

                                //         </div>


                                //     </section>
                                //     : null
                            }

                 {/* <div className="page">
      
                    <div className="flexbox">
                        <div className="map-container u-vr">
                        <Gmap config={ mapViewConfig } />
                        </div>
                        {/* <div className="map-container">
                        <Gmap config={ streetViewConfig } />
                        </div>}
                    </div>

                </div> */}

            </article>
        )
    }




}


const mapStateToProps = (state)=>{

  const {contact} = state

  return{
     contact
  }
}

const mapDispachToProps = (dispatch)=>{

  return {

      actions: bindActionCreators({...actions,...navigatorActions},dispatch)
  }
}


export default connect(mapStateToProps,mapDispachToProps)(Contact)