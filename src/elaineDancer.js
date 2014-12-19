var makeElaineDancer = function(top, left, timeBetweenSteps){
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append("<img src='images/elaine.gif'>");
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
makeElaineDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeElaineDancer.prototype.constructor = makeElaineDancer;

makeElaineDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeBlinkyDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.addClass('elaine'); //dh: this is blinkyDancers dance step
  var distance = this.$node.position(); //{top:value, left : value}
  this.$node.fadeIn();
  //this.$node.animate({left: Math.abs((distance.left - 200) * Math.random()), top: distance.top + 300 * Math.random() }, 600);
};

// Returns a random number between min (inclusive) and max (exclusive)
// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }