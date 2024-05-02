{
    // generic type
    type generic<param> = Array<param>
    // const numberArray: number[] =[14,6,32] 
    // const numberArray: Array<number> =[14,6,32] 
    const numberArray: generic<number> = [14, 6, 32]
    // const stringArray: string[] =['ami','tumi'] 
    // const stringArray: Array<string> =['ami','tumi'] 
    const stringArray: generic<string> = ['ami', 'tumi']
    // const booleanArray: boolean[] =[true,false] 
    // const booleanArray:Array<boolean> =[true,false] 
    const booleanArray: generic<boolean> = [true, false]


    const user: generic<{ name: string, age: number }> = [
        {
            name: 'saiakt',
            age: 44,
        },
        {
            name: 'hobo',
            age: 550
        }

    ]


    // generic tuple 
    type genericTuple<X, Y> = [X, Y]
    const user5: genericTuple<string, string> = ['ami', 'tumi']

    const userId: genericTuple<number,{ name: string, email: string }> =[12, { name: 'saikat', email: 'A@gmail.com' }]
}