import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';


// import React, { Component } from 'react';
import Countries from 'countries-api';
// import './App.scss';
import CountryCard from './card';

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

class Pagi extends Component {

  // state = { allCountries: [], currentCountries: [], currentPage: null, totalPages: null,pageLimit: 15 }
  // classes =   useStyles();

  constructor(props){

    super(props);
    this.totalPages = Math.ceil(this.props.search.totalJobs / this.props.search.pageLimit);
   
    // this.pageLimit = 15;
    // this.totalRecords = 0;

    // pageNeighbours can be: 0, 1 or 2
    
    // this.state = { currentPage: 1,allCountries: [],currentCountries: [],totalPages: 0,pageLimit: 30 };
    // this.gotToPage = this.gotToPage


  }


  componentDidMount() {
    // const { data: allCountries = [] } = Countries.findAll();
    // console.log('ALL THE COUNTRIES')
    // console.log(allCountries.length)

    // const { currentPage, totalJobs,pageLimit,updatePaginator } = this.props
    

    // console.log(totalPages)
    // console.log(pageLimit)
    // console.log(totalPages)
    
    // updatePaginator({ totalPages });
    // this.handleChanged(null,currentPage)
    // const { push,updateSearch,fetchJobs,search } = this.props
    // const { currentPage,skip, pageLimit} = search
    // push(`/jobs?j=${search.keyword}&l=${search.location}&skip=${skip}&limit=${pageLimit}`)
    // fetchJobs(`j=${search.keyword}&l=${search.location}&skip=${skip}&limit=${pageLimit}`)
  


    
   
    
  }

 

 

  gotToPage(event,value){

    this.handleChanged(value)
  }

  handleChanged = (value) => {

    // console.log('THE CURRENT PAGE VALUE')
    // console.log(value)
    // const { allCountries } = this.state;
    const {actions,search } = this.props 
    const {saveJobSearchParams,push} = actions
    // const {searchy} = search 
    const { currentPage, pageLimit} = search


    const skip = (value - 1) * pageLimit;
    console.log('PAGINATOR::SKIP')
    console.log(skip)
    console.log(value)
  
    // const currentCountries = allCountries.slice(offset, offset + pageLimit);

    saveJobSearchParams({currentPage: value,skip: skip,fetchJobs:true})
      // console.log('THE STORE SKIP')
      // console.log(search.skip)
      // push(`/jobs?j=${search.keyword}&l=${search.location}&skip=${search.skip}&limit=${search.pageLimit}`)
      // fetchJobs(`j=${search.keyword}&l=${search.location}&skip=${search.skip}&limit=${search.pageLimit}`)
    

    // this.setState({ currentCountries, totalPages });

  }



  render() {
    
    const {search } = this.props 
    // const {searchy} = search
    const { currentPage,totalJobs} = search

    console.log('THE PAGINATOR COMPONENT IS RERENDERING')
    

   
    // const totalCountries = allCountries.length;

    if (totalJobs === 0) return null;

    // const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();

    return (
      <div className="job__paginator">
        <div className="row d-flex flex-row py-5">

          <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
           
          <div className='{this.classes.root}'>
            
            <Typography>Page: {currentPage} of {this.totalPages}</Typography>
            <Pagination count={this.totalPages} page={currentPage} onChange={this.gotToPage.bind(this)} />
        </div>

            {/* <div className="d-flex flex-row py-4 align-items-center">
              <Pagination totalRecords={totalCountries} pageLimit={15} onPageChanged={this.onPageChanged} />
            </div> */}
          </div>

          {/* { currentCountries.map(country => <CountryCard key={country.cca3} country={country} />) } */}

        </div>
      </div>
    );
  }

}

export default Pagi;

// const useStyles = makeStyles(theme => ({
//   root: {
//     '& > * + *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

// export default function PaginationControlled() {

//   const classes = useStyles();
//   const [page, setPage] = React.useState(1);
//   const handleChange = (event, value) => {
//     console.log('THE VALUE OF THE CLICKED ITEM')
//     console.log(value)
//     setPage(value);
//   };

//   return (
//     <div className={classes.root}>
//       <Typography>Page: {page} of 10</Typography>
//       <Pagination count={20} page={page} onChange={handleChange} />
//     </div>
//   );
// }
