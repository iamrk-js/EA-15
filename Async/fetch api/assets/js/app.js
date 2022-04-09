let cl = console.log;
let baseUrl = "http://localhost:3000"; ///posts
const postsList = document.getElementById("postsList");
const postsForm = document.getElementById("postsForm");
const submitBtn = document.getElementById("submitBtn");
const updateBtn = document.getElementById("updateBtn");

let dataArray = [];

function makeApiCall(url, method, body) {
  return fetch(url, {
    method: method,
    body: body,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: "get form local storages",
    },
  }).then((res) => res.json());
}



async function getData() {
  let data = await makeApiCall(`${baseUrl}/posts`, "GET");
  dataArray = data;
  templating(data);
}

// function switchBtns(){
//   submitBtn.classList.toggle('d-none');
//   updateBtn.classList.toggle('d-none');
// }
function onEditHandler(ele) {
  // cl(ele.getAttribute('data-id'));
  let getId = ele.getAttribute("data-id");
  localStorage.setItem("setId",getId)
  let getObj = dataArray.find((obj) => {
    return obj.id == getId;
  });
  cl(getObj);
  title.value = getObj.title;
  info.value = getObj.body;
  // switchBtns()
  submitBtn.classList.add("d-none");
  updateBtn.classList.remove("d-none");
}
function templating(arr) {
  let result = "";
  if (arr) {
    arr.forEach((ele) => {
      result += `
        <div class="card mb-4">
        <div class="card-body">
            <h2>${ele.title}</h2>
            <p>${ele.body}</p>
            <div class="text-right">
                <button  data-id="${ele.id}"  class="btn btn-danger" onclick="onDeleteHandler(this)">Delete</button>
                <button data-id="${ele.id}" class="btn btn-primary" onclick="onEditHandler(this)">Edit</button>
            </div>
        </div>
    </div>
        `;
    });
  }

  postsList.innerHTML = result;
}

const onUpdateHandler = (eve) => {
  let obj = {
    title: title.value,
    body: info.value,
  };
  let updateId = localStorage.getItem('setId')
  let updateUrl = `${baseUrl}/posts/${updateId}`
  makeApiCall(updateUrl, 'PATCH', JSON.stringify(obj))
};
const onDeleteHandler = (eve) => {
  cl(eve)
  let getDeleteId = eve.getAttribute('data-id');
  let deleteUrl = `${baseUrl}/posts/${getDeleteId}`;
  makeApiCall(deleteUrl, 'DELETE')
}
const onSubmitHandler = (eve) => {
  eve.preventDefault();
  let obj = {
    title: title.value,
    body: info.value,
    userId : Math.ceil(Math.random() * 10)
  }
  let postUrl = `${baseUrl}/posts`;
  makeApiCall(postUrl, 'POST', JSON.stringify(obj))
}
getData();

updateBtn.addEventListener("click", onUpdateHandler);
postsForm.addEventListener('submit', onSubmitHandler)