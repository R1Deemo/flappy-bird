cc.Class({
    extends: cc.Component,

    properties: {
        bg1: cc.Node,
        bg2: cc.Node,
        speed: 5,
        setting: cc.Node,


    },

    bgLoad: function() {
        this.bg1.x = -cc.winSize.width / 2;
        this.bg2.x = this.bg1.x + this.bg1.width - 2;


    },


    onLoad() {
        bgLoad();
        this.setting.on("click", this.settingSpeed, this)



    },
    settingSpeed() {
        this.speed = 0.5;

    },


    start() {

    },

    update(dt) {
        this.bg1.x -= this.speed;
        this.bg2.x -= this.speed;
        while (this.bg2.x < -cc.winSize.width / 2 - 2) {
            this.bg1.x = -cc.winSize.width;
            this.bg2.x = this.bg1.x + this.bg1.width - 2;
        }


    },
});