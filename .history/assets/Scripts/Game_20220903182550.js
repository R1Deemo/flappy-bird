cc.Class({
    extends: cc.Component,

    properties: {
        bg1: cc.Node,
        bg2: cc.Node,
        ground1: cc.Node,
        ground2: cc.Node,
        playerN: cc.Node,
        speed: 10,
        accele: 100, //降落速度
        // score label 的引用
        scoreDisplay: {
            default: null,
            type: cc.Label
        }

        //  setting: cc.Node,


    },

    bgLoad: function() {
        //加载背景

        this.bg1.x = -cc.winSize.width / 2;
        this.bg2.x = this.bg1.x + this.bg1.width - 2;
        //加载地面
        this.ground1.x = -cc.winSize.width / 2;
        this.ground2.x = this.ground1.x + this.ground1.width;


    },


    onLoad() {
        bgLoad();
        // this.setting.on("click", this.settingSpeed, this)

        this.playerSpeed = 10;
        this.touchN = cc.find("Canvas/touchNode");
        this.touchN.on("touchstart", this.playUp, this);
        // 初始化计分
        this.score = 0;



    },
    playUp() {
        //this.playerN

    },
    // settingSpeed() {
    //     this.speed = 0.5;

    // },


    start() {

    },

    update(dt) {
        //背景滚动
        this.bg1.x -= this.speed;
        this.bg2.x -= this.speed;
        //地面滚动
        this.ground1.x -= this.speed;
        this.ground2.x -= this.speed;

        //背景循环
        if (this.bg1.x <= -(this.bg1.width + cc.winSize.width / 2)) {
            this.bg1.x = this.bg2.x + this.bg2.width - 2;
        }
        if (this.bg2.x <= -(this.bg2.width + cc.winSize.width / 2)) {
            this.bg2.x = this.bg1.x + this.bg1.width - 2;
        }
        //地面循环
        if (this.ground1.x <= -(this.ground1.width + cc.winSize.width / 2)) {
            this.ground1.x = this.ground2.x + this.ground2.width - 2;
        }
        if (this.ground2.x <= -(this.ground2.width + cc.winSize.width / 2)) {
            this.ground2.x = this.ground1.x + this.ground1.width - 2;
        }

        //自由落体运动  
        this.playerSpeed += this.accele;
        //this.playerN.y -= this.playerSpeed * dt;
        this.playerN.y -= this.accele;
        //角色死亡
        if (this.playerN.y <= -430) {
            cc.director.loadScene("gameOver");
        }





    },
    gainScore: function() {
        this.score += 1;
        // 更新 scoreDisplay Label 的文字
        this.scoreDisplay.string = this.score;
    },
});