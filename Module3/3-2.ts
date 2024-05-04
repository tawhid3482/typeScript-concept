{
    // oop -- inheritance
class person{
    constructor(public name: string, public age: number) {
    }
    getSleep(numberOfSleep :number){
        console.log(`${this.name} will sleep for ${numberOfSleep}`)
    }
}

    class student extends person {
        // name:string;
        // age:number;
        constructor(public name: string, public age: number) {
        super(name,age)
        }
       

    }
    const teacher = new student('saikat', 45)
    // stundent1
 
    class teacher1 extends person{
        
        constructor(public name: string, public age: number,public role:string) {
            super(name,age)
        }
       takeClass(numberOfClass:number){
        console.log(`the teacher name is ${this.name} and his class ${numberOfClass}`)
       }
    
    }
  const teacher5 = new teacher1('ami',45,'admin')
  teacher5.name
}
