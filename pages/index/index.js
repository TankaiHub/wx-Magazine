import { IndexModles } from '../../models/index.js';
import { random } from '../../utils/randomStr.js';
const indexModles = new IndexModles;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommend:[],
    mark:[],
    article:[],
    getMore:'',
    magazineId:0,
    loadingHide:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();


    wx.setTabBarBadge({
      index:0,
      text:'new'
    });
    // wx.showLoading(); 
  },

  getData(magazineId) {
    const recommend = indexModles.getRecommendInfo(magazineId);
    const mark = indexModles.getMarkTypeList(magazineId);
    const article = indexModles.getIndexArticleList();

    Promise.all([recommend, mark, article]).then(res => {
      // console.log(res);
      this.setData({
        recommend:res[0],
        mark:res[1],
        article:res[2]
      });
      // wx.hideLoading();
      this.loadingHide();
    });
  },

  loadingHide() {
    this.setData({
      loadingHide:false
    });
  },
  //跳转目录
  onCatalog(){
    wx.switchTab({
      url:'/pages/catalog/catalog'
    });
  },
  onNav(e) {
    const magazineId = e.detail.index;
    this.setData({
      magazineId,
      recommend:[],
      mark:[],
      article:[]
    });
    wx.pageScrollTo({
      scrollTop:0,
      duration:0
    });
    this.getData(magazineId);
  },

  onReachBottom(e) {
    this.setData({
      getMore:random(20)
    });
  },
  
})