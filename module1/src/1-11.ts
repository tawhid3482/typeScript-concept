{
    // learn about ??
    const age: number = 17
    if (age >= 18) {
        console.log('adult')
    } else {
        console.log('childs')
    }

    const isAdult = age >= 18 ? 'adult' : 'child'
    console.log({ isAdult })

    //nullish operator
    // only for null || undefined use case
    const isAuthenticated = ''
    const result1 = isAuthenticated ?? 'Guest'
    const result2 = isAuthenticated ? isAuthenticated : 'Guest'
    console.log({ result1 }, { result2 })

    type User = {
        name: string;
        address: {
            city: string;
            phone: string;
            srNo: number;
            road?:string

        }
    }
    const user :User  ={
        name:'saikat',
        address:{
            city:'Madhupur',
            phone:'56555',
            srNo:45,
            
        }
    }
    const roadNo = user?.address?.road ?? 'NO road Number'
    console.log({roadNo})

}