
import React from 'react' 
import primaryLinks from './links'
import Navigation from "../../../Common/navigation/navigation"



function Primary(props) {
    

    return(

         <div className="pos-abs pd-top-fd-tn right-offset-fl-x-bt">

            <Navigation 
            
                nav={
                    {
                        
                        nav: {items: primaryLinks},
                        type: 'tab',
                        actions: props.actions

                    }
                    
                }

            />

            

         </div>
    )

}


export default Primary