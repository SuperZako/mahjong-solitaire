declare var jQuery: any;
declare var $: any;
declare var Howler: any;

var screenfull = {
    request: function (b) {
        window.document.documentElement.webkitRequestFullScreen();
        // var e = window.document.web;//c.requestFullscreen;
        // b = b || window.document.documentElement.webkitRequestFullScreen;
        // if (/5\.1[.\d]* Safari/.test(navigator.userAgent))
        //     b[e]();
        // else
        //     b[e](d && Element.ALLOW_KEYBOARD_INPUT)
    },
    exit: function () {
        window.document.webkitExitFullscreen(); // [c.exitFullscreen]()
    },
    toggle: function (a) {
        this.isFullscreen ? this.exit() : this.request(a)
    },
    onchange: function (a) {
        this.on("change", a)
    },
    onerror: function (a) {
        this.on("error", a)
    },
    on: function (d, b) {
        // var c = g[d];
        // c && window.document.addEventListener(c, b, !1)
    },
    off: function (d, b) {
        // var c = g[d];
        // c && window.document.removeEventListener(c, b, !1)
    },
    //isFullscreen: {
    //    get: function () {
    //        return !!window.document.webkitFullscreenElement; //[c.fullscreenElement]
    //    }
    //},
    element: {
        enumerable: !0,
        get: function () {
            return window.document.webkitFullscreenElement; //[c.fullscreenElement]
        }
    }
};

var s_iScaleFactor = 1, s_iOffsetX, s_iOffsetY, s_bIsIphone = !1;
(function (a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
}
)(navigator.userAgent || navigator.vendor /*|| window.opera*/);
//$(window).resize(function () {
//    sizeHandler()
//});
window.onresize = () => {
    sizeHandler()
};

function trace(a) {
    console.log(a)
}
function isIOS() {
    var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); a.length;)
        if (navigator.platform === a.pop())
            return !0;
    return s_bIsIphone = !1
}

function getSize(a) {
    var b = a.toLowerCase()
        , d = window.document
        , c = d.documentElement;
    if (void 0 === window["inner" + a])
        a = c["client" + a];
    else if (window["inner" + a] != c["client" + a]) {
        var g = d.createElement("body");
        g.id = "vpw-test-b";
        g.style.cssText = "overflow:scroll";
        var e = d.createElement("div");
        e.id = "vpw-test-d";
        e.style.cssText = "position:absolute;top:-1000px";
        e.innerHTML = "<style>@media(" + b + ":" + c["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + b + ":7px!important}}</style>";
        g.appendChild(e);
        c.insertBefore(g, d.head);
        a = 7 == e["offset" + a] ? c["client" + a] : window["inner" + a];
        c.removeChild(g)
    } else
        a = window["inner" + a];
    return a
}
window.addEventListener("orientationchange", onOrientationChange);
function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}
function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}
function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < a ? a : 0
}
function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
        var b = getSize("Width");
        _checkOrientation(b, a);
        var d = Math.min(a / CANVAS_HEIGHT, b / CANVAS_WIDTH)
            , c = CANVAS_WIDTH * d;
        d *= CANVAS_HEIGHT;
        if (d < a) {
            var g = a - d;
            d += g;
            c += CANVAS_WIDTH / CANVAS_HEIGHT * g
        } else
            c < b && (g = b - c,
                c += g,
                d += CANVAS_HEIGHT / CANVAS_WIDTH * g);
        g = a / 2 - d / 2;
        var e = b / 2 - c / 2
            , f = CANVAS_WIDTH / c;
        if (e * f < -EDGEBOARD_X || g * f < -EDGEBOARD_Y)
            d = Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), b / (CANVAS_WIDTH - 2 * EDGEBOARD_X)),
                c = CANVAS_WIDTH * d,
                d *= CANVAS_HEIGHT,
                g = (a - d) / 2,
                e = (b - c) / 2,
                f = CANVAS_WIDTH / c;
        s_iOffsetX = -1 * e * f;
        s_iOffsetY = -1 * g * f;
        0 <= g && (s_iOffsetY = 0);
        0 <= e && (s_iOffsetX = 0);
        null !== s_oGame && s_oGame.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oLevelMenu && s_oLevelMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);

        if (s_bIsIphone) {
            let canvas = document.getElementById("canvas");
            s_oStage.canvas.width = 2 * c;
            s_oStage.canvas.height = 2 * d;
            canvas.style.width = c + "px";
            canvas.style.height = d + "px";
            a = Math.min(c / CANVAS_WIDTH, d / CANVAS_HEIGHT);
            s_iScaleFactor = 2 * a;
            s_oStage.scaleX = s_oStage.scaleY = 2 * a;
        } else {
            if (s_bMobile && !1 === isIOS()) {
                // $("#canvas").css("width", c + "px");
                // $("#canvas").css("height", d + "px");

                let canvas = document.getElementById("canvas");
                canvas.style.width = c + "px";
                canvas.style.height = d + "px";
            } else {
                s_oStage.canvas.width = c;
                s_oStage.canvas.height = d;
                s_iScaleFactor = Math.min(c / CANVAS_WIDTH, d / CANVAS_HEIGHT);
                s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor;
            }
        }

        0 > g ? $("#canvas").css("top", g + "px") : $("#canvas").css("top", "0px");
        $("#canvas").css("left", e + "px");
        fullscreenHandler()
    }
}
function _checkOrientation(a, b) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > b ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"),
        s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
            s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"),
                s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
                    s_oMain.stopUpdate()))
}
function inIframe() {
    try {
        return window.self !== window.top
    } catch (a) {
        return !0
    }
}
function createBitmap(a, b?, d?) {
    var c = new createjs.Bitmap(a)
        , g = new createjs.Shape;
    b && d ? g.graphics.beginFill("#fff").drawRect(0, 0, b, d) : g.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    c.hitArea = g;
    return c
}
function createSprite(a, b, d, c, g, e) {
    a = null !== b ? new createjs.Sprite(a, b) : new createjs.Sprite(a);
    b = new createjs.Shape;
    b.graphics.beginFill("#000000").drawRect(-d, -c, g, e);
    a.hitArea = b;
    return a
}
function randomFloatBetween(a: number, b: number, d = 2) {
    // "undefined" === typeof d && (d = 2);
    return parseFloat(Math.min(a + Math.random() * (b - a), b).toFixed(d))
}
//function shuffle(a) {
//    for (var b = a.length, d, c; 0 !== b;)
//        c = Math.floor(Math.random() * b),
//            --b,
//            d = a[b],
//            a[b] = a[c],
//            a[c] = d;
//    return a
//}
function formatTime(a) {
    a /= 1E3;
    var b = Math.floor(a / 60);
    a = parseFloat(String(a - 60 * b)).toFixed(1);
    var d = "";
    d = 10 > b ? d + ("0" + b + ":") : d + (b + ":");
    return 10 > a ? d + ("0" + a) : d + a
}
function NoClickDelay(a) {
    this.element = a;
    (<any>window).Touch && this.element.addEventListener("touchstart", this, !1)
}
function shuffle(a) {
    for (var b = a.length, d, c; 0 < b;)
        c = Math.floor(Math.random() * b),
            b-- ,
            d = a[b],
            a[b] = a[c],
            a[c] = d;
    return a
}
NoClickDelay.prototype = {
    handleEvent: function (a) {
        switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a)
        }
    },
    onTouchStart: function (a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function (a) {
        this.moved = !0
    },
    onTouchEnd: function (a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend", this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var b = document.createEvent("MouseEvents");
            b.initEvent("click", !0, !0);
            a.dispatchEvent(b)
        }
    }
};
(function () {
    function a(a) {
        var c = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        a = a || window.event;
        a.type in c ? document.body.className = c[a.type] : (document.body.className = this[b] ? "hidden" : "visible",
            "hidden" === document.body.className ? s_oMain && s_oMain.stopUpdate() : s_oMain && s_oMain.startUpdate())
    }

    var b = "hidden";
    b in document
        ? document.addEventListener("visibilitychange", a)
        : (b = "mozHidden") in document
            ? document.addEventListener("mozvisibilitychange", a)
            : (b = "webkitHidden") in document
                ? document.addEventListener("webkitvisibilitychange", a)
                : (b = "msHidden") in document
                    ? document.addEventListener("msvisibilitychange", a)
                    : "onfocusin" in document
                        ? document.onfocusin = document.onfocusout = a
                        : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a;




}
)();
function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}
function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}
function getParamValue(a: string) {
    for (var b = window.location.search.substring(1).split("&"), d = 0; d < b.length; d++) {
        var c = b[d].split("=");
        if (c[0] == a)
            return c[1]
    }
}
function playSound(a, b, d) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(),
        s_aSounds[a].volume(b),
        s_aSounds[a].loop(d),
        s_aSounds[a]) : null
}
function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}
function setVolume(a, b) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(b)
}
function setMute(a, b) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(b)
}
function saveItem(a, b) {
    s_bStorageAvailable && localStorage.setItem(a, b)
}
function getItem(a) {
    return s_bStorageAvailable ? localStorage.getItem(a) : null
}
function fullscreenHandler() {
    ENABLE_FULLSCREEN && !1 !== window.document.webkitFullscreenEnabled && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? !0 : !1,
        null !== s_oInterface && s_oInterface.resetFullscreenBut(),
        null !== s_oMenu && s_oMenu.resetFullscreenBut(),
        null !== s_oLevelMenu && s_oLevelMenu.resetFullscreenBut())
}
if (window.document.webkitFullscreenEnabled)
    screenfull.on("change", function () {
        s_bFullscreen = !!window.document.webkitFullscreenElement;
        null !== s_oInterface && s_oInterface.resetFullscreenBut();
        null !== s_oMenu && s_oMenu.resetFullscreenBut();
        null !== s_oLevelMenu && s_oLevelMenu.resetFullscreenBut()
    });
