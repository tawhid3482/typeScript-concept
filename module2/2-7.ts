{
    // key of operator
    type vehicle ={
        bike:string;
        car:string;
        ship:string
    }
    type owner = 'bike'| 'car'|'ship' //manually
    type owner2 = keyof vehicle


    const  getPropertyValue =<X,Y extends keyof X>(obj:X, key:Y)=>{
        return obj[key]
    }
    const user = {
        name:'saikat',
        age:34
    }
    const result = getPropertyValue(user,'name')

    // obj[age]
}   
