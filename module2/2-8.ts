{
    // promise
    const createPromise = ()=>{
        return new Promise((resolve, reject)=>{
            const data = 'something'
            if(data){
                resolve(data)
            }else{
                reject('field to get data ')
            }
        })
    }
}