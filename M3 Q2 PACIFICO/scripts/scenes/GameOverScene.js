export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOverScene' });
    }

    init(data) {
        this.timeAlive = data.timeAlive || 0;
        this.score = data.score || 0;
    }

    preload() {
        this.load.image('background', 'assets/images/background.png');
    }

    create() {
        const background = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'background');

        const gameOverText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 100, 'Game Over', {
            fontFamily: 'Arial', 
            fontSize: '48px',
            fill: '#FF0000', 
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000',
                blur: 1,
                stroke: false,
                fill: true
            }
        }).setOrigin(0.5);

        const timeText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 50, `You have survived ${this.timeAlive} seconds`, {
            fontFamily: 'Arial', 
            fontSize: '20px',
            fill: '#FFFFFF', 
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000',
                blur: 1,
                stroke: false,
                fill: true
            }
        }).setOrigin(0.5);

        const scoreText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, `Score: ${this.score}`, {
            fontFamily: 'Arial', 
            fontSize: '32px',
            fill: '#FFFFFF', 
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000',
                blur: 1,
                stroke: false,
                fill: true
            }
        }).setOrigin(0.5);

        const restartButton = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 150, 'Restart', {
            fontFamily: 'Arial', 
            fontSize: '32px',
            fill: '#FFFFFF', 
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000',
                blur: 1,
                stroke: false,
                fill: true
            }
        }).setOrigin(0.5);

        const mainMenuButton = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 200, 'Main Menu', {
            fontFamily: 'Arial', 
            fontSize: '32px',
            fill: '#FFFFFF', 
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000',
                blur: 1,
                stroke: false,
                fill: true
            }
        }).setOrigin(0.5);

        restartButton.setInteractive();
        restartButton.on('pointerdown', () => {
            this.scene.start('GameScene', { timeAlive: 0, score: 0 });
        });

        mainMenuButton.setInteractive();
        mainMenuButton.on('pointerdown', () => {
            this.scene.start('MainMenuScene');
        });
    }
}
