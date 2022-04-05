// fetch("http://localhost:3000/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// CRUD >> creat , read
let cl = console.log;
let baseUrl = "https://jsonplaceholder.typicode.com";

const postForm = document.getElementById("postForm");
const title = document.getElementById("title");
const info = document.getElementById("info");
const data = document.getElementById("data");
const submitBtn = document.getElementById("submitBtn");
const updateBtn = document.getElementById("updateBtn");
let dataArray = [];

function fetchHttpRequest(method, url, data) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.onload = function () {
      if (xhr.status === 200 && xhr.readyState === 4) {
        resolve(xhr.responseText);
      } else {
        reject("Something Went Wrong !!!");
      }
    };

    xhr.send(data);
  });
}
fetchHttpRequest("GET", `${baseUrl}/posts`)
  .then((res) => {
    dataArray = JSON.parse(res);
    templating(dataArray);
  })
  .catch((err) => cl(err));

function onDeleteHandler(ele) {
  cl("Deleted", ele.getAttribute("data-id"));
  let getId = ele.getAttribute("data-id");
  let deleteUrl = `${baseUrl}/posts/${getId}`;
  fetchHttpRequest("DELETE", deleteUrl);
  let newArray = dataArray.filter((obj) => obj.id != getId);
  templating(newArray);
}

function onEditHandler(ele) {
  // cl('Edited',ele.getAttribute('data-id'));
  let getId = +ele.getAttribute("data-id");
  localStorage.setItem("setId", getId);
  // cl(getId, typeof getId)
  // cl(dataArray)
  let getObj = dataArray.find((obj) => obj.id === getId);
  cl(getObj);
  title.value = getObj.title;
  info.value = getObj.body;
  submitBtn.classList.add("d-none");
  updateBtn.classList.remove("d-none");
}
function templating(arr) {
  let result = "";
  arr.forEach((ele) => {
    result += `
        <div class="card mb-3">
                <div class="card-body">
                    <h2 class="text-success">${ele.title}</h2>
                    <p>${ele.body}</p>
                    <div class="text-right">
                    <button type="button" data-id="${ele.id}" class="btn btn-danger" onclick="onDeleteHandler(this)">Delete</button>
                    <button type="button" data-id="${ele.id}" class="btn btn-success"  onclick="onEditHandler(this)">Edit</button>
                    </div>
                </div>
            </div>
        
        `;
  });
  data.innerHTML = result;
}

const onSubmitHandler = (eve) => {
  eve.preventDefault();
  let obj = {
    title: title.value,
    body: info.value,
    userId: Math.random(),
    id: dataArray.length + 1,
  };
  dataArray.push(obj);
  postForm.reset();
  templating(dataArray);
  let postUrl = `${baseUrl}/posts`;
  fetchHttpRequest("POST", postUrl, JSON.stringify(obj));
};

const onUpdateHandler = (eve) => {
  let obj = {
    title: title.value,
    body: info.value,
  };
  let getId = +localStorage.getItem("setId");
  dataArray.forEach((dobj) => {
    if (dobj.id === getId) {
      dobj.title = title.value;
      dobj.body = info.value;
    }
  });
  templating(dataArray);
  postForm.reset();
  submitBtn.classList.remove("d-none");
  updateBtn.classList.add("d-none");
  let updateUrl = `${baseUrl}/posts/${getId}`;
  fetchHttpRequest("PATCH", updateUrl, JSON.stringify(obj));
};
postForm.addEventListener("submit", onSubmitHandler);
updateBtn.addEventListener("click", onUpdateHandler);
