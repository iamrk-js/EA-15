var cl = console.log;

// let person = {
//   fname: "RAvikiran",
//   lname: "Niturkar",
//   country: "India",
//   city: "Puna",
// };

// // const fname = person.fname;
// // const lname = person.lname;
// // const country = person.country;
// // const city = person.city;

// const { country, city, fname, lname } = person;

// cl(country, fname, lname, city);

let p2 = {
  fname: "RAvikiran",
  lname: "Niturkar",
  country: "India",
  city: "Puna",
  link : {
    social : {
      twitter : 'https://twitter.com/@iamrk',
      facebook : 'https://twitter.com/facebook',
      linkedin : 'https://twitter.com/linkedin',
    },
    web : {
      blog : "http://javascriptiscoolstuff.com"
    }
  }
};


// const twitter = p2.link.social.twitter;
// const facebook = p2.link.social.facebook;
// const linkedin = p2.link.social.linkedin;

// const {twitter, facebook, linkedin} = p2.link.social;
const {twitter:tw, facebook:fb, linkedin:lnd} = p2.link.social;

cl(tw, fb, lnd);

//  twitter : 'https://twitter.com/@iamrk' === twitter:tw


let settings = {width:300, color:'black'};

// let width = settings.width;
// let height = 100;
// let color = settings.color;
// let fontSize = 22;


const {width, height = 100, color = 'hotpink', fontSize = 22} = settings;

cl(width, height, color, fontSize);


let x= 10;

x = 20

