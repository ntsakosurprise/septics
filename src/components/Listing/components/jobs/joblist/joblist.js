import React, { Component } from 'react' 
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import Notifications from '@material-ui/icons/Notifications';
import jobs from './list'
import ListCard from './listcard'
import Paginator from './pagi'
import ProgressBarCircular from './progressbarcircular' 
import JobsNoTFound from './jobsnotfound'

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




class JobList extends Component{

     
    
    constructor(props){

        super(props)


    }

    componentDidMount(){

        const {posts} = this.props
        console.log('THE JOBLIST,JOBS')
        console.log(this.props)
        console.log(posts)
        this.filterJobPosts(posts)

    }


    filterJobPosts(posts){

        console.log('FILTER JOB POSTS')
        console.log(posts)
        let isFeatured = {}
        let isMain ={ }
        let isSponsored = {}
        let isFree ={}
        let isAgr ={}

        posts.forEach((p,i)=>{

            if(p.isMainFeatured === 1){

                if(isMain.name){

                    isMain.mainFeatured.push(p)

                }else{

                    isMain.name = 'listMainFeatured'
                    isMain.mainFeatured = [p]

                }

            }else if(p.isFeatured === 1){

                if(isFeatured.name){

                    isFeatured.joFeatured.push(p)

                }else{

                    isFeatured.name = 'listJoFeatured'
                    isFeatured.joFeatured = [p]

                }

            }else if(p.isSponsored === 1){

                if(isSponsored.name){

                    isSponsored.joSponsored.push(p)

                }else{

                    isSponsored.name = 'listJoSponsored'
                    isSponsored.joSponsored = [p]

                }

            }else if(p.isFree === 1){

                if(isFree.name){

                    isFree.joFree.push(p)

                }else{

                    isFree.name = 'listJoFree'
                    isFree.joFree = [p]

                }

            }else{

                if(isAgr.name){

                    isAgr.agr.push(p)

                }else{

                    isAgr.name = 'listAgr'
                    isAgr.agr = [p]

                }

            }


        })

        // this.setState({jobs: [isMain,isFeatured,isSponsored,isFree,isAgr]},()=>console.log('THE JOBLIST STATE IS UPDATED',this.state.jobs))
        return [isMain,isFeatured,isSponsored,isFree,isAgr]


    }

    listMainFeatured(list,i){

        const {props} = this  
        const {actions} = props 

        console.log('THE LIST MAINFEATRUED ACTIONS')
        console.log(props)
        console.log(actions)
        
        if(list.hasOwnProperty('mainFeatured')) {

            return (<ListCard key={i} actions={actions} type ="mainfeatured" listItem={list.mainFeatured} />)
        }else{
            return null
        } 

        // return (<ListCard type ="mainfeatured" />)

    }

    listJoFree(list,i){

        const {props} = this  
        const {actions} = props 

        if(list.hasOwnProperty('joFree')) {

            
            return (<ListCard key={i} actions={actions} type="jofree" listItem={list.joFree} />)
        }else{
            return null
        } 

        // return (<ListCard type ="mainfeatured" />)


    }

    listJoSponsored(list,i){

        const {props} = this  
        const {actions} = props 

        console.log('THE JOSPONSRED GETS A CALL:::')

        if(list.hasOwnProperty('joSponsored')) {

            console.log('THE JOBSPONSRED MATCHES joSponsored prop')
            return (<ListCard actions={actions} key={i} type="josponsored" listItem={list.joSponsored} />)
        }else{
            return null
        } 

        // return (<ListCard type ="mainfeatured" />)


    }

    listJoFeatured(list,i){

        const {props} = this  
        const {actions} = props 

        if(list.hasOwnProperty('joFeatured')) {

            return (<ListCard key={i} actions={actions} type="jofeatured" listItem={list.joFeatured} />)
        }else{
            return null
        } 

        // return (<ListCard type ="jofeatured" />)


    }

    listAgr(list,i){

        const {props} = this  
        const {actions} = props 

        if(list.hasOwnProperty('agr')) {

            return (<ListCard key={i} actions={actions} type="agr" listItem={list.agr} />)
        }else{
            return null
        } 


    }


    render(){

      
        const {posts,search,actions,isFetching} = this.props

        console.log('THE JOBLISTS')
        console.log(this.props.posts) 
        console.log(isFetching)

        if(isFetching === true) return <section className="job__jobs--list"><ProgressBarCircular /></section> 
        if(posts.length === 0) return <section className="job__jobs--list"><JobsNoTFound search={search} /></section> 

        return(

           <section className="job__jobs--list">

             

             
              
              {

                  posts.length > 0 ?
                    (
                    <section>
                        <div>
                                {this.filterJobPosts(posts).map((list,i)=>{

                                
                            
                            
                                if(this[list.name]){

                                    return  this[list.name](list,i)
                
                                }

                            })}
                        </div>

                        <div>

                            <Paginator actions={actions} search={search} />

                        </div>
                    </section>
                    
                    )
                    :null
               
              }

             

              

               
               
           </section>
        )
    }

}


export default withStyles(styles)(JobList)