import {
    Wave
} from "./wave.js";

export class WaveGroup {
    constructor() {
        this.totalWaves = 3;
        this.totalPoints = 6;

        this.color = [
            'rgba(237,145,33,0.4)',
            'rgba(237,145,33,0.4)',
            'rgba(237,145,33,0.4)',
        ];

        this.waves = [];

        for (let i = 0; i < this.totalWaves; i++) {
            this.waves[i] = new Wave(
                i,
                this.totalPoints,
                this.color[i],
            );
        }
    }

    resize(stageWidth, stageHeight, wavePercent) {
        this.waves.forEach((wave) => {
            wave.resize(stageWidth, stageHeight, wavePercent);
        })
    }

    draw(ctx) {
        this.waves.forEach((wave) => {
            wave.draw(ctx);
        })
    }
}