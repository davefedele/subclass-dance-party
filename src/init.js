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
    // console.log(dancerMakerFunctionName, "dancer fn name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    // console.log(dancerMakerFunction);
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    // console.log('after');
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $(".lineupDancerButton").on("click", function(event){
      var count = 1;
      window.dancers.forEach(function(dancer){
        dancer.lineup(25,(50 * count * 3));
        // console.log("lining up", dancer);
        count++;
      });
    });

  $("body").on("mouseover", "span", function(event){ 
    //loop over each dancer
    var targetDancer = event.target;
    var distance = {};
    var that = this;
    // var smallest = 0;
      window.dancers.map(function(dancer){
        var y2 = dancer.$node.position().top;
        // console.log(dancer);
        var x2 = dancer.$node.position().left;
        var y1 = $(that).position().top;
        var x1 = $(that).position().left;
        var neighborDistance = Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
        distance[neighborDistance] = dancer;
        // console.log(distance);
        // console.log('the target:  ', $(this).position());
        // console.log(dancer.$node.position());
      });
      for (var key in distance) {
        if(key < 250 && key > 1){
          distance[key].$node.addClass('neighbor');
        }
      }
    // console.log($(this).position());
    
    // alert(dancer);
  });
});

