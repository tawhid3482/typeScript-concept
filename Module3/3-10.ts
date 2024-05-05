
{
    // 

    class BankAccount {
        public readonly id:number;
        public name:string;
        protected _balance : number;
        constructor(  id: number,   name: string,
             _balance: number){
                this.id= id
                this.name = name
                this._balance = _balance
            }

            addDeposit(amount : number ){
                this._balance = this._balance + amount    
            }
           private getBalance (){
                return this._balance
            }
           
            // class StudentAccount extends BankAccount{
            //     test(){
            //         this._balance
            //     }
            // }
    }

    const goribAcc = new BankAccount(11,'ami',898)
    // goribAcc
    const mybalance = goribAcc.getBalance()
    console.log(mybalance)
    m
}