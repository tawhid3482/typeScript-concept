{
    // oop guard
    class Animal {
        //    public name:string;
        //    public  sound:string;
            constructor(public name:string,public sound:string){
                // this.name = name,
                // this.sound = sound
            }
            makeSound(){
                console.log(`THIS ${this.name} say ${this.sound}`)
            }
        }
        class dog extends Animal {
            constructor(name:string, sound:string){
                super(name,sound)
            }
            makeBar(){
                console.log(`Dog barking`)
            }
        }
        class cat extends Animal {
            constructor(name:string, sound:string){
                super(name,sound)
            }
            makeMaw(){
                console.log(`cat maw`)
            }
        }

        const Dog = new dog ('dog dog','by')
        const Cat = new cat ('cat cat','asi')
        Do
}