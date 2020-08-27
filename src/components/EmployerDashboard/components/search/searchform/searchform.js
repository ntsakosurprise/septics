
import React from 'react' 
import Search from '@material-ui/icons/Search';




function SearchForm() {
    

    return(

         <form className="form pd-bottom-fd-xx-tn ">

            <p className="hr-size-fl-xx-bg pos-rel ">

                

                <span className="hr-size-fl-xx-bg pos-rel fg-dark bd-rad-x-bt pd-fd-xxx-tn d-block">

                    <small className="d-block pos-abs top-offset-fl-x-sm left-offset-fl-xx-lg">
                        <Search  style={{fontSize: 20,color: "orange"}}/>
                    </small>
                    <input type="text" className="bg-light bd-rad-x-bt pd-left-fd-sm vt-size-fd-bt bx-raised hr-size-fl-x-bg pd-fd-bt bd-none" placeholder="Search People, messages, groups"/>

                </span>
            </p>
          

           
            

         </form>
    )

}


export default SearchForm