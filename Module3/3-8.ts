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
class rectange extends Shape {
    height :number ;
    width :number ;
    constructor (height:number,width:number){
        super()
        this.height = height
        this.width = width
    }
    getArea ():number{
        return Math.PI * this.height * this.width
    }
}
const getShapeArea = (param : Shape)=>{
console.log(param.getArea())
}

const shape1 = new Shape()
const shape2 = new circle(10)
const shape3 = new rectange(10,5)
getShapeArea(shape1)
getShapeArea(shape2)
getShapeArea(shape3)


}