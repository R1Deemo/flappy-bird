// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        maxScore: cc.Label,
        dScore: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.score = 0
            // this.maxScore.string = "最高分：" + this.score;
        this.dScore.string = "当前分：" + this.score;
    },

    start() {

    },
    addScore() {
        this.score++;
        this.dScore.string = "当前分：" + this.score;
    },


    // update (dt) {},
});