const user : {
    company:'Developer' // -- type -- literal types
    fristName:string;
    middleName?:string; //-- optional type
    lastName: string;
    readonly title:string
} = {
    company:'Developer',
    fristName:'Tawhdul',
    lastName:'saikat',
    title:'web'
}

user.title= 'ami'