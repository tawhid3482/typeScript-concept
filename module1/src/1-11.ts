{
    // learn about ??
    const age:number = 17
    if(age >=18 ){
        console.log('adult')
    }else{
        console.log('childs')
    }

    const isAdult = age >=18 ? 'adult':'child'
    console.log({isAdult})

    //nullish operator
    // only for null || undefined use case
    const isAuthenticated = null
    const result1 = isAuthenticated ?? 'Guest'
    console.log({result1})

}