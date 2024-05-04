{
    // oop --->
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
    const dog = new Animal('dog','ghaw ghaw')
    dog.makeSound()
    
}