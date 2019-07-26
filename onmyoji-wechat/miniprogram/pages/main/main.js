// miniprogram/pages/main.js

const app = getApp()
const ImgLoader = require('../../img-loader/img-loader.js')
const SP = [
  {
    name: "少羽大天狗", code: 10001, cv:"白石凉子" },
  {
    name: "炼狱茨木童子", code: 10002, cv: "福山润" },
  {
    name: "稻荷神御馔津", code: 10003, cv: "川澄绫子" },
  {
    name: "苍风一目连", code: 10004, cv: "绿川光" },
  {
    name: "赤影妖刀姬", code: 10005, cv: "井泽诗织" },
  {
    name: "御怨般若", code: 10006, cv: "梶裕贵" },
];

const R = [
  { name: "三尾狐", code: 13001, cv: "白石凉子" },
  { name: "座敷童子", code: 13002, cv: "白石凉子" },
  { name: "鲤鱼精", code: 13003, cv: "白石凉子" },
  { name: "九命猫", code: 13004, cv: "白石凉子" },
  { name: "狸猫", code: 13005, cv: "白石凉子" },
  { name: "河童", code: 13006, cv: "白石凉子" },
  { name: "童男", code: 13007, cv: "白石凉子" },
  { name: "童女", code: 13008, cv: "白石凉子" },
  { name: "饿鬼", code: 13009, cv: "白石凉子" },
  { name: "巫蛊师", code: 13010, cv: "白石凉子" },
  { name: "鸦天狗", code: 13011, cv: "白石凉子" },
  { name: "食发鬼", code: 13012, cv: "白石凉子" },
  { name: "武士之灵", code: 13013, cv: "白石凉子" },
  { name: "雨女", code: 13014, cv: "白石凉子" },
  { name: "跳跳弟弟", code: 13015, cv: "白石凉子" },
  { name: "跳跳妹妹", code: 13016, cv: "白石凉子" },
  { name: "兵俑", code: 13017, cv: "白石凉子" },
  { name: "丑时之女", code: 13018, cv: "白石凉子" },
  { name: "独眼小僧", code: 13019, cv: "白石凉子"},
  { name: "铁鼠", code: 13020, cv: "白石凉子" },
  { name: "椒图", code: 13021, cv: "白石凉子" },
  { name: "管狐", code: 13022, cv: "白石凉子" },
  { name: "山兔", code: 13023, cv: "白石凉子" },
  { name: "萤草", code: 13024, cv: "白石凉子" },
  { name: "蝴蝶精", code: 13025, cv: "白石凉子" },
  { name: "山童", code: 13026, cv: "白石凉子" },
  { name: "首无", code: 13027, cv: "白石凉子" },
  { name: "觉", code: 13028, cv: "白石凉子" },
  { name: "青蛙瓷器", code: 13029, cv: "白石凉子" },
  { name: "古笼火", code: 13030, cv: "白石凉子" },
  // { name: "兔丸", code: 13031, cv: "白石凉子" },
  // { name: "数珠", code: 13032, cv: "白石凉子" },
  // { name: "小袖之手", code: 13033, cv: "白石凉子" },
  { name: "虫师", code: 13034, cv: "白石凉子" },
  // { name: "天井下", code: 13035, cv: "白石凉子" }
]

const SSR = [{ name: "大天狗", code: 11001, cv: "白石凉子" },
  { name: "酒吞童子", code: 11002, cv: "白石凉子" },
  { name: "荒川之主", code: 11003, cv: "白石凉子" },
  { name: "阎魔", code: 11004, cv: "白石凉子" },
  // { name: "两面佛", code: 11005, cv: "白石凉子" },
  { name: "小鹿男", code: 11006, cv: "白石凉子" },
  { name: "茨木童子", code: 11007, cv: "白石凉子" },
  { name: "青行灯", code: 11008, cv: "白石凉子" },
  { name: "妖刀姬", code: 11009, cv: "白石凉子" },
  { name: "一目连", code: 11010, cv: "白石凉子" },
  { name: "花鸟卷", code: 11011, cv: "白石凉子" },
  { name: "辉夜姬", code: 11012, cv: "白石凉子" },
  { name: "荒", code: 11013, cv: "白石凉子" },
  { name: "彼岸花", code: 11014, cv: "白石凉子" },
  { name: "雪童子", code: 11015, cv: "白石凉子" },
  { name: "山风", code: 11016, cv: "白石凉子" },
  { name: "玉藻前", code: 11017, cv: "白石凉子" },
  { name: "御馔津", code: 11018, cv: "白石凉子" },
  { name: "面灵气", code: 11019, cv: "白石凉子" },
  { name: "鬼切", code: 11020, cv: "白石凉子" },
  { name: "白藏主", code: 11021, cv: "白石凉子" },
  { name: "八岐大蛇", code: 11022, cv: "白石凉子" },
  { name: "不知火", code: 11023, cv: "白石凉子" },
  { name: "大岳丸", code: 11024, cv: "白石凉子" }

]

