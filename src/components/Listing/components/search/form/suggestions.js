
import React from 'react'


class Suggestions extends React.Component {
    constructor(props) {
      super(props) 
     
    }
    

    suggestList(list){


       const {props} = this 
       const {hideScreen,id} = props
       let listItems = null 

       listItems = list.map((i,p)=>{

       if(i instanceof Object){

        return (<li className="job__suggestions--list-i" onClick={(e)=>hideScreen(id,i.state_name)} key={p}>{i.state_name}</li>)

       }else{

        return (<li className="job__suggestions--list-i" onClick={(e)=>hideScreen(id,i)} key={p}>{i}</li>)

       }
      

       })
    
      //  console.log('THE SUGGESTLIST')
      //  console.log(listItems)

       return (listItems)
    }
   
    render() {


        const {props} = this 
        const {list,hideScreen,id} = props 
        console.log('THE CURRENT LIST ')
        console.log(list)
      // let message = this.props.message
      // let position = this.props.position 
      // let active = this.props.active

     
      return (
      
             

        list ? <p className='job__suggestions'><ul className="job__suggestions--list" onMouseLeave={(e)=>hideScreen(id)}>{this.suggestList(list)}</ul></p> : null
               
                
           
          

          
       
      )
    }
  }

  export default Suggestions
  
