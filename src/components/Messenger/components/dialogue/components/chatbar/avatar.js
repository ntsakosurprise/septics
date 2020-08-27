


import React, {Component} from 'react' 

class Avatar extends  Component{


    render(){

        
        return(

            
                
                    <div className="grid-col-8">

                       <section className="float-left">

                       <span className="card__avatar__fig" >

                         <img src={`img/users/250_7.jpg`} className="card__avatar__pik" />

                        </span>
                        

                       </section>

                       <section className="float-left pd-left-fl-bt hr-size-fl-md">

                            <div className="hr-size-fl-bg">

                                <section className="card__text__info__title pd-top-fd-bt">
                                    <h3>Tsakani Toukie</h3>
                                </section>
                                <section className="card__text__info__message">
                                    <p className="fg-dk-green">Online</p>
                                </section>

                            </div>
                       </section>
                       <strong className="clearfix" />
                       
                    </div>


            
        )
    }




}



export default Avatar

