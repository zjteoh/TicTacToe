import React, { Component } from 'react';

class Tile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tileColor: '#ECDBF6'
		};
	}

	tileOnClick () {
		this.setState({tileColor: '#9A68FE'})
	}

	render() {
		const tileStyle = {
			backgroundColor: this.state.tileColor,
			display: 'inline-block',
			width: '12vw',
			height: '12vw',
			margin: '1%',
			borderRadius: '5%'
		}

		return (
			<div style={tileStyle} onClick={() => this.tileOnClick()}>

			</div>
		);
	}
}

export default Tile;