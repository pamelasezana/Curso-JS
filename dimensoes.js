function subirtela() {
    window.scrollTo({
        top: 0,
        left:0,
        behavior: 'smooth'
    });
   }

   function decidirScroll(){
        if 
        (window.scrollY === 0){
            //ocultar botao
            document.querySelector('.scrollbutton').style.display = 'none';
        }
        else{
            //mostrar botao
            document.querySelector('.scrollbutton').style.display = 'block';
        }
   }
  
  window.addEventListener('scroll',decidirScroll );


 