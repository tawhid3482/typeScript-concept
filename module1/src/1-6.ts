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
    addBalance(balance:number){
        return this.balance + balance
    }
}