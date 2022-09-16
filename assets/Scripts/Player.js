// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        scoreN: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },
    //碰撞回调函数
    onCollisionEnter: function(other, self) {
        //和管子相撞
        if (other.tag == 1 || other.tag == 3) {


            let localScore = parseInt(cc.sys.localStorage.getItem("Score"));
            //第一次进来本地数据为空
            if (!isNaN(localScore)) {
                if (localScore < cc.score) {
                    cc.sys.localStorage.setItem("Score", cc.score)
                }

            } else {
                cc.sys.localStorage.setItem("Score", cc.score); //key自己命名
            }
            //数据存本地



            cc.director.loadScene("gameOver");

        }
        //积分
        else {
            //从节点获取组件
            let scorJs = this.scoreN.getComponent("Score");
            scorJs.addScore();
            console.log("1");

        }
        // else {
        //     cc.director.loadScene("gameOver");
        // }

    },



    // update (dt) {},
});