function extractHostname(a) {
    a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
    a = a.split(":")[0];
    return a = a.split("?")[0]
}
function extractRootDomain(a) {
    a = extractHostname(a);
    var b = a.split(".")
        , d = b.length;
    2 < d && (a = b[d - 2] + "." + b[d - 1]);
    return a
}
var getClosestTop = function () {
    var a = window
        , b = !1;
    try {
        for (; a.parent.document !== a.document;)
            if (a.parent.document)
                a = a.parent;
            else {
                b = !0;
                break
            }
    } catch (d) {
        b = !0
    }
    return {
        topFrame: a,
        err: b
    }
}
    , getBestPageUrl = function (a) {
        var b = a.topFrame
            , d = "";
        if (a.err)
            try {
                try {
                    d = window.top.location.href
                } catch (g) {
                    var c = window.location.ancestorOrigins;
                    d = c[c.length - 1]
                }
            } catch (g) {
                d = b.document.referrer
            }
        else
            d = b.location.href;
        return d
    }
    , TOPFRAMEOBJ = getClosestTop()
    , PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);
function seekAndDestroy() {
    return true;
}
function CSpriteLibrary() {
    var a, b, d, c, g, e;
    this.init = function (f, k, h) {
        d = b = 0;
        c = f;
        g = k;
        e = h;
        a = {}
    }
        ;
    this.addSprite = function (c, d) {
        a.hasOwnProperty(c) || (a[c] = {
            szPath: d,
            oSprite: new Image
        },
            b++)
    }
        ;
    this.getSprite = function (c) {
        return a.hasOwnProperty(c) ? a[c].oSprite : null
    }
        ;
    this._onSpritesLoaded = function () {
        g.call(e)
    }
        ;
    this._onSpriteLoaded = function () {
        c.call(e);
        ++d === b && this._onSpritesLoaded()
    }
        ;
    this.loadSprites = function () {
        for (var c in a)
            a[c].oSprite.oSpriteLibrary = this,
                a[c].oSprite.onload = function () {
                    this.oSpriteLibrary._onSpriteLoaded()
                }
                ,
                a[c].oSprite.src = a[c].szPath
    }
        ;
    this.getNumSprites = function () {
        return b
    }
}
var CANVAS_WIDTH = 960, CANVAS_HEIGHT = 540, EDGEBOARD_X = 128, EDGEBOARD_Y = 42, FPS_TIME = 1E3 / 24, DISABLE_SOUND_MOBILE = !1, FONT_GAME = "blackplotanregular", STATE_LOADING = 0, STATE_MENU = 1, STATE_HELP = 1, STATE_GAME = 3, ON_MOUSE_DOWN = 0, ON_MOUSE_UP = 1, ON_MOUSE_OVER = 2, ON_MOUSE_OUT = 3, ON_DRAG_START = 4, ON_DRAG_END = 5, ON_MSG_BOX_LEFT_BUT = 6, ON_MSG_BOX_CENTER_BUT = 7, ON_MSG_BOX_RIGHT_BUT = 8, ON_RELEASE_YES = 9, ON_RELEASE_NO = 10, ALERT_FROM_EXIT = 0, ALERT_FROM_RESTART = 1, ALERT_FROM_SHUFFLE = 2, NUM_ROWS_PAGE_LEVEL = 2, NUM_COLS_PAGE_LEVEL = 3, TILE_WIDTH = 60, TILE_HEIGHT = 78, BONUS_TIME, HINT_PENALTY, SCORE_BONUS_LAYOUT = [];
SCORE_BONUS_LAYOUT.easy = 1;
SCORE_BONUS_LAYOUT.medium = 2;
SCORE_BONUS_LAYOUT.hard = 3;
let ENABLE_FULLSCREEN;
let ENABLE_CHECK_ORIENTATION;
let TEXT_GAMEOVER = "GAME OVER";
let TEXT_CONGRATS = "CONGRATULATIONS";
let TEXT_SCORE = "SCORE";
let TEXT_BONUS_TIME = "BONUS TIME";
let TEXT_SELECT_LEVEL = "SELECT A LEVEL";
let TEXT_SHUFFLE = "SHUFFLE";
let TEXT_RESTART = "RESTART";
let TEXT_HINT = "HINT";
let TEXT_ALERT_EXIT = "DO YOU REALLY WANT TO EXIT?";
let TEXT_ALERT_RESTART = "DO YOU REALLY WANT TO RESTART?";
let TEXT_ALERT_SHUFFLE = "DO YOU REALLY WANT TO SHUFFLE?";
let TEXT_FINAL_SCORE = "FINAL SCORE";
let TEXT_BEST_SCORE = "BEST SCORE";
let TEXT_NO_TILES = "NO MORE TILES SELECTABLE!";
let TEXT_NO = "NO";
let TEXT_YES = "YES";
let TEXT_EXIT = "EXIT";
let TEXT_ERR_LS = "YOUR WEB BROWSER DOES NOT SUPPORT STORING SETTING LOCALLY. IN SAFARI, THE MOST COMMON CAUSE OF THIS IS USING 'PRIVATE BROWSING MODE'. SOME INFO MAY NOT SAVE OR SOME FEATURE MAY NOT WORK PROPERLY.";
let TEXT_CREDITS_DEVELOPED = "DEVELOPED BY";
let TEXT_SHARE_IMAGE = "200x200.jpg";
let TEXT_SHARE_TITLE = "Congratulations!";
let TEXT_SHARE_MSG1 = "You collected <strong>";
let TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!";
let TEXT_SHARE_SHARE1 = "My score is ";
let TEXT_SHARE_SHARE2 = " points! Can you do better";

