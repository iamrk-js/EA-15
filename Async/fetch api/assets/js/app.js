let cl = console.log;
let baseUrl = "http://localhost:3000"; ///posts
let postsList = document.getElementById("postsList");

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

// fetch(`${baseUrl}/posts`, {
//   method: "GET",
//   body: {},
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//     authorization: "get form local storages",
//   },
// }) // fetch returns a promise // if we do not provide type of method by default it is GET
//   .then((res) => res.json()) // json method also returns promise
//   .then((data) => {
//     cl(data);
//     templating(data);
//   });

async function getData() {
  let data = await makeApiCall(`${baseUrl}/posts`, "GET");
  templating(data);
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
                <button class="btn btn-danger">Delete</button>
                <button class="btn btn-primary">Edit</button>
            </div>
        </div>
    </div>
        `;
    });
  }

  postsList.innerHTML = result;
}

getData();
