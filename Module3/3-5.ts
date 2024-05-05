{
    // 

    class BankAccount {
        constructor(public readonly id: number, public  name: string,
            protected _balance: number){}

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