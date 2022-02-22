function clicou(){
    document.getElementById("title").style.color = "red";
}

function digitou(e){
  if (e.keyCode == 13  && e.ctrlKey == true){ //enter e control  
    let name = document.getElementById("name").value;

    console.log (name);
  }
}