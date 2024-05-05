
{
    // 

    class BankAccount {
        public readonly id:number;
        public name:string;
        private _balance : number;
        constructor(  id: number,   name: string,
             _balance: number){
                this.id= id
                this.name = name
                this._balance = _balance
            }

            addDeposit(amount : number ){
                this._balance = this._balance + amount    
            }
            getBalance (){
                return this._balance
            }
           
            class StudentAccount extends BankAccount{
                test(){
                    this.
                }
            }
    }

    const goribAcc = new BankAccount(11,'ami',898)
    goribAcc.addDeposit(4545)
    const mybalance = goribAcc.getBalance()
    console.log(mybalance)
}