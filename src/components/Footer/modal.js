
import React, {Component} from 'react' 
import PropTypes from 'prop-types'

class Modal extends Component {
	static propTypes = {

        isModalOpen:PropTypes.bool.isRequired,
		closeModal: PropTypes.func.isRequired,
		style: PropTypes.shape({
			modal: PropTypes.object,
			overlay: PropTypes.object
		})
	};

	constructor(props) {
		super(props);

		this.outerStyle = {
			position: "fixed",
            top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			overflow: "auto",
			zIndex: 1000
		};

		// default style
		this.style = {
			modal: {
				position: "relative",
                width: `60%`,
                left:  `10%`,
                padding: 2,
                paddingTop: `20px`,
				boxSizing: "border-box",
				backgroundColor: "#fff",
				margin: "0 auto",
                borderRadius: 3,
                zIndex: 100002,
                height: `500px`,
				textAlign: "left",
				boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
				...this.props.style.modal
			},
			overlay: {
                position: "fixed",
                top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				width: "100%",
				height: "100%",
				backgroundColor: "rgba(0,0,0,0.5)",
				...this.props.style.overlay
			}
		};
	}

	// render modal
	render() {

        // console.log('THE SCROLLLHEIGH VALUE')
        // console.log(this.props.scrollHeight)

		return (
            <div   
            className="service__modal-outter"
				style={{
                    // ...this.outerStyle,
					display: this.props.isModalOpen ? "block" : "none"
				}}
			>
				<div className="service__modal-overlay"  onClick={this.props.closeModal} />
				<div onClick={this.props.closeModal} />
				<div className="service__modal-inner" style={{
                    // ...this.style.modal,
                    top: this.props.scrollHeight,
                    }}>{this.props.children}
                    
                </div>
			</div>
		);
	}
}




export default Modal