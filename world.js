window.onload = function() {

    var results = document.getElementById("result");
    var httpRequest;
    var searchBtnLoad= document.getElementById("lookup")
    
    searchBtnLoad.addEventListener('click', function(country) {
     country.preventDefault();
  
      httpRequest = new XMLHttpRequest();
  
      var url = "world.php";
      httpRequest.onreadystatechange = countrySearch;
      httpRequest.open('GET', url);
      httpRequest.send();
    });
  
    function countrySearch() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          var response = httpRequest.responseText;
          results = document.querySelector('result');
          results.innerHTML = response;
        } else {
          document.getElementById("result").innerHTML= "Country not Found";
          return;
        }
      }
    }
  
  };