var camera = {
  reelLoaded: false,
  framesLeft: 0,
  loadReel: function(){
    console.log("Reel Loaded, You're ready to shoot!")
    camera.reelLoaded = true;
    camera.framesLeft = 3600;
  },
  shoot: function(){
    if(camera.reelLoaded === false){
      console.log("Please Load Reel");
    };
    if(camera.reelLoaded){
      var rolling = setInterval(function() {
        camera.framesLeft -= 18;
        console.log(camera.framesLeft, 'frames left...');
        if (camera.framesLeft <=0) {
          console.log('Out of film. Please Load Reel!');
          clearInterval(rolling);
        }
      }, 10);
    };
  }
};

camera.loadReel();
// console.log(camera.reelLoaded);
// camera.shoot();
