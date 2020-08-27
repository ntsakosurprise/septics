export default[


        {
            styles: {
                me: {className:"fg-light font-fd-xx-tn mg-right-fd-tn d-inline-block list__item list__item--marg-offset-bottom-small"},
                
            },
            path: "/alert",
            name: "Job alerts",
        // icon: "pe-7s-graph",
        },
        {
            styles: {
                me: {className:"fg-primary font-fd-xx-tn  mg-right-fd-xxx-md d-inline-block list__item list__item--marg-offset-bottom-small"},
                child:{className: "link__fg-primary",add: true}
               },
        path: "/postjob",
        name: "+ Post a job",
        // icon: "pe-7s-graph",

        },
        {
            styles: {
                me: {className:"fg-light sign  mg-right-fd-md d-inline-block list__item list__item--marg-offset-bottom-small"},
              
               },
        path: "/signin",
        name: {

            name: "Sign in",
            extra: true
        } 
        // icon: "pe-7s-graph",

        },
        
    
  ]
