


import React, {Component} from 'react' 

class Avatar extends  Component{


    render(){

        
        return(

            
                
                    <div className="hr-size-fl-xx-bg mg-bottom-fd-xx-sm">

                       <section className="mg-bottom-fd-tn">

                            <span className="card__avatar__fig" style={{width: 15+"rem",height: 15+"rem"}} >

                                <img style={{width: 15+"rem",height: 15+"rem"}} src={`img/users/250_7.jpg`} className="card__avatar__pik"  />

                            </span>
                        

                       </section>

                       <section className="pd-left-fd-xxx-tn">

                          
                            <h3 className="font-fd-xx-tn mg-left-fd-xxx-tn">Tsakani Toukie</h3>
                              
                       </section>
                      
                       
                    </div>


            
        )
    }




}



export default Avatar

