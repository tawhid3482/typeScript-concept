{
    // learning destructure
    const user = {
        name:'saikat',
        hoby:{
             game:'pubg',
             sport:'football'
        },
        contact: '0186316'
    }
    
    const {contact,hoby:{game}}=user
}