// 前:wrap 左 two three four 右 two three four
//中：左 two three four  wrap 右 two three four
//后：左 two three four 右 two three four wrap
var divList=[],
	btn=document.getElementsByTagName('input'),
	wrap=document.getElementById('wrap'),
	preBtn=btn[0],
	midBtn=btn[1],
	nextBtn=btn[2],
	timer=null;

window.onload=function(){
	preBtn.onclick=function(){
		reset();
		preOrder(wrap);
		changeColor();
	};

	midBtn.onclick=function(){
		reset();
		midOrder(wrap);
		changeColor();
	}

	nextBtn.onclick=function(){
		reset();
		nextOrder(wrap);
		changeColor();
	}
}

function preOrder(node){
	if(node){
		divList.push(node);
		preOrder(node.firstElementChild);
		preOrder(node.lastElementChild);
	}
}

function midOrder(node){
	if(node){
		midOrder(node.firstElementChild);
		divList.push(node);
		midOrder(node.lastElementChild);
	}
}

function nextOrder(node){
	if(node){
		nextOrder(node.firstElementChild);	
		nextOrder(node.lastElementChild);
		divList.push(node);
	}
}

function reset(){
	divList=[];
	var divs=document.getElementsByTagName('div');
	for(let i=0;i<divs.length;i++){
		divs[i].style.backgroundColor="#fff";
	}
}

function changeColor(){
	var i=0;
	divList[i].style.backgroundColor="#000";
	i++;
	timer=setInterval(function(){
		if(i<divList.length){
			divList[i].style.backgroundColor="#000";
			divList[i-1].style.backgroundColor="#fff";
			i++;
		}
		else {
			clearInterval(timer);
			divList[divList.length-1].style.backgroundColor="#fff";
		}
	}, 500);
}

