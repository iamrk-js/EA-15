//  ajax >> asyc jaascript xml
//  http call
// GET  >> to get data from database
// POST >> to create new data in database
// DELETE >> to  remove/delete data in database
// PUT >>  to update complete data in database
// PATCH >>  to update partialy data in database

let cl = console.log;
let baseUrl = "https://jsonplaceholder.typicode.com/photos";
const info = document.getElementById("info");
const loader = document.getElementById("loader");

function fetchData(method, url) {
  // loader should be start here
  loader.classList.toggle('d-none');
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = function () {
    if (xhr.status === 200 && xhr.readyState === 4) {
      let data = JSON.parse(xhr.responseText);
      templating(data);
      // loader should be stop here
      loader.classList.toggle('d-none');
    }
  };
  xhr.send();
}

fetchData("GET", baseUrl);

function templating(arr) {
  let result = "";
  arr.forEach((ele) => {
    result += `
            <div class="col-sm-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <div class="thumb">
                        <img src="${ele.url}" alt="" class="img-fluid"/>
                        <span class="id">${ele.id}</span>
                        <span class="userid">${ele.albumId}</span>
                        <p class="title">${ele.title}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });
  info.innerHTML = result;
}
