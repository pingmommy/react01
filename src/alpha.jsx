import $ from "jquery"
import React from "react";
import ReactDOM from "react-dom/client";


$(document).ready(function(){
	
});

window.onload = function() {
	
}

$('h1').slideUp(0)
		.slideDown(3000);
				
let root =ReactDOM.createRoot(document.querySelector('#root'));

let lang = ['java','css','html','javascript']

root.render(
	<ol>
		{
			lang.map((v,i) => <li key={i}>{v}</li> )
		}
	</ol>
	
)



/*root.render(
	<ol>
		<li>java</li>
		<li>css</li>
		<li>html</li>
		<li>javascript</li>
	</ol>
)*/
  

