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
  "file": "assets/shutup.png",
  "width": 46,
  "height": 64,
  "frames": 1
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
    //this.load.spritesheet("placeholder",C.p.file,C.p.width,C.p.height,C.p.frames)
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
