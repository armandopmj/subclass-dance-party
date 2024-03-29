$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");


    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push( dancer );
    $('body').append(dancer.$node);

    // Q WTF??
    $(".dancer").mouseover(function(event){
     $(this).css('border', '30px solid blue')
    });

    $('.dancer').on('click', function(event){
      for(var i = 0; i < window.dancers.length; i += 2){
        var dancer1 = window.dancers[i];
        var dancer2 = window.dancers[i+1];
        dancer1.pair.call(dancer1, dancer2);
      }
    });
  });

  $(".line").on("click", function(event){
    for( var i = 0; i < window.dancers.length; i++ ){
      var dancer = window.dancers[i];
      // Q: WHY
      dancer.lineUp.call( dancer, i*100 , 0 );
    }
  });

/////DONT UNCOMMENT THIS CODE
    // $(".dancer").on("click", function(event){
    //   console.log( $(this) );
    //  $(this).css('border', '30px solid blue')
    // });

  var path = [];
  $( ".floor" ).mousedown(function(){
      path = [];
      $(".floor").mousemove(function(e){
        path.push( [event.pageX, event.pageY] );
      });
  });
  $( ".floor" ).mouseup(function(){
    $(".floor").unbind( "mousemove" );
    var recurser = function(i){
      if(i >= window.dancers.length) return;
      window.dancers[i].followPath(path);
      setTimeout(function(){ recurser(++i) }, 1000);
    };
    recurser(0);
  });





//Track Path

//On'mousedown' push [top, left] into an array - then continuously set location
//$('body').on('mousemove', function(event){console.log(event.pageX)})


});

