{
    // interface learning
    // object ar jnno type alias o interface 2 ty use kora jabo

    type user1 = {
        name: string;
        age: number
    }
    type userWithRole = user1 & { role: string }
    interface user2 {
        name: string;
        age: number
    }
    interface userWithRole2 extends user2 {
        role: string
    }
    const user: userWithRole2 = {
        name: 'tawhid',
        age: 45,
        role: 'admin'
    }


    type Roll1 = number[]
    interface Roll2 {
        [index: number]: number
    }
    const rollUser1: Roll2 = [34, 8, 7]


    // function interface 
    type Add = (num1:number, num2:number)=>number
    interface ADD {
        (num1:number , num2:number):number
    }
    const add:ADD = (num1,num2)=>num1+num2
}