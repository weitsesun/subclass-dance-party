var makeDancerTwo = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.$node = $('<span id="axis" class="bounce dancertwo"><img src ="https://66.media.tumblr.com/d9105814c15295196a3dbe75c32ba1a0/tumblr_oagpklvBGf1scncwdo1_400.gif" height=100px width=100px></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition();
  this.step();
  this.rotation = 0;
};
  
makeDancerTwo.prototype = Object.create(makeDancer.prototype);
makeDancerTwo.prototype.constructor = makeDancerTwo;
makeDancerTwo.prototype.oldStep = makeDancerTwo.prototype.step;
makeDancerTwo.prototype.step = function() {
  this.oldStep();
  this.$node;
};
  