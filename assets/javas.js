let taskArray = [];
console.log(taskArray)

function aggiungiTask(){
  creandoContenitore();
}



function creandoContenitore(){
  //prendo il padre
  const padre = document.getElementById("bacheca")
  //prendo il testo 
  const task = document.getElementById("task").value

  //creo contenitori
  let contenitoreTask = document.createElement("div")
  let contenitoreText = document.createElement ("p")
  let contenitoreBtn = document.createElement("INPUT")

  //setto valori 
  contenitoreText.innerText = task

  //css da aggiungere ad una classe.
  contenitoreText.style.cssText = "display:inline;margin-right:1em"
  


  contenitoreBtn.setAttribute("type","button","value","onclick")
  contenitoreBtn.addEventListener("click",removeTask)
  contenitoreBtn.value = "rimuovi"

  //aggiungo i contenitori al padre.
  contenitoreTask.appendChild(contenitoreText)
  contenitoreTask.appendChild(contenitoreBtn)  

  taskArray.push(contenitoreTask)

  latestTask = taskArray[taskArray.length-1]
  
  padre.appendChild(latestTask)
}

function removeTask(){
  parentIndex = this.parentNode
  parentIndex.remove();
}

function completeline(testo){ 
  ptext = testo.contenitoreText
  check=false;

  if(check){
    testo.style.textDecoration="none";
    check=false;
    console.log(check)
    return
  }else{
    testo.classList.add("task")
    check = true;
    console.log(check)
  }
}






