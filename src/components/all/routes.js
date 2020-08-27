

import Home from '../Home/component'
import About from '../About/component'
import Career from '../Career/component'
import Contact from '../Contact/component' 
import Services from '../Services/component'
import Jobs from '../Listing/component'
import Candidate from '../Candidate/component'
import Login from '../Login/component'
import ComingSoon from '../ComingSoon/component'
import BlogHome from '../BlogHome/component'
import BlogPost from '../BlogPost/component'
import BlogArchive from  '../BlogArchive/component'
import NotFound404 from '../Notfound404/component'
import Error400 from '../Error400/component'
import Error401 from '../Error401/component'
import Error403 from '../Error403/component'
import Error408 from '../Error408/component'
import Error500 from '../Error500/component'
import Error503 from '../Error503/component'
import Faqs from '../Faqs/component'
import Privacy from '../Privacy/component'
import Terms from '../Terms/component'


export default [
    {
        component: Home,
        name: 'Home',
        path: '/'
    },
    {
        component: Career,
        name: 'Careers',
        path: '/careers'
    },
    {
        component: About,
        name: 'about',
        path: '/about'
    },
    {
        component: Services,
        name: 'services',
        path: '/services'
    },
    {
        component: Contact,
        name: 'Contact',
        path: '/contact'
    },
    {
        component: Candidate,
        name: 'Candidate',
        path: '/candidates'
    },
    {
        component: Login,
        name: 'Login',
        path: '/access'
    },
    {
        component: Faqs,
        name: 'Faqs',
        path: '/faqs'
    },
    {
        component: Jobs,
        name: 'Jobs',
        path: '/jobs'
        // path: '/jobs/:id'
    },
    {
        component: ComingSoon,
        name: 'postjob',
        path: '/postjob'
    },
    {
        component: BlogHome,
        name: 'blog',
        path: '/blog'
    },
    {
        component: BlogPost,
        name: 'blogpost',
        path: '/blog/post'
    },
    {
        component: BlogArchive,
        name: 'blogarchive',
        path: '/archive'
    },
    {
        component: Privacy,
        name: 'privacy',
        path: '/privacy'
    },
    {
        component: Terms,
        name: 'terms',
        path: '/terms'
    },
    {
        component: Error400,
        name: 'BadRequest',
        path: '/400',
        error: true
        
    },
    {
        component: Error401,
        name: 'Notfound',
        path: '/401',
        error: true
        
    },
    {
        component: Error403,
        name: 'Notfound',
        path: '/403',
        error: true
        
    },
    {
        component: Error408,
        name: 'Notfound',
        path: '/408',
        error: true
        
    },
    {
        component: Error500,
        name: 'Notfound',
        path: '/500',
        error: true
        
    },
    {
        component: Error503,
        name: 'Notfound',
        path: '/503',
        error: true
        
    },
    {
        component: NotFound404,
        name: 'Notfound',
        
    },
   
    
    
    
]

