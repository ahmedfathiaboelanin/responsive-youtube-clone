document.getElementById("hamburger").onclick=function popright(){
    const side=document.getElementById("side");
    if(side.style.display=="none"){
    side.setAttribute("style","display:block; transition: .6s;");
    }
    else{
        side.setAttribute("style","display:none;");
    }
}