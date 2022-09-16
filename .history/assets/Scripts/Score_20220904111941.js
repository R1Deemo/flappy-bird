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

        cc.score = 0; //cc全局都能拿到

        //数据存本地
        //cc.sys.localStorage.setItem(key,value);    //key自己命名

        //获取数据
        //let value= cc.sys.localStorage.getItem(key);
        //

        this.dScore.string = "当前分：" + cc.score;
    },

    start() {

    },
    addScore() {
        cc.score++;
        this.dScore.string = "当前分：" + cc.score;
    },


    // update (dt) {},
});