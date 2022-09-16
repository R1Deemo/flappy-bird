// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        btnRetry: cc.Node,




    },


    onLoad() {
        this.btnRetry.on("click", this.retryGame, this)
    },
    retryGame() {
        cc.director.loadScene("Menu");

    },

    start() {

    },

    // update (dt) {},
});