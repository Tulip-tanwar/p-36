class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true;
        }
        this.body.bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;

        rectmode(CENTRE);
        rect(pos.x,pos.y,this.width,this.height);
    }
}