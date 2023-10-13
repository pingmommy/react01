 import $ from 'jquery'
 $('h1').fadeOut(0).fadeIn(3000);
 
 import React from 'react';
 import ReactDOM from 'react-dom/client';
 
 let root = ReactDOM.createRoot(document.querySelector('#root'));
 
// root.render(<App/>)

 function App() { //함수형 컴포넌트
	
	let color = ['red','green','blue'];
	
	 return (
		 <ol>
		 	{
				 color.map((v,k)=> <li key={k}>{v}</li>)
			 }
		 </ol>
	 )
 }
  
 class App2 extends React.Component { //클래스형 컴포넌트
	
	lang = ['java','python','css','html']
	
	constructor(){
		super();
	}
	 
	 render(){
		 return(
			 <ul>
			 	{
					 this.lang.map((v,k)=><li key={k}>{v}</li>)
				 }
			 </ul>
		 )
	 }
	 
 }
 
 root.render(<App2/>)
 