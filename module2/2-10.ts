{
    // mapped type
    const arrofNumber : number[]= [2,66,3]
 const arrOfstring: string[]= arrofNumber.map((number)=>number.toString())
 console.log(arrOfstring)

type areaNum = {
    height:number;
    width:number
}
// type arrString = {
//     height:string;
//     width:string
// }
type height = areaNum['height'] // look up type
type areaString<T> = {
  [key in keyof T] :T[key]
}
const res1 :areaString<{height:string, width:number}>={
    height:'45',
    width:5
}
}