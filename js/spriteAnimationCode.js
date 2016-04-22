// window.onload = function() {
//     var c = document.getElementById("coinAnimation");
//     var ctx = c.getContext("2d");
//     var img = new Image();
//     img.src = "images/coinAnimation.png";
//     //ctx.drawImage(img, 10, 10);
//     //ctx.drawImage(img, 10, 0, 10, 10, 0, 0, 10, 10);
// }



(function() {

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

(function () {
      
  // var coin,
  //   coinImage,
  //   canvas;
  var wrathSprite,
    wrathImage,
    canvas;         

  function gameLoop () {
  
    window.requestAnimationFrame(gameLoop);

    // coin.update();
    // coin.render();
    wrathSprite.update();
    wrathSprite.render();
  }
  
  function sprite (options) {
  
    var that = {},
      frameIndex = 0,
      tickCount = 0,
      ticksPerFrame = options.ticksPerFrame || 0,
      numberOfFrames = options.numberOfFrames || 1;
    
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.destinationX = options.destinationX;
    that.destinationY = options.destinationY;
    that.sizeWidth = options.sizeWidth;
    that.sizeHeight = options.sizeHeight;
    that.image = options.image;
    
    that.update = function () {

            tickCount += 1;

            if (tickCount > ticksPerFrame) {

        tickCount = 0;
        
                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {  
                    // Go to the next frame
                    frameIndex += 1;
                } else {
                    frameIndex = 0;
                }
            }
        };
    
    that.render = function () {
    
      // Clear the canvas
      that.context.clearRect(that.destinationX, that.destinationY, that.sizeWidth, that.sizeHeight);
      
      // Draw the animation
      that.context.drawImage(
        that.image,
        frameIndex * that.width / numberOfFrames,
        0, // potential for stacked spritesheet
        that.width / numberOfFrames,
        that.height,
        that.destinationX, //destination x
        that.destinationY, //destination y
        that.sizeWidth,
        that.sizeHeight,
        that.width / numberOfFrames,
        that.height);
    };
    
    return that;
  }
  
  // Get canvas
  canvas = document.getElementById("spriteCanvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Create sprite sheet

  //coinImage = new Image(); 
  wrathImage = new Image(); 
  
  // Create sprite

  // coin = sprite({
  //   context: canvas.getContext("2d"),
  //   width: 1000,
  //   height: 100,
  //   image: coinImage,
  //   numberOfFrames: 10,
  //   ticksPerFrame: 2
  // });

  wrathSprite = sprite({
    context: canvas.getContext("2d"),
    width: 3420,
    height: 158,
    destinationX: 300,
    destinationY: 500,
    sizeWidth: 110,
    sizeHeight: 90,
    image: wrathImage,
    numberOfFrames: 18,
    ticksPerFrame: 2
  });
  
  wrathSprite.destinationX = 900;
  // Load sprite sheet
  // coinImage.addEventListener("load", gameLoop);
  // coinImage.src = "images/coin-sprite-animation.png";
  wrathImage.addEventListener("load", gameLoop);
  wrathImage.src = "images/tryRun2.png";
} ());




