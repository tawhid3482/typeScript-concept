{
    const poorUser = {
        name: 'mr.x',
    }


    // learning spread operator
    const FriendLIst1: string[] = ['mahadi', 'kamal', 'jamal']
    const FriendLIst2: string[] = ['tamim', 'saikat', 'tomal']
    FriendLIst1.push(...FriendLIst2)

    const LearnList1 = {
        html: '80%',
        css: '70%',
        javaScript: '60%'
    }

    const LearnList2 = {
        typeScript: 'trying%',
        redux: 'basic',
        dbms: 'no'
    }

    const learningList = {
        ...FriendLIst1,
        ...FriendLIst2
    }

    // learn rest operator

    const greetFriend = (...friends: string[]) => {
        // console.log(`hi my friend ${friend1} ${friend2}`)
        friends.forEach((friend: String) => {
            console.log(`hi ${friend}`)
        });
    }
    greetFriend('tumi', 'ami')


}

