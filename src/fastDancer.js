var FastDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('fastDancer');
};

FastDancer.prototype = Object.create(Dancer.prototype);
FastDancer.prototype.constructor = FastDancer;
FastDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var context = this;
  setInterval(function(){
    context.setPosition($("body").height() * Math.random(), $("body").width() * Math.random())
  }, 3000);
};
