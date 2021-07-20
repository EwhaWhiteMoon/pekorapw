export class TextFish {
    constructor(text, color, speed, depth) {
        this.color = color;
        //this.text = text;
        this.letters = text.split('');
        this.speed = speed;
        this.depth = depth;
        this.cur = 0;
    }

    resize(stageWidth, stageHeight, wavePercent){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        this.wavePercent = wavePercent;

        this.y = stageHeight * wavePercent + stageHeight * this.depth;
    }

    update(){
        this.x += this.speed;
        this.cur += this.speed * 0.05;

        if(!this.x || this.x - 50 * this.letters.length > this.stageWidth){
            this.x = -500 * Math.random();
            this.depth = Math.random();
            this.y = this.stageHeight * this.wavePercent * (1 + this.depth);
        }
    }

    draw(ctx){
        this.update();

        ctx.fillStyle = this.color;
        ctx.font = 'bold 35px serif';
        this.letters.forEach((letter, i) => {
                ctx.translate(
                    this.x + 20 * i,
                    this.y + Math.sin(this.cur + i) * 10
                );
                ctx.rotate(0.5 * Math.cos(this.cur + i));
                ctx.fillText(letter, 0, 0);
                ctx.setTransform(2, 0, 0, 2, 0, 0);
            }
        );
    }
}