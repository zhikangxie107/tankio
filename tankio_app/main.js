import './style.css'
import Phaser from 'phaser'

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
  ratio: 9/16
};

class GameScene extends Phaser.Scene {
  constructor( ) {
      super("scene-game")
  }

  preload( ) {

  }

  create ( ) {

  }

  update ( ) {
    
  }
}

const config = {
  type: Phaser.WEBGL,
  width: sizes.width,
  height: sizes.height,
  canvas: gameCanvas
}


const game = new Phaser.Game(config)