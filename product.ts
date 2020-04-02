/**
 * Create a product class The properties are ProID, 
 * ProName, ProPrice display the information and ProPrice will be added additional 
 * tax of GST
 */
export class product{
    ProID:number = 123,
    ProName:string = "Sanitizer";
    ProPrice:number = 320;
    GSTPrice:number = 8;//in percentage
    constructor(id:number, name:string, price:number){
        this.ProPrice = price;
        this.ProName = name;
        this.ProID = id;
    }
    getPricewithGst(){
        const withgst =  this.ProPrice +(this.ProPrice*(this.GSTPrice /100));
        console.log("ProID",this.ProID);
        console.log("Proname",this.ProName);
        console.log("Proprice", this.ProPrice);
        return withgst;
    }
}
let product1 = new product(11, "handlwash",110);
product1.getPricewithGst();