{
    //
    const addCourse = <T extends {name:string,id:number,level:string}>(student: T) => {
        const course = 'newt'
        return {
            ...student,
            course
        }
    }
    // const stu3 = addCourse({})
    const student1 = addCourse<{
            name: string;
            id: number;
            level: string;
        }
    >(
        { name: 'saikat', id: 45, level: '2' }
    )
    const student2 = addCourse(
        { name: 'taw', id: 478, level: '1' }
    )
    const student3 = addCourse(
        { name: 'taw', id: 478, level: '1' }
    )

}