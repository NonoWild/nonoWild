fetch("./patronus.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    
    for(let i =0; i < data.sparrow.clue.length; i++){
      document.getElementById(i).innerHTML = data.sparrow.clue[i]
    }
    







  });

 

  