
import React, {Component} from 'react' 
import Card from './card'





class SavedJobs extends  Component{


    constructor(props){

        super(props)
    }

    viewPage(location){

        const {push} = this.props 

        console.log('THE VIEWPAGE LOCATION')
        console.log(location)
        push(location)

    }
    

    render(){

        const {savedJobs,actions} = this.props
        const {viewPage} = this

        return(


               <div className="hr-size-fl-xxx-lg">

               
                    <section className="dashboard__savedjobs--i">

                        <div className="dashboard__savedjobs--i-box bx-raised-1 ">

                                <span className="dashboard__savedjobs--i-box-title">Saved Jobs</span>
                     
             
                        </div>


                    </section>

                    {

                        savedJobs.map((job,i)=>{

                            
                                return <Card key={i} viewPage={viewPage.bind(this)} actions={actions}  job={job} />
                            

                        })

                    }
                




           
                </div>

             
             
           
        )
    }




}

export default SavedJobs