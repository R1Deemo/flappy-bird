// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        pipe: cc.Prefab,

    },
    //创建管子
    createPipe() {
        //实例化预制体
        let pipeN = cc.instantiate(this.pipe);
        //给一个父亲节点 默认位置（0，0）
        pipeN.parent = this.node;
        pipeN.x = cc.winSize.width / 2 + 200;
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //批量生产但不同时
        //定时器 
        this.schedule(this.createPipe, 3);
        this.createPipe();
    },

    start() {

    },

    // update (dt) {},
});