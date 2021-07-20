import {
  WaveGroup
} from './wave/wavegroup.js';

import {
  FishGroup
} from "./fish/fishgroup.js";

class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.waveGroup = new WaveGroup();
    this.fishGroup = new FishGroup();

    this.wavePercent = 0.5;
    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    this.pop = 0;
    window.addEventListener('wheel', this.scroll.bind(this), false);

    requestAnimationFrame(this.animate.bind(this));
  }

  scroll(e) {
    if(this.pop === 0){
      if(e.deltaY > 0) this.pop = 1;
      if(e.deltaY < 0) this.pop = -1;

      this.wavePercent += this.pop * 0.01;
    }
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;

    this.ctx.scale(2, 2);

    this.waveGroup.resize(this.stageWidth, this.stageHeight, this.wavePercent);
    this.fishGroup.resize(this.stageWidth, this.stageHeight, this.wavePercent);
  }

  animate(t) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    if(this.pop !== 0){
      if(0.9 <= this.wavePercent || this.wavePercent <= 0.5)
        this.pop = 0;
      else{
        this.wavePercent += this.pop * 0.01;
        this.resize();
      }
    }

    this.waveGroup.draw(this.ctx);
    this.fishGroup.draw(this.ctx);
    
    requestAnimationFrame(this.animate.bind(this));
  }
}


window.onload = () => {
  new App();
};