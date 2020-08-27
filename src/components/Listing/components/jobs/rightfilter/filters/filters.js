
import CategoryFilter from './category'
import PostDate from './postdate'
import JobType from './jobtype'
import Distance from './distance'
import Location from './location'
import SalaryRange from './salaryrange'
import Qualification from './qualification'
import Experience from './experience'
import Gender from './gender'
import CareerLevel from './career'



export default [

      {
        component: CategoryFilter,
        name: 'Job Category',
        data: 'categories'
       
    
      },
      {
        component: PostDate,
        name: 'Date Posted',
      
        
      },
      {
        component: JobType,
        name: 'Job Type',
       
        
      },
      // {
      //   component: Distance,
      //   name: 'Distance',
       
        
      // },
      {
        component: Location,
        name: 'Location',
        data: 'locations'
       
        
      },
      {
        component: SalaryRange,
        name: 'Salary Range',
       
        
      },
      {
        component: Experience,
        name: 'Experience',
       
        
      },
      {
        component: Gender,
        name: 'Gender',
       
        
      },
      {
        component: Qualification,
        name: 'Qualification',
       
        
      },
      {
        component: CareerLevel,
        name: 'Career Level',
       
        
      },
     
]