

var visible = document.getElementById("menu-bar");
var invisible = document.getElementById("cancel");

visible.addEventListener("click", opener)
invisible.addEventListener("click",closer)

function opener(){

         document.getElementsByClassName("header-ul")[0].style.display = "flex"
          document.getElementById("searching").style.display = "none"
}

function closer(){
    document.getElementsByClassName("header-ul")[0].style.display = "none"
    document.getElementById("searching").style.display = "block"
   
}

window.addEventListener("resize",()=>{
    if(window.screen.width >1150){
         document.getElementsByClassName("header-ul")[0].style.display = ""
    }

    else{
         document.getElementsByClassName("header-ul")[0].style.display = "none"
    }
})

