{
    // 

    interface Vehicle1 {
       startEngine():void;
       stopEngine():void;
       moveEngine():void;

    }

    class car implements Vehicle1 {
       startEngine(): void {
           console.log('engine start')
       }
       stopEngine(): void {
           console.log('stop ')
       }
       moveEngine(): void {
           console.log('move ')
       }
    }
    const toyotaCar = new car()
    toyotaCar.startEngine()
    toyotaCar.stopEngine()
}