function CPreloader() {
    var a, b, d, c, g, e, f;
    this._init = function () {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.loadSprites();
        f = new createjs.Container;
        s_oStage.addChild(f)
    }
        ;
    this.unload = function () {
        f.removeAllChildren()
    }
        ;
    this.hide = function () {
        var a = this;
        setTimeout(function () {
            createjs.Tween.get(e).to({
                alpha: 1
            }, 500).call(function () {
                a.unload();
                s_oMain.gotoMenu()
            })
        }, 1E3)
    }
        ;
    this._onImagesLoaded = function () { }
        ;
    this._onAllImagesLoaded = function () {
        this.attachSprites();
        s_oMain.preloaderReady()
    }
        ;
    this.attachSprites = function () {
        var k = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        f.addChild(k);
        k = s_oSpriteLibrary.getSprite("progress_bar");
        c = createBitmap(k);
        c.x = CANVAS_WIDTH / 2 - k.width / 2;
        c.y = CANVAS_HEIGHT - 140;
        f.addChild(c);
        a = k.width;
        b = k.height;
        g = new createjs.Shape;
        g.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(c.x, c.y, 1, b);
        f.addChild(g);
        c.mask = g;
        d = new createjs.Text("", "24px " + FONT_GAME, "#fff");
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT - 95;
        d.shadow = new createjs.Shadow("#000", 2, 2, 2);
        d.textBaseline = "alphabetic";
        d.textAlign = "center";
        f.addChild(d);
        e = new createjs.Shape;
        e.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        e.alpha = 0;
        f.addChild(e)
    }
        ;
    this.refreshLoader = function (e) {
        d.text = e + "%";
        g.graphics.clear();
        e = Math.floor(e * a / 100);
        g.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(c.x, c.y, e, b)
    }
        ;
    this._init()
}
function CMain(a) {
    var b, d = 0, c = 0, g = STATE_LOADING, e, f;
    this.initContainer = function () {
        var a = document.getElementById("canvas");
        s_oStage = new createjs.Stage(a);
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && s_oStage.enableMouseOver(20);
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.framerate = 30;
        createjs.Ticker.on("tick", this._update);
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        seekAndDestroy() ? e = new CPreloader : window.location.href = "http://www.codethislab.com/contact-us.html"
    }
        ;
    this.clearLocalStorage = function () {
        s_bStorageAvailable && localStorage.clear()
    }
        ;
    this.preloaderReady = function () {
        jQuery.getJSON("layouts.json", this.onLoadedJSON);
        b = !0
    }
        ;
    this.soundLoaded = function () {
        d++;
        e.refreshLoader(Math.floor(d / c * 100));
        d === c && s_oMain._allResourcesLoaded()
    }
        ;
    this._initSounds = function () {
        var a = [];
        a.push({
            path: "./sounds/",
            filename: "win",
            loop: !1,
            volume: 1,
            ingamename: "win"
        });
        a.push({
            path: "./sounds/",
            filename: "click",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        a.push({
            path: "./sounds/",
            filename: "game_over",
            loop: !1,
            volume: 1,
            ingamename: "game_over"
        });
        a.push({
            path: "./sounds/",
            filename: "matching",
            loop: !1,
            volume: 1,
            ingamename: "matching"
        });
        c += a.length;
        s_aSounds = [];
        for (var b = 0; b < a.length; b++)
            s_aSounds[a[b].ingamename] = new Howl({
                src: [a[b].path + a[b].filename + ".mp3", a[b].path + a[b].filename + ".ogg"],
                autoplay: !1,
                preload: !0,
                loop: a[b].loop,
                volume: a[b].volume,
                onload: s_oMain.soundLoaded
            })
    }
        ;
    this._loadImages = function () {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_continue", "./sprites/but_continue.png");
        s_oSpriteLibrary.addSprite("but_generic_small", "./sprites/but_generic_small.png");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("but_level", "./sprites/but_level.png");
        s_oSpriteLibrary.addSprite("bg_menu_level", "./sprites/bg_menu_level.jpg");
        s_oSpriteLibrary.addSprite("arrow_left", "./sprites/arrow_left.png");
        s_oSpriteLibrary.addSprite("arrow_right", "./sprites/arrow_right.png");
        s_oSpriteLibrary.addSprite("logo_ctl", "./sprites/logo_ctl.png");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("but_exit_small", "./sprites/but_exit_small.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("tiles", "./sprites/tiles.png");
        s_oSpriteLibrary.addSprite("selection", "./sprites/selection.png");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
        s_oSpriteLibrary.addSprite("panel_bg", "./sprites/panel_bg.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_shuffle", "./sprites/but_shuffle.png");
        s_oSpriteLibrary.addSprite("but_hint", "./sprites/but_hint.png");
        for (var a = s_oLevelSettings.getLayoutNames(), b = 0; b < a.length; b++)
            s_oSpriteLibrary.addSprite("but_level_" + b, "./sprites/but_level_" + a[b] + ".png");
        c += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    }
        ;
    this._onImagesLoaded = function () {
        d++;
        e.refreshLoader(Math.floor(d / c * 100));
        d === c && this._allResourcesLoaded()
    }
        ;
    this._onAllImagesLoaded = function () { }
        ;
    this._allResourcesLoaded = function () {
        e.unload();
        try {
            saveItem("ls_available", "ok")
        } catch (k) {
            s_bStorageAvailable = !1
        }
        s_oMain.gotoMenu()
    }
        ;
    this.onLoadedJSON = function (a) {
        s_oLevelSettings = new CLevelSettings(a);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_oMain._initSounds();
        s_oMain._loadImages()
    }
        ;
    this.stopUpdate = function () {
        b = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
    }
        ;
    this.startUpdate = function () {
        s_iPrevTime = (new Date).getTime();
        b = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
    }
        ;
    this.gotoMenu = function () {
        new CMenu;
        g = STATE_MENU
    }
        ;
    this.gotoLevelMenu = function () {
        new CLevelMenu
    }
        ;
    this.gotoGame = function (a, b) {
        f = new CGame(a, b);
        g = STATE_GAME
    }
        ;
    this.gotoHelp = function () {
        new CHelp();
        g = STATE_HELP
    }
        ;
    this.levelSelected = function (a, b) {
        this.gotoGame(a, b)
    }
        ;
    this._update = function (a) {
        if (!1 !== b) {
            var c = (new Date).getTime();
            s_iTimeElaps = c - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = c;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps,
                s_iCntTime -= 1E3,
                s_iCntFps = 0);
            g === STATE_GAME && f.update();
            void 0 !== s_oStage && s_oStage.update(a)
        }
    }
        ;
    s_oMain = this;
    BONUS_TIME = a.bonus_time;
    HINT_PENALTY = a.hint_penalty;
    ENABLE_FULLSCREEN = a.fullscreen;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0, s_iCntTime = 0, s_iTimeElaps = 0, s_iPrevTime = 0, s_iCntFps = 0, s_iCurFps = 0, s_oSoundTrack = null, s_oStage, s_oMain = null, s_oSpriteLibrary, s_oLevelSettings, s_bFullscreen = !1, s_bStorageAvailable = !0, s_aSounds;
function CTextButton(a, b, d, c, g, e, f, k) {
    var h, m, r, x, n, l, q, p, y, w, t, u;
    this._init = function (a, b, c, d, e, g, f, k) {
        h = !1;
        x = [];
        n = [];
        u = k;
        q = createBitmap(c);
        m = c.width;
        r = c.height;
        k = Math.ceil(f / 20);
        p = new createjs.Text(d, f + "px " + e, "#000000");
        var v = p.getBounds();
        p.textAlign = "center";
        p.textBaseline = "alphabetic";
        p.x = c.width / 2 + k;
        p.y = Math.floor(c.height / 2) + v.height / 3 + k;
        y = new createjs.Text(d, f + "px " + e, g);
        y.textAlign = "center";
        y.textBaseline = "alphabetic";
        y.x = c.width / 2;
        y.y = Math.floor(c.height / 2) + v.height / 3;
        l = new createjs.Container;
        l.x = a;
        l.y = b;
        l.regX = c.width / 2;
        l.regY = c.height / 2;
        l.cursor = "pointer";
        l.addChild(q, p, y);
        u.addChild(l);
        this._initListener()
    }
        ;
    this.unload = function () {
        l.off("mousedown", w);
        l.off("pressup", t);
        u.removeChild(l)
    }
        ;
    this.setVisible = function (a) {
        l.visible = a
    }
        ;
    this.enable = function () {
        h = !1;
        q.filters = [];
        q.cache(0, 0, m, r)
    }
        ;
    this.disable = function () {
        h = !0;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100);
        q.filters = [new createjs.ColorMatrixFilter(a)];
        q.cache(0, 0, m, r)
    }
        ;
    this._initListener = function () {
        w = l.on("mousedown", this.buttonDown);
        t = l.on("pressup", this.buttonRelease)
    }
        ;
    this.addEventListener = function (a, c, b) {
        x[a] = c;
        n[a] = b
    }
        ;
    this.buttonRelease = function () {
        h || (playSound("click", 1, !1),
            l.scaleX = 1,
            l.scaleY = 1,
            x[ON_MOUSE_UP] && x[ON_MOUSE_UP].call(n[ON_MOUSE_UP]))
    }
        ;
    this.buttonDown = function () {
        h || (l.scaleX = .9,
            l.scaleY = .9,
            x[ON_MOUSE_DOWN] && x[ON_MOUSE_DOWN].call(n[ON_MOUSE_DOWN]))
    }
        ;
    this.setPosition = function (a, c) {
        l.x = a;
        l.y = c
    }
        ;
    this.changeText = function (a) {
        y.text = a;
        p.text = a
    }
        ;
    this.setX = function (a) {
        l.x = a
    }
        ;
    this.setY = function (a) {
        l.y = a
    }
        ;
    this.getButtonImage = function () {
        return l
    }
        ;
    this.getX = function () {
        return l.x
    }
        ;
    this.getY = function () {
        return l.y
    }
        ;
    this._init(a, b, d, c, g, e, f, k);
    return this
}
class CGfxButton {
    g;
    e;
    f = [];
    k;
    m;
    r;
    h;
    constructor(a, b, d, c) {


        this.r = c;
        this._init(a, b, d);
    }


    _init(a, c, b) {
        this.g = [];
        this.e = [];
        this.k = createBitmap(b);
        this.k.x = a;
        this.k.y = c;
        this.k.regX = b.width / 2;
        this.k.regY = b.height / 2;
        this.k.cursor = "pointer";
        this.r.addChild(this.k);
        this._initListener()
    }

    unload() {
        this.k.off("mousedown", this.h);
        this.k.off("pressup", this.m);
        this.r.removeChild(this.k)
    }

    setVisible(a) {
        this.k.visible = a
    }

    _initListener() {
        this.h = this.k.on("mousedown", this.buttonDown);
        this.m = this.k.on("pressup", this.buttonRelease)
    }

    addEventListener(a, c, b) {
        this.g[a] = c;
        this.e[a] = b
    }

    addEventListenerWithParams(a, c, b, d) {
        this.g[a] = c;
        this.e[a] = b;
        this.f = d
    }

    buttonRelease = () => {
        playSound("click", 1, !1);
        this.k.scaleX = 1;
        this.k.scaleY = 1;
        this.g[ON_MOUSE_UP] && this.g[ON_MOUSE_UP].call(this.e[ON_MOUSE_UP], this.f)
    };

    buttonDown = () => {
        this.k.scaleX = .9;
        this.k.scaleY = .9;
        this.g[ON_MOUSE_DOWN] && this.g[ON_MOUSE_DOWN].call(this.e[ON_MOUSE_DOWN], this.f)
    };

    setPosition(a, c) {
        this.k.x = a;
        this.k.y = c
    }

    setX(a) {
        this.k.x = a
    }

    setY(a) {
        this.k.y = a
    }

    getButtonImage() {
        return this.k
    }

    getX() {
        return this.k.x
    }

    getY() {
        return this.k.y
    }

}
function CToggle(a, b, d, c, g) {
    var e, f, k, h, m, r;
    this._init = function (a, c, b, d) {
        f = [];
        k = [];
        var l = new createjs.SpriteSheet({
            images: [b],
            frames: {
                width: b.width / 2,
                height: b.height,
                regX: b.width / 2 / 2,
                regY: b.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        e = d;
        h = createSprite(l, "state_" + e, b.width / 2 / 2, b.height / 2, b.width / 2, b.height);
        h.x = a;
        h.y = c;
        h.stop();
        h.cursor = "pointer";
        g.addChild(h);
        this._initListener()
    }
        ;
    this.unload = function () {
        h.off("mousedown", m);
        h.off("pressup", r);
        g.removeChild(h)
    }
        ;
    this._initListener = function () {
        m = h.on("mousedown", this.buttonDown);
        r = h.on("pressup", this.buttonRelease)
    }
        ;
    this.addEventListener = function (a, b, c) {
        f[a] = b;
        k[a] = c
    }
        ;
    this.setActive = function (a) {
        e = a;
        h.gotoAndStop("state_" + e)
    }
        ;
    this.buttonRelease = function () {
        h.scaleX = 1;
        h.scaleY = 1;
        playSound("click", 1, !1);
        e = !e;
        h.gotoAndStop("state_" + e);
        f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(k[ON_MOUSE_UP], e)
    }
        ;
    this.buttonDown = function () {
        h.scaleX = .9;
        h.scaleY = .9;
        f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN])
    }
        ;
    this.setPosition = function (a, b) {
        h.x = a;
        h.y = b
    }
        ;
    this._init(a, b, d, c)
}
function CMenu() {
    var a, b, d, c, g, e, f, k, h, m, r, x, n = null, l = null;
    this._init = function () {
        f = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(f);
        k = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 120, s_oSpriteLibrary.getSprite("but_play"), s_oStage);
        k.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) {
            var q = s_oSpriteLibrary.getSprite("audio_icon");
            g = CANVAS_WIDTH - q.height / 2 - 10;
            e = q.height / 2 + 10;
            h = new CToggle(g, e, q, s_bAudioActive, s_oStage);
            h.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this)
        }
        q = s_oSpriteLibrary.getSprite("but_credits");
        d = q.height / 2 + 10;
        c = q.height / 2 + 10;
        m = new CGfxButton(d, c, q, s_oStage);
        m.addEventListener(ON_MOUSE_UP, this._onButCreditsRelease, this);
        q = window.document;
        var p = q.documentElement;
        n = p.requestFullscreen || p.mozRequestFullScreen || p.webkitRequestFullScreen || p.msRequestFullscreen;
        l = q.exitFullscreen || q.mozCancelFullScreen || q.webkitExitFullscreen || q.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (n = !1);
        n && !1 === inIframe() && (q = s_oSpriteLibrary.getSprite("but_fullscreen"),
            a = d + q.width / 2,
            b = c - 2,
            x = new CToggle(a, b, q, s_bFullscreen, s_oStage),
            x.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        r = new createjs.Shape;
        r.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(r);
        s_bStorageAvailable || new CAlertSavingBox(TEXT_ERR_LS, s_oStage);
        createjs.Tween.get(r).to({
            alpha: 0
        }, 400).call(function () {
            r.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    }
        ;
    this.unload = function () {
        k.unload();
        k = null;
        m.unload();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
            h.unload(),
                h = null;
        n && !1 === inIframe() && x.unload();
        s_oStage.removeChild(f);
        f = null;
        s_oStage.removeChild(r);
        s_oMenu = r = null
    }
        ;
    this.refreshButtonPos = function (f, k) {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || h.setPosition(g - f, k + e);
        n && !1 === inIframe() && x.setPosition(a + f, b + k);
        m.setPosition(d + f, c + k)
    }
        ;
    this._exitFromMenu = function () {
        this.unload();
        s_oMain.gotoLevelMenu();
        $(s_oMain).trigger("start_session")
    }
        ;
    this._onButPlayRelease = function () {
        s_oMenu._exitFromMenu()
    }
        ;
    this._onButCreditsRelease = function () {
        new CCreditsPanel
    }
        ;
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    }
        ;
    this.resetFullscreenBut = function () {
        n && window.document.webkitFullscreenEnabled && x.setActive(s_bFullscreen)
    }
        ;
    this._onFullscreenRelease = function () {
        s_bFullscreen ? l.call(window.document) : n.call(window.document.documentElement);
        sizeHandler()
    }
        ;
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;
function CGame(a, b) {
    var d = !1, c, g, e, f, k, h, m, r, x, n = [], l, q, p, y, w, t, u, z, B, C;
    this._init = function (a, b) {
        g = a;
        x = b;
        var c = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(c);
        this.createLayout();
        B = new CInterface(0);
        this._setTiles();
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    }
        ;
    this.unload = function () {
        d = !1;
        B.unload();
        s_oStage.removeAllChildren();
        s_oGame = null
    }
        ;
    this.reset = function () {
        m = c = 0;
        k = BONUS_TIME;
        h = n.length;
        f = 2;
        z = u = t = w = null;
        this._storeSelectableTiles();
        B.reset();
        $(s_oMain).trigger("start_level", b);
        d = !0
    }
        ;
    this.refreshButtonPos = function (a, b) {
        C.x = p.x + a;
        B.refreshButtonPos(a, b)
    }
        ;
    this.stopUpdate = function () {
        d = !1
    }
        ;
    this.startUpdate = function () {
        d = !0
    }
        ;
    this.createLayout = function () {
        y = s_oLevelSettings.getLayoutInfos(g);
        p = y.layout_pos;
        var a = y.pos
            , b = y.blocks
            , c = y.block_list
            , d = y.heights;
        e = SCORE_BONUS_LAYOUT[y.difficulty];
        C = new createjs.Container;
        C.x = p.x;
        C.y = p.y;
        C.scaleX = C.scaleY = r = y.layout_scale;
        s_oStage.addChild(C);
        for (var f = 0; f < a.length; f++) {
            var h = new CTile(f, a[f].x, a[f].y, b[f].left_block, b[f].right_block, b[f].up_block, c[f], d[f], C);
            n[f] = h
        }
    }
        ;
    this._setTiles = function () {
        do {
            for (var a = s_oLevelSettings.getShuffledTiles(), b = 0; b < n.length; b++)
                n[b].setValue(a[b]);
            this.reset()
        } while (0 === q.length); B.setHintNum(q.length)
    }
        ;
    this._unloadAllTiles = function () {
        for (var a = 0; a < n.length; a++)
            n[a].unload()
    }
        ;
    this._storeSelectableTiles = function () {
        l = [];
        for (var a = 0; a < n.length; a++)
            n[a].isSelectable() && l.push(n[a]);
        q = [];
        for (a = 0; a < l.length;) {
            for (var b = l[a], c = a + 1; c < l.length; c++)
                b.getValue() === l[c].getValue() && q.push({
                    first: b,
                    second: l[c]
                });
            a++
        }
    }
        ;
    this.onShuffleBoard = function () {
        u && u.deselect();
        z && z.deselect();
        var a = s_oLevelSettings.getLayoutInfos(g)
            , b = a.blocks;
        a = a.block_list;
        for (var c = 0; c < n.length; c++)
            n[c].initBlocksArray(b[c].left_block, b[c].right_block, b[c].up_block, a[c]);
        this._setTiles();
        B.setHintNum(q.length)
    }
        ;
    this.onRestartBoard = function () {
        u && u.deselect();
        z && z.deselect();
        var a = s_oLevelSettings.getLayoutInfos(g)
            , b = a.blocks;
        a = a.block_list;
        for (var c = 0; c < n.length; c++)
            n[c].initBlocksArray(b[c].left_block, b[c].right_block, b[c].up_block, a[c]);
        this.reset();
        B.setHintNum(q.length);
        $(s_oMain).trigger("restart_level", x)
    }
        ;
    this.onHintReleased = function () {
        0 !== q.length && (u && u.deselect(),
            z && z.deselect(),
            u = q[m].first,
            z = q[m].second,
            u.showHint(),
            z.showHint(),
            m++ ,
            m === q.length && (m = 0),
            k = 0,
            c -= HINT_PENALTY,
            0 > c && (c = 0),
            B.setScore(c))
    }
        ;
    this.removeHint = function () {
        null !== u && null !== z && (this._checkForSimilarBlock(u),
            u.disable(),
            this._checkForSimilarBlock(z),
            z.disable(),
            playSound("matching", 1, !1),
            z = u = null,
            m = 0)
    }
        ;
    this.onTileRemoved = function (a) {
        h--;
        f--;
        0 === f && (this._storeSelectableTiles(),
            B.setHintNum(q.length),
            0 === h ? this._win() : 0 === q.length && this._gameOver(),
            f = 2)
    }
        ;
    this.onTileSelected = function (a) {
        null !== u && (u.deselect(),
            u = null);
        null !== z && (z.deselect(),
            z = null);
        null === w ? w = n[a] : (t = n[a],
            this._checkTileMatching())
    }
        ;
    this.onTileDeselected = function () {
        w = null
    }
        ;
    this._checkTileMatching = function () {
        w.getValue() === t.getValue() ? (this._checkForSimilarBlock(w),
            w.remove(),
            this._checkForSimilarBlock(t),
            t.remove(),
            m = 0,
            this._calculateScore(),
            playSound("matching", 1, !1)) : (w.deselect(),
                t.deselect());
        t = w = null
    }
        ;
    this._checkForSimilarBlock = function (a) {
        for (var b = a.getBlockList(), c = 0; c < b.length; c++)
            n[b[c].tile].removeBlock(a.getIndex())
    }
        ;
    this._calculateScore = function () {
        var a = Math.floor(k / 100);
        0 < a && B.showBonusScore(C.x + t.getX() * r, C.y + t.getY() * r, a);
        c += e * a;
        B.setScore(c);
        k = BONUS_TIME
    }
        ;
    this._gameOver = function () {
        d = !1;
        var a = getItem("md_best_score_" + g);
        (null === a || a < c) && saveItem("md_best_score_" + g, c);
        B.gameOver(c);
        playSound("game_over", 1, !1);
        $(s_oMain).trigger("end_level", x)
    }
        ;
    this._win = function () {
        d = !1;
        var a = getItem("md_best_score_" + g);
        if (null === a || a < c)
            saveItem("md_best_score_" + g, c),
                a = c;
        B.win(c, a);
        playSound("win", 1, !1);
        $(s_oMain).trigger("end_level", x)
    }
        ;
    this.onExit = function () {
        this.unload();
        s_oMain.gotoMenu();
        $(s_oMain).trigger("end_session")
    }
        ;
    this.update = function () {
        !1 !== d && (k -= s_iTimeElaps,
            0 > k && (k = 0),
            B.refreshTime(k))
    }
        ;
    s_oGame = this;
    this._init(a, b)
}
var s_oGame = null;
function CInterface(a) {
    var b, d, c, g, e, f, k, h, m, r, x, n, l, q, p, y, w, t, u, z, B, C, v, G, D, A, E, F = null, I = null;
    this._init = function (a) {
        l = 10;
        q = 5;
        t = new createjs.Text(TEXT_SCORE + " " + a, "22px " + FONT_GAME, "#d7d5d2");
        t.x = l;
        t.y = q;
        t.textAlign = "left";
        s_oStage.addChild(t);
        x = 200;
        n = 5;
        w = new createjs.Text(TEXT_BONUS_TIME + ":0", "22px " + FONT_GAME, "#d7d5d2");
        w.x = x;
        w.y = n;
        w.textAlign = "left";
        s_oStage.addChild(w);
        a = s_oSpriteLibrary.getSprite("but_exit");
        c = CANVAS_WIDTH - a.width / 2;
        g = a.height / 2 + 4;
        u = new CGfxButton(c, g, a, s_oStage);
        u.addEventListener(ON_MOUSE_UP, this._onExit, this);
        !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (p = c - a.width,
            y = a.height / 2 + 4,
            a = s_oSpriteLibrary.getSprite("audio_icon"),
            A = new CToggle(p, y, a, s_bAudioActive, s_oStage),
            A.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this),
            m = p - a.width / 2,
            r = y) : (m = u.getX() - a.width,
                r = a.height / 2 + 4);
        a = window.document;
        var H = a.documentElement;
        F = H.requestFullscreen || H.mozRequestFullScreen || H.webkitRequestFullScreen || H.msRequestFullscreen;
        I = a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (F = !1);
        F && !1 === inIframe() && (a = s_oSpriteLibrary.getSprite("but_fullscreen"),
            E = new CToggle(m, r, a, s_bFullscreen, s_oStage),
            E.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        a = s_oSpriteLibrary.getSprite("but_shuffle");
        e = CANVAS_WIDTH - a.width / 2 - 10;
        f = CANVAS_HEIGHT - a.height / 2;
        C = new CGfxButton(e, f, a, s_oStage);
        C.addEventListener(ON_MOUSE_UP, this._onShuffle, this);
        a = s_oSpriteLibrary.getSprite("but_restart");
        b = CANVAS_WIDTH - a.width / 2 - 10;
        d = f - a.height;
        B = new CGfxButton(b, d, a, s_oStage);
        B.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        a = s_oSpriteLibrary.getSprite("but_hint");
        k = CANVAS_WIDTH - a.width / 2 - 10;
        h = d - a.height;
        z = new CButHint(k, h, a, "0", FONT_GAME, "#d7d5d2", 28, s_oStage);
        z.addEventListener(ON_MOUSE_UP, this._onHint, this);
        v = new CAreYouSurePanel(s_oStage);
        v.addEventListener(ON_RELEASE_NO, this._onReleaseNoMsgBox, this);
        v.addEventListener(ON_RELEASE_YES, this._onReleaseYesMsgBox, this);
        G = new CWinPanel;
        D = new CGameOverPanel
    }
        ;
    this.unload = function () {
        u.unload();
        u = null;
        !1 === DISABLE_SOUND_MOBILE && (A.unload(),
            A = null);
        F && !1 === inIframe() && E.unload();
        G.unload();
        D.unload();
        v.unload();
        s_oInterface = null
    }
        ;
    this.refreshButtonPos = function (a, v) {
        t.x = l + a;
        t.y = q + v;
        w.x = x + a;
        w.y = n + v;
        z.setPosition(k - a, h - v);
        B.setPosition(b - a, d - v);
        C.setPosition(e - a, f - v);
        u.setPosition(c - a, g + v);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || A.setPosition(p - a, v + y);
        F && !1 === inIframe() && E.setPosition(m - a, r + v)
    }
        ;
    this.reset = function () {
        t.text = TEXT_SCORE + " 0"
    }
        ;
    this.refreshTime = function (a) {
        w.text = TEXT_BONUS_TIME + " " + a
    }
        ;
    this.setScore = function (a) {
        t.text = TEXT_SCORE + " " + a
    }
        ;
    this.setHintNum = function (a) {
        z.setText(a)
    }
        ;
    this.showBonusScore = function (a, b, c) {
        new CScoreText(a, b, c)
    }
        ;
    this.gameOver = function (a) {
        D.show(a)
    }
        ;
    this.win = function (a, b) {
        G.show(a, b)
    }
        ;
    this.refreshScore = function (a) {
        t.text = TEXT_SCORE + " " + a
    }
        ;
    this._onReleaseYesMsgBox = function (a) {
        switch (a) {
            case ALERT_FROM_EXIT:
                s_oGame.onExit();
                break;
            case ALERT_FROM_RESTART:
                v.hide();
                s_oGame.onRestartBoard();
                break;
            case ALERT_FROM_SHUFFLE:
                v.hide(),
                    s_oGame.onShuffleBoard()
        }
    }
        ;
    this._onReleaseNoMsgBox = function () {
        s_oGame.startUpdate()
    }
        ;
    this._onShuffle = function () {
        s_oGame.stopUpdate();
        v.show(TEXT_ALERT_SHUFFLE, ALERT_FROM_SHUFFLE)
    }
        ;
    this._onRestart = function () {
        s_oGame.stopUpdate();
        v.show(TEXT_ALERT_RESTART, ALERT_FROM_RESTART)
    }
        ;
    this._onHint = function () {
        s_oGame.onHintReleased()
    }
        ;
    this._onExit = function () {
        s_oGame.stopUpdate();
        v.show(TEXT_ALERT_EXIT, ALERT_FROM_EXIT)
    }
        ;
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    }
        ;
    this.resetFullscreenBut = function () {
        F && window.document.webkitFullscreenEnabled && E.setActive(s_bFullscreen)
    }
        ;
    this._onFullscreenRelease = function () {
        s_bFullscreen ? I.call(window.document) : F.call(window.document.documentElement);
        sizeHandler()
    }
        ;
    s_oInterface = this;
    this._init(a);
    return this
}
var s_oInterface = null;
function CWinPanel() {
    var a, b, d, c, g, e;
    this.init = function () {
        e = new createjs.Container;
        g = e.on("click", function () { });
        e.visible = !1;
        s_oStage.addChild(e);
        var f = s_oSpriteLibrary.getSprite("msg_box");
        f = createBitmap(f);
        e.addChild(f);
        f = new createjs.Text(TEXT_CONGRATS, "50px " + FONT_GAME, "#000");
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2 - 100;
        f.textAlign = "center";
        f.outline = 2;
        e.addChild(f);
        f = new createjs.Text(TEXT_CONGRATS, "50px " + FONT_GAME, "#d7d5d2");
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2 - 100;
        f.textAlign = "center";
        e.addChild(f);
        a = new createjs.Text(TEXT_FINAL_SCORE, "40px " + FONT_GAME, "#fff");
        a.x = CANVAS_WIDTH / 2;
        a.y = CANVAS_HEIGHT / 2 - 20;
        a.textAlign = "center";
        e.addChild(a);
        b = new createjs.Text(TEXT_BEST_SCORE, "40px " + FONT_GAME, "#fff");
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2 + 20;
        b.textAlign = "center";
        e.addChild(b);
        d = new CTextButton(CANVAS_WIDTH / 2 - 140, CANVAS_HEIGHT / 2 + 100, s_oSpriteLibrary.getSprite("but_generic_small"), TEXT_EXIT, FONT_GAME, "#d7d5d2", 20, e);
        d.addEventListener(ON_MOUSE_UP, this._onExit, this);
        c = new CTextButton(CANVAS_WIDTH / 2 + 140, CANVAS_HEIGHT / 2 + 100, s_oSpriteLibrary.getSprite("but_generic_small"), TEXT_SHUFFLE, FONT_GAME, "#d7d5d2", 20, e);
        c.addEventListener(ON_MOUSE_UP, this._onShuffle, this)
    }
        ;
    this.unload = function () {
        d.unload();
        c.unload();
        e.off("click", g)
    }
        ;
    this.show = function (c, d) {
        a.text = TEXT_FINAL_SCORE + ": " + c;
        b.text = TEXT_BEST_SCORE + ": " + d;
        e.alpha = 0;
        e.visible = !0;
        createjs.Tween.get(e).to({
            alpha: 1
        }, 500, createjs.Ease.cubicOut).call(function () {
            $(s_oMain).trigger("show_interlevel_ad")
        });
        $(s_oMain).trigger("save_score", c);
        $(s_oMain).trigger("share_event", c)
    }
        ;
    this._onShuffle = function () {
        createjs.Tween.get(e).to({
            alpha: 0
        }, 500, createjs.Ease.cubicOut).call(function () {
            e.visible = !1;
            s_oGame.onShuffleBoard()
        })
    }
        ;
    this._onExit = function () {
        createjs.Tween.get(e).to({
            alpha: 0
        }, 500, createjs.Ease.cubicOut).call(function () {
            e.visible = !1;
            s_oMain.gotoMenu()
        })
    }
        ;
    this.init()
}
function CGameOverPanel() {
    var a, b, d, c, g, e;
    this.init = function () {
        e = new createjs.Container();
        g = e.on("click", function () { });
        e.visible = !1;
        s_oStage.addChild(e);
        var f = s_oSpriteLibrary.getSprite("msg_box");
        f = createBitmap(f);
        e.addChild(f);
        f = new createjs.Text(TEXT_NO_TILES, "40px " + FONT_GAME, "#000");
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2 - 120;
        f.textAlign = "center";
        f.outline = 2;
        e.addChild(f);
        f = new createjs.Text(TEXT_NO_TILES, "40px " + FONT_GAME, "#d7d5d2");
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2 - 120;
        f.textAlign = "center";
        e.addChild(f);
        a = new createjs.Text(TEXT_FINAL_SCORE, "30px " + FONT_GAME, "#fff");
        a.x = CANVAS_WIDTH / 2;
        a.y = CANVAS_HEIGHT / 2 - 80;
        a.textAlign = "center";
        e.addChild(a);
        f = s_oSpriteLibrary.getSprite("but_generic_small");
        d = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 100, f, TEXT_SHUFFLE, FONT_GAME, "#d7d5d2", 20, e);
        d.addEventListener(ON_MOUSE_UP, this._onShuffle, this);
        c = new CTextButton(CANVAS_WIDTH / 2, d.getY() - f.height, f, TEXT_RESTART, FONT_GAME, "#d7d5d2", 20, e);
        c.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        b = new CTextButton(CANVAS_WIDTH / 2, c.getY() - f.height, f, TEXT_EXIT, FONT_GAME, "#d7d5d2", 20, e);
        b.addEventListener(ON_MOUSE_UP, this._onExit, this)
    }
        ;
    this.unload = function () {
        b.unload();
        d.unload();
        c.unload();
        e.off("click", g)
    }
        ;
    this.show = function (b) {
        a.text = TEXT_FINAL_SCORE + ": " + b;
        e.alpha = 0;
        e.visible = !0;
        createjs.Tween.get(e).to({
            alpha: 1
        }, 500, createjs.Ease.cubicOut).call(function () {
            $(s_oMain).trigger("show_interlevel_ad")
        });
        $(s_oMain).trigger("save_score", b);
        $(s_oMain).trigger("share_event", b)
    }
        ;
    this._onShuffle = function () {
        s_oGame.onShuffleBoard();
        createjs.Tween.get(e).to({
            alpha: 0
        }, 500, createjs.Ease.cubicOut).call(function () {
            e.visible = !1
        })
    }
        ;
    this._onExit = function () {
        e.visible = !1;
        s_oMain.gotoMenu()
    }
        ;
    this._onRestart = function () {
        s_oGame.onRestartBoard();
        createjs.Tween.get(e).to({
            alpha: 0
        }, 500, createjs.Ease.cubicOut).call(function () {
            e.visible = !1
        })
    }
        ;
    this.init()
}
function CLevelSettings(a) {
    var b, d, c, g;
    this._init = function (a) {
        g = a;
        NUM_LEVELS = Object.keys(g).length;
        b = [];
        c = [];
        for (a = 0; a < NUM_LEVELS; a++)
            b[a] = g[a],
                c[a] = b[a].label;
        d = "circle1 circle1 circle1 circle1 circle2 circle2 circle2 circle2 circle3 circle3 circle3 circle3 circle4 circle4 circle4 circle4 circle5 circle5 circle5 circle5 circle6 circle6 circle6 circle6 circle7 circle7 circle7 circle7 circle8 circle8 circle8 circle8 circle9 circle9 circle9 circle9 bamboo1 bamboo1 bamboo1 bamboo1 bamboo2 bamboo2 bamboo2 bamboo2 bamboo3 bamboo3 bamboo3 bamboo3 bamboo4 bamboo4 bamboo4 bamboo4 bamboo5 bamboo5 bamboo5 bamboo5 bamboo6 bamboo6 bamboo6 bamboo6 bamboo7 bamboo7 bamboo7 bamboo7 bamboo8 bamboo8 bamboo8 bamboo8 bamboo9 bamboo9 bamboo9 bamboo9 characters1 characters1 characters1 characters1 characters2 characters2 characters2 characters2 characters3 characters3 characters3 characters3 characters4 characters4 characters4 characters4 characters5 characters5 characters5 characters5 characters6 characters6 characters6 characters6 characters7 characters7 characters7 characters7 characters8 characters8 characters8 characters8 characters9 characters9 characters9 characters9 wind1 wind1 wind1 wind1 wind2 wind2 wind2 wind2 wind3 wind3 wind3 wind3 wind4 wind4 wind4 wind4 dragon1 dragon1 dragon1 dragon1 dragon2 dragon2 dragon2 dragon2 dragon3 dragon3 dragon3 dragon3 flower1 flower2 flower3 flower4 season1 season2 season3 season4".split(" ")
    }
        ;
    this.getLayoutInfos = function (a) {
        return b[a]
    }
        ;
    this.getShuffledTiles = function () {
        return d = shuffle(d)
    }
        ;
    this.getLayoutNames = function () {
        return c
    }
        ;
    this._init(a)
}
function CLevelMenu() {
    var a, b, d, c, g, e, f, k, h, m, r, x, n, l, q, p = null, y = null, w, t, u, z, B = null, C = null;
    this._init = function () {
        h = 0;
        u = new createjs.Container;
        s_oStage.addChild(u);

        {
            let v: any = createBitmap(s_oSpriteLibrary.getSprite("bg_menu_level"));
            u.addChild(v);
            v = s_oSpriteLibrary.getSprite("but_exit");
            g = CANVAS_WIDTH - v.width / 2 - 10;
            e = v.height / 2 + 10;
            l = new CGfxButton(g, e, v, u);
            l.addEventListener(ON_MOUSE_UP, this._onExit, this);
            m = v.height;
            if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
                d = l.getX() - v.width,
                    c = v.height / 2 + 10,
                    q = new CToggle(d, c, s_oSpriteLibrary.getSprite("audio_icon"), s_bAudioActive, s_oStage),
                    q.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);

        }

        {
            let v = window.document;
            let r = v.documentElement;
            B = r.requestFullscreen/* || r.mozRequestFullScreen*/ || r.webkitRequestFullScreen;// || r.msRequestFullscreen;
            C = v.exitFullscreen /*|| v.mozCancelFullScreen*/ || v.webkitExitFullscreen;// || v.msExitFullscreen;
            !1 === ENABLE_FULLSCREEN && (B = !1);
            B && !1 === inIframe() && (v = s_oSpriteLibrary.getSprite("but_fullscreen"),
                a = v.width / 4 + 10,
                b = v.height / 2 + 4,
                z = new CToggle(a, b, v, s_bFullscreen, s_oStage),
                z.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
            this._checkBoundLimits();
            x = [];
        }
        let v = Math.floor((CANVAS_WIDTH - 2 * EDGEBOARD_X - 100) / NUM_COLS_PAGE_LEVEL) / 2;
        for (var D = r = 0; D < NUM_COLS_PAGE_LEVEL; D++)
            x.push(r),
                r += 2 * v;
        n = [];
        this._createNewLevelPage(0, NUM_LEVELS);
        f = CANVAS_WIDTH / 2;
        k = n[0].y - n[0].getBounds().height / 2 - 80;
        t = new createjs.Text(TEXT_SELECT_LEVEL, "40px " + FONT_GAME, "#000");
        t.x = f;
        t.y = k;
        t.textAlign = "center";
        t.outline = 2;
        u.addChild(t);
        w = new createjs.Text(TEXT_SELECT_LEVEL, "40px " + FONT_GAME, "#d7d5d2");
        w.x = f;
        w.y = k;
        w.textAlign = "center";
        u.addChild(w);
        if (1 < n.length) {
            for (v = 1; v < n.length; v++)
                n[v].visible = !1;
            p = new CGfxButton(CANVAS_WIDTH / 2 + 320, CANVAS_HEIGHT / 2 + 30, s_oSpriteLibrary.getSprite("arrow_right"), u);
            p.addEventListener(ON_MOUSE_UP, this._onRight, this);
            y = new CGfxButton(CANVAS_WIDTH / 2 - 320, CANVAS_HEIGHT / 2 + 30, s_oSpriteLibrary.getSprite("arrow_left"), u);
            y.addEventListener(ON_MOUSE_UP, this._onLeft, this)
        }
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    }
        ;
    this.unload = function () {
        for (var a = 0; a < r.length; a++)
            r[a].unload();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || q.unload();
        B && !1 === inIframe() && z.unload();
        l.unload();
        null !== y && (y.unload(),
            p.unload());
        s_oStage.removeChild(u);
        s_oLevelMenu = null
    }
        ;
    this.refreshButtonPos = function (f, h) {
        t.y = k + h;
        w.y = k + h;
        l.setPosition(g - f, e + h);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || q.setPosition(d - f, h + c);
        B && !1 === inIframe() && z.setPosition(a + f, b + h)
    }
        ;
    this._checkBoundLimits = function () {
        for (var a = s_oSpriteLibrary.getSprite("but_level"), b = 0, c = CANVAS_HEIGHT - 2 * EDGEBOARD_Y - 2 * m, d = 0; b < c;)
            b += a.height + 20,
                d++;
        NUM_ROWS_PAGE_LEVEL > d && (NUM_ROWS_PAGE_LEVEL = d);
        c = b = 0;
        d = CANVAS_WIDTH - 2 * EDGEBOARD_X;
        for (a = s_oSpriteLibrary.getSprite("but_level"); c < d;)
            c += a.width / 2 + 5,
                b++;
        NUM_COLS_PAGE_LEVEL > b && (NUM_COLS_PAGE_LEVEL = b)
    }
        ;
    this._createNewLevelPage = function (a, b) {
        var c = new createjs.Container;
        u.addChild(c);
        n.push(c);
        r = [];
        for (var d = 0, e = 0, f = 1, g = !1, h = a; h < b; h++) {
            var k = s_oLevelSettings.getLayoutInfos(h)
                , l = s_oSpriteLibrary.getSprite("but_level_" + h)
                , m = new CButLevel(x[d] + l.width / 2, e + l.height / 2, l, k.name, k.difficulty, FONT_GAME, "#d7d5d2", 20, c);
            m.addEventListenerWithParams(ON_MOUSE_UP, this._onButLevelRelease, this, [h, k.name]);
            r.push(m);
            d++;
            if (d === x.length && h < b - 1 && (d = 0,
                e += l.height + 20,
                f++ ,
                f > NUM_ROWS_PAGE_LEVEL)) {
                g = !0;
                break
            }
        }
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2 + 30;
        c.regX = c.getBounds().width / 2;
        c.regY = c.getBounds().height / 2;
        g && this._createNewLevelPage(h + 1, b)
    }
        ;
    this._onRight = function () {
        n[h].visible = !1;
        h++;
        h >= n.length && (h = 0);
        n[h].visible = !0
    }
        ;
    this._onLeft = function () {
        n[h].visible = !1;
        h--;
        0 > h && (h = n.length - 1);
        n[h].visible = !0
    }
        ;
    this._onButLevelRelease = function (a) {
        s_oLevelMenu.unload();
        s_oMain.levelSelected(a[0], a[1])
    }
        ;
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    }
        ;
    this.resetFullscreenBut = function () {
        B && window.document.webkitFullscreenEnabled && z.setActive(s_bFullscreen)
    }
        ;
    this._onFullscreenRelease = function () {
        s_bFullscreen ? C.call(window.document) : B.call(window.document.documentElement);
        sizeHandler()
    }
        ;
    this._onExit = function () {
        s_oMain.gotoMenu()
    }
        ;
    s_oLevelMenu = this;
    this._init()
}
var s_oLevelMenu = null;
function CButLevel(a, b, d, c, g, e, f, k, h) {
    var m, r, x, n, l, q, p, y, w, t;
    this._init = function (a, b, c, d, e, f, g, h) {
        m = !1;
        n = [];
        l = [];
        p = new createjs.Container;
        p.x = a;
        p.y = b;
        p.regX = c.width / 2;
        p.regY = c.height / 2;
        p.cursor = "pointer";
        u.addChild(p);
        y = createBitmap(c);
        p.addChild(y);
        r = c.width;
        x = c.height;
        w = new createjs.Text(d.toUpperCase(), h + "px " + f, g);
        w.textAlign = "center";
        w.textBaseline = "alphabetic";
        w.x = c.width / 2;
        w.y = x - 13;
        w.shadow = new createjs.Shadow("#000000", 2, 2, 4);
        p.addChild(w);
        t = new createjs.Text(e.toUpperCase(), h + "px " + f, g);
        t.textAlign = "center";
        t.textBaseline = "alphabetic";
        t.x = c.width / 2;
        t.shadow = new createjs.Shadow("#000000", 2, 2, 4);
        t.y = 30;
        p.addChild(t);
        this._initListener()
    }
        ;
    this.unload = function () {
        p.off("mousedown");
        p.off("pressup");
        u.removeChild(p)
    }
        ;
    this.setVisible = function (a) {
        p.visible = a
    }
        ;
    this.enable = function () {
        m = !1;
        y.filters = [];
        y.cache(0, 0, r, x)
    }
        ;
    this.disable = function () {
        m = !0;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100);
        y.filters = [new createjs.ColorMatrixFilter(a)];
        y.cache(0, 0, r, x)
    }
        ;
    this._initListener = function () {
        oParent = this;
        p.on("mousedown", this.buttonDown);
        p.on("pressup", this.buttonRelease)
    }
        ;
    this.addEventListener = function (a, c, b) {
        n[a] = c;
        l[a] = b
    }
        ;
    this.addEventListenerWithParams = function (a, c, b, d) {
        n[a] = c;
        l[a] = b;
        q = d
    }
        ;
    this.buttonRelease = function () {
        m || (playSound("click", 1, !1),
            p.scaleX = 1,
            p.scaleY = 1,
            n[ON_MOUSE_UP] && n[ON_MOUSE_UP].call(l[ON_MOUSE_UP], q))
    }
        ;
    this.buttonDown = function () {
        m || (p.scaleX = .9,
            p.scaleY = .9,
            n[ON_MOUSE_DOWN] && n[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN], q))
    }
        ;
    this.setPosition = function (a, c) {
        p.x = a;
        p.y = c
    }
        ;
    this.changeText = function (a) {
        w.text = a
    }
        ;
    this.setX = function (a) {
        p.x = a
    }
        ;
    this.setY = function (a) {
        p.y = a
    }
        ;
    this.getButtonImage = function () {
        return p
    }
        ;
    this.getX = function () {
        return p.x
    }
        ;
    this.getY = function () {
        return p.y
    }
        ;
    var u = h;
    this._init(a, b, d, c, g, e, f, k, h);
    return this
}
function CCreditsPanel() {
    var a, b, d, c, g, e, f, k, h;
    this._init = function () {
        h = new createjs.Container;
        h.alpha = 0;
        s_oStage.addChild(h);
        var m = new createjs.Shape;
        m.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        h.addChild(m);
        a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        h.addChild(a);
        e = new createjs.Shape;
        e.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        e.alpha = .01;
        e.on("click", this._onLogoButRelease);
        h.addChild(e);
        m = s_oSpriteLibrary.getSprite("but_exit_small");
        d = new CGfxButton(684, 174, m, h);
        d.addEventListener(ON_MOUSE_UP, this.unload, this);
        g = new createjs.Text(TEXT_CREDITS_DEVELOPED, "28px " + FONT_GAME, "#000");
        g.textAlign = "center";
        g.textBaseline = "alphabetic";
        g.x = CANVAS_WIDTH / 2;
        g.y = 230;
        g.outline = 2;
        h.addChild(g);
        c = new createjs.Text(TEXT_CREDITS_DEVELOPED, "28px " + FONT_GAME, "#d7d5d2");
        c.textAlign = "center";
        c.textBaseline = "alphabetic";
        c.x = CANVAS_WIDTH / 2;
        c.y = 230;
        h.addChild(c);
        m = s_oSpriteLibrary.getSprite("logo_ctl");
        b = createBitmap(m);
        b.regX = m.width / 2;
        b.regY = m.height / 2;
        b.x = CANVAS_WIDTH / 2;
        b.y = CANVAS_HEIGHT / 2;
        h.addChild(b);
        k = new createjs.Text("www.codethislab.com", "20px " + FONT_GAME, "#000");
        k.textAlign = "center";
        k.textBaseline = "alphabetic";
        k.x = CANVAS_WIDTH / 2;
        k.y = 314;
        k.outline = 2;
        h.addChild(k);
        f = new createjs.Text("www.codethislab.com", "20px " + FONT_GAME, "#d7d5d2");
        f.textAlign = "center";
        f.textBaseline = "alphabetic";
        f.x = CANVAS_WIDTH / 2;
        f.y = 314;
        h.addChild(f);
        createjs.Tween.get(h).to({
            alpha: 1
        }, 600, createjs.Ease.cubicOut);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    }
        ;
    this.refreshButtonPos = function (a, c) { }
        ;
    this.unload = function () {
        e.off("click", this._onLogoButRelease);
        d.unload();
        d = null;
        s_oStage.removeChild(h)
    }
        ;
    this._onLogoButRelease = function () {
        window.open("http://www.codethislab.com/index.php?&l=en", "_blank")
    }
        ;
    this._init()
}
function CAlertSavingBox(a, b) {
    var d, c, g;
    this._init = function (a) {
        g = new createjs.Container;
        f.addChild(g);
        {
            let b: any = new createjs.Shape();
            b.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            b.alpha = .5;
            b.on("click", function () { });
            g.addChild(b);
            b = s_oSpriteLibrary.getSprite("msg_box");
            var e = createBitmap(b);
            e.x = .5 * CANVAS_WIDTH;
            e.y = .5 * CANVAS_HEIGHT;
            e.regX = .5 * b.width;
            e.regY = .5 * b.height;
            g.addChild(e);
        }
        {
            let b = new createjs.Text(a, "28px " + FONT_GAME, "#000");
            b.x = CANVAS_WIDTH / 2;
            b.y = 220;
            b.textAlign = "center";
            b.textBaseline = "middle";
            b.lineWidth = 400;
            b.outline = 2;
            g.addChild(b);
        }
        d = new createjs.Text(a, "28px " + FONT_GAME, "#d7d5d2");
        d.x = CANVAS_WIDTH / 2;
        d.y = 220;
        d.textAlign = "center";
        d.textBaseline = "middle";
        d.lineWidth = 400;
        g.addChild(d);
        c = new CGfxButton(CANVAS_WIDTH / 2 + 206, 174, s_oSpriteLibrary.getSprite("but_exit_small"), g);
        c.addEventListener(ON_MOUSE_UP, this._onButOk, this)
    }
        ;
    this._onButOk = function () {
        e.unload()
    }
        ;
    this.unload = function () {
        c.unload();
        f.removeChild(g)
    }
        ;
    var e = this;
    var f = b;
    this._init(a)
}
function CTile(a, b, d, c, g, e, f, k, h) {
    var m, r, x, n, l, q, p, y, w, t, u, z, B, C, v, G, D, A;
    this._init = function (a, b, c, d, e, f, g, h) {
        l = a;
        y = h;
        A = new createjs.Container;
        A.x = b;
        A.y = c;
        F.addChild(A);
        a = {
            images: [s_oSpriteLibrary.getSprite("tiles")],
            frames: {
                width: TILE_WIDTH,
                height: TILE_HEIGHT,
                regX: TILE_WIDTH / 2,
                regY: TILE_HEIGHT / 2
            },
            animations: {
                bamboo1: [0, 0],
                bamboo2: [1, 1],
                bamboo3: [2, 2],
                bamboo4: [3, 3],
                bamboo5: [4, 4],
                bamboo6: [5, 5],
                bamboo7: [6, 6],
                bamboo8: [7, 7],
                bamboo9: [8, 8],
                characters1: [9, 9],
                characters2: [10, 10],
                characters3: [11, 11],
                characters4: [12, 12],
                characters5: [13, 13],
                characters6: [14, 14],
                characters7: [15, 15],
                characters8: [16, 16],
                characters9: [17, 17],
                circle1: [18, 18],
                circle2: [19, 19],
                circle3: [20, 20],
                circle4: [21, 21],
                circle5: [22, 22],
                circle6: [23, 23],
                circle7: [24, 24],
                circle8: [25, 25],
                circle9: [26, 26],
                dragon1: [27, 27],
                dragon2: [28, 28],
                dragon3: [29, 29],
                flower1: [30, 30],
                flower2: [31, 31],
                flower3: [32, 32],
                flower4: [33, 33],
                season1: [34, 34],
                season2: [35, 35],
                season3: [36, 36],
                season4: [37, 37],
                wind1: [38, 38],
                wind2: [39, 39],
                wind3: [40, 40],
                wind4: [41, 41]
            }
        };
        a = new createjs.SpriteSheet(a);
        G = createSprite(a, "bamboo1", TILE_WIDTH / 2, TILE_HEIGHT / 2, TILE_WIDTH, TILE_HEIGHT);
        A.addChild(G);
        a = s_oSpriteLibrary.getSprite("selection");
        D = createBitmap(a);
        D.x = -TILE_WIDTH / 2;
        D.y = -TILE_HEIGHT / 2 + 2;
        D.visible = !1;
        A.addChild(D);
        this.initBlocksArray(d, e, f, g);
        B = A.on("click", this._onTileSelected);
        s_bMobile || (C = A.on("mouseover", this._onTileOver),
            v = A.on("mouseout", this._onTileOut))
    }
        ;
    this.unload = function () {
        A.off("click", B);
        s_bMobile || (A.off("mouseover", C),
            A.off("mouseout", v));
        F.removeChild(A)
    }
        ;
    this.setValue = function (a) {
        q = a;
        G.gotoAndStop(q);
        this.assignLabel()
    }
        ;
    this.initBlocksArray = function (a, b, c, d) {
        x = !1;
        m = !0;
        n = !1;
        w = [];
        t = [];
        u = [];
        z = [];
        var e;
        for (e = 0; e < a.length; e++)
            w.push(a[e]);
        for (e = 0; e < b.length; e++)
            t.push(b[e]);
        for (e = 0; e < c.length; e++)
            u.push(c[e]);
        for (e = 0; e < d.length; e++)
            z.push(d[e]);
        this._checkIfTileIsFree();
        D.visible = !1;
        A.scaleX = A.scaleY = 1;
        A.visible = !0;
        A.alpha = 1
    }
        ;
    this.assignLabel = function () {
        p = -1 !== q.indexOf("season") ? "season" : -1 !== q.indexOf("flower") ? "flower" : q
    }
        ;
    this.deselect = function () {
        createjs.Tween.removeTweens(A);
        D.visible = !1;
        A.alpha = 1;
        n = x = !1
    }
        ;
    this.disable = function () {
        n && (n = !1,
            createjs.Tween.removeTweens(A));
        m = x = A.visible = !1;
        if (null === s_oGame)
            s_oHelp.onTileRemoved(z);
        else
            s_oGame.onTileRemoved(z)
    }
        ;
    this.remove = function () {
        n && (n = !1,
            createjs.Tween.removeTweens(A));
        var a = this;
        createjs.Tween.get(A).to({
            scaleX: .1,
            scaleY: .1
        }, 300, createjs.Ease.backIn).call(function () {
            a.disable()
        })
    }
        ;
    this.showHint = function () {
        n = !0;
        this._playHintAnim()
    }
        ;
    this._playHintAnim = function () {
        createjs.Tween.get(A).to({
            alpha: .5
        }, 600, createjs.Ease.cubicOut).to({
            alpha: 1
        }, 600, createjs.Ease.cubicOut).call(function () {
            E._playHintAnim()
        })
    }
        ;
    this._checkIfTileIsFree = function () {
        r = !1;
        0 === w.length && 0 === u.length ? r = !0 : 0 === t.length && 0 === u.length && (r = !0)
    }
        ;
    this.removeBlock = function (a) {
        var b;
        for (b = 0; b < t.length; b++)
            if (t[b] === a) {
                t.splice(b, 1);
                this._checkIfTileIsFree();
                return
            }
        for (b = 0; b < w.length; b++)
            if (w[b] === a) {
                w.splice(b, 1);
                this._checkIfTileIsFree();
                return
            }
        for (b = 0; b < u.length; b++)
            if (u[b] === a) {
                u.splice(b, 1);
                this._checkIfTileIsFree();
                break
            }
    }
        ;
    this._onTileSelected = function () {
        if (n)
            null === s_oGame ? s_oHelp.removeHint() : s_oGame.removeHint();
        else if (E.isSelectable())
            if (x)
                if (E.deselect(),
                    null === s_oGame)
                    s_oHelp.onTileDeselected();
                else
                    s_oGame.onTileDeselected();
            else if (x = !0,
                D.visible = !0,
                null === s_oGame)
                s_oHelp.onTileSelected(l);
            else
                s_oGame.onTileSelected(l)
    }
        ;
    this._onTileOver = function () {
        E.isSelectable() && (D.visible = !0)
    }
        ;
    this._onTileOut = function () {
        !1 === x && (D.visible = !1)
    }
        ;
    this.getValue = function () {
        return p
    }
        ;
    this.isSelectable = function () {
        return r && m ? !0 : !1
    }
        ;
    this.getBlockList = function () {
        return z
    }
        ;
    this.getHeight = function () {
        return y
    }
        ;
    this.getIndex = function () {
        return l
    }
        ;
    this.getX = function () {
        return A.x
    }
        ;
    this.getY = function () {
        return A.y
    }
        ;
    var E = this;
    var F = h;
    this._init(a, b, d, c, g, e, f, k, h);
    return this
}
function CAreYouSurePanel(a) {
    var b, d, c, g, e, f, k, h, m;
    this._init = function () {
        d = [];
        c = [];
        m = new createjs.Container;
        h = m.on("click", function () { });
        m.visible = !1;
        r.addChild(m);
        var a = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        m.addChild(a);
        g = new createjs.Text("", "50px " + FONT_GAME, "#000");
        g.textAlign = "center";
        g.textBaseline = "alphabetic";
        g.x = CANVAS_WIDTH / 2;
        g.y = 200;
        g.lineWidth = 460;
        g.lineHeight = 48;
        g.outline = 2;
        m.addChild(g);
        e = new createjs.Text("", "50px " + FONT_GAME, "#d7d5d2");
        e.textAlign = "center";
        e.textBaseline = "alphabetic";
        e.x = CANVAS_WIDTH / 2;
        e.y = 200;
        e.lineWidth = 460;
        e.lineHeight = 48;
        m.addChild(e);
        f = new CGfxButton(CANVAS_WIDTH / 2 + 170, 344, s_oSpriteLibrary.getSprite("but_yes"), m);
        f.addEventListener(ON_MOUSE_UP, this._onReleaseYes, this);
        k = new CGfxButton(CANVAS_WIDTH / 2 - 170, 344, s_oSpriteLibrary.getSprite("but_no"), m);
        k.addEventListener(ON_MOUSE_UP, this._onReleaseNo, this)
    }
        ;
    this.addEventListener = function (a, b, e) {
        d[a] = b;
        c[a] = e
    }
        ;
    this.unload = function () {
        m.off("click", h);
        k.unload();
        f.unload()
    }
        ;
    this.show = function (a, c) {
        g.text = a;
        e.text = a;
        b = c;
        m.visible = !0;
        m.alpha = 0;
        createjs.Tween.get(m).to({
            alpha: 1
        }, 500, createjs.Ease.cubicOut)
    }
        ;
    this.hide = function () {
        m.visible = !1
    }
        ;
    this._onReleaseYes = function () {
        d[ON_RELEASE_YES] && d[ON_RELEASE_YES].call(c[ON_RELEASE_YES], b)
    }
        ;
    this._onReleaseNo = function () {
        d[ON_RELEASE_NO] && d[ON_RELEASE_NO].call(c[ON_RELEASE_NO], b);
        m.visible = !1
    }
        ;
    var r = a;
    this._init(a)
}
function CScoreText(a, b, d) {
    var c;
    this._init = function (a, b, d) {
        c = new createjs.Text("+" + d, " 30px " + FONT_GAME, "#d7d5d2");
        c.textAlign = "center";
        c.x = a;
        c.y = b;
        c.alpha = 0;
        c.shadow = new createjs.Shadow("#000000", 2, 2, 2);
        s_oStage.addChild(c);
        var e = this;
        createjs.Tween.get(c).to({
            alpha: 1
        }, 400, createjs.Ease.quadIn).call(function () {
            e.moveUp()
        })
    }
        ;
    this.moveUp = function () {
        var a = c.y - 100
            , b = this;
        createjs.Tween.get(c).to({
            y: a
        }, 1E3, createjs.Ease.sineIn).call(function () {
            b.unload()
        });
        createjs.Tween.get(c).wait(500).to({
            alpha: 0
        }, 500)
    }
        ;
    this.unload = function () {
        s_oStage.removeChild(c)
    }
        ;
    this._init(a, b, d)
}
function CButHint(a, b, d, c, g, e, f, k) {
    var h, m, r, x, n, l, q, p, y, w, t;
    this._init = function (a, b, c, d, e, f, g, k) {
        h = !1;
        x = [];
        n = [];
        t = k;
        q = createBitmap(c);
        m = c.width;
        r = c.height;
        p = new createjs.Text(d, g + "px " + e, f);
        p.textAlign = "center";
        p.textBaseline = "alphabetic";
        p.x = c.width - 35;
        p.y = c.height - 25;
        l = new createjs.Container;
        l.x = a;
        l.y = b;
        l.regX = c.width / 2;
        l.regY = c.height / 2;
        l.cursor = "pointer";
        l.addChild(q, p);
        t.addChild(l);
        this._initListener()
    }
        ;
    this.unload = function () {
        l.off("mousedown", y);
        l.off("pressup", w);
        t.removeChild(l)
    }
        ;
    this.setVisible = function (a) {
        l.visible = a
    }
        ;
    this.enable = function () {
        h = !1;
        q.filters = [];
        q.cache(0, 0, m, r)
    }
        ;
    this.disable = function () {
        h = !0;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100);
        q.filters = [new createjs.ColorMatrixFilter(a)];
        q.cache(0, 0, m, r)
    }
        ;
    this._initListener = function () {
        y = l.on("mousedown", this.buttonDown);
        w = l.on("pressup", this.buttonRelease)
    }
        ;
    this.addEventListener = function (a, b, c) {
        x[a] = b;
        n[a] = c
    }
        ;
    this.setText = function (a) {
        p.text = a
    }
        ;
    this.buttonRelease = function () {
        h || (playSound("click", 1, !1),
            l.scaleX = 1,
            l.scaleY = 1,
            x[ON_MOUSE_UP] && x[ON_MOUSE_UP].call(n[ON_MOUSE_UP]))
    }
        ;
    this.buttonDown = function () {
        h || (l.scaleX = .9,
            l.scaleY = .9,
            x[ON_MOUSE_DOWN] && x[ON_MOUSE_DOWN].call(n[ON_MOUSE_DOWN]))
    }
        ;
    this.setPosition = function (a, b) {
        l.x = a;
        l.y = b
    }
        ;
    this.setX = function (a) {
        l.x = a
    }
        ;
    this.setY = function (a) {
        l.y = a
    }
        ;
    this.getButtonImage = function () {
        return l
    }
        ;
    this.getX = function () {
        return l.x
    }
        ;
    this.getY = function () {
        return l.y
    }
        ;
    this._init(a, b, d, c, g, e, f, k);
    return this
}
;


