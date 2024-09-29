let chk1 = document.querySelector("#ch1");
let chk2 = document.querySelector("#ch2");
let chk3 = document.querySelector("#ch3");
let reset = document.querySelector(".reset");
let h2 = document.querySelector(".rr");


function getBackgroundPosition(element) {
    const style = window.getComputedStyle(element);
    return style.backgroundPositionX; 
}


function checkWin() {
    
    let pos1 = getBackgroundPosition(chk1.nextElementSibling);
    let pos2 = getBackgroundPosition(chk2.nextElementSibling);
    let pos3 = getBackgroundPosition(chk3.nextElementSibling);

    if (chk1.checked && chk2.checked && chk3.checked) {
        if (pos1 === pos2 && pos2 === pos3) {
            h2.innerHTML = "YOU WIN";
            h2.classList.toggle("result")
        }
    }
}


chk1.addEventListener('click', () => {
    if (chk1.checked) {
        chk1.disabled = true;
        checkWin();
    }
});

chk2.addEventListener('click', () => {
    if (chk2.checked) {
        chk2.disabled = true;
        checkWin();
    }
});

chk3.addEventListener('click', () => {
    if (chk3.checked) {
        chk3.disabled = true;
        checkWin();
    }
});


reset.addEventListener('click', () => {
    chk1.disabled = false;
    chk1.checked = false;
    chk2.disabled = false;
    chk2.checked = false;
    chk3.disabled = false;
    chk3.checked = false;
    h2.innerHTML = "..."; 
});
