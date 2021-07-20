import {Point} from './point.js'

export class Wave{
  constructor(index, totalPoints, color){
    this.index = index;
    this.totalPoints = totalPoints;
    this.color = color;
    this.points = [];
  }

  resize(stageWidth, stageHeight){
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.centerX = stageWidth / 2;
    this.centerY = (stageHeight * 8) / 9;

    this.pointGap = this.stageWidth / (this.totalPoints - 1);

    this.init();
  }

  init(){
    this.points = [];

    for(let i = 0; i < this.totalPoints; i++) {
      this.points[i] = new Point(
          this.index + i,
          this.pointGap * i,
          this.centerY,
      );
    }
  }

  draw(ctx){
    ctx.beginPath();
    ctx.fillStyle = this.color;

    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    ctx.moveTo(prevX, prevY);

    this.points.forEach((point, i) => {
      if(0 < i && i < this.totalPoints - 1) {
        point.update();
      }

      const cx = (prevX + point.x) / 2
      const cy = (prevY + point.y) / 2;

      ctx.quadraticCurveTo(prevX, prevY, cx, cy);

      prevX = point.x;
      prevY = point.y;
    })

    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(0, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.points[0].y);
    ctx.fill();
    ctx.closePath();
  }
}