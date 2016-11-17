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
    "file": "assets/GLaDOS.png"
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
  }
  create() {
    console.log("Shutting down.");
  }
}
function restart() {
  game.state.start("Boot");
}
var game = new Phaser.Game(568, 320);
game.state.add("Boot",Boot);
game.state.add("Load", Load);
game.state.start("Boot");
