export default class Player{
	x=0;
	y=0;
	r: number;
	
	constructor(x=0,y=0,r=0){
		this.x = x;
		this.y = y;
		this.r = r;
	}

	readonly TAU =2*Math.PI; 

	erase(ctx:CanvasRenderingContext2D){
		ctx.fillStyle="white"
		ctx.beginPath()
		ctx.arc(this.x,this.y,this.r,0,this.TAU)
		ctx.fill()
	}

	draw(ctx:CanvasRenderingContext2D){
		ctx.fillStyle = 'black'
		ctx.beginPath()
		ctx.arc(this.x,this.y,this.r-1,0,this.TAU)
		ctx.fill()
	}
}