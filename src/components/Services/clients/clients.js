
import React, {Component} from 'react' 


class Clients extends  Component{


    constructor(props){

        super(props)

        
     
    }


    
   

    render(){

           
       

        return(

                    <section className="services__clients">

                            <h4 className="services__clients--title">
                                <span className="services__clients-title-primary">Full Tank Signs</span> 
                               
                            </h4>

                            

                        

                       <section className="services__clients--sign" 
                       data-aos="fade-down"
                       data-aos-delay="500"
                       data-aos-duration="9000"
                       data-aos-easing="ease-in-out-cubic">
                            

                
                                <h4 className="services__clients--sign-pos">1</h4> 
                                <h5 className="services__clients--sign-title">Odour</h5> 
                                <figure className="services__clients--sign-pik">
                                    <img src="/img/tank_s1.jpg" />
                                </figure>
                                <div className="services__clients--sign-txt"> 

                                    <p>
                                    Odours escape on the surface of the land when the tank is full and is a sure sign that the tank is full


                                    </p>

                                </div>



                       
                       </section> 

                       <section className="services__clients--sign">
                            

                
                            <h4 className="services__clients--sign-pos">2</h4> 
                            <h5 className="services__clients--sign-title">Pooling Water</h5> 
                            <figure className="services__clients--sign-pik">
                                <img src="/img/tank_s2.jpg" />
                            </figure>
                            <div className="services__clients--sign-txt"> 

                                <p>
                                Water pooling around the septic tank especially if it is not from rain water

                                </p>

                            </div>



                   
                   </section>

                   <section className="services__clients--sign">
                            

                
                            <h4 className="services__clients--sign-pos">3</h4> 
                            <h5 className="services__clients--sign-title"> Slow drains</h5> 
                            <figure className="services__clients--sign-pik">
                                <img src="/img/tank_s4.jpg" />
                            </figure>
                            <div className="services__clients--sign-txt"> 

                                <p>
                                Slow draining basins, showers and toilets are a good indication your tank needs to be pumped

                                </p>

                            </div>



                   
                   </section>

                   <section className="services__clients--sign">
                            

                
                            <h4 className="services__clients--sign-pos">4</h4> 
                            <h5 className="services__clients--sign-title">Sewer backup</h5> 
                            <figure className="services__clients--sign-pik">
                                <img src="/img/tank_s3.jpg" />
                            </figure>
                            <div className="services__clients--sign-txt"> 

                                <p>
                                A definite sign that your tank is full. At this point you cannot afford to delay on getting the septic tank pumped.


                                </p>

                            </div>



                   
                   </section>

                      
                       <strong className="clearfix" />
                    </section>

                    
               

             
             
           
        )
    }




}

export default Clients