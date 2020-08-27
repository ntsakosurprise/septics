
import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'

import BlogHeader from './components/blogheader/blogheader'
import BlogArticle from './components/blogarticle/blogarticle'
import BlogRelated from './components/blogrelated/blogrelated'



class BlogPost extends Component{


    constructor(props){

        super(props)
        this.state = {

            currentForm: 'signup'
            

        }
        
    }

    componentWillMount(){

        if(this.props.isAuth){

            this.props.actions.navigate('/dashboard')
         }
    }

    componentDidUpdate(){

        console.log('THE LOGIN COMPONENT WILL MOUNT AT SOME POINT')
        console.log('THE VALUE OF AUTH IN DID UPDATE')
        console.log(this.props.isAuth)

         if(this.props.isAuth){

            this.props.actions.navigate('/dashboard')
         }
       
            // this.props.actions.navigate('/dashboard')
            // this.props.actions.registerUser({username: 'surprise',surname: 'mashele'})
        

    }



    renderForm (form,e){

        e.preventDefault()
        this.setState({
            currentForm: form
        })
    }

    registerUser = (user)=>{

        console.log('THIS  LOGIN COMPONENT')
        console.log(this)
        this.props.actions.registerUser(user)
    }

    loginUser = (user)=>{

        console.log('THIS  LOGIN COMPONENT')
        console.log(this)
        this.props.actions.loginUser(user)
    }


    render(){

       

        return(

            <article className="blog">
               
               <BlogHeader />
               <BlogArticle />
               <BlogRelated />
               
            </article>
        )
    }




}

const mapStateToProps = (state)=>{

    return{
        state:{
            ...state.history
        }
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions},dispatch)
    }
}

export default connect(mapStateToProps,mapDispachToProps)(BlogPost)