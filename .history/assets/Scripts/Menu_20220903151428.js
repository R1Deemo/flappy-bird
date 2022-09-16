//点击按钮跳转游戏场景
cc.Class({
    extends: cc.Component,

    properties: {
        btnBtton: cc.Node,




    },


    onLoad() {
        this.btnButton.on("click", this.startGame, this)
    },
    startGame() {
        cc.director.loadScene("Game");

    },

    start() {

    },

    // update (dt) {},
});