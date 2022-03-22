let cl = console.log;
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const contact = document.getElementById('contact');
const studentForm = document.getElementById('studentForm');
const stdInfo = document.getElementById('stdInfo');
let stdArray = []
const onSubmitHandler = (eve) => {
    eve.preventDefault();
    // cl(eve.target);
    let stdObj = {
        fname : firstName.value,
        lname : lastName.value,
        email : email.value,
        contact : contact.value
    }
    studentForm.reset();
    stdArray.push(stdObj);
    cl(stdArray);
    let result = '';
    stdArray.forEach((std, i) => {
      result +=  `<tr>
            <td>${i + 1 }</td>
            <td>${std.fname}</td>
            <td>${std.lname}</td>
            <td>${std.email}</td>
            <td>${std.contact}</td>
        </tr>`
    })
    stdInfo.innerHTML = result;
}
studentForm.addEventListener('submit', onSubmitHandler);