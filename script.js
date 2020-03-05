fetch("./patronus.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let hint = data.sparrow.clue[0]
    let p40 = document.getElementById("40")
      p40.innerHTML = hint
    
    

  });

 

  