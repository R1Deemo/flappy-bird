// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.move();

    },
    move() {
        //缓动系统
        cc.tween(this.node)
            .by(3, { x: -(cc.winSize.width + 200 * 2) }) //时间，{要变化的：变化距离}
            .start()
    },

    // update (dt) {},
});