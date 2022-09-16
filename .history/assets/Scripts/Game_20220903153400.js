cc.Class({
    extends: cc.Component,

    properties: {
        bg1: cc.Node,
        bg2: cc.Node,



    },



    onLoad() {
        this.bg1.x = -cc.winSize.width / 2;
        this.bg2.x = cc.winSize.width / 2;

    },

    start() {

    },

    // update (dt) {},
});