var cl = console.log;


let posts = [
    {
        id: 123,
        msg: "Your are not bad at all"
    },
    {
        id: 124,
        msg: 'You are not good in teaching'
    },
    {
        id: 125,
        msg: 'You are Dumb'
    },
    {
        id: 126,
        msg: "You don't have value of others time"
    },
    {
        id: 127,
        msg: "I love the way you explain"
    }
]

let id = 125;

// let getPost = posts.find(post => {
//     if (post.id === id) {
//         return true
//     } else {
//         return false
//     }
// })

// let getPost = posts.find(post => {
//     return post.id === id
// })

let getPost = posts.find(post => post.id === id);
cl(getPost);

let getIndex = posts.findIndex(post => {
    if (post.id === id) {
        return true
    } else {
        return false
    }
})

cl(getIndex);

posts.splice(getIndex, 1);

cl(posts)

// es6  >> 2015 

// fetch >> API >> HTML5 