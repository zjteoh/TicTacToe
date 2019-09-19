import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTile } from '../actions';

const pickerStyle = {
	textAlign: 'center'
}

const buttonStyle = {
	margin: '5%',
	minWidth: '10%',
	borderRadius: '28px',
	fontSize: '2.5vw',
	backgroundColor: '#7f78e6',
	color: 'white',
	outline: 0
}

class Picker extends Component {
	render() {
		return (
			<div style={pickerStyle}>
				<button type="button" style={buttonStyle} onClick={() => this.props.changeTile(3)}> 
					3 x 3
				</button>

				<button type="button" style={buttonStyle} onClick={() => this.props.changeTile(6)}> 
					6 x 6
				</button>
			</div>
		);
	}
}

export default connect(null, {changeTile})(Picker);