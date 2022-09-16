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

    },
    //碰撞回调函数
    onCollisionEnter: function(other, self) {
        //和管子相撞
        if (other.tag == 1) {
            cc.director.loadScene("gameOver");
        }
        //积分
        else {

            console.log("u");
        }

    }



    // update (dt) {},
});