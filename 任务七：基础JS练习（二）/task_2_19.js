var arr=[];
window.onload=function(){
	//var arr=[];
	var left_in=document.getElementById('left-input');
	var left_out=document.getElementById('left-output');
	var right_in=document.getElementById('right-input');
	var right_out=document.getElementById('right-output');
	left_in.addEventListener('click',left_input,false);
	left_out.addEventListener('click',left_output,false);
	right_in.addEventListener('click',right_input,false);
	right_out.addEventListener('click',right_output,false);
}

function left_input(){
	if(arr.length>60) {alert("超过60个数据！"); return;}
	var input=document.getElementById('in').value;
	if(isNaN(input)) {alert("输入格式错误！"); return;}
	if(input<10||input>100) return;
	arr.unshift(input);
	render(arr);
}

function left_output(){
	var value=arr.shift();
	render(arr);
}

function right_input(){
	if(arr.length>60) {alert("超过60个数据！"); return;}
	var input=document.getElementById('in').value;
	if(isNaN(input)) {alert("输入格式错误！"); return;}
	if(input<10||input>100) return;
	arr.push(input);
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
		div.setAttribute("class","div-bg");
		div.style.height=arr[i]*2+"px";
		div.innerHTML=arr[i];
		boxs.appendChild(div);
	}
	container.innerHTML="";
	container.appendChild(boxs);
}