window.onload = () => {
    var oMain = new CMain({
        fullscreen: true,       //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
        check_orientation: true,//SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT ON MOBILE DEVICES
        bonus_time: 12000,     //SET VALUE (IN MILLISECONDS) FOR BONUS TIME. THE BONUS TIME ASSIGN THE SCORE FOR MATCHING. IF IT IS ZERO, NO SCORE IS ASSIGNED
        hint_penalty: 10        //POINT TO DECREASE IF PLAYER USES AN HINT
    });


    $(oMain).on("start_session", function (evt) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeStartSession();
        }
        //...ADD YOUR CODE HERE EVENTUALLY
    });

    $(oMain).on("end_session", function (evt) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeEndSession();
        }
        //...ADD YOUR CODE HERE EVENTUALLY
    });

    $(oMain).on("save_score", function (evt, iScore) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeSaveScore({ score: iScore });
        }
        //...ADD YOUR CODE HERE EVENTUALLY
    });

    $(oMain).on("start_level", function (evt, iLevel) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeStartLevel({ level: iLevel });
        }
        //...ADD YOUR CODE HERE EVENTUALLY
    });

    $(oMain).on("end_level", function (evt, iLevel) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeEndLevel({ level: iLevel });
        }
        //...ADD YOUR CODE HERE EVENTUALLY
    });

    $(oMain).on("restart_level", function (evt, iLevel) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeRestartLevel({ level: iLevel });
        }
    });

    $(oMain).on("show_interlevel_ad", function (evt) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeShowInterlevelAD();
        }
        //...ADD YOUR CODE HERE EVENTUALLY
    });

    $(oMain).on("share_event", function (evt, iScore) {
        if (getParamValue('ctl-arcade') === "true") {
            parent.__ctlArcadeShareEvent({
                img: TEXT_SHARE_IMAGE,
                title: TEXT_SHARE_TITLE,
                msg: TEXT_SHARE_MSG1 + iScore + TEXT_SHARE_MSG2,
                msg_share: TEXT_SHARE_SHARE1 + iScore + TEXT_SHARE_SHARE1
            });
        }
        //...ADD YOUR CODE HERE EVENTUALLY
    });

    if (isIOS()) {
        setTimeout(function () { sizeHandler(); }, 200);
    } else {
        sizeHandler();
    }
};