// pages/search/search.js
import { SearchMold } from '../../models/search.js';
import { random } from '../../utils/randomStr.js'
const searchMold = new SearchMold();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchWord: '',
    more: '',
    searching: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const searchWord = options.searchWord;

    this.setData({
      searchWord
    });
    this.getData(searchWord);
  },
  getData(word) {
    const getSearchRecommend = searchMold.getSearchArticleList(word);
    const getSearchArticleList = searchMold.getSearchArticleRecommend(word);
    Promise.all([getSearchRecommend, getSearchArticleList]).then(res => {
      console.log(res)
      this.setData({
        tag: res[1].tag,
        recommend: res[1].recommend,
        articleList: res[0],
        searching: false
      });
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
    this.setData({
      more: random(20)
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})