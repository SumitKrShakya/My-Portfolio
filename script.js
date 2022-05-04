const img0 = document.getElementById('0_img')
const img1 = document.getElementById('1_img')
const img2 = document.getElementById('2_img')
const img3 = document.getElementById('3_img')
    // transform: translateX(-50%);


// img0.style.transform = "translateX(-85%) scale(0.75)"
// img1.style.transform = "translateX(-15%) scale(0.75)"
// img0.style.opacity = "0.5"
// img1.style.opacity = "0.5"
console.log('sdfds');

let i = 0;
let tot = 8;

for (let t = 0; t < tot; t++) {
    if (t === 0) {
        left(t);
    } else if (t == 1) {
        front(t);
    } else if (t == 2) {
        right(t);
    } else {
        hide(t);
    }
}

function hide(temp) {
    const ele = document.getElementById(temp + "_img")
    ele.style.transform = "translateX(-50%) scale(0)"
    ele.style.opacity = "0"
    ele.style.zIndex = "0"
}

function front(temp) {
    const ele = document.getElementById(temp + "_img")
    ele.style.transform = "translateX(-50%) scale(1)"
    ele.style.opacity = "1"
    ele.style.zIndex = "2"
}

function left(temp) {
    const ele = document.getElementById(temp + "_img")
    ele.style.transform = "translateX(-85%) scale(0.75)"
    ele.style.opacity = "0.5"
    ele.style.zIndex = "1"
}

function right(temp) {
    const ele = document.getElementById(temp + "_img")
    ele.style.transform = "translateX(-15%) scale(0.75)"
    ele.style.opacity = "0.5"
    ele.style.zIndex = "1"
}
setInterval(function() {
    let l = (i + tot - 1) % tot;
    let r = (i + 1) % tot;
    let n = (i + 2) % tot;
    hide(l);
    left(i);
    front(r);
    right(n);
    i = (i + 1) % tot;
}, 1500);