
import React, {Component} from 'react' 
import {Link} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'
import Header from './header/header'
import Faqi from './faqi/fagi'





class Faqs extends Component{


    constructor(props){

        super(props)
    }

   


    render(){

        return(

            <article className="faqs">
                  
                  <section>
                      <Header />
                  </section>
                  <Faqi />
                  <section className="faqs__contact">

                      <p className="faqs__contact--text">Your question(s) not answered?</p>
                      <Link to="/contact" className="link">
                        <button className="faqs__contact--btn">Email us</button>
                      </Link>

                  </section>
                    
                

                

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

export default connect(mapStateToProps,mapDispachToProps)(Faqs)