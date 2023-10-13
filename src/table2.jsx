 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import Alpha from './util/alpha.js';
 import  { sprintf } from 'sprintf-js';
 

class App extends React.Component {
	
	constructor() {
		super();
		this.createAlpha();
	}
	
	state = {
		value : 10,
		alphas:[]
	}
	
	createAlpha(){
		this.state.alphas=[];
		for(let i=0; i<this.state.value; i++){
			this.state.alphas[i]=new Alpha();
			}
	}
	
	valueChange(e){
		console.log(e.target.value);
		let value = e.target.value;
		if(value>1000)
			this.state.value=1000;
		else if(value<0)
			this.state.value=0;
		else 
			this.state.value=value;
		
		this.forceUpdate();
	}
	
	btnCreate_click(e){
		console.log("alpha : " + this.state.value);
		this.createAlpha();
		this.forceUpdate();
	}

	render() {
		console.log("render..");
		return(
			<>
			<input type='number'value={this.state.value} onChange={(event) => this.valueChange(event)} />
			 <button onClick={(event)=>this.btnCreate_click(event)}>click!</button>
			<hr/>
			<table width='500' border={1} style={{borderCollapse : 'collapse',borderColor:'red'}} >
				<thead>
					<tr>
						<th>no</th>
						<th>line</th>
						<th>column</th>
						<th>fg</th>
						<th>bg</th>
						<th>ch</th>
						<th>alpha</th>
					</tr>
				</thead>
				<tbody>
					{
						this.state.alphas.map((v,k)=>
							<tr key={k}>
								<td>{sprintf("%04d",k+1)}</td>
								<td align='right'>{v.line}</td>
								<td align='right'>{v.column}</td>
								<td align='center'>{v.fg}</td>
								<td align='center'>{v.bg}</td>
								<td align='center'>{v.ch}</td>
								<td style={{background :v.bg, color: v.fg}}>{v.ch}</td>
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
 
 