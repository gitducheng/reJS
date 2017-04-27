var divList=[],
	wrap=document.getElementById('wrap'),
	btn=document.getElementsByTagName('input'),
	preBtn=btn[0],
	nextBtn=btn[1],
	checkBtn=btn[3],
	check=null,
	timer=null;

window.onload=function(){
	preBtn.onclick=function(){
		reset();
		preOrder(wrap);
		changeColor();
	}


	nextBtn.onclick=function(){
		reset();
		nextOrder(wrap);
		changeColor();
	}

	checkBtn.onclick=function(){
		check=btn[2].value;
		changeColor();
	}
}

function preOrder(node){
	if(node){
		divList.push(node);
		for(var i=0;i<node.children.length;i++){
			preOrder(node.children[i]);
		}
	}
}

function nextOrder(node){
	if(node){
		for(var i=0;i<node.children.length;i++){
			nextOrder(node.children[i]);
		}
		divList.push(node);
	}
}

function reset(){
	for(var i=0;i<divList.length;i++){
		divList[i].style.backgroundColor="#fff";
	}
	divList=[];
}

function changeColor(){
	var i=0;
	divList[i].style.backgroundColor="#000";
	i=i+1;
	timer=setInterval(function(){
		if(i<divList.length){
			if(divList[i].firstChild.nodeValue.replace(/(^\s*)|(\s*$)/g, "")==check){
			divList[i].style.backgroundColor="blue";
			divList[i-1].style.backgroundColor="#fff";
			return;
			};
//console.log(divList[i].firstChild.nodeValue);
		divList[i].style.backgroundColor="#000";
		divList[i-1].style.backgroundColor="#fff";
		i=i+1;
		}
		else{
			divList[divList.length-1].style.backgroundColor="#fff";
			clearInterval(timer);
		}
	}, 500);
	
}