import React,{Component} from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import ArrowForwardIosSharp from '@material-ui/icons/ArrowForwardIosSharp';
import ArrowBackIosSharp from '@material-ui/icons/ArrowBackIosSharp';
import Icon from './icon'

import posts from './post.json'
import PostPresenter from './presenter'

import 'pure-react-carousel/dist/react-carousel.es.css';

 
 class Carousel extends Component {

    constructor(){

        super()
        this.state ={

            slides: []
        }
    }

    componentDidMount(){

        console.log('THE VALUE OF JSON POST: SLIDER')
        console.log(posts)
        console.log('THE STATE BEFORE')
        console.log(JSON.stringify(this.state))
        this.setState({slides:posts},()=>{

            console.log('THE STATE INSIDE SETSTATE CALLBACK')
            console.log(this.state.slides)
        })
        console.log('THE STATE AFTER')
        console.log(JSON.stringify(this.state))

    }
   
  render() {

    
    return (

     this.state.slides.length > 0 
        ?
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={this.state.slides.length}
                className="mg-bottom-fd-lg"
            >
                <Slider className="vt-size-fd-lg">

                    {
                         this.state.slides.map((p,i)=>{

                            return(

                                <Slide index={i} key={i}><PostPresenter post={p} /> </Slide>
                            )
                        })
                        
                    }
                {/* <Slide index={0}>I am the first Slide.</Slide>
                <Slide index={1}>I am the second Slide.</Slide>
                <Slide index={2}>I am the third Slide.</Slide>
                <Slide index={3}><Icon/></Slide> */}
                </Slider>
                <div className="pos-abs top-offset-vh-sm hr-size-fl-xx-bg">
                <section className="pos-abs left-offset-fl-bt">
                    <ButtonBack className="bd-none bg-light-lta ps-abs top-offset-vh-sm"><ArrowBackIosSharp style={{fontSize:`3rem`}} /></ButtonBack>
                </section>

                <section className="pos-abs right-offset-fl-bt">
                    <ButtonNext className="bd-none bg-light-lta"><ArrowForwardIosSharp style={{fontSize:`3rem`}} /></ButtonNext>
                </section>
                
                </div>
            </CarouselProvider>
      :null
     
    );
  }
}


export default Carousel