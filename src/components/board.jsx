import Box from './box';
import React, { Component } from 'react';
class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boardMatrix: [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
			answers: [
				[ '0-0', '1-1', '2-2' ],
				[ '0-2', '1-1', '2-0' ],
				[ '0-0', '0-1', '0-2' ],
				[ '1-0', '1-1', '1-2' ],
				[ '2-0', '2-1', '2-2' ],
				[ '0-0', '1-0', '2-0' ],
				[ '0-1', '1-1', '2-1' ],
				[ '0-2', '1-2', '2-2' ]
			],
			player: 'X'
		};
		this.mainStyle = {
			display: 'flex',
			flexFlow: 'row wrap',
			flex: '3 1 0%',
			width: '67px',
			textAlign: 'center',
			transformOrigin: 'top left',
			position: 'absolute',
			top: '50%',
			transform: 'scale(5.5) translate(-50%, -50%)',
			left: '50%'
		};
	}
	clickHandler = (e) => {
		e.persist();
		let ij = e.target.id.replace('box', '').split('-');
		let boardMatrix = this.state.boardMatrix;
		boardMatrix[parseInt(ij[0])][parseInt(ij[1])] =
			boardMatrix[parseInt(ij[0])][parseInt(ij[1])] === 0
				? this.state.player
				: boardMatrix[parseInt(ij[1])][parseInt(ij[0])];
		this.setState({ boardMatrix, player: this.state.player === 'X' ? 'O' : 'X' }, () => {
			this.checkIfUserWon( boardMatrix[parseInt(ij[0])][parseInt(ij[1])]);
		});
		e.target.style.pointerEvents = 'none';
	};
	checkIfUserWon = (value) => {
		let store = [];
		// let x = parseInt(ij[0]);
		// let y = parseInt(ij[1]);
        let answers = this.state.answers
					answers.forEach(ans => {
                        let userAnsRow = []
                        ans.forEach(an => {
                            let arr = an.split('-');
                            userAnsRow.push()
                        })
                    })
			
            console.log(store);
            

	};
	render() {
		let newMat = [];
		this.state.boardMatrix.forEach((row, i) => {
			row.forEach((box, j) => {
				newMat.push(
					<Box key={i + '' + j} id={i + '-' + j} value={box ? box : ''} clicked={this.clickHandler} />
				);
			});
		});
		return <div style={this.mainStyle}>{newMat}</div>;
	}
}

export default Board;
