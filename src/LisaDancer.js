var LisaDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  console.log(this);
  this.$node.addClass('lisa');
};

LisaDancer.prototype = Object.create(Dancer.prototype);
LisaDancer.prototype.constructor = LisaDancer;
