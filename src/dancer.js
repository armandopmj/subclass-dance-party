// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};


Dancer.prototype.step = function(){
  var context = this;
  setTimeout(function(){ context.step() }, context.timeBetweenSteps)
};

Dancer.prototype.setPosition = function(top, left){
   // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    this.$node.css({
      top: top,
      left: left,
    });
};

Dancer.prototype.lineUp = function(top, left){
  this.setPosition( top, left );
};

Dancer.prototype.pair = function(pair){
  this.setPosition(pair.top+25, pair.left+25);
}

Dancer.prototype.followPath = function(path, i){
  var i = i || 0, path = path, context = this;

  context.setPosition(path[i][1], path[i][0]);
  if(i>path.length) return;
  setTimeout(function(){context.followPath(path, ++i)}, 100);
};

//




















