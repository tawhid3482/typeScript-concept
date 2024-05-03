{
    // conditional type
    type a1 = null
    type b = undefined
    type A = a1 extends null ? true : false // conditional type
    type B = a1 extends null ? true : b extends undefined ? undefined : any // conditional type


    type vehicle = {
        bike: string;
        car: string;
        ship: string
    }
    type checkVehicle<T> = T extends keyof vehicle ? true : false
    type result = checkVehicle<'bike'>
}