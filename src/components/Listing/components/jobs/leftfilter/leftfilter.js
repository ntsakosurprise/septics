import React, { Component } from 'react' 
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import Notifications from '@material-ui/icons/Notifications';
import Dropdown from './Dropdown/dropdown'
import Alert from './alert'

import Ads from './ads/ads'


const styles = {
    root: {
     
      color:"#999",
      fontSize: 30,
      
    },
    iconhover:{
        '&:hover':{

            content: ""
        }
    }
  };




class LeftFilter extends Component{
    
    constructor(props){


        super(props)

        this.state = {
          recent: [
            {
                id: 0,
                title: 'Relevance',
                selected: false,
                key: 'location',
                to: '/access',
                value: 'relevance'
            },
            {
              id: 1,
              title: 'Date',
              selected: false,
              key: 'location',
              to: '/jobs',
              value: 'date'
            },
            {
              id: 2,
              title: 'Salary',
              selected: false,
              key: 'location',
              to: '/postjob',
              value: 'salary'

            },
            // {
            //   id: 3,
            //   title: 'Past two weeks',
            //   selected: false,
            //   key: 'location',
            //   to: '/alert',
            //   value: 336
            // }
           
          ],
          pages: [
            {
                id: 0,
                title: '15 per Page',
                selected: false,
                key: 'location',
                to: '/access',
                value: 15
            },
            {
              id: 1,
              title: '20 per Page',
              selected: false,
              key: 'location',
              to: '/jobs',
              value: 20
            },
            {
              id: 2,
              title: '25 per Page',
              selected: false,
              key: 'location',
              to: '/postjob',
              value: 25

            }
           
          ],
          showDropDown: false,
          dropDownID: ''
        }

      }



      toggleSelectedRecent(id, key){

        let temp = this.state[key]
        temp[id].selected = !temp[id].selected
        this.setState({
          [key]: temp
        })

      }

      toggleSelectedPages(id, key){

        let temp = this.state[key]
        temp[id].selected = !temp[id].selected
        this.setState({
          [key]: temp
        })

      }

      displayDropDown = (filter)=>{

        // console.log('THE FILTER GETS A CLICK AND IT RUNS')
        // console.log(filter)

        this.setState({...this.state,showDropDown:true,dropDownID: filter})
        // filter === 'price' ? this.priceFilter(filterType) : this.nameFilter(filterType)

    }

    hideDropDown = (e,i='')=>{

      console.log('THE VALUE I HIDEDROPDOWN')
      console.log(i)
      e.stopPropagation() 
      if(i){
      	  
      	  const {props,state} = this 
      	  const {actions} = props 
      	  const {crudJobFilter,saveJobSearchParams} = actions 
      	  let id = state.dropDownID
          let opt = state[id] 
          let value = opt[i].value
          console.log('THE OPT VALUE')
          console.log(opt)
      	  
      	  
      	   
      	   this.setState({...this.state,showDropDown:false,dropDownID: ''},()=>{
      	   	
      	   	  if(id === 'recent'){
      	   	  	
      	   	  
      	   	  saveJobSearchParams({
      	   	  	
      	   	  	 sort: value,
      	   	  	 fetchJobs: true
      	   	  	
      	   	  }) 
      	   	  }else{
                 
                console.log('the opt value in eslse setstate')
                console.log(value)
                saveJobSearchParams({
                  pageLimit: value,
      	   	  	 	fetchJobs: true
      	   	  	 })
      	   	  	
      	   	  }
      	   	  
      	   	
      	   })
      	  
      	 
      	  
      	
      }else{
      	
      	 this.setState({...this.state,showDropDown:false,dropDownID: ''})
      	
      }
      

    }


    render(){

        const {displayDropDown,state,hideDropDown,props} = this 
        const {dropDownID,showDropDown} = state 
        const currentList =  state[dropDownID] 
        const {search,auth,actions,isPosts} = props

        return(





           <section className="job__jobs--lt">


                
                <div className="job__jobs--lt-sorts ">
                    <h2>Filter By</h2>
                    <section className="job__jobs--lt-sorts-icont">
                        <section className="job__jobs--lt-sorts-i" onClick={displayDropDown.bind(this,'recent')}>
                           
                          <p className="hearx__products--filter-i-dropdown-i" >SortBy</p>
                          {
                          showDropDown && dropDownID === 'recent' ? <Dropdown list={currentList} hideDropDown={hideDropDown.bind(this)} /> : null

                        }
                        </section>

                       
                        <section className="job__jobs--lt-sorts-i" onClick={displayDropDown.bind(this,'pages')}>
                          <p className="hearx__products--filter-i-dropdown-i" >Page count</p>
                          {
                          showDropDown && dropDownID === 'pages' ? <Dropdown list={currentList} hideDropDown={hideDropDown.bind(this)} /> : null

                        }
                        </section>

                        

                       

                    </section>
                </div>

                {isPosts && <Alert search={search} actions={actions} auth={auth} />} 
                

                <Ads />
                
             
           </section>
        )
    }

}


export default withStyles(styles)(LeftFilter)