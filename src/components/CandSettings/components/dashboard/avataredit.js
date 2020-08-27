
import React, {Component} from 'react' 
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import Edit from '@material-ui/icons/Edit';
import ProgressBarLinear from './progressbarlinear'
import { toast } from 'react-toastify';
// import { profile } from '../../props';

const styles = {
    root: {
     
     
      fontSize: 20,
      
    },
    iconhover:{
        '&:hover':{

            content: ""
        }
    }
  };

class AvatarEdit extends  Component{


    constructor(props){

        super(props) 
        this.state ={
            selectedFile: null,
            selectedFileUrl: null
        }
    }


    onChangeHandler= event =>{

        var files = event.target.files

        console.log('THE UPLOADED FILES ONCHANGE HANDLER')
        console.log(files) 

        if(this.maxSelectFile(event) && this.checkMimeType(event) && this.checkFileSize(event)){ 
        // if return true allow to setState
           this.setState({
                selectedFile: files[0],
                selectedFileUrl: URL.createObjectURL(files[0])
            })
        }

    }

    onClickHandler = (e) => {

        e.preventDefault()
        if(!this.state.selectedFile) return this.notify({message: 'No valid file has been selcted for submission',type: 'error',className: 'notify-error'})
        const data = new FormData() 

        console.log('THE FORM DATA')
        console.log(data)
        console.log(this.state.selectedFile[0])
        // for(var x = 0; x < this.state.selectedFile.length; x++){

        //     data.append('file', this.state.selectedFile[x])
        // }

        const {profileUrl,sendUserAvatarUpdate} = this.props 
        console.log(this.props)
        console.log(data.append)
        console.log(data.append('test','THEFORMDATATEST'))


        data.append('file', this.state.selectedFile)
        data.append('action','changeAvatar')
        data.append('ID',1)
        data.append('old',profileUrl)

        let accessedData = {}

        for(let [key,value] of data.entries()){

            accessedData[key] = value
            console.log(key,value)
        }
        console.log('THE FORM DATA BEFORE SUBMITTION AVATAR')
        console.log(data) 
        console.log(accessedData)
        sendUserAvatarUpdate(data,'avatarEdit')


        // fetch("http://localhost:8000/upload", data, { 
        //     // receive two    parameter endpoint url ,form data
        // }).then(res => { // then print response status
        //     console.log(res.statusText)
        //  })
        

    }

    maxSelectFile=(event)=>{

        let files = event.target.files // create file object
            if (files.length > 3) { 
               const msg = 'Only 1 images can be uploaded at a time'
               event.target.value = null // discard selected file 
               this.notify({message: msg,type: 'error',className: 'notify-error'}) 
               console.log(msg)
              return false;
     
          }
        return true;
     
    }

    checkMimeType=(event)=>{
        //getting file object
        let files = event.target.files 
        //define message container
        let err = ''
        // list allow mime type
       const types = ['image/png', 'image/jpeg', 'image/gif']
        // loop access array
        for(var x = 0; x<files.length; x++) {
         // compare file type find doesn't matach
             if (types.every(type => files[x].type !== type)) {
             // create error message and assign to container   
             err += files[x].type+' is not a supported format\n';
           }
         };
      
       if (err !== '') { // if message not same old that mean has error 
            event.target.value = null // discard selected file
            this.notify({message: err,type: 'error',className: 'notify-error'}) 
            console.log(err)
             return false; 
        }
       return true;
      
    }

    checkFileSize=(event)=>{

        let files = event.target.files
        let size = 15000 
        let err = ""; 
        for(var x = 0; x<files.length; x++) {
            if (files[x].size > size) {
            err += files[x].type+'is too large, please pick a smaller file\n';
        }
     };
     if (err !== '') {
        event.target.value = null 
        this.notify({message: err,type: 'error',className: 'notify-error'}) 

        console.log(err)
        return false
   }
   
   return true;
   
   }

   notify = (config) => {

       
    const {message} = config || ''
    const type = config.type || 'info'
    toast[type](message,
        {position: toast.POSITION.BOTTOM_LEFT,...config});

    }

    componentDidUpdate(){

        console.log()
        const {isActionSuccessful,launcher,actions} = this.props 
        const  {removeNotification} = actions

        if(isActionSuccessful && launcher === 'avatarEdit' ) {
            this.notify({message:'Profile picture successfully updated',type: 'success',className: 'notify-success'}) 
            removeNotification()
        }
        
    }


   

    render(){

        const {classes,isFetching,isProgressBar} = this.props 
        const avatar = this.state.selectedFileUrl || this.props.avatar
        console.log('AVATAREDI')
        console.log(avatar)

        return(

           
            <section>

            
            <form className="d-inline pos-rel">

                    <label htmlFor="photo-upload" className="pos-rel avatar-label">
                        
                        <span className="dashboard__candsettings--editpane-avatar">
                            <img src={avatar} />

                            <span className="dashboard__candsettings--editpane-avatar-edit-overlay">

                            <Icon><Edit className={`${classes.root} dashboard__candsettings--editpane-avatar-edit-icon`} /></Icon>
                            </span>
                    
                        </span>
                        
                        <input className="dashboard__candsettings--editpane-avatar-input" id="photo-upload" type="file" onChange={(e)=>{this.onChangeHandler(e)}}/> 
                    </label>

                    
                       
                    <button htmlFor="photo-upload-btn" className="dashboard__candsettings--editpane-changeav" onClick={(e)=>{this.onClickHandler(e)}}>
                        Save Avatar
                    </button>
            </form>

            <div>
                {
                    
                    isProgressBar === true && isFetching === true
                        ?  <ProgressBarLinear />
                        : null
                }

                
            </div>

            </section>

            
             
             
           
        )
    }




}

export default withStyles(styles)(AvatarEdit)