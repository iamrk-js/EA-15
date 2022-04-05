let cl = console.log;
//Promise >>  It is a Object that returns a value in future
// either resolved value (success) or rejected (failed) value
// Pending
// fullfilled
// rejected
// let promise1 = new Promise((resolve, reject) => {
//     let error = true;
//     if (!error) {
//         resolve("Success !!!")
//     } else {
//         reject("Error : Something went Wrong")
//     }
// })
// promise1
//     .then((res) => cl(res))
//     .catch((err) => cl(err))
const blogsHolder = document.getElementById('blogsHolder')
let blogs = [
    { title: 'Blog One', content: "Blog One On Angular" },
    { title: 'Blog Two', content: "Blog Two On Angular" },
]
function createBlog(blog) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            blogs.push(blog);
            let error = false;
            if (!error) {
                resolve(blogs)
            } else {
                reject("Error : Something went Wrong")
            }
        }, 3000)
    })

}
function readBlogs(arr) {
    setTimeout(() => {
        let result = '<ul class="list-group">';
        arr.forEach((blog) => {
            result += `<li class="list-group-item">
                                <h4>${blog.title}</h4>
                                <p>${blog.content}</p
                        </li>`
        })
        result += '</ul>';
        blogsHolder.innerHTML = result;
    }, 1000)
}
createBlog({ title: 'Blog Three', content: "Blog Three On Angular" })
    .then((response) => readBlogs(response))
    .catch((err) => cl(err)) // console.log("Error : Something went Wrong")