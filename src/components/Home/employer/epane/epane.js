
import React from 'react' 



function Post() {
    

    return(

           <section className="grid-col-5 pos-rel pd-bottom-fd-xxx-lg pd-top-fd-xx-md bg-primary">

               <div style={{width: 35+"rem"}} className="mg-auto mg-bottom-fd-x-bg">
                    <p className="font-fd-x-tn fg-light">
                        Nurture young talent , Supplement your workforce, and help Shape the future.
                    </p>
               </div>

               <div className="half-circle-rt bx-shadow-dark bg-primary mg-bottom-fd-md"></div>
               <div style={{width: 35+"rem"}} className="mg-auto mg-bottom-fd-x-bg">
                    <p className="font-fd-xxx-sm fg-light font-wt-bold">
                     Use our pool of enthusiastic vernal individuals to source talent.
                    </p>
               </div>
               <div className="pos-abs right-offset-fl-bt top-offset-fl-x-bg">
                    <span className="fg-primary bx-raised font-wt-bolder cursor-pointer pd-fd-sm bg-light font-fd-xx-tn d-inline-block">Read More</span>
               </div>
           </section>
    )

}


export default Post