
import React from 'react'


export default function FormControl({controlData,id,change,styles}){
	
  
    const renderError = ()=>{
        
        let errorMessage = null 
        
        if(controlData.validation && !controlData.valid){
            
              errorMessage = (
              
                <div className={styles.error}> 
                
                   {controlData.validationMessage}
                
                </div>
              )
        }
        
        return errorMessage
    }
     const renderControl = ()=>{
 
         let  controlView = null
         
         switch(controlData.control){
         
             case 'input': 
                 controlView = (
                 
                 <div> 
                 
                     <input 
                     
                         {...controlData.config} 
                         value={controlData.value} 
                         onChange={(e)=>change({e,id,blur:false})} 
                         onBlur={(e)=>change({e,id,blur:true})} 
                         className={styles.child}   

                         />
                         
                         {renderError()}

                   
                 
                 </div>
                 
                 )
                 break;
             default:
             controlView = null
         
         
         } 
         
         
         return controlView
     }
 
  
     return (
     
       <div className={styles.parent}>
        
          {renderControl()}
       </div> 
       
       
     )
   
 }
 