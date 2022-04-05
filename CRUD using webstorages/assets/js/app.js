let cl = console.log;
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const contact = document.getElementById('contact');
const studentForm = document.getElementById('studentForm');
const stdInfo = document.getElementById('stdInfo');
const submit = document.getElementById('submit');
const Update = document.getElementById('Update');

Update.style.display = "none";
let stdArray = [];

function uuid() {
    var dt = new Date().getTime(); // 1111
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}
const onSubmitHandler = (eve) => {
    eve.preventDefault();
    let stdObj = {
        fname: firstName.value,
        lname: lastName.value,
        email: email.value,
        contact: contact.value,
        id: uuid(),
    }
    studentForm.reset();
    stdArray.push(stdObj);
    localStorage.setItem('setStudentArray', JSON.stringify(stdArray));
    templating(stdArray);
}

function templating(arr) {
    let result = '';
    arr.forEach((std, i) => {
        result += `<tr>
            <td>${i + 1}</td>
            <td>${std.fname}</td>
            <td>${std.lname}</td>
            <td>${std.email}</td>
            <td>${std.contact}</td>
            <td>
                <button class="btn btn-success" data-id="${std.id}" onclick="onEditStdHandler(this)">Edit</button>
            </td>
            <td> <button class="btn btn-danger" data-id="${std.id}"  onclick="onDeleteStdHandler(this)">Delete</button></td>
        </tr>`
    })
    stdInfo.innerHTML = result;
}

function getLocalData() {
    if (localStorage.getItem('setStudentArray')) {
        return JSON.parse(localStorage.getItem('setStudentArray'));
    }
}
stdArray = getLocalData();
if (stdArray) {
    templating(stdArray);
}

function onEditStdHandler(ele) {
    let getId = ele.getAttribute('data-id');
    localStorage.setItem('setUpdateId', getId);
    Update.style.display = "inline-block";
    submit.style.display = "none";
    let getdata = getLocalData();

    //    let getObject = getdata.filter(obj => {
    //         return obj.id === getId
    //     }) 
    let getObject = getdata.find(obj => {
        return obj.id === getId
    })
    cl(getObject)
    firstName.value = getObject.fname;
    lastName.value = getObject.lname;
    email.value = getObject.email;
    contact.value = getObject.contact;
    
}
function onUpdateHandler(){
    let updatefname = firstName.value;
    let updatelname = lastName.value;
    let updateemail = email.value;
    let updatecontact = contact.value;
    cl(updatefname, updatelname, updateemail, updatecontact);
    studentForm.reset();
    Update.style.display = "none";
    submit.style.display = "inline-block";
    let getdata = getLocalData();
    let getId = localStorage.getItem('setUpdateId');
    cl(getId, getdata);
    getdata.forEach(obj => {
        if(obj.id === getId){
            obj.fname = updatefname,
            obj.lname = updatelname,
            obj.email = updateemail,
            obj.contact = updatecontact
        }
    })
    localStorage.setItem('setStudentArray', JSON.stringify(getdata));
    templating(getdata);
    localStorage.removeItem('setUpdateId')
}
function onDeleteStdHandler(ele) {
    let getId = ele.getAttribute('data-id');
    cl(getId);
    let getdata = getLocalData();
    filterdData = getdata.filter(obj => {
        return obj.id != getId
    })
    cl(filterdData);
    localStorage.setItem('setStudentArray', JSON.stringify(filterdData));
    templating(filterdData)
}

studentForm.addEventListener('submit', onSubmitHandler);
Update.addEventListener('click', onUpdateHandler)