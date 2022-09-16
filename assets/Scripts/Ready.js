// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        btnTop: cc.Node,




    },


    onLoad() {
        this.btnTop.on("click", this.startGame, this)
    },
    startGame() {
        cc.director.loadScene("Game");

    },


    // update (dt) {},
});