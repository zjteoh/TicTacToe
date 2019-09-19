import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tile from './Tile';

const mainframeStyle = {
	textAlign: 'center',
	margin: '2%'
};

class Board extends Component {
	render() {
		let cols = [];
		let rows = [];

		for (let i = 0; i < this.props.tileSize; ++i) {
			cols.push(<Tile />);
		}

		for(let i = 0; i < this.props.tileSize; ++i) {
			rows.push(<div>{cols}</div>)
		}

		return (
			<div style={mainframeStyle}>
				{rows}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		tileSize: state.tile
	}
}

export default connect(mapStateToProps, null)(Board);