let slideView = document.getElementById("slide-view")
let left = document.getElementById('left')
let right = document.getElementById("right")
left.addEventListener("click",()=>{
    slideView.style.transform = "translateX(0%)"
})
right.addEventListener("click",()=>{
    slideView.style.transform = "translateX(-43.5%)"
})

let slideView2 = document.getElementById("slide-view2")
let left2 = document.getElementById('left2')
let right2 = document.getElementById("right2")
left2.addEventListener("click",()=>{
    slideView2.style.transform = "translateX(0%)"
})
right2.addEventListener("click",()=>{
    slideView2.style.transform = "translateX(-33.5%)"
})

let slideView3 = document.getElementById("slide-view3")
let left3 = document.getElementById('left3')
let right3 = document.getElementById("right3")
left3.addEventListener("click",()=>{
    slideView3.style.transform = "translateX(0%)"
})
right3.addEventListener("click",()=>{
    slideView3.style.transform = "translateX(-43.5%)"
})


