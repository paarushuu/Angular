/**
 * Create a super class called Car. The Car class has the following fields and methods.
a. Number speed;
b. number regularPrice;
c. String color;
d. Number getSalePrice();
Create a subclass of Car class and name it as Truck. The Truck class has the following fields and methods.
e. Number weight;
f. Number getSalePrice(); // If weight > 2000, 10% discount. Otherwise, 20% discount.
 */

export class Car{
    speed:number ;
    regularPrice:number;
    color:string;
    constructor(speed:number, regularPrice:number,color:string){
        this.speed = speed;
        this.regularPrice = regularPrice;
        this.color = color;
    }
    getSalesPrice():number{
        const salesPrice = 30; //in %
        return this.regularPrice+ (this.regularPrice*(salesPrice/100));
    }
}
export class Truck extends Car{
    weight:number;
    constructor(weight:number, speed:number, regularPrice:number, color:string){
        super(speed, regularPrice, color);
        this.weight = weight;
    }
    getSalesPrice():any{
        if(this.weight>2000){
            return this.regularPrice - (this.regularPrice*(10/100));
        }else{
            return this.regularPrice - (this.regularPrice*(20/100));

        }
    }
}

let truck =  new Truck(1001,120,2500000,"blue");
const discountedPrice = truck.getSalesPrice();
console.log("Price",discountedPrice)
let truck1 =  new Truck(3000,150, 4000000,"yellow");
const discountedPrice1 = truck1.getSalesPrice();
console.log("Price",discountedPrice1);


