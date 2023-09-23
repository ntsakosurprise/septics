

import Home from '../Home/component'
import About from '../About/component'
import Contact from '../Contact/component' 
import Services from '../Services/component'
import NotFound404 from '../Notfound404/component'
import Error400 from '../Error400/component'
import Error401 from '../Error401/component'
import Error403 from '../Error403/component'
import Error408 from '../Error408/component'
import Error500 from '../Error500/component'
import Error503 from '../Error503/component'
import Privacy from '../Privacy/component'
import Faqs from '../Faqs/component'
import Sitemap from '../Sitemap/component'



export default [
    {
        component: Home,
        name: 'Home',
        path: '/'
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
        component: Sitemap,
        name: 'Faqs',
        path: '/faqs'
    },

    {
        component: Faqs,
        name: 'Sitemap',
        path: '/sitemap'
    },
    
    {
        component: Privacy,
        name: 'privacy',
        path: '/privacy'
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

