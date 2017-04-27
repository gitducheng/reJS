var arr;
window.onload=function(){
	//var arr=[];
	var left_in=document.getElementById('left-input');
	var left_out=document.getElementById('left-output');
	var right_in=document.getElementById('right-input');
	var right_out=document.getElementById('right-output');
	var check=document.getElementById('check');
	left_in.addEventListener('click',left_input,false);
	left_out.addEventListener('click',left_output,false);
	right_in.addEventListener('click',right_input,false);
	right_out.addEventListener('click',right_output,false);
	check.addEventListener('click',num_match,false);
}
function num_match(){
	var num_check=document.getElementById('num_check').value;
	var num_length=num_check.length;
	var container=document.getElementById('container');
	var boxs=document.createDocumentFragment();
	for(let i=0;i<arr.length;i++){
		if(arr[i].length>=num_length){
			//arr[i].toString();
			var a,b;
			a=arr[i].substring(0,num_length);
			if(a==num_check){
				//a=arr[i].splice(0,num_length);
				//a.style.backgroundColor="red";
				b=arr[i].slice(num_length);  //包括第一个数
				var div=document.createElement("div");
				div.setAttribute("class","num-bg");
				div.innerHTML="<span>"+a+"</span>"+b;
				boxs.appendChild(div);
	
			}
		}
	}
	container.innerHTML="";
	container.appendChild(boxs);
}

function left_input(){
	var input=document.getElementById('in').value;
	arr=input.match(/[A-Za-z0-9_]{1,}/g);
	//arr.unshift(input);
	render(arr);
}

function left_output(){
	var value=arr.shift();
	render(arr);
}

function right_input(){
	var input=document.getElementById('in').value;
	arr=input.match(/[A-Za-z0-9_]{1,}/g);
	//arr.push(input);
	render(arr);
}

function right_output(){
	var value=arr.pop();
	render(arr);
}

function render(){
	var container=document.getElementById('container');
	var boxs=document.createDocumentFragment();
	for(let i=0;i<arr.length;i++){
		var div=document.createElement("div");
		div.setAttribute("class","num-bg");
		div.innerHTML=arr[i];
		boxs.appendChild(div);
	}
	container.innerHTML="";
	container.appendChild(boxs);
}