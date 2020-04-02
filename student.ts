export class Student{
    StdId:number= 18346;
    StdName:string = "Shruthi";
    StdCls:string ="Twelth class";
    constructor(id:number,name:string, stclassname:string) { 
      
        this.StdId = id;
        this.StdName = name;
        this.StdCls = stclassname;   
    }
  
    display(){
        console.log("Student name",this.StdId);
        console.log("Student Id", this.StdName);
    }

  
  }
  let studenInfo =  new Student(18254, "Shaziya","Tenth");
studentInfo.display();
let studentInfo1 =  new Student();
studentInfo1.display();