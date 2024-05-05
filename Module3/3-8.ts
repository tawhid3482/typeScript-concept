{
    // 
    class Person {
        getSleep(){
            console.log('sleep 8 hours')
        }
    }
    class Student extends Person {
        getSleep(){
            console.log('sleep 6 hours')
        }
    }
    class dev extends Person {
        getSleep(){
            console.log('sleep 5 hours')
        }
    }
    const getSleepinHours = (param:Person)=>{
        param.getSleep()
    }
    const person1 = new Person()
    const person2 = new Student()
    const person3 = new dev()
    getSleepinHours(person2)

class Shape {
    getArea ():number{
        return 0
    }
}
class circle extends Shape {
    redius :number ;
    constructor (redius:number){
        super()
        this.redius = redius
    }
    getArea ():number{
        return Math.PI * this.redius * this.redius
    }
}

}