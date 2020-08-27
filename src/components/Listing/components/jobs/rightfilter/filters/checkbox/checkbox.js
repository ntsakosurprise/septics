import React,{Component,useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles'

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//   },
//   formControl: {
//     margin: theme.spacing(3),
//   },
// }));


const styles = {
  root: {
    display: 'flex',
  },
  formControl: {
    margin: '3rem',
  },
};


// export default function CheckboxesGroup(props) {
//   const classes = useStyles();
//   const [state, setState] = useState({
    
//         isChecked:false,
//         checkboxes: {}

//       });

//       useEffect(()=>{

//         setState({checkboxes:  props.list.reduce((options,option)=>({...options,[option.value]: option}),{}) },()=>{
//           console.log('THE CHECKBOXES')
//           console.log(state.checkboxes)
//         })
       

//       },[])

//   const handleChange = name => event => {
    
//      event.preventDefault()
//      setState({isChecked: true})
//      alert(name)
//      props.handle(event)
//   };

//   const {isChecked,checkboxes } = state;
// //   const error = [gilad, jason, antoine].filter(v => v).length !== 2;
//   const {list,help,legend} = props
//   console.log('THE CEHCKEBOXES')
//   console.log(list)
//     console.log(checkboxes)

//   return (

    
   
//     <div className={classes.root}>
//       <FormControl component="fieldset" className={classes.formControl}>
//         {legend && 
//             <FormLabel component="legend">Assign responsibility</FormLabel>
//         }

//          {
//              list.map((i,p)=>{

//                 return(

//                     <FormGroup key={p}>

//                         <FormControlLabel style={{display: "inline-block"}}

//                             control={<Checkbox onChange={handleChange(i.label)} checked={isChecked} value={i.value} />}
//                             label={i.label}

//                         />
                         

//                     </FormGroup>

//                 )
//              })
//          }

        
//         {help && <FormHelperText>Be careful</FormHelperText>}

//       </FormControl>
     
//     </div>
//   );
// }



// import React, { Component } from 'react' 
// import Checkbox from './checkbox/checkbox'
// import films from './films'






class CheckBox extends Component{
    
    constructor(){
        super()

        this.state = {
          isChecked:false,
          checkboxes: []
        }
    }

    
 
    handleChange = name => event => {
    
      event.preventDefault()
      const {state,props} = this
      const {handle} = props
      const {checkboxes} = state 
      let index = event.target.value
      let item = checkboxes[index] 
      console.log(event.target.value)
      console.log(item)
      item.checked === false ? item.checked =  true: item.checked = false
      // item.checked = !item.checked 
      checkboxes[index] = item
      this.setState({...this.state,checkboxes: [...checkboxes] },()=>{
        
          handle(item)

      })
      // // alert(nm)
     
   }

   componentDidMount(){

    const {list} = this.props 
    console.log('THE LIST VALUE')
    console.log(this.props)
    this.setState({...this.state,checkboxes: [...list]},()=>{
      console.log('THE CHECKBOX COMPONENT HAS MOUNTED')
      console.log(this.state.checkboxes)
    })
    

   }

    
    render(){

      
      const {handleChange,state} = this
      const {checkboxes } = state 
      const {list,help,legend,classes} = this.props

      if(checkboxes.length === 0) return null
      
      return (

    
   
          <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
              {legend && 
                  <FormLabel component="legend">Assign responsibility</FormLabel>
              }
      
              {
                  checkboxes.map((i,p)=>{
      
                      return(
      
                          <FormGroup key={p}>
      
                              <FormControlLabel style={{display: "inline-block"}}
      
                                  control={<Checkbox onClick={handleChange(i.label)} checked={i.checked}  value={p} />}
                                  label={i.label}
      
                              />
                              
      
                          </FormGroup>
      
                      )
                  })
              }
      
              
              {help && <FormHelperText>Be careful</FormHelperText>}
      
            </FormControl>
          
          </div>
        );
    }

}


export default withStyles(styles)(CheckBox)