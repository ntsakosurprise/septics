
import React from 'react' 



function SearchForm() {
    

    return(

         <form className="form pd-bottom-fd-lg ">

            <p className=" home__search--fm home__search--fm-1">

                <small className="d-block font-fd-xx-tn fg-secondary">

                    <img src="img/searchfl.png" className="home__search-icons home__search-icons-s" />
                </small>

                <span className="hr-size-fl-xx-bg fg-dark bd-rad-x-bt pd-fd-xxx-tn d-block mg-top-fd-bt font-fd-x-tn">

                    <input type="text" className="bg-light pd-left-fd-xx-sm vt-size-fd-bt bx-raised hr-size-fl-xx-bg pd-fd-bt bd-none" placeholder="Search"/>

                </span>
            </p>
            <p className="home__search--fm home__search--fm-2">

                <small className="d-block font-fd-xx-tn fg-secondary">

                    <img src="img/location.png" className="home__search-icons home__search-icons-l" />

                </small>

                <span className="hr-size-fl-xx-bg fg-dark bd-rad-x-bt pd-fd-xxx-tn d-block mg-top-fd-bt font-fd-x-tn">

                <input type="text" className="bg-light pd-left-fd-xx-sm vt-size-fd-bt bx-raised hr-size-fl-xx-bg pd-fd-bt bd-none" placeholder="Location"/>

                </span>

            </p>

            <p  className="home__search--fm home__search--fm-3">

                <small className="d-block mg-bottom-fd-xxx-tn font-fd-xx-tn fg-secondary">

                    <img src="img/location.png" className="home__search-icons home__search-icons-c" />

                </small>

                <span className="hr-size-fl-xx-bg fg-dark bd-rad-x-bt pd-fd-xxx-tn d-block mg-top-fd-bt font-fd-x-tn">

                <input type="text" className="bg-light pd-left-fd-xxx-sm vt-size-fd-bt bx-raised hr-size-fl-xx-bg pd-fd-bt pd-right-fd-tn bd-none" placeholder="Category"/>

                </span>

            </p>

            <p className="home__search--circle text-align-center ">

                <input type="submit" className="cursor-pointer font-fd-xx-tn bg-primary fg-light mg-top-fl-x-sm  d-inline-block pd-fd-bt bd-none" value="Search"/>

            </p>
            

         </form>
    )

}


export default SearchForm