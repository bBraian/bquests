var elementos = document.querySelectorAll('[type=radio]');
var pontos = 0;

for(var i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('change',(e)=>{
        let marcado = e.target.value;
        if(marcado == "correta") {

            pontos ++;

            document.querySelector('.pontos').innerHTML = pontos+'/10 Acertos'; 

            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = "#3BB44B";

            let els = parentNode.parentNode.querySelectorAll('[type=radio]');

            for(var n = 0; n < els.length; n++){
                els[n].disabled = true;
            }

        }else if(marcado == "incorreta") {
            
            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = "#ED1B24";

            let els = parentNode.parentNode.querySelectorAll('[type=radio]');

            for(var n = 0; n < els.length; n++){
                els[n].disabled = true;
            }

            let correta = parentNode.parentNode.querySelector('[value=correta]');
            correta.parentNode.style.backgroundColor = "#3BB44B";
        }
    })
}