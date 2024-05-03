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

    // readOnly
    type readOnlyPerson = Readonly <person> 

    const person1 :readOnlyPerson = {
        name:'saia',
        age:55
    }
    // person1.name='ami'

    // Record type 
    // type myObj = {
    //     name:string;
    //     age:number;
    // }
    type myObj = Record<string,string>
    const emtryObj :Record<string,unknown>= {}
    const obj:myObj = {
        name:'aik',
        age:'54',
        c:'cdc'
    }

}