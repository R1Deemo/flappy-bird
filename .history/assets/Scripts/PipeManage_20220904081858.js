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
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.createPipe();
    },

    start() {

    },

    // update (dt) {},
});