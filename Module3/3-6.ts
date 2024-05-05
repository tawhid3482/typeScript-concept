{
    {
        // getter and setter
    
        class BankAccount {
            public id: number;
            public name: string;
            public _balance :number;

            constructor(  id: number,   name: string,
                 _balance: number){
                    this.id = id
                    this.name = name
                    this._balance = _balance
                }
    
                // addDeposit(amount : number ){
                //     this._balance = this._balance + amount    
                // }

                /// setter 
                set diposit (amount :number){
                    this._balance = this.Balance + amount
                }

                // getter 
                get Balance (){
                   return this._balance
                }

                // getBalance (){
                //     return this._balance
                // }
               

             
        }
    
        const goribAcc = new BankAccount(11,'ami',898)
        goribAcc.diposit= 2
        // goribAcc.addDeposit(4545) // function moto use 
        const mybalance = goribAcc.Balance   // property mot use
        console.log(mybalance)


    }
}