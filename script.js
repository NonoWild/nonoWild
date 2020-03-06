var steps = [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0]
]



fetch("./patronus.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data){
    // PISTAS
    for(let i =0; i < data.sparrow.clue.length; i++){
      document.getElementById(i).innerHTML = data.sparrow.clue[i];
    }
    
    let comprobar = (()=>{

      //RECORREMOS TODO EL ARRAY
      for(i=0; i < steps.length; i++){
        for(j=0; j < steps[i].length; j++){
          //AJUSTAMOS EL VALOR DE STEPS
          let valor = steps[i][j];
          if(valor === 2){
            valor = 0;
          }
          //SI ES DISTINTO QUE EL ORIGNAL NO HAS GANADO TODAVÍA
          if(valor !== data.sparrow.bn[i][j]){
            return false;
          }
        }
      }
      return true;
    })

    

    $('.square').click(function(){
      let id = $(this).attr("id");
      let sparrowbn = data.sparrow.bn;
      
      //PASO 1
      //HAS HECHO CLICK ALGUNA VEZ
      if(steps[id[0]] [id[1]] === 0){
        
        steps[id[0]] [id[1]] = 1;
        

      }else if(steps[id[0]] [id[1]] === 1) {
        steps[id[0]] [id[1]] = 2;
      }else{
        steps[id[0]] [id[1]] = 0;
      }




      if(steps[id[0]] [id[1]] === 1){
        $(this).css("background-color", "black");
      }else if(steps[id[0]] [id[1]] === 2){
        $(this).css("background-color", "red");
      }else{
        $(this).css("background-color", "white");
      }


      if(comprobar() === true){
        colorize();
      }

    });

    function colorize(){
      let sparrowcl = data.sparrow.color;
      console.log(sparrowcl.length);
      for(let i=0; i < sparrowcl.length; i++){
        for(let j=0; j < sparrowcl[i].length; j++){
          let temporalId = "#" + String(i) + String(j);
          $(temporalId).css("background-color", sparrowcl[i][j]);
        }
      }
    }

    
    
  });

  