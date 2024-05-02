{
    // 
    interface Dev<T,X=null> {
        name:string;
        info:{
            skills:string;
            title:string;
        };
        smartWatch: T;
        bike? : X
    } 
    type juniorWatch = {
        name2:string;
        model:string
    }

    const juniorDev :Dev<juniorWatch> = {
        name:'saikat',
        info:{
            skills:'html css',
            title:'junior'
        },
        smartWatch:{
            name2:'apple',
            model:'dw65'
        }
    }

    interface loveWatch {name2:string,model:string,price:number}
    interface loveBike {model:string}
    const richDev :Dev<loveWatch,loveBike > = {
        name:'tawhid',
        info:{
            skills:'html css javascript',
            title:'senior'
        },
        smartWatch:{
            name2:'sunStar',
            model:'dw65',
            price:464,

        },
        bike:{
            model:'ami'
        }
    }

}