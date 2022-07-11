//Cross dinosaurs off list
let crossout = document.querySelectorAll('#crossout li');

for (let i = 0; i < crossout.length; i++) {
    crossout[i].addEventListener('click', function () {
        crossout[i].style.textDecoration = 'line-through'
    })
}

// Make species fade away
let fade = document.querySelectorAll('#fade li');

for (let i = 0; i < fade.length; i++) {
    fade[i].addEventListener('click', function () {
        console.log(`${fade[i]} clicked`)
        fade[i].style.opacity = '0.0'
    })
}

// Collapse Dinasaur

let row = document.querySelectorAll('#row img')

for (let i = 0; i < row.length; i++) {
    row[i].addEventListener('click', function () {
        row[i].style.width = "0"
    })
}

//Meteor Me!

let destroy = document.querySelector("#destroy-all");

destroy.addEventListener('click', function () {
    for (let i = 0; i < crossout.length; i++) {
        crossout[i].style.textDecoration = 'line-through'
    }

    for (let i = 0; i < fade.length; i++) {
        fade[i].style.opacity = '0.0'
    }

    for (let i = 0; i < row.length; i++) {
        row[i].style.width = "0"
    }
})

