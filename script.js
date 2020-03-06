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
      console.log(id[0]);
      console.log(id[1])
      
      if(sparrowbn[id[0]][id[1]]=== 0){
       $(this).css("background-color", "red");
      }else{
        $(this).css("background-color", "black");
      }

    })
    


  });

  