let cl = console.log;

const digitalClock = document.getElementById('digitalClock');

function createDigitalClock() {
    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let session = "AM";

    // if(hr >= 12){
    //     session = "PM"
    // }

    (hr >= 12) ? session = "PM" : session = "AM";

    // if(hr > 12){
    //     hr = hr - 12;
    // }

    (hr > 12) ? hr = hr - 12 : hr = hr;

    // if(hr < 10){
    //     hr = '0' + hr
    // }
    // if(min < 10){
    //     min = '0' + min
    // }
    // if(sec < 10){
    //     sec = '0' + sec
    // }
    // hr = setZero(hr);
    // min = setZero(min);
    // sec = setZero(sec);
    let result = `${setZero(hr)} : ${setZero(min)} : ${setZero(sec)} ${session}`;
    digitalClock.innerHTML = result;
    setTimeout(createDigitalClock, 1000)
}
createDigitalClock();

// function setZero(n){
//     if(n < 10){
//       return  n = '0' + n;
//     }else{
//       return  n
//     }
// }

function setZero(n) {
    //   (n < 10) ? n = ('0' + n) : n = n;
    //   return n;
    return (n < 10) ? ('0' + n) : n;
}