$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();
   


    // TODO 2 - Create Platforms
   createPlatform(300,600,200,10,"black"); 
   createPlatform(100,700,200,10,"black");
   createPlatform(500,500,200,10,"black");
   createPlatform(700,600,200,10,"black");
   createPlatform(900,700,200,10,"black");
   createPlatform(1200,700,200,10,"black");


    // TODO 3 - Create Collectables
    createCollectable("database",200,660);
    createCollectable("database",600,460);
    createCollectable("database",1000,660);


    
    // TODO 4 - Create Cannons
    createCannon("top", 700,2000);
        createCannon("bottom", 300,2000);
            createCannon("bottom", 800,2000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
