var makeElaineDancer = function(top, left, timeBetweenSteps){
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
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
};