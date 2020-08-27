
import React, { Component } from 'react' 
import Form from './form'
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import DashboardIcon from '@material-ui/icons/Dashboard';


import How from './how/how'
import Guide from './guide/guide'
import Price from './price/price'
import Promo from './promo/promo'



const styles = {
    root: {
     
      color:"#ff6633",
      fontSize: 20,
      
    },
    iconhover:{
        '&:hover':{

            content: ""
        }
    }
  };


 class poHeader extends Component{
    
    constructor(){
        super()
        this.state={

            option: 'promo'
        }
    }
   

    changeInsightOption(option,e){

        if(e)  e.preventDefault()

        this.setState({
            option: option
        })

    }

   
    renderOption(){

        switch(this.state.option){

            case 'how':
            
                return(<How />)
            break;
            case 'guide':
                return(<Guide />)
            break;
            case 'price':
                return(<Price />)
            break;
            case 'promo':
                return(<Promo />)
            break;
            default:
                return null
        }

    }

    insightHead(){

        switch(this.state.option){

            case 'how':
            
                return 'How it works'
            break;
            case 'guide':
                return 'Posting guidlines'
            break;
            case 'price':
                return 'Pricing'
            break;
            case 'promo':
                return 'Promotion'
            break;
            default:
                return null
        }
    }
  
    render(){
    return(

      
           <section className="po__header">

               <div className="contact__header--wrap">

                    <h2 className="po__header--title">
                          

                          <span className="po__header--title-text">
                           Start posting Jobs
                        </span>
                        <span className="po__header--title-sub">for free</span>
                    </h2>

            
               </div>

               <div className="po__header--connect bx-raised-1">


                   <section className="po__header--connect-title">
                        <p>Coming Soon</p>
                   </section> 

                   <section className="po__header--connect-text">
                       <p>

                         We are currently working hard to give you the best job posting service. 

                       </p>

                       <span>Be notified when we are done</span>
                   </section>
                   <section className="po__header--connect-form">

                     <Form />

                   </section>

                   <section className="po__header--connect-emp">

                        <button className="po__header--connect-emp-i" onClick={(e)=>this.changeInsightOption('how',e)}>

 
                            <span className="po__header--connect-emp-i-icon">
                                <Icon><DashboardIcon /></Icon>
                            </span>
                            <span className="po__header--connect-emp-i-text">
                              How it works
                            </span>


                        </button>

                        <button className="po__header--connect-emp-i" onClick={(e)=>this.changeInsightOption('guide',e)}>


                            <span className="po__header--connect-emp-i-icon">
                                <Icon><DashboardIcon /></Icon>
                            </span>
                            <span className="po__header--connect-emp-i-text">
                              Guidlines
                            </span>


                        </button>

                        <button className="po__header--connect-emp-i" onClick={(e)=>this.changeInsightOption('price',e)}>


                            <span className="po__header--connect-emp-i-icon">
                                <Icon><DashboardIcon /></Icon>
                            </span>
                            <span className="po__header--connect-emp-i-text">
                              Pricing
                            </span>


                        </button>

                        <button className="po__header--connect-emp-i" onClick={(e)=>this.changeInsightOption('promo',e)}> 


                            <span className="po__header--connect-emp-i-icon">
                                <Icon><DashboardIcon /></Icon>
                            </span>
                            <span className="po__header--connect-emp-i-text">
                              Promotions
                            </span>


                        </button>
                        

                   </section>
                 
               </div>

               <div className="po__header--insight">


                    <section className="po__header--insight-wrap">
                        <span className="po__header--insight-ck-1"></span>
    <h3 className="po__header--insight-title">{this.insightHead()}</h3>
                        <span className="po__header--insight-ck-2"></span>
                    </section>
                   {this.renderOption()}
               </div>

               
           </section>
      
    )
    }

}


export default withStyles(styles)(poHeader)