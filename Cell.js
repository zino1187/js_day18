/*달력을구성하는 하나의 셀을 정의한다*/
class Cell{
	constructor(container,x,y,width,height,velX,velY,targetX,targetY,bg,text){
		this.container=container;
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.velX=velX;
		this.velY=velY;
		this.targetX=targetX;
		this.targetY=targetY;
		this.bg=bg;
		this.text=text;
		this.a=0.1;

		this.div=document.createElement("div");
		/*
		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
		*/
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.background=this.bg;
		this.div.style.border=1+"px solid #000";
		this.div.innerText=this.text;
		this.div.style.fontSize=20+"px";
		this.div.style.float="left";

		this.container.appendChild(this.div);

		//클릭이벤트 구현 
		this.div.addEventListener("click", ()=>{
			//alert("저는 "+this.div.innerText+" 일 입니다");
			openBox(this.div.innerText);
		});
	}
	tick(){
		this.x=this.x+this.a*(this.targetX-this.x);
		this.y=this.y+this.a*(this.targetY-this.y);
	}
	render(){
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
	}
}