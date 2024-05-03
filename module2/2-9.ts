{
// conditional type
type a1 = null
type b = undefined
type A = a1 extends null ? true : false // conditional type
type B= a1 extends null ? true : b extends undefined ? undefined : any // conditional type

}