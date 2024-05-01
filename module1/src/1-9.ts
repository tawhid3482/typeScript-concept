{
    // type alias 
    type Student = {
        name:string;
        age:number;
        numberPH:string
    }
    const student1 : Student={
        name:'saikat',
        age:4,
        numberPH:'16594621'
    }
    const student2 : Student={
        name:'tamim',
        age:44,
        numberPH:'165954621'
    }


type UserName = string
const userName: UserName = 'sa'
type booleanValue = boolean
const isAdmin:booleanValue = true 


type Add=(num1:string, num2:string)=>string
const add :Add = (num1,num2)=>num1+num2

}