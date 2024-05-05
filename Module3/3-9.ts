{
    // 

    interface Vehicle1 {
       startEngine():void;
       stopEngine():void;
       moveEngine():void;

    }

    class car1 implements Vehicle1 {
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
    const toyotaCar = new car1()
    toyotaCar.startEngine()
    toyotaCar.stopEngine()

   abstract class car2 {
      abstract  startEngine(): void 
      abstract  stopEngine(): void 
      abstract  moveEngine(): void 
    }
    class  amiCat extends car2{
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
   
}