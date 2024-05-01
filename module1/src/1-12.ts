{
    //nullable
    const search = (value:string | null)=>{
        if(value){
            console.log('searching')
        }else{
            console.log('no search')
        }
    }
    search(null)

    // unknown type
    const getSpeedInMiterPerSecond = (value:unknown)=>{
        if(typeof value === 'number'){
            const convertedSpeed =( value *1000)/3600
            console.log(`The Speed is ${convertedSpeed} ms^-1`)
        }
        else if (typeof value === 'string'){
            const [result,unit] = value.split(' ',1)
            const convertedSpeed =( parseFloat(result) *1000)/3600
            console.log(`The Speed is ${convertedSpeed} ms^-1`)
           
        }
        else{
            console.log('wrong input')
        }
    }
    getSpeedInMiterPerSecond(null)


    // never type
    const  throwError=(msg:string):never=>{
        throw new Error (msg)
    }
    throwError('error hoye gase')
}