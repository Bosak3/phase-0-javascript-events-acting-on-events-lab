// Your code here

const dodger = document.getElementById('dodger')

dodger.style.backgroundColor= "lavender";

dodger.style.bottom = "0px"
// dodger.style.left = "0px"

// document.addEventListener("keydown", function (event) {
//         if(event.key === "ArrowLeft"){
//             const leftNumbers = dodger.style.left.replace("px", "");
//             const left = parseInt(leftNumbers, 10);
//             if(left > 0){
//             dodger.style.left = `${left -10}px`;
//             }
//         }
// });

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
    else if(e.key === "ArrowRight"){
        moveDodgerRight();
    }
})

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    
    if (left > 0){
        dodger.style.left = `${left -10}px`;
    }

}

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);

    if (left < 360){
        dodger.style.left = `${left + 10}px`;
    }
}