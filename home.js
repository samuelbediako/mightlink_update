let bar = document.querySelector(".fa-barrs")
let reponsiveNav = document.querySelector(".nav-bar2")
let showNav = false



bar.addEventListener("click", ()=>{
   if(!showNav){
    reponsiveNav.style.top = 60+"px"
    showNav = true
   }else{
        reponsiveNav.style.top = -150+"px"
        showNav = false
   }
})
