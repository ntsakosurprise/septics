import React, { Component } from 'react'



class Upload extends Component {

    constructor(props) {

      super(props)
    }

    onChangeHandler= event =>{

        var files = event.target.files

        if(this.maxSelectFile(event) && this.checkMimeType(event) && this.checkMimeType(event)){ 
        // if return true allow to setState
           this.setState({
                selectedFile: files
            })
        }

    }

    onClickHandler = () => {

        const data = new FormData()
        // for(var x = 0; x < this.state.selectedFile.length; x++){

        //     data.append('file', this.state.selectedFile[x])
        // }

        data.append('file', this.state.selectedFile)
        // axios.post("http://localhost:8000/upload", data, { 
        //     // receive two    parameter endpoint url ,form data
        // }).then(res => { // then print response status
        //     console.log(res.statusText)
        //  })
        

    }

    maxSelectFile=(event)=>{

        let files = event.target.files // create file object
            if (files.length > 3) { 
               const msg = 'Only 3 images can be uploaded at a time'
               event.target.value = null // discard selected file
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
        console.log(err)
        return false
   }
   
   return true;
   
   }
  
    render() {
        return (
            <div className="upload">
              
              <div  className="upload__avatar-user-info">
                <div  className="upload__avatar-profile-pic"><img src="/img/users/250_5.jpg"/>
                    <div  className="upload__avatar-layer">
                    <div  className="upload__avatar-loader"></div>
                    </div>
                    <a  className="upload__avatar-image-wrapper" href="#">

                        <form className="profilePictureForm" action="#">
                            <input  className="upload__avatar-hidden-input" id="changePicture" type="file"/>
                            <label  className="upload__avatar-edit glyphicon glyphicon-pencil" for="changePicture" type="file" title="Change picture"></label>
                        </form>

                    </a>
                </div>
               </div>

               </div>

            
          )
    }

}

export default Upload