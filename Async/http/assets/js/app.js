//  ajax >> asyc jaascript xml
//  http call
// GET  >> to get data from database
// POST >> to create new data in database
// DELETE >> to  remove/delete data in database
// PUT >>  to update complete data in database
// PATCH >>  to update partialy data in database

let cl = console.log;
let url = 'https://jsonplaceholder.typicode.com/posts';
const info = document.getElementById('info');

//1 create instance of XMLHttpRequest
let xhr = new XMLHttpRequest();
// 2 setup a http call using open method
xhr.open("GET", url)
// 3 onload 
xhr.onload = function(){
    // cl(xhr.responseText)
    // cl(xhr.status)
    // cl(xhr.readyState)
    if(xhr.status === 200 && xhr.readyState === 4){
        // alert('Http call Success')
        //templating function .....
        let data = JSON.parse(xhr.responseText);
        templating(data)
    }
}
xhr.send();
function templating(arr){
    let result = '';
        arr.forEach(ele => {
            result += `
                    <tr>
                        <td>${ele.id}</td>
                        <td>${ele.userId}</td>
                        <td>${ele.title}</td>
                        <td>${ele.body}</td>
                    </tr>
            `
        });
        info.innerHTML = result;
}
// xhr.status 
// 200 >> http call is successfull
// 404 >> URL not found 
// 403 >> Forbidden 
// 503 >> service not available

// xhr.readyState
// 0 >> unsend >> xhr object is created but open method does not call yet
// 1 >> The 'open' method is called
// 2 >> send method is called
// 3 >> Loading >> server is loading our request
// 4 >> Done >> request has been proccessed and response is ready