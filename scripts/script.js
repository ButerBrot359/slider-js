const left_arrow = document.getElementsByClassName("line_left")[0];
const line_right = document.getElementsByClassName("line_right")[0];
const subnav = document.getElementsByClassName("subnav");
let photo = document.getElementById("slider")
let num_of_photo = 1;
left_arrow.addEventListener("click", function() {
    if (num_of_photo == 1) {
        num_of_photo = 3
    } else {
        num_of_photo = num_of_photo - 1
    }
    setPhoto()
});
line_right.addEventListener("click", function() {
    if (num_of_photo == 3) {
        num_of_photo = 1
    } else {
        num_of_photo = num_of_photo + 1
    }
    setPhoto()
});
subnav[0].addEventListener("click", function(e) {
    e.preventDefault()
    num_of_photo = 1;
    setPhoto()

    
})
subnav[1].addEventListener("click", function(e) {
    e.preventDefault()
    num_of_photo = 2;
    setPhoto()

    
})
subnav[2].addEventListener("click", function(e) {
    e.preventDefault()
    num_of_photo = 3;
    setPhoto()

    
})
function setPhoto() {
    var a = document.getElementsByClassName("vector");
    for (v of a) {
        v.src = "images/circle_grey.svg" 
    }
    if (num_of_photo == 1) {
        a[0].src = "images/white_circle.svg"
    } else if (num_of_photo == 2) {
        a[1].src = "images/white_circle.svg"
    } else {
        a[2].src = "images/white_circle.svg"
    }
    photo.src = `images/slider${num_of_photo}.png`
}
