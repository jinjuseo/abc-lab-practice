const upButton = document.querySelector(".upButton");
const downButton = document.querySelector(".downButton");
const result  = document.querySelector(".result");

if(!upButton) window.alert("up button이 없음!");
if(!downButton) window.alert("down button이 없음!");
if(!result) window.alert("div 없음!");
let number = 0;

const upNumber = (e) => {
    number += 1;
    result.textContent = `${number}`;
    result.style.width=`${number*10}px`;
    result.style.height=`${number*10}px`;
    result.style.fontSize=`${number*5}px`;
    console.log(`click ${number}`);
}

const downNumber = (e) => {
    number-1 < 0 ? 0: number -=1;
    result.textContent = `${number}`;
    result.style.width=`${number*10}px`;
    result.style.height=`${number*10}px`;
    result.style.fontSize=`${number*5}px`;  
    console.log(`click ${number}`);
}

upButton.onclick = upNumber;
downButton.onclick = downNumber;
