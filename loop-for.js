//FOR LOOP
// FOR LOOP ARRAY

let texto ="";

//exemplo for loop
for(let i = 1; i<50;i++){
  
    texto = texto + i + '<br/>';

}

  document.getElementById("demo").innerHTML = texto;


  //exemplo for loop array

  let carros = ["BMW", "FORD", "AUDI", "MERCEDES,", "FIAT", "HONDA"] ;
  let html = '<ul>';

  for (let i in carros){
      html+= '<li>' + carros[i] + '</li>';
  }


   html += '</ul>';

   document.getElementById("demo").innerHTML = html;
 