const SR = [
  { name: "桃花妖", code: 12001, cv: "白石凉子" },
  { name: "雪女", code: 12002, cv: "白石凉子" },
  { name: "鬼使白", code: 12003, cv: "白石凉子" },
  { name: "鬼使黑", code: 12004, cv: "白石凉子" },
  { name: "孟婆", code: 12005, cv: "白石凉子" },
  { name: "犬神", code: 12006, cv: "白石凉子" },
  { name: "骨女", code: 12007, cv: "白石凉子" },
  { name: "鬼女红叶", code: 12008, cv: "白石凉子" },
  { name: "跳跳哥哥", code: 12009, cv: "白石凉子" },
  { name: "傀儡师", code: 12010, cv: "白石凉子" },
  { name: "海坊主", code: 12011, cv: "白石凉子" },
  { name: "判官", code: 12012, cv: "白石凉子" },
  { name: "凤凰火", code: 12013, cv: "白石凉子" },
  { name: "吸血姬", code: 12014, cv: "白石凉子" },
  { name: "妖狐", code: 12015, cv: "白石凉子" },
  { name: "妖琴师", code: 12016, cv: "白石凉子" },
  { name: "食梦貘", code: 12017, cv: "白石凉子" },
  { name: "清姬", code: 12018, cv: "白石凉子" },
  { name: "镰鼬", code: 12019, cv: "白石凉子" },
  { name: "姑获鸟", code: 12020, cv: "白石凉子" },
  { name: "二口女", code: 12021, cv: "白石凉子" },
  { name: "白狼", code: 12022, cv: "白石凉子" },
  { name: "樱花妖", code: 12023, cv: "白石凉子" },
  { name: "惠比寿", code: 12024, cv: "白石凉子" },
  { name: "络新妇", code: 12025, cv: "白石凉子" },
  { name: "般若", code: 12026, cv: "白石凉子" },
  { name: "青坊主", code: 12027, cv: "白石凉子" },
  // { name: "万年竹", code: 12028, cv: "白石凉子" },
  { name: "夜叉", code: 12029, cv: "白石凉子" },
  { name: "黑童子", code: 12030, cv: "白石凉子" },
  { name: "白童子", code: 12031, cv: "白石凉子" },
  { name: "烟烟罗", code: 12032, cv: "白石凉子" },
  { name: "金鱼姬", code: 12033, cv: "白石凉子" },
  { name: "鸩", code: 12034, cv: "白石凉子" },
  { name: "以津真天", code: 12035, cv: "白石凉子" },
  { name: "匣中少女", code: 12036, cv: "白石凉子" },
  { name: "小松丸", code: 12037, cv: "白石凉子" },
  { name: "书翁", code: 12038, cv: "白石凉子" },
  { name: "百目鬼", code: 12039, cv: "白石凉子" },
  { name: "追月神", code: 12040, cv: "白石凉子" },
  { name: "日和坊", code: 12041, cv: "白石凉子" },
  { name: "薰", code: 12042, cv: "白石凉子" },
  { name: "弈", code: 12043, cv: "白石凉子" },
  { name: "猫掌柜", code: 12044, cv: "白石凉子" },
  // { name: "人面树", code: 12045, cv: "白石凉子" },
  { name: "於菊虫", code: 12046, cv: "白石凉子" },
  { name: "一反木绵", code: 12047, cv: "白石凉子" },
  { name: "入殓师", code: 12048, cv: "白石凉子" },
  { name: "化鲸", code: 12049, cv: "白石凉子" },
  // { name: "海忍", code: 12050, cv: "白石凉子" },
  { name: "久次良", code: 12051, cv: "白石凉子" }
]


