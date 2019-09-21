import Box from './box';
import React, { Component } from 'react';
class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boardMatrix: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
			answers: [
				['0-0', '1-1', '2-2'],
				['0-2', '1-1', '2-0'],
				['0-0', '0-1', '0-2'],
				['1-0', '1-1', '1-2'],
				['2-0', '2-1', '2-2'],
				['0-0', '1-0', '2-0'],
				['0-1', '1-1', '2-1'],
				['0-2', '1-2', '2-2']
			],
			player: 'X',
			storeX: [],
			storeO: [],
			winning: [],
			allFilledArr: []
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
			this.checkIfUserWon(boardMatrix[parseInt(ij[0])][parseInt(ij[1])], ij);
		});
		e.target.style.pointerEvents = 'none';
	};
	checkIfUserWon = (value, ij) => {
		let storeX = [...this.state.storeX];
		let storeO = [...this.state.storeO];
		let createString = `${ij[0]}-${ij[1]}`
		this.state.allFilledArr = [...this.state.allFilledArr,createString]
		if(this.state.allFilledArr.length === 9){
			setTimeout(()=> {
				window.location.reload()
			},1500)
			alert('Game Over')
		}
		if (value === 'X') {
			storeX = [...storeX, createString]
			this.setState({ storeX }, () => {
				if (this.state.storeX.length === 3) {
					let storeX = JSON.stringify(this.state.storeX)
					// console.log(this.state.storeX, this.state.storeX ===this.state.answers[0], this.state.answers[0] );
					for (let j = 0; j < this.state.answers.length; j++) { 
						let temp = this.state.answers[j]
						if(JSON.stringify(temp) ===storeX){
							console.log(JSON.stringify(temp) ,storeX);
							
							setTimeout(()=> {
								window.location.reload()
							},2000) 
							alert("X won")
							
						}
						
					}
								}
								if(this.state.storeX.length >= 3){
									this.setState({storeX :  []});
								}
			})
		}
		
	else{
		storeO = [...storeO, createString]
		this.setState({ storeO }, () => {
			if (this.state.storeO.length === 3) {
				let storeO = JSON.stringify(this.state.storeO)
				// console.log(this.state.storeO, this.state.storeO ===this.state.answers[0], this.state.answers[0] );
				for (let j = 0; j < this.state.answers.length; j++) { 
					let temp = this.state.answers[j]
					if(JSON.stringify(temp) ===storeO){
						setTimeout(()=> {
							window.location.reload()
						},2000) 
						alert("O won")
						
					}
					
				}
							}
							if(this.state.storeO.length >= 3){
								this.setState({storeO :  []});
							}
		})
				
}
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
