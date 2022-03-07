let cl = console.log;
const countDown = document.getElementById('countDown')
// 15th aug 2022
function createCountDown() {
    let currentDay = new Date();
    let futureDay = new Date(2022, 7, 15);
    cl(currentDay); // get number of miliseconds from 1970 for current date
    cl(futureDay); // get number of miliseconds from 1970 for future date
    let diff = futureDay.getTime() - currentDay.getTime();
    cl(diff)
    cl(diff / (1000 * 60 * 60 * 24))
    let days = Math.floor(diff / (86400000));
    cl(days);
    let hours = Math.floor((diff % (86400000)) / (1000 * 60 * 60));
    cl(hours);
    let min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    cl(min);
    let sec = Math.floor((diff % (1000 * 60)) / 1000);
    cl(sec);
    let result = `
                <div class="counter">
                    <p>Days</p>
                    <p>${setZero(days)}</p>
                </div>
                <div class="counter">
                    <p>Hours</p>
                    <p>${setZero(hours)}</p>
                </div>
                <div class="counter">
                    <p>Min</p>
                    <p>${setZero(min)}</p>
                </div>
                <div class="counter">
                    <p>Sec</p>
                    <p>${setZero(sec)}</p>
                </div>
              `;
    if (futureDay > currentDay) {
        countDown.innerHTML = result;
    } else {
        countDown.innerHTML = `
                    <div class="counter">
                            <p class="msg">Product Successfully Launched</p>
                    </div>
        `
    }

    setTimeout(createCountDown, 1000)
}

// let mili = diff - (days + hours + min)

createCountDown();


function setZero(n) {
    return (n < 10) ? "0" + n : n
}