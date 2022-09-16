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

        //  setting: cc.Node,


    },

    bgLoad: function() {
        this.bg1.x = -cc.winSize.width / 2;
        this.bg2.x = this.bg1.x + this.bg1.width - 2;
        this.ground1.x = -cc.winSize.width / 2;
        this.ground2.x = this.ground1.x + this.ground1.width - 8;


    },


    onLoad() {
        bgLoad();
        // this.setting.on("click", this.settingSpeed, this)
        this.playerSpeed = 10;
        this.touchN = cc.find("Canvas/touchNode");
        this.touchN.on("touchstart", this.playUp, this);



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
        this.ground1.x -= this.speed;
        this.ground2.x -= this.speed;
        // while (this.bg2.x < -cc.winSize.width / 2 - 2) {
        //     this.bg1.x = -cc.winSize.width;
        //     this.bg2.x = this.bg1.x + this.bg1.width - 2;
        // }
        if (this.bg1.x <= -(this.bg1.width + cc.winSize.width / 2)) {
            this.bg1.x = this.bg2.x + this.bg2.width - 2;
        }
        if (this.bg2.x <= -(this.bg2.width + cc.winSize.width / 2)) {
            this.bg2.x = this.bg1.x + this.bg1.width - 2;
        }

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






    },
});