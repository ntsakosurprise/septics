
import React, {Component} from 'react' 
import {Link} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
import NotfoundHeader from './notfoundheader/notfoundheader'





class NotFound404 extends Component{


    constructor(props){

        super(props)
    }

    


    render(){

        return(

            <article className="grid-row pd-bottom-fd-xxx-sm">
                  
                  <section>
                      <NotfoundHeader />
                  </section>

                 <section className="notfound__content">

                     <div className="notfound__ow">

                         <span className="notfound__ow--f-1">5</span>
                         <span className="notfound__ow--o">
                             <small className="notfound__ow--o-num">0</small>
                             <small className="notfound__ow--o-text">500E</small>
                         </span>
                         <span className="notfound__ow--f-2">5</span>

                     </div>
                     <div className="notfound__message">

                        <h3 className="notfound__message--title">Something went wrong</h3>

                        <p className="notfound__message--text">
                            You got to this page because something went wrong on our end. Don't worry though, it's not 
                            you, it's us, and we very much apologize.

                        </p>

                        <Link to="/" className="link">
                            <button className="notfound__message--btn">Go Home</button>
                        </Link>
                     </div>
                 </section>

                 <strong className="clearfix" />

            </article>
        )
    }




}

const mapStateToProps = (state)=>{


    return {

        login: {
            ...state.auth
        }
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions},dispatch)
    }
}

export default connect(mapStateToProps,mapDispachToProps)(NotFound404)