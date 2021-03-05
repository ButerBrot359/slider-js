const left_arrow = document.getElementsByClassName("line_left")[0];
const line_right = document.getElementsByClassName("line_right")[0];
const subnav = document.getElementsByClassName("subnav");
const grid_text = document.getElementsByClassName("grid_text");
const vectors = document.getElementsByClassName("vector")
let photo = document.getElementById("slider")
let num_of_photo = 1;
const entities = [
    {
      city: 'Rostov-on-Don LCD admiral',
      repair_time: '3.5 months',
      area:'81 m2',
      cost: 'Upon request',
       
    },
    {
      city: 'Sochi Thieves',
      repair_time: '4 months',
      area:'105 m2',
      cost: 'Upon request',
       
    },
    {
      city: 'Rostov-on-Don Patriotic',
      repair_time: '3 months',
      area:'93 m2',
      cost: 'Upon request',
      
    }
  ]
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
vectors[0].addEventListener("click", function(e) {
    e.preventDefault()
    num_of_photo = 1;
    setPhoto()

    
})
vectors[1].addEventListener("click", function(e) {
    e.preventDefault()
    num_of_photo = 2;
    setPhoto()

    
})
vectors[2].addEventListener("click", function(e) {
    e.preventDefault()
    num_of_photo = 3;
    setPhoto()

    
})
function setPhoto() {
    var a = document.getElementsByClassName("vector");
    for (v of a) {
        v.src = "images/circle_grey.svg" 
    }
    a[num_of_photo-1].src = "images/white_circle.svg"
    grid_text[0].innerHTML = entities[num_of_photo-1].city
    grid_text[1].innerHTML = entities[num_of_photo-1].area
    grid_text[2].innerHTML = entities[num_of_photo-1].repair_time
    grid_text[3].innerHTML = entities[num_of_photo-1].cost
    photo.src = `images/slider${num_of_photo}.png`
}
