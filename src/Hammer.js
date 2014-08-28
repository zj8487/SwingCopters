/**
 * Created by cauchywei on 14/8/26.
 */
var Hammer = cc.Node.extend({
    maxAngel :30,
    hammer:null,
    t:3.5,
   ctor:function(t,maxAngel){
       this._super();

       if(typeof t != 'undefined'){
           this.t = t;
       }
       if(typeof maxAngel != 'undefined'){
           this.maxAngel = maxAngel;
       }

       this.hammer = cc.Sprite.create(BASE_IMG,cc.rect(339,1568,63,104));
       this.hammer.anchorY=1;
       this.hammer.rotate = - this.maxAngel;
       this.addChild(this.hammer);
       this.swing();

   },
   swing:function(){
       var quarterT = this.t/4;
       var anim0 = cc.EaseSineOut(cc.rotateBy(quarterT,this.maxAngel));
       var anim1 = cc.EaseSineIn(cc.rotateBy(quarterT,-this.maxAngel));
       var anim2 = cc.EaseSineOut(cc.rotateBy(quarterT,-this.maxAngel));
       var anim3 = cc.EaseSineIn(cc.rotateBy(quarterT,this.maxAngel));

       this.runAction(new cc.RepeatForever(cc.sequence(anim0,anim1,anim2,anim3)));
   }

});