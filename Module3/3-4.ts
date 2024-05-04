{
    // oop guard
    class Animal {
        //    public name:string;
        //    public  sound:string;
        constructor(public name: string, public sound: string) {
            // this.name = name,
            // this.sound = sound
        }
        makeSound() {
            console.log(`THIS ${this.name} say ${this.sound}`)
        }
    }
    class dog extends Animal {
        constructor(name: string, sound: string) {
            super(name, sound)
        }
        makeBar() {
            console.log(`Dog barking`)
        }
    }
    class cat extends Animal {
        constructor(name: string, sound: string) {
            super(name, sound)
        }
        makeMaw() {
            console.log(`cat maw`)
        }
    }

     const isDog =(animal : Animal):animal is dog=>{
        return animal instanceof dog
     }
     const isCat =(animal : Animal):animal is cat=>{
        return animal instanceof cat
     }

    const getAminal = (animal: Animal) => {
        if (isDog(animal)) {

            animal.makeBar()
        }else if(isCat(animal)){
            animal.makeMaw()
        }else{
            animal.makeSound()
        }
    }
    const Dog = new dog('dog dog', 'by')
    const Cat = new cat('cat cat', 'asi')
    getAminal(Cat)
}