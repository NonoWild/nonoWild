fetch("./patronus.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data){
    showGame(data)
  });
  $("#new-button").click(function() {
    fetch("./patronus.json")
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      showGame(data)
      $(".square").css("background-color", "rgb(86, 93, 148")
    })
  })
  function showGame(data){
    var steps = [
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,0,0,0,0]
    ]
    let a = (Object.keys(data));
    let picRandom = Math.floor(Math.random (a)*9);
    let b = a[picRandom]
    console.log(b);
  
    // PISTAS
    for(let i =0; i < data[b].clue.length; i++){
      
      document.getElementById(i).innerHTML = data[b].clue[i].join("")
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
          if(valor !== data[b].bn[i][j]){
            return false;
          }
        }
      }
      return true;
    })
    
    $('.square').click(function(){
      let id = $(this).attr("id");
      //let sparrowbn = data[b].bn;
      
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
        $(this).css("background-color", "#46b967");
      }else{
        $(this).css("background-color", "rgb(86, 93, 148)");
      }
      if(comprobar() === true){
        colorize();
        setTimeout(()=>{
          $("#finalpartida").click()
        }, 100)
        confetti.start()
        setTimeout(()=>{
          confetti.stop()
        }, 3000)
      }
    });
    function colorize(){
      let patroncl = data[b].color;
      console.log(patroncl.length);
      for(let i=0; i < patroncl.length; i++){
        for(let j=0; j < patroncl[i].length; j++){
          let temporalId = "#" + String(i) + String(j);
          $(temporalId).css("background-color", patroncl[i][j]);
        }
      }
      
    }  
    
  }



