import {
    TextFish
} from "./textfish.js";

export class FishGroup {
    constructor() {
        this.totalFishs = 10;

        this.color = [
            'rgba(3,155,229,1)',
        ];

        this.text = [
            'にーんじん',
            'ぺこ',
            'ぺこら',
            'こんぺこ',
            'おつぺこ'
        ]

        this.fishs = [];

        for (let i = 0; i < this.totalFishs; i++) {
            this.fishs[i] = new TextFish(
                this.text[Math.floor(this.text.length * Math.random())],
                this.color[Math.floor(this.color.length * Math.random())],
                3 + i * 0.3,
                Math.random() + 0.5,
            );
        }
    }

    resize(stageWidth, stageHeight, wavePercent) {
        //this.stageHeight = stageHeight;
        //this.wavePercent = wavePercent;

        this.fishs.forEach((fish) => {
            fish.resize(stageWidth, stageHeight, wavePercent);
        });
    }

    draw(ctx) {
        this.fishs.forEach((fish) => {
            fish.draw(ctx);
        })
    }
}