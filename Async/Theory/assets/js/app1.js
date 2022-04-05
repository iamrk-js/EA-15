let cl = console.log;
// by default nature of javaScript is sync
// but when we use time interval functions or make a API/Ajax call
// it becomes async
function print10() {
    cl(10)
}
// call back function >> 
// a function which is passed as a parameter to another function
// A function which is get exicuted after some thing happens
// function getData(callbackFun) {
//     setTimeout(() => {
//         cl(`Data is loaded`);
//         callbackFun();
//     }, 2000)
// }
// function templating() {
//     cl(`Performing Templating function on the data`)
// }

// print10();
// getData(templating);
// templating();


function getData(callBackOne) {
    setTimeout(() => {
        cl(`Data is loaded`);
        callBackOne()
    }, 2000)
}
function convertdata() {
    setTimeout(() => {
        cl(`Data is get Converted into JS Objects`);
        templating()
    }, 1000)
}
function templating() {
    cl(`Performing Templating function on the data`);
}

getData(convertdata);
// convertdata();
// templating();
// nested callback functions above 3 levels are difficult to handel
// this issue is called as Callback Hell
// Promise >> 
// async await

const blogsHolder = document.getElementById('blogsHolder')
let blogs = [
    { title: 'Blog One', content: "Blog One On Angular" },
    { title: 'Blog Two', content: "Blog Two On Angular" },
]
function createBlog(blog, callBackFun, data) {
    setTimeout(() => {
        blogs.push(blog);
        callBackFun(data);
    }, 3000)
}
function readBlogs(blogArray) {
    setTimeout(() => {
        let result = '<ul class="list-group">';
        blogArray.forEach((blog) => {
            result += `<li class="list-group-item">
                            <h4>${blog.title}</h4>
                            <p>${blog.content}</p
                    </li>`
        })
        result += '</ul>';
        blogsHolder.innerHTML = result;
    }, 1000)
}
createBlog({ title: 'Blog Three', content: "Blog Three On Angular" }, readBlogs, blogs);
// createBlog({ title: 'Blog Three', content: "Blog Three On Angular" },readBlogsWithCards);
// readBlogs();



