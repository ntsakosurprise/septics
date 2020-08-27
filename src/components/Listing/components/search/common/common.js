
import React, { Component } from 'react' 





 function Common (props){
    
   
     
     
      


   const openPage = (url)=>{

       console.log('the PROPS ON OPENPAGE')
       console.log(props) 
       const {actions} = props 
       const {push} = actions
       console.log(url)
       push(url)
   }

  

    return(

      
           <section className="job__search--common">

               <p className="job__search--common-title">Common Searches:</p>
               <ul>
                      <li onClick={openPage.bind(this,`/jobs?jq=IT`)}>IT</li>
                      <li>Accounting</li>
                      <li>General Worker</li>
                      <li>Nursing</li>
                      <li>Cashier</li>
                      <li>Admin</li>
               </ul>
             
           </section>
      
    )

}


export default Common