
import React, {Component} from 'react' 
import AvatarChangeEdit from './avataredit'
// import AvatarChangeBtn from './avatarbtn'
import InfoUpdate from './infoupdate'



class Profile extends  Component{


    constructor(props){

        super(props)
    }

    photoUpload = e =>{

        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
        reader.readAsDataURL(file);


      }

   

    render(){

        const {compData,isActionSuccessful,isFetching,launcher,isProgressBar,actions} = this.props
       const {avatar,profileUrl,firstName,lastName} = compData 
       const {sendUserAvatarUpdate} = actions 
       console.log('THE PROFILE URL IN PROFILE')
       console.log(profileUrl)
       console.log(compData)

      

        return(

                <div>
                    <section className="dashboard__candsettings--editpane-avatar-cont">

                        <AvatarChangeEdit avatar={avatar} profileUrl={profileUrl} isFetching={isFetching} isProgressBar={isProgressBar} isActionSuccessful={isActionSuccessful} launcher={launcher} sendUserAvatarUpdate={sendUserAvatarUpdate} actions={actions}  />
                        {/* <AvatarChangeBtn /> */}
                       
                   
                    </section>
                    <InfoUpdate firstName={firstName} lastName={lastName} isFetching={isFetching} isProgressBar={isProgressBar} isActionSuccessful={isActionSuccessful} launcher={launcher} actions={actions} />

                   
                </div>

             
             
           
        )
    }




}

export default Profile 