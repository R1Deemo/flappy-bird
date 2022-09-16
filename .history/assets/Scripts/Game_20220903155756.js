cc.Class({
    extends: cc.Component,

    properties: {
        bg1: cc.Node,
        bg2: cc.Node,
        speed: 5,


    },

    load: function() {
        this.bg1.x = -cc.winSize.width / 2;
        this.bg2.x = this.bg1.x + this.bg1.width - 2;
        if (this.bg2.x < this.cc.winSize.width / 2) {
            this.bg1.x = -cc.winSize.width / 2;
            this.bg2.x = this.bg1.x + this.bg1.width - 2;
        }
        return repeatForever(load);
    },

    onLoad() {
        load();
        // this.bg1.x = -cc.winSize.width / 2;
        // this.bg2.x = this.bg1.x + this.bg1.width - 2;


    },


    start() {

    },

    update(dt) {
        this.bg1.x -= this.speed;
        this.bg2.x -= this.speed;


    },
});