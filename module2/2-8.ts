{
    // promise
type todo = {
    id:number;
    userId:number;
    title:string;
    completed:boolean

}
    const getTodo = async ():Promise<todo> => {
       const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
       const data =await res.json()
    //    console.log(data)
    return data
    }
    getTodo()
    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data = 'something'
            if (data) {
                resolve(data)
            } else {
                reject('field to get data ')
            }
        })
    }

    /// calling create promise function
    const showDAta = async (): Promise<string> => {
        const data: string = await createPromise()
        // console.log(data)
        return data
    }
    showDAta()
}
