import React, { Component } from 'react' 
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import Notifications from '@material-ui/icons/Notifications';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import MailIcon from '@material-ui/icons/Mail';








import LeftFilter from './leftfilter/leftfilter'
import RightFilter from './rightfilter/rightfilter'
import JobList from './joblist/joblist'


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




class Jobs extends Component{
    
    constructor(props){

        super(props)

    }


    render(){

        const {jobs,search,auth,updateSearch,push,fetchJobs,actions,isFetching} = this.props
        const {posts = [],categories=[],locations=[]} = jobs
        let filtersData = {categories: categories,locations: locations} 
        let isPosts = posts && posts.length >= 1 ? true : false
        console.log('JOBS IN JOBS COMPONENT')
        console.log(posts)

        return(

           <section className="job__jobs">

               <LeftFilter actions={actions} search={search} auth={auth} isPosts={isPosts} />
               <JobList posts={posts} search={search} isFetching={isFetching} actions={actions} updateSearch={updateSearch} push={push} fetchJobs={fetchJobs} />
               <RightFilter filtersData={filtersData} actions={actions} isFetching={isFetching} />
               
               <strong className="clearfix" />
             
           </section>
        )
    }

}


export default withStyles(styles)(Jobs)