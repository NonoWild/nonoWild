fetch("./patronus.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // PISTAS
    for(let i =0; i < data.sparrow.clue.length; i++){
      document.getElementById(i).innerHTML = data.sparrow.clue[i]
    }

    $('.square').click(function(){
      let id = $(this).attr("id") 
      let sparrowbn = data.sparrow.bn

      
      if(sparrowbn[0][0] === 0){
        console.log("esto va de blanco")
      }

    })
    


  });

  