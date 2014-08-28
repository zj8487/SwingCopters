
var GameLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var winSize =cc.director.getWinSize();

        var backgroud = new cc.Sprite(bg_0);
        backgroud.attr({
            x:0,
            y:0,
            anchorX:0,
            anchorY:0
        });

        land.attr({
            x:0,
            y:0,
            anchorX:0,
            anchorY:0
        });

        var cloud  = new cc.Sprite(cloud_0);
        cloud.attr({
            x:(winSize.width-cloud.width)/2,
            y:land.height,
            anchorY:0,
            anchorX:0
        });
        tree.attr({
            x:0,
            y:0,
            anchorY:0,
            anchorX:0
        });


        var crane = new DoubleCrane(0);

        crane.y = (winSize.height+land.height)/2;
        crane.x = winSize.width/2;

        var title_00 = cc.SpriteFrame.create(BASE_IMG,cc.rect(1212,524,225,180));
        var title_01 = cc.SpriteFrame.create(BASE_IMG,cc.rect(1648,298,225,180));
        var title_02 = cc.SpriteFrame.create(BASE_IMG,cc.rect(1648,482,225,180));
        var title_03 = cc.SpriteFrame.create(BASE_IMG,cc.rect(436,772,225,180));
        var titles = [title_00 , title_01 , title_02 , title_03];

        var frameAnimation = cc.Animation.create(titles, 0.1);
        var floatDown = new cc.EaseSineOut(cc.moveBy(0.6,cc.p(0,-10)));
        var floatUp = new cc.EaseSineIn(cc.moveBy(0.6,cc.p(0,10)));
        var floatAnimation = cc.sequence(floatDown,floatUp);

        var title = new cc.Sprite(title_00);
        title.attr({
            x:(winSize.width-title.width)/2,
            y:(winSize.height+land.height)/2,
            anchorX:0
        });


        title.runAction(new cc.RepeatForever(new cc.Animate(frameAnimation)));
        title.runAction(floatAnimation.repeatForever());


        this.addChild(backgroud);
        this.addChild(cloud);
        this.addChild(tree);
        this.addChild(land);
        this.addChild(crane);
        this.addChild(title);

        var play = new cc.MenuItemSprite(
            cc.Sprite.create(BASE_IMG,cc.rect(1876,481,162,96)),
            cc.Sprite.create(BASE_IMG,cc.rect(1876,475,162,96)),
            function () {
                cc.log("Menu is clicked!");
            }, this);
        var menu = new cc.Menu(play);
        menu.x = winSize.width/2;
        menu.y = 270;
        this.addChild(menu, 9999);




        return true;
    }
});

var GameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});

