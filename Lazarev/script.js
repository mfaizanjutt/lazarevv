let menubtn=document.querySelector(".menu-btn")
let mypencil=document.querySelector(".button");

let cancelbtn=document.querySelector(".cancel-btn")
let elm=document.querySelector(".menu-list");
console.log(menubtn)
menubtn.onclick=()=>{
    elm.classList.add("active"),
    mypencil.classList.add("btn2")
}
cancelbtn.addEventListener("click",function(){
    elm.classList.remove("active")
    mypencil.classList.remove("btn2")
})