let imageResouces = [
  "http://ousc.me/wp-content/uploads/2019/06/main_bg.jpg",
  "http://ousc.me/wp-content/uploads/2019/06/main_top_bar.png","http://ousc.me/wp-content/uploads/2019/06/bottom_buttons.png",
  "http://ousc.me/wp-content/uploads/2019/06/shenle.png",
  "http://ousc.me/wp-content/uploads/2019/06/ticket.png",
  "http://ousc.me/wp-content/uploads/2019/06/chouka.png",
  "http://ousc.me/wp-content/uploads/2019/06/border.png",
  "http://ousc.me/wp-content/uploads/2019/06/lanpiao.png",
  "http://ousc.me/wp-content/uploads/2019/06/shichou.png",
  "http://ousc.me/wp-content/uploads/2019/06/tenchoubg.jpg",
  "http://ousc.me/wp-content/uploads/2019/06/lanpiaos.png",
  "http://ousc.me/wp-content/uploads/2019/07/page_z_2a29fde.png",
  "http://ousc.me/wp-content/uploads/2019/07/chouka_bg.png",
  "http://ousc.me/wp-content/uploads/2019/07/left_door.png",
  "http://ousc.me/wp-content/uploads/2019/07/right_door.png",
  "http://ousc.me/wp-content/uploads/2019/07/guihuo.png",
  "http://ousc.me/wp-content/uploads/2019/07/star_2.png"
];
let arr = [{
  title:"末吉",text:"谨记鬼魅多生自人心。\r\n是非难辨，凡事宜忍。\r\n人间有人泣，鬼界有鬼哭。\r\n是生灭法，多加小心。\r\n莫与独鬼相语，所经之途必遭祸。\r\n莫仿飞蛾事，徒然扑夜灯，阴阳自有道，相顺不相违。\r\n鬼火之处，身似孤魂，前路何往，知者无人。"},
  {title: "半吉", text: "默念口中咒，所言非所思。\r\n吾身如浮萍，不敢言再会，幸得天眷顾，得挚友两三。\r\n应慎言，应慎行。\r\n天命如露滴，如幻更似虚，相逢若相知，逝去也足矣。\r\n胸中虽怀难言处，幸得有人问苦衷。\r\n沉浮尘世间，不必徒自添烦恼。\r\n诸事虽无常，自有潇洒意。\r\n鬼恶犹可治 人恶却难改。",
},
{title: "小吉", text: "世人皆俱魑魅物，鬼妖之中亦有情。\r\n鬼无心，神有眼，五行有道。\r\n天上悬明月，清辉照万方，浮云随暂避，终不灭清光。\r\n身愿随心，对明月，有圆缺。\r\n春樱虽随风飘散，仍有余香风转廊。\r\n人间黄泉路，切记有归途。\r\n八重樱花繁且枝盛，君须记累瓣必偿情。"
},{
  title: "中吉", text: "满山枫似锦，祭神灵，运可转之。\r\n人间冥界均无事，难得一日可清闲。\r\n山中红叶犹可见，前程美景在暗中。\r\n人间渺渺栖百鬼，天地四处皆为家。\r\n邪灵恶鬼，终得严惩，不必担忧。\r\n是非难辨，凡事宜忍。\r\n诸行虽无常，自有潇洒意。\r\n从占卜之向，尊阴阳之道。"
},{
  title: "大吉", text: "闲适如春樱，清净如秋水。\r\n时光如轮转，时运今再来。\r\n人世清净，鬼界安宁，休矣。\r\n朦胧春月夜，美景世无双。\r\n四季交替，八方平安。"
}];
let qian = Math.floor((Math.random() * arr.length));


