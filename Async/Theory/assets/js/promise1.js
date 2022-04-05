let cl = console.log;
function getCandidate(stack) {
  return new Promise((resolve, reject) => {
    if (stack.toLowerCase() === "angular") {
      resolve("We got a candidate for Angular Dev Profile");
    } else {
      reject("Sorry, As of now we are only looking for Angular Dev");
    }
  });
}
// getCandidate('Angular')
//             .then((res) => cl(res))
//             .catch((err) => cl(err))

function proccessCandidate(res) {
  return new Promise((resolve, reject) => {
    let result = false;
    if (result === true) {
      resolve(`${res} Yes We got a new Angular Developer !!!`);
    } else {
      reject("We have to look for another candidate");
    }
  });
}
// getCandidate('angular')
//                 .then(res => {
//                   return proccessCandidate(res)
//                 })
//                 .then(res => cl(res))
//                 .catch(err => cl(err))

async function init() {
    try{
        let response = await getCandidate("angular");
        let msg = await proccessCandidate(response);
        cl(msg)
    }catch(err) {
        cl(err)
    }
}

init()