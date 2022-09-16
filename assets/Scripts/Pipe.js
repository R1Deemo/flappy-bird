// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        pipeUp: cc.Node,
        pipeDown: cc.Node,
        maxY: 0, //上方管子的距离
        minY: 0, //
        maxInter: 0, //间隔距离
        minInter: 0,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.pipeUp.y = (Math.random() * (this.maxY - this.minY) + this.minY);
        this.pipeDown.y = this.pipeUp.y - (Math.random() * (this.maxInter - this.minInter) + this.minInter);
    },

    start() {
        this.move();

    },
    move() {
        //缓动系统
        cc.tween(this.node)
            .by(3, { x: -(cc.winSize.width + 200 * 2) }) //时间，{要变化的：变化距离} 
            .call(() => {
                this.node.destroy(); //节点销毁
            })
            .start()

    },

    // update (dt) {},
});