
import React, {Component} from 'react' 

import Brand from './brand/brand'
import PlatFormNav from './platformnav/platformnav'
import CompanyNav from './companynav/nav'
import Fledja from './fledja/fledja'
import  links,{groupOne,groupTwo,companyLinks} from './links'




class Footer extends Component{


    constructor(props){

        super(props)
    }

    componentWillMount(){

        console.log('THE HEADER COMPONENT IS GOING TO MOUNT')
      
    }


    render(){

        return(

            <footer className="grid-row">

                
                   <div className="mixed grid-row pos-rel">

                       <div className="grid-col-9">

                           <div className="grid-row">
                               <div className="grid-row bx-shadow-dark pd-top-fd-md pd-bottom-fd-x-tn pd-left-fl-bt">

                                  
                                    <div className="grid-col-8 pd-bottom-fd-xx-bg">
                                        <section className="hr-size-fl-sm float-left mg-right-fl-bt">

                                            <PlatFormNav items={groupOne} />
                                    
                                        </section>

                                        <section className="hr-size-fl-sm  float-left">
                                        
                                            <PlatFormNav items={groupTwo} />
                                        </section>
                                        <strong className="clearfix" />

    

                                    </div>

                                    <section className="clearfix pd-top-fd-xxx-tn pos-rel left-offset-fl-tn hr-size-fl-x-lg">

                                            <CompanyNav items={companyLinks} />

                                    </section>

                                   

                                    
                                    


                               </div>
                           </div>
                       </div>

                       <Brand />
                       <strong className="clearfix"/>

                   </div>

                   <Fledja />
                   
               

            </footer>
        )
    }




}

export default Footer