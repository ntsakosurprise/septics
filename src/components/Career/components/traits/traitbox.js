
import React, {Component} from 'react' 



// import Jobs from './jobs/jobs'
// import Brand from './brand/brand'
// import Primary from './primary/primary'
// import Secondary from './secondary/secondary'



class TraitBox extends  Component{


    constructor(props){

        super(props)
    }

   

   

    render(){

        return(
                
          
                <section className={`grid-col-3 pos-rel ${this.props.options.container.className}`}>

                        <div className="bx-shadow-dark vt-size-fd-x-sm bg-light left-offset-fl-bt pd-bottom-fd-sm font-fd-xx-tn">
                            <div className="fg-dark">

                                <span className="font-fd-tn font-wt-bold pd-bottom-fd-bt text-align-center d-inline-block bd-bottom-fd-primary-xx-bt hr-size-fl-xx-tn pd-left-fd-x-bt pd-top-fd-x-tn">
                                    {this.props.options.title.content.number.text}
                                </span>
                                <span className="font-fd-x-tn pd-bottom-fd-bt text-align-center d-inline-block  mg-left-fd-tn pd-top-fd-x-tn">
                                    {this.props.options.title.content.text.text}
                                </span>



                            </div>

                            <p className="pd-left-fd-xx-tn pd-right-fd-xx-tn pd-top-fd-md">
                               {this.props.options.body.content.number.text}
                            </p>

                            <p className="pd-left-fd-xx-tn pd-right-fd-xx-tn pd-top-fd-md">
                                {this.props.options.body.content.text.text}
                            </p>


                        </div>
                    </section>

        
               

              

                       

            
        )
    }




}

export default TraitBox