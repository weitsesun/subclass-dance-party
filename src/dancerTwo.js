var makeDancerTwo = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.$node = $('<span class="dancertwo"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
};
  
makeDancerTwo.prototype = Object.create(makeDancer.prototype);
makeDancerTwo.prototype.constructor = makeDancerTwo;
makeDancerTwo.prototype.oldStep = makeDancerTwo.prototype.step;
makeDancerTwo.prototype.step = function() {
  this.oldStep();
  this.$node.fadeToggle();
};
  