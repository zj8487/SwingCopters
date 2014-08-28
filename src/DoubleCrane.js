/**
 * Created by cauchywei on 14/8/25.
 */
var DoubleCrane = cc.Sprite.extend({
    craneLeft:null,
    craneRight:null,
    deltaX:null,
    distance:210,
    hammerLeft:null,
    hammerRight:null,
    ctor: function(deltaX,distance){
        this._super();
        if(arguments.length >= 1){
            this.deltaX = deltaX;
            if(typeof distance != 'undefined'){
                this.distance = distance;
            }
        }else{
            this.deltaX = Math.random()*60-60;
        }

        this.craneLeft = new cc.Sprite(BASE_IMG,cc.rect(903,771,408,33));
        this.craneRight = new cc.Sprite(BASE_IMG,cc.rect(903,771,408,33));

        this.craneLeft.attr({
            x:-(this.distance/2+deltaX),
            anchorX: 1
        });

        this.craneRight.attr({
            x:this.distance/2+deltaX,
            anchorX: 0
        });

        this.hammerLeft = new Hammer();
        this.hammerRight = new Hammer();

        this.hammerLeft.x = -25 + this.craneLeft.width;
        this.hammerLeft.y = 5;
        this.craneLeft.addChild(this.hammerLeft);

        this.hammerRight.x = 25;
        this.hammerRight.y = 5;
        this.craneRight.addChild(this.hammerRight);


        this.addChild(this.craneLeft);
        this.addChild(this.craneRight);
    }
});


