let cl = console.log;


let heading = document.getElementById('heading');

cl(typeof heading);

let getHeadingHtml = heading.innerHTML;

cl(getHeadingHtml);

let getText = heading.innerText;
cl(getText);
// debugger

heading.innerHTML = "<p>Angular 13 Updates</p>"

heading.innerText = "Angular 13 New Updates";
heading.innerHTML = "New Version of Angular 13 is Updated"



let person = {
    fname: "jhon",
    lname: "Doe",
    fullName: function () {
        return `${this.fname} ${this.lname}`
    }
}

let getFname = person.fname;

person.fname = "July";
cl(person)


