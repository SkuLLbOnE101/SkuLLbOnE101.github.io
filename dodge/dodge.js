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
    console.log("Preparing to dispense product.");
    this.load.image("bg",C.bg.file)
    this.load.spritesheet("placeholder",C.p.file,C.p.width,C.p.height,C.p.frames)
  }
  create() {
    console.log("Shutting down.");
    this.state.start("Play")
  }
}
 class Play {
  create() {
    console.log("Motion in CHAMBER 01");
    this.bg = this.add.tileSprite(0,0,C.bg.width,C.bg.height,"bg");
    this.bg.autoScroll(C.bg.xspeed,C.bg.yspeed);
  }
}
function restart() {
  game.state.start("Boot");
}
var game = new Phaser.Game(568, 320);
game.state.add("Boot",Boot);
game.state.add("Load", Load);
game.state.add("Play",Play);
game.state.start("Boot");
