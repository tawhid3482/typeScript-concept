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
}