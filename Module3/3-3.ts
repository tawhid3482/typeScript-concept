{
    // type guard
    type ami = string | number
    const add = (param1: ami, param2: ami): ami => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {

            return param1 + param2
        }else{
          return param1.toString() + param2.toString()
        }
    }
    const result = add('5',4)
    console.log(result)


    // in guard
    type normalUser = {
        name:string
    }
    type adminUser = {
        name:string;
        role:'admin'
    }
    const getUser =  (user: normalUser | adminUser)=>{
        if('role' in user){
            console.log(`my role is ${user.role}`)
        }else{
            console.log(`my name is ${user.name}`)
        }
    }
    const normal : normalUser ={
        name:'saikat'
    }
    const admin : adminUser ={
        name:'saikat',
        role:'admin'
    }
    getUser(admin)
}