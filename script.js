fetch("./patronus.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let hint = data.sparrow.clue[0]
    let square = document.getElementById("square")
      square.innerHTML = hint
    
    

  });

 

  