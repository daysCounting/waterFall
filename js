window.onload=function(){
 waterfall('main','box');
 var xy=0;
  	var dataInt={'data':[{'src':'0.jpg'},{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'},{'src':'5.jpg'},{'src':'6.jpg'},{'src':'7.jpg'},{'src':'8.jpg'},{'src':'9.jpg'},{'src':'10.jpg'},{'src':'11.jpg'},{'src':'12.jpg'},{'src':'13.jpg'},{'src':'14.jpg'},{'src':'15.jpg'},{'src':'16.jpg'},{'src':'17.jpg'},{'src':'18.jpg'},{'src':'19.jpg'},{'src':'20.jpg'},{'src':'21.jpg'},{'src':'22.jpg'},{'src':'23.jpg'},{'src':'24.jpg'},{'src':'25.jpg'},{'src':'26.jpg'},{'src':'27.jpg'},{'src':'28.jpg'},{'src':'29.jpg'},{'src':'30.jpg'},{'src':'31.jpg'},{'src':'32.jpg'},{'src':'33.jpg'},{'src':'34.jpg'},{'src':'35.jpg'},{'src':'36.jpg'},{'src':'37.jpg'},{'src':'38.jpg'},{'src':'39.jpg'},{'src':'40.jpg'},{'src':'41.jpg'},{'src':'42.jpg'},{'src':'43.jpg'},{'src':'44.jpg'},{'src':'45.jpg'},{'src':'46.jpg'},{'src':'47.jpg'},{'src':'48.jpg'},{'src':'49.jpg'},{'src':'50.jpg'},{'src':'51.jpg'},{'src':'52.jpg'},{'src':'53.jpg'},{'src':'54.jpg'},{'src':'55.jpg'},{'src':'56.jpg'},{'src':'57.jpg'},{'src':'58.jpg'},{'src':'59.jpg'},{'src':'60.jpg'},{'src':'61.jpg'},{'src':'62.jpg'},{'src':'63.jpg'},{'src':'64.jpg'},{'src':'65.jpg'},{'src':'66.jpg'},{'src':'67.jpg'},{'src':'68.jpg'},{'src':'69.jpg'},{'src':'70.jpg'},{'src':'71.jpg'},{'src':'72.jpg'},{'src':'73.jpg'},{'src':'74.jpg'},{'src':'75.jpg'},{'src':'76.jpg'},{'src':'77.jpg'},{'src':'78.jpg'},{'src':'79.jpg'},{'src':'80.jpg'},{'src':'81.jpg'},{'src':'82.jpg'},{'src':'83.jpg'},{'src':'84.jpg'},{'src':'85.jpg'},{'src':'86.jpg'},{'src':'87.jpg'},{'src':'88.jpg'},{'src':'89.jpg'},{'src':'90.jpg'}]};
 window.onscroll = function(){
    flag=8;
 	if(checkScrollSlide){
     var oParent = document.getElementById('main');
   if(xy<90){
     for(var i= xy;i<dataInt.data.length&&flag>0;i++){
     	flag=flag-1;
     	var oBox=document.createElement('div');
     	    oBox.className='box';
     	    oParent.appendChild(oBox);
     	    var pic = document.createElement('div');
     	    pic.className='pic';
     	    oBox.appendChild(pic);
     	    var oImg = document.createElement('img');
     	    oImg.src="images/"+dataInt.data[i].src;
     	    pic.appendChild(oImg);
     	    xy=i;
     }
}
     waterfall('main','box');
 	};
 }
}
function waterfall(parent,box){
  var oParent = document.getElementById(parent);
  var oBoxs   = getByClass(oParent,box);
  var oBoxW   = oBoxs[0].offsetWidth;
  var cols    = Math.floor(document.documentElement.
  					clientWidth/oBoxW);	
 oParent.style.cssText = 'width:'+oBoxW*cols+
               'px;margin:0 auto';
  var hArr = [];
  for (var i = 0; i < oBoxs.length; i++) {
  	if(i<cols){
  		hArr.push(oBoxs[i].offsetHeight);
  	}else{
  		var minH = Math.min.apply(null,hArr);
  		var Index=getMinHIndex(minH,hArr);
  		oBoxs[i].style.position='absolute';
  		oBoxs[i].style.top     =minH+'px';
  		oBoxs[i].style.left    =oBoxW*Index+'px'; 
  		hArr[Index] = hArr[Index]+oBoxs[i].offsetHeight;
  	}
  
  	
  };
  	console.log(hArr);
}
function getByClass(parent,className){
   var boxArr    = new Array();
   var oElements = parent.getElementsByTagName('*');
  
      for (var i = 0; i < oElements.length; i++) {
      	if(oElements[i].className==className){
      		boxArr.push(oElements[i]);
      	}
      }
      return boxArr;
};
function getMinHIndex(val,arr){
	for (var i in arr){
		if(arr[i]==val)
          return i;
	}
};
function checkScrollSlide(){
	var oParent = document.getElementById('main');
	var oBox    = getByClass(oParent,'box');
	var lastBoxH= oBox[oBox.length-1].offsetTop+Math.
				floor(oBox[oBox.length-1].offsetHeight/2);

	var scrollTop= document.body.scrollTop || document.documentElement.scrollTop;
	var documentH=document.documentElement.clientHeight;
	return(lastBoxH<scrollTop+documentH)?true:false;
}
