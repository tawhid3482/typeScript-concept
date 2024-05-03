{
    // 
    // utility type 

    type person  ={
        name:string;
        age:number;
        email?:string
    }
    type Name = Pick<person ,'name'|'age'>
    //Omit
    type NameAge = Omit<person ,'name'|'age'>
    //required
    type NameRequired = Required<person>
    //partial
    type NamePartial = Partial<person>
}