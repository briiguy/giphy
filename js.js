
//api query


// black people hahahahah
//lolololo yeaaah  ok
//   char
// 



    $('#search').click(

      function(){

        





        $('#first').remove()
        $('#second').remove()
        $('#third').remove()
        $('body').append("<h1 id ='first'>Movie Name: </h1>")
        $('body').append("<h1 id ='second'>Desc: </h1>")
        $('body').append("<h1 id ='third'>Year:</h1>")
console.log('click')

var lol=$('#content')[0].value
q=lol
var query='https://api.giphy.com/v1/gifs/search?api_key=WsTb53ehdbsJ2AxgBbgcZJLQqOZ5BAKu&q=' + q + "&limit=6"

        $.ajax({
    
    
      
          url: query,
          method:"GET"
        
        
        
        
        }).then(function(response){
        object = response
          console.log(response)
          var results = response.data;
            for (var i = 0; i < 6; i++) {
                //new div, p tag, and image tag
                var newDiv = $("<div class='display'>");
                var p = $("<h4>").text("Rating: " + results[i].rating);
                var teamImage = $("<img>");

                teamImage.attr("src", results[i].images.fixed_width_still.url);
                teamImage.attr("data-animate", results[i].images.fixed_width.url);
                teamImage.attr("data-still", results[i].images.fixed_width_still.url);
				teamImage.attr("data-state", "still");
                teamImage.attr("class", "gif");
                
                newDiv.append(p);
                newDiv.append(teamImage);
                $(".gif-view").prepend(newDiv)
            }
          $('#first').append('<p>'+object.Title+'</p>')
          $('#second').append('<p>'+object.Plot+'</p>')
          $('#third').append('<img id="image"></img>')
          $('#image').attr('src',object.Poster)
          $('#weather').append('<button class="peaceiswrong">'+object.Title+"</button>")
          var j = $(".peaceiswrong")
        j.attr('name',object.Title)
          j.on("click", function(){
            console.log(this)
            alert(this)
          })
          $('#weather').append(j)
   
          
          $('#content').value(object.Title)
        
        
        }
        )



      }

 

    )
    
    
    $('.stupid').click(console.log('lol'))
    
    function animateTeam(){
      var state = $(this).attr("data-state");
      var animateImage = $(this).attr("data-animate");
      var stillImage = $(this).attr("data-still");
  
      if (state === "still") {
          $(this).attr("src", animateImage);
          $(this).attr("data-state", "animate");
      }
  
      else {
          $(this).attr("src", stillImage);
          $(this).attr("data-state", "still");
          console.log("clicked to still")
      }
  }
  
  
  $(document).on("click", ".gif", animateTeam);

