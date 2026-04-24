let startTime;
let aimStart;

// ---------------- REACTION TEST ----------------
function startTest() {
    let box = document.getElementById("box");

    if (!box) return;

    box.style.display = "none";

    let delay = Math.random() * 3000;

    setTimeout(() => {
        box.style.display = "block";
        startTime = new Date().getTime();
    }, delay);
}

document.addEventListener("DOMContentLoaded", function () {
    let box = document.getElementById("box");

    if (box) {
        box.onclick = function () {
            let endTime = new Date().getTime();
            let reaction = (endTime - startTime) / 1000;

            alert("Reaction Time: " + reaction + " sec");
        };
    }
});


// ---------------- AIM TRAINING ----------------
function startAim() {
    let box = document.getElementById("aimBox");

    if (!box) return;

    box.style.display = "block";
    box.style.background = "green";
    box.innerText = "CLICK";

    aimStart = new Date().getTime();

    box.onclick = function () {
        let end = new Date().getTime();
        let time = (end - aimStart) / 1000;

        alert("Aim Time: " + time + " sec");
        box.style.display = "none";
    };
}


// ---------------- MOVEMENT TRAINING ----------------
function startMove() {
    let btn = document.getElementById("moveBtn");

    if (!btn) return;

    btn.innerText = "WAIT...";

    setTimeout(() => {
        btn.style.background = "red";
        btn.innerText = "CLICK NOW!";
    }, Math.random() * 3000);

    btn.onclick = function () {
        if (btn.style.background === "red") {
            alert("Good Movement Timing!");
        } else {
            alert("Too early!");
        }
    };
}