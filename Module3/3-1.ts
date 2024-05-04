{
    // oop --->
    class Animal {
        name:string;
        sound:string;
        constructor(name:string,sound:string){
            this.name = name,
            this.sound = sound
        }
        makeSound(){
            console.log(`THIS ${this.name} say ${this.sound}`)
        }
    }
    // const dog = new Animal('dog','ghaw ghaw')
    // dog
}