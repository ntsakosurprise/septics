
import React, {Component} from 'react' 


class AvatarButton extends  Component{


    constructor(props){

        super(props)
    }

   

    render(){

       

        return(

           
              
            <form className="d-inline pos-rel">

                <label htmlFor="photo-upload-btn" className="dashboard__candsettings--editpane-changeav">
                    Change Avatar
                </label>

                <input className="dashboard__candsettings--editpane-avatar-input" id="photo-upload-btn" type="file" onChange={(e)=>{}}/> 

            </form>
             
             
           
        )
    }




}

export default AvatarButton