
import React from 'react' 



function SearchForm() {
    

    return(

         <form className="form pd-bottom-fd-lg pd-bottom-fd-x-sm ">

            <p className="list__item list__item--ve list__item--marg-offset-bottom-small d-inline-block pd-top-fd-bt">

                <small className="d-block mg-bottom-fd-xxx-tn font-fd-xx-tn fg-secondary">

                    <img src="img/searchfl.png" className="home__search-icons home__search-icons-s" />
                </small>

                <span className="hr-size-fl-xx-bg fg-dark bd-rad-x-bt pd-fd-xxx-tn d-block mg-top-fd-bt font-fd-x-tn">

                    <input type="text" className="bg-light pd-left-fd-sm vt-size-fd-bt bx-raised hr-size-fl-xx-md pd-fd-bt bd-none" placeholder="Find jobs made just for you"/>

                </span>
            </p>
            <p className="d-inline-block">

                <small className="d-block mg-bottom-fd-xxx-tn font-fd-xx-tn fg-secondary">

                    <img src="img/location.png" className="home__search-icons home__search-icons-l" />

                </small>

                <span className="hr-size-fl-xx-bg fg-dark bd-rad-x-bt pd-fd-xxx-tn d-block mg-top-fd-bt font-fd-x-tn">

                <input type="text" className="bg-light pd-left-fd-sm vt-size-fd-bt bx-raised hr-size-fl-xx-md pd-fd-bt bd-none" placeholder="Soshanguve, Pretoria, SA"/>

                </span>

            </p>

            <p className="d-inline-block">

                <small className="d-block mg-bottom-fd-xxx-tn font-fd-xx-tn fg-secondary">

                    <img src="img/location.png" className="home__search-icons home__search-icons-l" />

                </small>

                <span className="hr-size-fl-xx-bg fg-dark bd-rad-x-bt pd-fd-xxx-tn d-block mg-top-fd-bt font-fd-x-tn">

                <input type="text" className="bg-light pd-left-fd-sm vt-size-fd-bt bx-raised hr-size-fl-xx-md pd-fd-bt bd-none" placeholder="Soshanguve, Pretoria, SA"/>

                </span>

            </p>

            <p className="home__search--circle bg-primary ">

                <input type="submit" className="cursor-pointer fg-dark d-inline-block pd-fd-bt bd-none" value="Search"/>

            </p>
            

         </form>
    )

}


export default SearchForm