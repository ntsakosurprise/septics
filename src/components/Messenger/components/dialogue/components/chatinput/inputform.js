import React from 'react' 
import Search from '@material-ui/icons/Search';
import Add from '@material-ui/icons/Add';
import AttachmentIcon from '@material-ui/icons/Attachment';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SendIcon from '@material-ui/icons/Send';











function Inputform() {
    

    return(

         <form className="form pd-bottom-fd-xx-tn ">

            <p className="hr-size-fl-xx-bg pos-rel ">

                

                <span className="hr-size-fl-xx-bg pos-rel fg-dark bd-rad-x-bt pd-top-fd-xxx-tn d-block">

                    <small className="d-block pos-abs top-offset-fl-x-sm left-offset-fl-xx-bt bg-lt-grey-lt hr-size-fd-tn text-align-center pd-top-fd-bt bd-rad-x-bt">
                         <AttachmentIcon  style={{fontSize: 20,color: "orange"}}/>
                    </small>
                    <small className="d-block pos-abs top-offset-fl-x-sm left-offset-fl-bt bg-lt-grey-lt hr-size-fd-tn text-align-center pd-top-fd-bt bd-rad-x-bt">
                         <EmojiEmotionsIcon  style={{fontSize: 20,color: "orange"}}/>
                    </small>
                    <small className="d-block pos-abs top-offset-fl-x-sm left-offset-fl-x-lg bg-lt-grey-lt hr-size-fd-md text-align-center pd-top-fd-bt bd-rad-x-bt">
                         <SendIcon  style={{fontSize: 20,color: "orange"}}/>
                    </small>
                  
                    
                    <small style={{width: 4 +'rem',height:4 +'rem'}} className="d-block pos-abs top-offset-fl-xxx-sm left-offset-fl-xxx-lg bg-lt-grey-lt text-align-center pd-top-fd-xxx-tn  bd-rad-xx-bg">
                         <Add  style={{fontSize: 20,color: "green"}}/>
                    </small>
                    
                    <input type="text" className="bg-light bd-rad-x-bt pd-left-fl-xx-tn pd-right-fl-tn vt-size-fd-bt bx-raised hr-size-fl-x-bg pd-fd-bt bd-none" placeholder="Type your message..."/>

                </span>
            </p>
          

           
            

         </form>
    )

}


export default Inputform