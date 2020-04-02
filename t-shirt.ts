/**
 * Create a T-Shirt class with the following fields.

String color

String material

String design

Create three instances of object based on different sizes like small, large , xtra-large.
 */

class tshrit{
    color:string = "red";
    material:string = "cotton";
    design:string = "roundneck"
    constructor(color:string, material:string, design:string){
        this.color = color;
        this.material = material;
        this.design = design;
    }
    smallSize(){
        console.log('Its a small size');
    }
    largeSize(){
        console.log('Its a big size');
    }
    xlargeSize(){
        console.log('Its a x large size');
    }

}


let small =  new tshrit('blue','cotton','vneck');
small.smallSize();
let large =  new tshrit();
large.largeSize();
let xlarge = new tshrit();
xlarge.xlargeSize();