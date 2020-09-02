import React from 'react';



class SlidingMenu extends React.Component{

  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className={"sliding-menu animated " + this.props.slideClass}>
        
        {this.props.children}
      </div>
    );
  }
}

export default SlidingMenu