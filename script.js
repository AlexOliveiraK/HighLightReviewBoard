let btn = document.addEventListener("dblclick", function(){
  getSelectedText();
});

function getSelectedText(){
  let selectedText = document.getSelection().toString().trim();
  let allDivsSpan = document.querySelectorAll("span");
  for(divSpan of allDivsSpan){
    if(selectedText == divSpan.innerHTML){
      divSpan.style.backgroundColor = "Cyan"; //REFERENCIA DE CORES >>> https://www.flextool.com.br/tabela_cores.html
    }
    else{
      divSpan.style.backgroundColor = null;
    }
  }
}