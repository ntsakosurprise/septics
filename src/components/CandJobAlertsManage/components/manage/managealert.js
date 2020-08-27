
import React, {Component} from 'react'
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { toast } from 'react-toastify';
import ProgressBarLinear from './progressbarlinear'



const styles = {
    root: {
    
      fontSize: 30,
      cursor:"pointer"
      
    },
    dropDownList: {

        width: 500
    },
    iconhover:{
        '&:hover':{

            content: ""
        }
    }
  };






class ManageAlert extends  Component{


    constructor(props){

        super(props)
        // this.getInitialState = this.getInitialState
        // const that = this
        //manageAlert: that.getInitialState()
        // const {getInitialState} = this
        this.state = {frequency:'',anchorEl: null,isSnackBar: false,snackType: '',
        snackMessage:'',snackCloseState: false,test: false,localState: false,showProgress: false
        }
    }

   
    updateUserAlert(e){

        e.preventDefault()

        const {sendAlertUpdate,manageAlert} = this.props
        const {frequency} = this.state 
        console.log(manageAlert.frequency)
        console.log(frequency)

        if(manageAlert.frequency.toLowerCase() === frequency.toLowerCase()){
           
            console.log('CURRENT FREQUENCY SIMILAR TO SET')
           return this.notify({message:'Note: You should a different option to update',type: 'info',className: 'notify-info'}) 
        }
        // const {manageAlert} = this.state
        const {alertID} = manageAlert 
        
        sendAlertUpdate({ID:1,alertID:alertID,update: {frequency: frequency}})

    }

    setAlertUpdate(e){

        e.preventDefault()

        this.setState({...this.state,frequency:e.target.value},()=>{

            console.log('THE CURRENT STATE')
            console.log(this.state)
        })

        // const {setAlertUpdateData} = this.props
        // let update ={[key]:e.value}
        // setAlertUpdateData(update)


        
    }


    handleClick = e => {

        
        this.setState({...this.state,anchorEl:e.currentTarget})
      }
    
    handleClose = (v,e) => {

    console.log('HANDLE CLICK,EITHER THROUGH MENU OR ITS CHILDREN:close')
    console.log(v)
    console.log(v)
    let frequency = this.state.frequency
    v ? frequency = v : frequency = frequency
    this.setState({...this.state,anchorEl:null,frequency: frequency},()=>{
        console.log('THE STATE.FREQUENCY')
        console.log(this.state)
    })
    }
 
    notify = (config) => {

       
        const {message} = config || ''
        const type = config.type || 'info'
        toast[type](message,
            {position: toast.POSITION.BOTTOM_LEFT,...config});
    }

    
    
   
    closeEditor(){

        const {push} = this.props

        push('/alerts/list')


    }
    

    componentDidUpdate(prevProps,nextProps){

        console.log()
        const {isActionSuccessful,removeNotification} = this.props 

        if(isActionSuccessful) {
            this.notify({message:'Job alert frequency successfully updated',type: 'success',className: 'notify-success'}) 
            removeNotification()
        }
        
    }

    // static getDerivedStateFromProps(props,state){

    //     console.log('THE PROPS IN GETDERIVED METHOD')
    //     console.log(props)
    //     console.log(state)

    //     if(props.isProgressBar === true && state.showProgress === true){
    //         return {showNotification: false}
    //     }else if(props.isProgressBar === true && state.showProgress === false){
             
    //         return {showProgress: props.isProgressBar}
            
    //     }

        
    // }
   
    

    testProps(e){
        e.preventDefault()
        this.setState({...this.state,test: true})
    }

     
    render(){

        const {classes,manageAlert,isActionSuccessful,isProgressBar,isFetching} = this.props 
        const {updateUserAlert,closeEditor,setAlertUpdate,handleClick,handleClose,testProps} = this
        const {anchorEl} = this.state 
        const frequency = this.state.frequency ? this.state.frequency : manageAlert.frequency
        const {jobKeyword} = manageAlert
        

        console.log('MANAGE ALERT IN MANAGE ALERT')
        console.log(manageAlert)
        console.log('THE MANAGEALERT:RENDER')
        console.log(isActionSuccessful)

        return(


               <div>

                
                    <section className="dashboard__candalertmanage--i">

                        <div className="dashboard__candalertmanage--i-box bx-raised-1 ">

                                <span className="dashboard__candalertmanage--i-box-title">Manage Job Alert</span>
                                <small className="dashboard__candalertmanage--i-box-label">{jobKeyword}</small>
                     
             
                        </div>


                    </section>

                    
                   <section>

                    <h4 className="dashboard__candalertmanage__title">Frequency</h4>
                       <div className="dashboard__candalertmanage__dropdown"  >

                            <span className="dashboard__candalertmanage__dropdown-text">{frequency}</span>
                            <span className="dashboard__candalertmanage__dropdown-icon" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                <Icon>
                                    <ArrowDropDownIcon className={classes.root} />
                                </Icon>
                            </span>
                        
                       </div>
                       
                        <div>
                        
                            {anchorEl && 

                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                className={classes.dropDownList}
                            >
                                <MenuItem value="Daily" onClick={handleClose.bind(this,'Daily')}>Daily</MenuItem>
                                <MenuItem value="Weekly" onClick={handleClose.bind(this,'Weekly')}>Weekly</MenuItem>
                                <MenuItem value="Bi-Monthly" onClick={handleClose.bind(this,'Bi-Monthly')}>Bi-monthly</MenuItem>
                                <MenuItem value="Monthly" onClick={handleClose.bind(this,'Monthly')}>Monthly</MenuItem>
                            </Menu>}
                           
                        </div>

                        <p><button onClick={testProps.bind(this)}></button></p>
                    

                       <p className="dashboard__candalertmanage__actions">
                           <button className="dashboard__candalertmanage__actions-save" onClick={updateUserAlert.bind(this)}>Save</button>
                           <button className="dashboard__candalertmanage__actions-cancel" onClick={closeEditor.bind(this)}>Close</button>
                       </p>



                       <div>
                           {
                              
                                isProgressBar === true && isFetching === true
                                    ?  <ProgressBarLinear />
                                    : null
                           }

                           {/* <ProgressBarLinear /> */}
                       </div>
                       
                       {/* <p>
                           <button onClick={(e)=>this.notify({message:'Frequency has successully been updated',type: 'success',className: 'notify-success'})}>
                               DISPLAY SUCCESS
                            </button>
                            <button onClick={(e)=>this.notify({message:'Frequency has successully been updated',type: 'warn',className: 'notify-warn'})}>
                               DISPLAY WARN
                            </button>
                            <button onClick={(e)=>this.notify({message:'Frequency has successully been updated',type: 'error',className: 'notify-error'})}>
                               DISPLAY ERROR
                            </button>
                           {showNotification && <ToastNotify config={toasNotifcation} /> }
                       </p> */}
                   </section>




           
                </div>

             
             
           
        )
    }




}

export default withStyles(styles)(ManageAlert)