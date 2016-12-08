//Heya there

var C = {
  "game": {
    "width":320,
    "height": 568
  },
  "bg": {
    "width": 320,
    "height": 568,
    "xspeed": 0,
    "yspeed": 10,
    "file": "assets/glados.png"
},
"p": {
  "file": "assets/space.jpg",
  "width": 46,
  "height": 64,
  "frames": 1 ,
  "startx": 160,
  "starty": 500
  },
  "d": {
    "file": "assets/propulsion.jpg",
    "width": 64,
    "height": 64,
    "frames": 28,
    "fps": 24,
    "startx": 160,
    "starty": 32
     } 
}


class Boot {
  preload() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  }
  create() {
    this.state.start("Load")
  }
}

class Load {
  preload() {
    console.log("ACTIVATING TESTING PROCEDURE");
    this.load.image("bg",C.bg.file)
    this.load.image("p",C.p.file)
    this.load.spritesheet("d",C.d.file,C.d.width,C.d.height,C.d.frames)
  }
  create() {
    console.log("ACTIVATED");
    this.state.start("Play")
  }
}
 class Play {
  create() {
    console.log("MOTION IN TESTING AREA 01");
    this.bg = this.add.sprite(0,0,"bg");
    this.bg.width = game.world.width
    this.bg.height = game.world.height
    this.bg.smoothed = false

  
    this.player = this.add.sprite(C.p.startx,C.p.starty,"p");
    this.player.anchor.set(0.5, 0.5);
    this.player.smoothed = false;
    this.player.scale.set(3.5);

    this.dodge = this.add.sprite(C.d.startx,C.d.starty,"dodge");
    this.dodge.anchor.set(0.5,0.5);
    this.dodge.smoothed = false;
    this.dodge.scale.set(1);
    this.dodge.animations.add("anim");
    this.dodge.animations.play("anim",C.d.fps,true);
  }
}


function restart() {
  game.state.start("Boot");
}
var game = new Phaser.Game(C.game.width,C.game.height);
game.state.add("Boot",Boot);
game.state.add("Load", Load);
game.state.add("Play",Play);
game.state.start("Boot");
