{
    // generic function

    const arrayString = (parem: string): string[] => {
        return [parem]
    }
    const createArrayGeneric = <T>(parem: T): T[] => {
        return [parem]
    }
    const res2 = arrayString('bangladesh')
    const res1 = createArrayGeneric<string>('bangladesh')
    const res3 = createArrayGeneric<{id:number,name:string}>({id:4,name:'saikat'})

  
    const createArrayGenericTuple = <T,Y>(parem1: T,param2:Y): [T,Y] => {
        return [parem1,param2]
    }
    const res = createArrayGenericTuple<string,number>('bangladesh',552)
    const res10 = createArrayGenericTuple<string,{name:string}>('bangladesh',{name:'dai'})
 
    const addCourse=<T>(student:T)=>{
        const course= 'newt'
return {
    ...student,
    course
}
    }
    const student1 = addCourse({name:'saikat',id:45,level:'2'})
    const student2 = addCourse({name:'taw',id:478,level:'1'})

}