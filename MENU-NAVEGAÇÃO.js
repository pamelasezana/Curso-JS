function toggle(){
    let menuarea = document.getElementById("menu-area");

    if(menuarea.classList.contains("menu-opened"))
    {
        menuarea.classList.remove("menu-opened");

    }else
    {  menuarea.classList.add("menu-opened"); }
}

//outra forma de fazer

function toggle(){
    let menuarea = document.getElementById("menu-area");

    if (menuarea.style.width == "200px")
    {
        menuarea.style.width = "0";
    }
    else
    {
        menuarea.style.width = "200px";
    }
}