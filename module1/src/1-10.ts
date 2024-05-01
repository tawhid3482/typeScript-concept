{
    // union type

    type FrontEnd = 'ami' | 'tumi'
    type FullStack = 'expert' | 'junior'
    type dev = FrontEnd | FullStack
    const frontEnd: FrontEnd = 'ami'


    type Front = {
        skills: string[];
        designation1: 'front end'
    }

    type backend = {
        skills: string[];
        designation2: 'back end'
    }
    type fullStack = Front & backend

    const dev: fullStack = {
        skills: ['html', 'css'],
        designation1:'front end',
        designation2: 'back end'
    }

}