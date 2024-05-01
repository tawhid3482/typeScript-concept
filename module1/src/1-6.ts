{
// learning function
function add(num1:number,num2:number):number{
return num1 + num2
}
add(451,75)

const sub =(num1:number,num2:number):number=>num1+num2

// object -- function -- method
const poorUser = {
    UserName:'Saikat',
    balance : 25,
    addBalance(balance:number):string{
        return `My Balance is : ${this.balance +balance}` 
    }
}


const arr: number[]=[1,65,2]
const arrayNumber:number[] = arr.map((elem:number)=>elem*elem)
}