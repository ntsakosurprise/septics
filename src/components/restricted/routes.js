

// import Messenger from '../Messenger/component'
import CandidateDashboard from '../CandidateDashboard/component'
import CandJobAlertsCat from '../CandJobAlertsCat/component'
import CandSavedJobs from '../CandSavedJobs/component'
import CandHistory from '../CandHistory/component'
import CandJobAlertsList from '../CandJobAlertsList/component'
import CandJobAlertsManage from '../CandJobAlertsManage/component'
import CandSettings from '../CandSettings/component'


export default [
  
    {
        component: CandidateDashboard,
        name: 'Dashboard',
        path: '/dashboard'
    },
    {
        component: CandJobAlertsCat,
        name: 'Alerts Categories',
        path: '/alerts'
    },
    {
        component: CandSavedJobs,
        name: 'Saved jobs',
        path: '/saved'
    },
    {
        component: CandHistory,
        name: 'Search history',
        path: '/searched'
    },
    {
        component: CandJobAlertsList,
        name: 'Job alerts',
        path: '/alerts/list'
    },
    {
        component: CandJobAlertsManage,
        name: 'Job alerts',
        path: '/alerts/manage'
    },
    {
        component: CandSettings,
        name: 'Candidate Settings',
        path: '/settings'
    }
   
   
    
]








