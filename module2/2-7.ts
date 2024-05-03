{
    // key of operator
    type vehicle ={
        bike:string;
        car:string;
        ship:string
    }
    type owner = 'bike'| 'car'|'ship' //manually
    type owner2 = keyof vehicle
}