function genImgListData() {
  let images = imageResouces;
  for(let item of SP){
    images.push("http://ousc.me/wp-content/uploads/2019/06/"+item.code+".png")
  }
  for (let item of SSR) {
    images.push("http://ousc.me/wp-content/uploads/2019/06/" + item.code + ".png")
  }
  for (let item of SR) {
    images.push("http://ousc.me/wp-content/uploads/2019/07/" + item.code + ".png")
  }
  for (let item of R) {
    images.push("http://ousc.me/wp-content/uploads/2019/07/" + item.code + ".png")
  }
  return images.map(item => {
    return {
      url: item,
      loaded: false
    }
  })
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    probability : {
      SP: 0.2,
      SSR: 0.1,
      SR: 0.3,
      R: 0.4,
    },
    gailvsp: 0,
    gailvssr: 0,
    gailvsr: 0,
    gailvr: 0,
    maxsp:0,
    maxssr:0,
    maxsr:0,
    maxr:0,
    hiddenmodalput: true,
    positionx:0,
    turn: 1,
    popcardshow: true,
    rolepopcaedshow: true,
    isLoaded: false,
    imgList: genImgListData(),
    num:0,
    total: imageResouces.length + SP.length + SSR.length,
    anim:"3s",
    ing:false,
    mask:false,
    chouka:false,
    danchou:false,
    shichou:false,
    gouyuchou:false,
    door: false,
    thistongji: { R: 0, SR: 0, SSR: 0, SP: 0 },
    canclelihui:false,
    lihuicode: null,
    lihuicv:null,
    lihuiname: null,
    lihuishow: false,
    lihuihide: true,
    date: "06\/",
    namex: "",
    time:0,
    namey: "",
    tongji: { R: 0, SR: 0, SSR: 0, SP: 0 },
    lanpiaonum:28019,
    imagePath:"",
    bottom_image:"http://ousc.me/wp-content/uploads/2019/06/chouka.png"
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  chouqian: function() {
    this.setData({
      rolepopcaedshow: false
    })
    wx.showModal({
      title: '每日一签 - ' + arr[qian].title,
      content: arr[qian].text,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  },
  showlihui: function(code,name,cv,type){
    let tongji = this.data.tongji;
    if (type == "SR") {
      tongji.SR++;
      this.setData({
        date: "07\/",
      })
    }
    if (type == "R") {
      tongji.R++;
      this.setData({
        date: "07\/"
      })
    }
    if (type == "SP") {
      tongji.SP++;
      this.setData({
        date: "06\/"
      })
    }
    if (type == "SSR") {
      tongji.SSR++;
      this.setData({
        date: "06\/"
      })
    }
    this.setData({
      lihuihide:false,
      lihuishow: true,
      lihuicode: code,
      lihuicv: cv,
      lihuiname: name,
      canclelihui: false,
      level:type,
      mask: false,
      tongji: tongji
    });
    if(type == "R" && this.data.shichou){
      let that = this;
      setTimeout(()=>{
        that.hidelihui();
      },2000)
    }
  },
  tengo: function () {
    var that = this;
    this.setData({
      ing: true,
      time:0
    })
    wx.canvasToTempFilePath({
      canvasId: 'my-canvas',
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        console.log(tempFilePath);
        that.setData({
          imagePath: tempFilePath,
          mask: true
          // canvasHidden:true
        });
      },
      fail: function (res) {
        console.log(res);
      }
    });
    this.context.draw();
    let lanpiaonum = this.data.lanpiaonum;
    if (!this.data.gouyuchou) {
      lanpiaonum-=10;
    }
    this.setData({
      anim: "1s",
      lanpiaonum: lanpiaonum
    })
    setTimeout(() => {
      that.setData({
        door: true
      })
      this.go();
    }, 2000
    )
  },
  go: function () {
    var that = this;
    this.setData({
      ing: true,
      time: this.data.time+1
    })
    wx.canvasToTempFilePath({
      canvasId: 'my-canvas',
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        console.log(tempFilePath);
        that.setData({
          imagePath: tempFilePath,
          mask: true
          // canvasHidden:true
        });
      },
      fail: function (res) {
        console.log(res);
      }
    });
    this.context.draw();
    let lanpiaonum = this.data.lanpiaonum;
    if(!this.data.gouyuchou){
      lanpiaonum--;
    }
    this.setData({
      anim:"1s",
      lanpiaonum: lanpiaonum
    })
    let time = 3000;
    if (this.data.shichou) time = 1000
    setTimeout(() => {
      that.setData({
        anim: "3s"
      })
      console.log(this.data.probability);
      let random = Math.random();
      if (random <= this.data.probability.SP) {
        random = Math.floor(Math.random() * SP.length);
        this.showlihui(SP[random].code, SP[random].name, SP[random].cv,"SP");
      } else if (random <= (this.data.probability.SSR + this.data.probability.SP)) {
        random = Math.floor(Math.random() * SSR.length);
        this.showlihui(SSR[random].code, SSR[random].name, SSR[random].cv, "SSR");
      } else if (random <= (this.data.probability.SR + this.data.probability.SSR + this.data.probability.SP)) {
        random = Math.floor(Math.random() * SR.length);
        this.showlihui(SR[random].code, SR[random].name, SR[random].cv, "SR");
      } else {
        random = Math.floor(Math.random() * R.length);
        this.showlihui(R[random].code, R[random].name, R[random].cv, "R");
      }
    }, time);
  },
  hidelihui() {
    if(!this.data.canclelihui) this.data.canclelihui = true;
    else return;
    let that = this;
    this.setData({
      lihuishow: false
    })
    setTimeout(
      () => {
        that.setData({
          lihuihide: true
        });
        if (that.data.shichou && that.data.time < 10) {
          that.go();
        } else {
          wx.playBackgroundAudio({
            dataUrl: "http://ousc.me/wp-content/uploads/2019/06/main_bg.mp3"
          })
          that.setData({
            canclelihui: false,
            ing: false,
            door: false
          })
        }
      },500
    )
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.imgLoader = new ImgLoader(this, this.imageOnLoad.bind(this));
    this.loadImages();
    this.context = wx.createCanvasContext('my-canvas');  // 参数必须和canvas组件中canvas-id值相同
  },
  chou:function(){
    wx.playBackgroundAudio({
dataUrl:'http://ousc.me/wp-content/uploads/2019/06/jijirulvling.mp3',
    })
    if(this.data.danchou){
      this.go();
    }else{
      this.tengo();
    }
  },

  // 刚开始触摸
  touchStart(e) {
    // 获取触摸点坐标
    wx.playBackgroundAudio({
      dataUrl: 'http://ousc.me/wp-content/uploads/2019/06/start.mp3',
    })
    this.startX = e.changedTouches[0].x
    this.startY = e.changedTouches[0].y

    // 画笔配置
    this.context.setStrokeStyle('#f5f7d8');  // 颜色 
    this.context.setLineWidth(8);        // 粗细 
    this.context.setLineCap('round');    // 线头形状
    this.context.setLineJoin('round');   // 交叉处形状
  },

  // 开始移动
  touchMove(e) {
    // 移动时坐标
    var moveX = e.changedTouches[0].x
    var moveY = e.changedTouches[0].y

    this.context.moveTo(this.startX, this.startY);  // 找到起点
    this.context.lineTo(moveX, moveY);              // 找到终点
    this.context.stroke();                          // 描绘路径
  
    // 改变起点坐标
    this.startX = moveX;
    this.startY = moveY;
    this.context.draw(true);  // 画
  },
  danchou: function(){
    this.setData({
      chouka:true,
      danchou:true,
      shichou:false,
      bottom_image: "http://ousc.me/wp-content/uploads/2019/06/chouka.png"
    })
  },
  shichou: function () {
    this.setData({
      chouka: true,
      danchou: false,
      gouyuchou:false,
      shichou: true,
      bottom_image: "http://ousc.me/wp-content/uploads/2019/06/shichou.png"
    })
  },
  gouyuchou: function () {
    this.setData({
      gouyuchou: true,
      danchou: true
    })
  },
  canclechouka: function () {
    this.setData({
      chouka: false,
      danchou: false,
      shichou: false,
      gouyuchou: false
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    setInterval(()=>{
      if (this.data.turn==1){
        if(this.data.positionx<408){
          this.setData({
            positionx : this.data.positionx + 102
          })
        } else {
          this.setData({
            turn :0,
            positionx : this.data.positionx - 102
          })
        }
      } else {
        if (this.data.positionx > 0) {
          this.setData({
            positionx: this.data.positionx - 102
          })
        } else {
          this.setData({
            turn: 1,
            positionx: this.data.positionx + 102
          })
        }
      }
    },2000)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  loadImages() {
    //同时发起全部图片的加载
    this.data.imgList.forEach(item => {
      this.imgLoader.load(item.url)
    })
  },
  //加载完成后的回调
  imageOnLoad(err, data) {
    let num = this.data.num;
    this.setData({
      num: num+1
    })
    if (this.data.num >= this.data.imgList.length){
      this.setData({
        isLoaded: true
      })
      console.log('图片加载完成', err, data.src)
      wx.playBackgroundAudio({
        dataUrl: "http://ousc.me/wp-content/uploads/2019/06/main_bg.mp3"
      })
    }

    const imgList = this.data.imgList.map(item => {
      if (item.url == data.src)
        item.loaded = true
      return item
    })
    this.setData({ imgList })
  },
  info(){
      this.setData({
        hiddenmodalput: false,
        popcardshow:false,
        gailvsp: +parseFloat(this.data.probability.SP).toFixed(3),
        gailvssr: +parseFloat(this.data.probability.SSR).toFixed(3),
        gailvsr: +parseFloat(this.data.probability.SR).toFixed(3),
        gailvr: +parseFloat(this.data.probability.R).toFixed(3)
      })
      this.setData({
        maxsp: +(1 - this.data.gailvr - this.data.gailvsr - this.data.gailvssr).toFixed(3),
        maxssr: +(1 - this.data.gailvr - this.data.gailvsr - this.data.gailvsp).toFixed(3),
        maxsr: +(1 - this.data.gailvr - this.data.gailvsp - this.data.gailvssr).toFixed(3),
        maxr: +(1 - this.data.gailvsp - this.data.gailvsr - this.data.gailvssr).toFixed(3)
      })
  },
  spgailv(e){
    this.setData({
      gailvsp: e.detail.value.toFixed(3)
    })
    this.setData({
      maxsp: +(1 - this.data.gailvr - this.data.gailvsr - this.data.gailvssr).toFixed(3),
      maxssr: +(1 - this.data.gailvr - this.data.gailvsr - this.data.gailvsp).toFixed(3),
      maxsr: +(1 - this.data.gailvr - this.data.gailvsp - this.data.gailvssr).toFixed(3),
      maxr: +(1 - this.data.gailvsp - this.data.gailvsr - this.data.gailvssr).toFixed(3)
    })
  },
  ssrgailv(e) {
    this.setData({
      gailvssr: e.detail.value.toFixed(3)
    })
    this.setData({
      maxsp: +(1 - this.data.gailvr - this.data.gailvsr - this.data.gailvssr).toFixed(3),
      maxssr: +(1 - this.data.gailvr - this.data.gailvsr - this.data.gailvsp).toFixed(3),
      maxsr: +(1 - this.data.gailvr - this.data.gailvsp - this.data.gailvssr).toFixed(3),
      maxr: +(1 - this.data.gailvsp - this.data.gailvsr - this.data.gailvssr).toFixed(3)
    })
  },
  srgailv(e) {
    this.setData({
      gailvsr: e.detail.value.toFixed(3)
    })
    this.setData({
      maxsp: +(1 - this.data.gailvr - this.data.gailvsr - this.data.gailvssr).toFixed(3),
      maxssr: +(1 - this.data.gailvr - this.data.gailvsr - this.data.gailvsp).toFixed(3),
      maxsr: +(1 - this.data.gailvr - this.data.gailvsp - this.data.gailvssr).toFixed(3),
      maxr: +(1 - this.data.gailvsp - this.data.gailvsr - this.data.gailvssr).toFixed(3)
    })
  },
  rgailv(e) {
    this.setData({
      gailvr: parseFloat(e.detail.value).toFixed(3)
    })
    this.setData({
      maxsp: +(1 - this.data.gailvr - this.data.gailvsr - this.data.gailvssr).toFixed(3),
      maxssr: +(1 - this.data.gailvr - this.data.gailvsr - this.data.gailvsp).toFixed(3),
      maxsr: +(1 - this.data.gailvr - this.data.gailvsp - this.data.gailvssr).toFixed(3),
      maxr: +(1 - this.data.gailvsp - this.data.gailvsr - this.data.gailvssr).toFixed(3)
    })
  },
  toFix(value){
    console.log(value)
    return value.toFixed(3);
  },
  //取消按钮
  cancel: function () {
    this.setData({
      hiddenmodalput: true
    });
  },
  //确认
  confirm: function () {
    let that = this;
    if (+parseFloat(this.data.gailvsp).toFixed(3)+ (+parseFloat(this.data.gailvssr).toFixed(3))+(+parseFloat(this.data.gailvsr).toFixed(3))+(+parseFloat(this.data.gailvr).toFixed(3))<1)
      wx.showModal({
        title: "警告",
        content: "概率和需为1",
        success: function (res) {
          that.info();
        }
      })
    else{
      this.setData({
        hiddenmodalput: true,
        probability: {
          SP: +parseFloat(this.data.gailvsp).toFixed(3),
          SSR: +parseFloat(this.data.gailvssr).toFixed(3),
          SR: +parseFloat(this.data.gailvsr).toFixed(3),
          R: +parseFloat(this.data.gailvr).toFixed(3),
        }
      })
      console.log(this.data.probability)
    }
  },hidepopcard(){
    this.setData({
      popcardshow:false
    })
  },hiderolepopcard(){
    this.setData({
      rolepopcaedshow:false
    })
  }
})