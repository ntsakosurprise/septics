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
   
    // this.pageLimit = 15;
    // this.totalRecords = 0;

    // pageNeighbours can be: 0, 1 or 2
    // this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);

    // this.state = { currentPage: 1,allCountries: [],currentCountries: [],totalPages: 0,pageLimit: 30 };
    // this.gotToPage = this.gotToPage


  }


  componentDidMount() {
    const { data: allCountries = [] } = Countries.findAll();
    console.log('ALL THE COUNTRIES')
    console.log(allCountries.length)
    const totalPages = Math.ceil(allCountries.length / this.state.pageLimit);
    console.log(totalPages)
    console.log(this.pageLimit)
    console.log(this.totalPages)
    this.setState({ allCountries,totalPages },()=>{
      console.log('THE TOTAL PAGES')
      console.log(this.state.totalPages)
      this.handleChanged(null,this.state.currentPage)
    });

    
   
    
  }

 

  gotToPage(event,value){

    this.setState({ currentPage: value},()=>this.handleChanged())
  }

  handleChanged = () => {

    // console.log('THE CURRENT PAGE VALUE')
    // console.log(value)
    const { allCountries } = this.state;
    const { currentPage, totalPages, pageLimit } = this.state

    const offset = (currentPage - 1) * pageLimit;
    const currentCountries = allCountries.slice(offset, offset + pageLimit);
    

    this.setState({ currentCountries, totalPages });

  }



  render() {
    const { allCountries, currentCountries, currentPage, totalPages } = this.props
    const totalCountries = allCountries.length;

    if (totalCountries === 0) return null;

    // const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();

    return (
      <div className="job__paginator">
        <div className="row d-flex flex-row py-5">

          <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
           
          <div className='{this.classes.root}'>
            
            <Typography>Page: {currentPage} of {totalPages}</Typography>
            <Pagination count={totalPages} page={currentPage} onChange={this.gotToPage.bind(this)} />
        </div>

            {/* <div className="d-flex flex-row py-4 align-items-center">
              <Pagination totalRecords={totalCountries} pageLimit={15} onPageChanged={this.onPageChanged} />
            </div> */}
          </div>

          { currentCountries.map(country => <CountryCard key={country.cca3} country={country} />) }

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
