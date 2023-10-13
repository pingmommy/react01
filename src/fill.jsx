 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import Alpha from './util/alpha.js';
 import  { sprintf } from 'sprintf-js';
 

class App extends React.Component {
	
	constructor(){
		super();
		for(let i=0; i<20; i++){
			this.state.surface[i]=[];
			for(let j=0; j<40;j++){
				let alpha =new Alpha();
				alpha.fg='black';
				alpha.bg='black';
				this.state.surface[i][j]=alpha;	
			}
					}
	console.log(this.state.surface);
	}
	
	state = {
		surface:[],
		forecount : 0,
		count: 0,
		ellipse: 0
	}
	
	btnCreate_click(e){
		this.state.forecount++;
		let alpha = new Alpha();
		this.state.surface[alpha.line-1][alpha.column-1]=alpha;
		this.forceUpdate();
	}
		
	render() {
		return(
			<>
			<button onClick={event => this.btnCreate_click(event)}>Create</button>
			
			<hr/>
			<table border={1}>
			<thead>
			<tr>
				<th>forecount</th>
				<th>count</th>
				<th>ellipse</th>
			</tr>
			</thead>
			<tbody>
				<tr>
					<td>{this.state.forecount}</td>
					<td>{this.state.count}</td>
					<td>{this.state.ellipse}</td>
				</tr>
			</tbody>
			</table>
			<table style={{borderCollapse:'collapse', fontFamily:'monospace',fontSize:'2em'} }
			onMouseDown={event=> event.preventDefault()}
			onContextMenu={event => event.preventDefault()}
			>
				<tbody>
				{
					this.state.surface.map((row,k) =>
						<tr key={k}>
						{
							row.map((v,k) =>
							<td key={k} style={{color:v.fg, background:v.bg}}>{v.ch}</td>
						 )}
						
						</tr>
					)
				}
				</tbody>
			</table>
			</>
	)				
 }
}
let root = ReactDOM.createRoot(document.querySelector('#root')) 
root.render(<App/>)
 
 