{
    // type assertion
     
    let anything :any;
    anything = 'hi ';
    anything = 55;
    // (anything as number).

    const kgTogm =(value:string | number):string | number |undefined=>{
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value) *1000
            return convertedValue
        }
        else if(typeof value === "number"){
            return value *1000
        }
    }
    const result1 = kgTogm(45) as number
    const result2 = kgTogm('54') as string


    type customError = {
        message: string
    }

    try{

    }catch(error){
        console.log((error as customError).message)
    }
}