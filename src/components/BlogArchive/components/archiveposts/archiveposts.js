
import React,{Component} from 'react'
import {Link} from 'react-router-dom'




class ArchivePosts extends Component{
    
    
    constructor(props) {
        super(props);
      
    }

   
    controlValidate = (validateControl)=>{
   	
        let validData = [true,''] 
    
     if(validateControl.validation.isRequired){ 
     
         let valid = validateControl.value.trim() !== ''
         let message = ''
         if(!valid){
             message = `${validateControl.config.name} is a required field `
         }
 
         validData = !valid ? [valid,message] : validData
         
     }
    
        return validData
    
}


      
    
    render(){

        return(

           

                
                <div  className="archive__posts">


                      

                          
                            <div className="archive__posts--row">

                                <section className="archive__posts--row-i">

                                    <Link to='/' className="link d-block ">

                                        <img src="/img/users/250_3.jpg" className="archive__posts--row-i-pik" />
                                        <h2 className="archive__posts--row-i-title">Jobbri posting done</h2>
                                        <p className="archive__posts--row-i-content">sed diam nonumy eirmod tempor invidunt ut labore 
                                        et dolore magna aliquyam erat, sed diam voluptua.</p>
                                       

                                    </Link>

                                    <span className="archive__posts--row-i-tag">#update</span>

                                </section>


                                <section className="archive__posts--row-i">

                                    <Link to='/' className="link d-block ">

                                        <img src="/img/users/250_1.jpg" className="archive__posts--row-i-pik" />
                                        <h2 className="archive__posts--row-i-title">Jobbri posting done</h2>
                                        <p className="archive__posts--row-i-content">sed diam nonumy eirmod tempor invidunt ut labore 
                                        et dolore magna aliquyam erat, sed diam voluptua.</p>
                                       

                                    </Link>

                                    <span className="archive__posts--row-i-tag">#update</span>

                                </section>
                                

                                <section className="archive__posts--row-i">

                                    <Link to='/' className="link d-block ">

                                        <img src="/img/users/250_2.jpg" className="archive__posts--row-i-pik" />
                                        <h2 className="archive__posts--row-i-title">Jobbri posting done</h2>
                                        <p className="archive__posts--row-i-content">sed diam nonumy eirmod tempor invidunt ut labore 
                                        et dolore magna aliquyam erat, sed diam voluptua.</p>
                                       

                                    </Link>

                                    <span className="archive__posts--row-i-tag">#update</span>

                                </section>

                                <section className="archive__posts--row-i">

                                    <Link to='/' className="link d-block ">

                                        <img src="/img/users/250_11.jpg" className="archive__posts--row-i-pik" />
                                        <h2 className="archive__posts--row-i-title">Jobbri posting done</h2>
                                        <p className="archive__posts--row-i-content">sed diam nonumy eirmod tempor invidunt ut labore 
                                        et dolore magna aliquyam erat, sed diam voluptua.</p>
                                       

                                    </Link>

                                    <span className="archive__posts--row-i-tag">#update</span>

                                </section>

                                <section className="archive__posts--row-i">

                                    <Link to='/' className="link d-block ">

                                        <img src="/img/users/250_5.jpg" className="archive__posts--row-i-pik" />
                                        <h2 className="archive__posts--row-i-title">Jobbri posting done</h2>
                                        <p className="archive__posts--row-i-content">sed diam nonumy eirmod tempor invidunt ut labore 
                                        et dolore magna aliquyam erat, sed diam voluptua.</p>
                                       

                                    </Link>

                                    <span className="archive__posts--row-i-tag">#career</span>

                                </section>
                                <strong className="clearfix" />
                                
                               


                            </div>


                            <div className="archive__posts--row">

                                <section className="archive__posts--row-i">

                                    <Link to='/' className="link d-block ">

                                        <img src="/img/users/250_6.jpg" className="archive__posts--row-i-pik" />
                                        <h2 className="archive__posts--row-i-title">Jobbri posting done</h2>
                                        <p className="archive__posts--row-i-content">sed diam nonumy eirmod tempor invidunt ut labore 
                                        et dolore magna aliquyam erat, sed diam voluptua.</p>
                                       

                                    </Link>

                                    <span className="archive__posts--row-i-tag">#update</span>

                                </section>


                                <section className="archive__posts--row-i">

                                    <Link to='/' className="link d-block ">

                                        <img src="/img/users/250_7.jpg" className="archive__posts--row-i-pik" />
                                        <h2 className="archive__posts--row-i-title">Jobbri posting done</h2>
                                        <p className="archive__posts--row-i-content">sed diam nonumy eirmod tempor invidunt ut labore 
                                        et dolore magna aliquyam erat, sed diam voluptua.</p>
                                       

                                    </Link>

                                    <span className="archive__posts--row-i-tag">#career</span>

                                </section>
                                

                                <section className="archive__posts--row-i">

                                    <Link to='/' className="link d-block ">

                                        <img src="/img/users/250_8.jpg" className="archive__posts--row-i-pik" />
                                        <h2 className="archive__posts--row-i-title">Jobbri posting done</h2>
                                        <p className="archive__posts--row-i-content">sed diam nonumy eirmod tempor invidunt ut labore 
                                        et dolore magna aliquyam erat, sed diam voluptua.</p>
                                       

                                    </Link>

                                    <span className="archive__posts--row-i-tag">#career</span>

                                </section>
                                <section className="archive__posts--row-i">

                                    <Link to='/' className="link d-block ">

                                        <img src="/img/users/250_9.jpg" className="archive__posts--row-i-pik" />
                                        <h2 className="archive__posts--row-i-title">Jobbri posting done</h2>
                                        <p className="archive__posts--row-i-content">sed diam nonumy eirmod tempor invidunt ut labore 
                                        et dolore magna aliquyam erat, sed diam voluptua.</p>
                                       

                                    </Link>

                                    <span className="archive__posts--row-i-tag">#update</span>

                                </section>

                                <section className="archive__posts--row-i">

                                    <Link to='/' className="link d-block ">

                                        <img src="/img/users/250_10.jpg" className="archive__posts--row-i-pik" />
                                        <h2 className="archive__posts--row-i-title">Jobbri posting done</h2>
                                        <p className="archive__posts--row-i-content">sed diam nonumy eirmod tempor invidunt ut labore 
                                        et dolore magna aliquyam erat, sed diam voluptua.</p>
                                       

                                    </Link>

                                    <span className="archive__posts--row-i-tag">#career</span>

                                </section>
                                <strong className="clearfix" />
                                
                               


                            </div>


                           


                       
                        
                 

                </div>
               
                

           
        )
    }

}


export default ArchivePosts