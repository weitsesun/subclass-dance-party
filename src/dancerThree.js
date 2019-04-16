var makeDancerThree = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.$node = $('<span class="dancerthree"><img src ="https://i.gifer.com/19wG.gif"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition();
  this.step();
};

makeDancerThree.prototype = Object.create(makeDancer.prototype);
makeDancerThree.prototype.constructor = makeDancerThree;
makeDancerThree.prototype.oldStep = makeDancerThree.prototype.step;
makeDancerThree.prototype.step = function() {
  this.oldStep();
  this.$node.fadeToggle();
};
  